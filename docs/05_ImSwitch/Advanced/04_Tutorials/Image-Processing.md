# Image Processing with ImSwitch

ImSwitch provides powerful image processing capabilities through its integration with Napari, OpenCV, and custom processing pipelines. This tutorial covers real-time and post-acquisition image processing workflows.

## Overview

ImSwitch image processing features:
- **Real-time processing**: Live image enhancement during acquisition
- **Napari integration**: Advanced analysis and visualization
- **Custom pipelines**: User-defined processing workflows
- **Multi-channel support**: Simultaneous processing of multiple channels
- **Batch processing**: Automated processing of image series

## Real-Time Image Processing

### Basic Image Enhancement

```python
# In ImSwitch scripting environment
import numpy as np
import cv2
from imswitch.imcontrol.model import SignalDesigner

class RealTimeProcessor:
    def __init__(self):
        self.enabled = True
        self.contrast_factor = 1.5
        self.brightness_offset = 0
        
    def process_frame(self, image):
        """Process incoming camera frames in real-time"""
        if not self.enabled:
            return image
            
        # Convert to float for processing
        img_float = image.astype(np.float32)
        
        # Contrast and brightness adjustment
        processed = img_float * self.contrast_factor + self.brightness_offset
        
        # Clip values to valid range
        processed = np.clip(processed, 0, 255)
        
        return processed.astype(np.uint8)
    
    def enable_processing(self, enabled=True):
        """Enable/disable real-time processing"""
        self.enabled = enabled

# Initialize processor
processor = RealTimeProcessor()

# Connect to ImSwitch camera stream
def on_new_frame(image):
    processed_image = processor.process_frame(image)
    # Display or save processed image
    return processed_image
```

### Advanced Filtering

```python
import scipy.ndimage as ndi
from skimage import filters, morphology

class AdvancedProcessor:
    def __init__(self):
        self.gaussian_sigma = 1.0
        self.threshold_method = 'otsu'
        
    def denoise_image(self, image):
        """Apply denoising filters"""
        # Gaussian denoising
        denoised = filters.gaussian(image, sigma=self.gaussian_sigma)
        
        # Non-local means denoising (for severe noise)
        # denoised = cv2.fastNlMeansDenoising(image.astype(np.uint8))
        
        return denoised
    
    def enhance_contrast(self, image):
        """Enhance image contrast using adaptive histogram equalization"""
        # CLAHE (Contrast Limited Adaptive Histogram Equalization)
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
        if len(image.shape) == 2:
            enhanced = clahe.apply(image.astype(np.uint8))
        else:
            enhanced = np.stack([clahe.apply(image[:,:,i].astype(np.uint8)) 
                               for i in range(image.shape[2])], axis=2)
        return enhanced
    
    def segment_objects(self, image):
        """Segment objects using threshold and morphological operations"""
        # Automatic thresholding
        if self.threshold_method == 'otsu':
            threshold = filters.threshold_otsu(image)
        elif self.threshold_method == 'li':
            threshold = filters.threshold_li(image)
        
        binary = image > threshold
        
        # Morphological operations to clean up segmentation
        binary = morphology.remove_small_objects(binary, min_size=50)
        binary = morphology.remove_small_holes(binary, area_threshold=64)
        
        return binary, threshold

# Usage example
processor = AdvancedProcessor()

def process_microscopy_image(image):
    # Step 1: Denoise
    denoised = processor.denoise_image(image)
    
    # Step 2: Enhance contrast
    enhanced = processor.enhance_contrast(denoised)
    
    # Step 3: Segment objects (if needed)
    segmented, threshold = processor.segment_objects(enhanced)
    
    return {
        'original': image,
        'denoised': denoised,
        'enhanced': enhanced, 
        'segmented': segmented,
        'threshold': threshold
    }
```

## Napari Integration

### Setting Up Napari with ImSwitch

```python
import napari
from imswitch.imcontrol.model import ImSwitchController

class NapariImageProcessor:
    def __init__(self):
        self.viewer = napari.Viewer()
        self.imswitch = ImSwitchController()
        
    def connect_to_imswitch(self):
        """Connect Napari to ImSwitch live stream"""
        @self.imswitch.signal.new_image.connect
        def update_napari(image):
            # Update Napari viewer with new image
            if 'live_image' in self.viewer.layers:
                self.viewer.layers['live_image'].data = image
            else:
                self.viewer.add_image(image, name='live_image', 
                                    colormap='gray', scale=(1, 1))
    
    def add_processing_layers(self, image_data):
        """Add multiple processing results as layers"""
        # Original image
        self.viewer.add_image(image_data['original'], name='Original', 
                            colormap='gray')
        
        # Processed versions
        self.viewer.add_image(image_data['enhanced'], name='Enhanced', 
                            colormap='viridis', visible=False)
        
        # Segmentation overlay
        self.viewer.add_labels(image_data['segmented'].astype(int), 
                             name='Segmentation', opacity=0.5)
    
    def setup_measurement_tools(self):
        """Set up measurement and annotation tools"""
        # Add shapes layer for measurements
        shapes_layer = self.viewer.add_shapes(name='Measurements')
        
        # Add points layer for marking features
        points_layer = self.viewer.add_points(name='Feature Points', 
                                            size=10, face_color='red')
        
        return shapes_layer, points_layer

# Initialize Napari processor
napari_processor = NapariImageProcessor()
napari_processor.connect_to_imswitch()
```

### Custom Napari Widgets

```python
from napari.utils.notifications import show_info
from magicgui import magic_factory
import numpy as np

@magic_factory(
    sigma={'widget_type': 'FloatSlider', 'min': 0.1, 'max': 5.0, 'step': 0.1},
    threshold={'widget_type': 'FloatSlider', 'min': 0, 'max': 1.0, 'step': 0.01}
)
def process_image_widget(viewer: napari.Viewer, sigma: float = 1.0, threshold: float = 0.5):
    """Interactive image processing widget"""
    if len(viewer.layers) == 0:
        show_info("Please load an image first")
        return
    
    # Get current image
    image = viewer.layers[0].data
    
    # Apply Gaussian filter
    filtered = filters.gaussian(image, sigma=sigma)
    
    # Apply threshold
    binary = filtered > (threshold * filtered.max())
    
    # Update or add processed layers
    if 'Filtered' in [layer.name for layer in viewer.layers]:
        viewer.layers['Filtered'].data = filtered
    else:
        viewer.add_image(filtered, name='Filtered', colormap='plasma')
    
    if 'Binary' in [layer.name for layer in viewer.layers]:
        viewer.layers['Binary'].data = binary
    else:
        viewer.add_image(binary.astype(float), name='Binary', colormap='red')

# Add widget to Napari
# viewer.window.add_dock_widget(process_image_widget, area='right')
```

## Multi-Channel Processing

### Channel-Specific Processing

```python
class MultiChannelProcessor:
    def __init__(self):
        self.channel_configs = {
            'DAPI': {'wavelength': 405, 'exposure': 100, 'gain': 1.0},
            'GFP': {'wavelength': 488, 'exposure': 200, 'gain': 1.5},
            'RFP': {'wavelength': 561, 'exposure': 150, 'gain': 1.2}
        }
        
    def process_channel(self, image, channel_name):
        """Apply channel-specific processing"""
        config = self.channel_configs.get(channel_name, {})
        
        # Channel-specific noise reduction
        if channel_name == 'DAPI':
            # Strong denoising for nuclear staining
            processed = cv2.bilateralFilter(image, 9, 75, 75)
        elif channel_name in ['GFP', 'RFP']:
            # Gentle denoising for fluorescent proteins
            processed = filters.gaussian(image, sigma=0.8)
        else:
            processed = image
            
        return processed
    
    def align_channels(self, channels):
        """Align multiple channels to correct for chromatic aberration"""
        reference_channel = channels[0]
        aligned_channels = [reference_channel]
        
        for channel in channels[1:]:
            # Calculate phase correlation for alignment
            shift, error, diffphase = phase_cross_correlation(
                reference_channel, channel, upsample_factor=100)
            
            # Apply shift correction
            aligned = ndi.shift(channel, shift)
            aligned_channels.append(aligned)
            
        return aligned_channels
    
    def create_composite(self, channels, channel_names, colors=None):
        """Create RGB composite from multiple channels"""
        if colors is None:
            colors = ['blue', 'green', 'red'][:len(channels)]
        
        # Normalize each channel
        normalized_channels = []
        for channel in channels:
            norm_channel = (channel - channel.min()) / (channel.max() - channel.min())
            normalized_channels.append(norm_channel)
        
        # Create RGB composite
        composite = np.zeros((*channels[0].shape, 3))
        color_map = {'blue': 2, 'green': 1, 'red': 0}
        
        for channel, color in zip(normalized_channels, colors):
            if color in color_map:
                composite[:, :, color_map[color]] = channel
                
        return composite

# Usage example
mc_processor = MultiChannelProcessor()

def process_multichannel_image(image_stack, channel_names):
    """Process a multi-channel image stack"""
    # Split channels
    channels = [image_stack[:, :, i] for i in range(image_stack.shape[2])]
    
    # Process each channel
    processed_channels = []
    for channel, name in zip(channels, channel_names):
        processed = mc_processor.process_channel(channel, name)
        processed_channels.append(processed)
    
    # Align channels
    aligned_channels = mc_processor.align_channels(processed_channels)
    
    # Create composite
    composite = mc_processor.create_composite(aligned_channels, channel_names)
    
    return {
        'original_channels': channels,
        'processed_channels': processed_channels,
        'aligned_channels': aligned_channels,
        'composite': composite
    }
```

## Batch Processing Workflows

### Automated Image Processing Pipeline

```python
import os
from pathlib import Path
import tifffile
from concurrent.futures import ThreadPoolExecutor, as_completed

class BatchProcessor:
    def __init__(self, input_dir, output_dir):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(exist_ok=True)
        
    def process_single_image(self, image_path):
        """Process a single image file"""
        try:
            # Load image
            image = tifffile.imread(image_path)
            
            # Apply processing pipeline
            results = self.processing_pipeline(image)
            
            # Save results
            output_path = self.output_dir / f"processed_{image_path.name}"
            tifffile.imwrite(output_path, results['enhanced'])
            
            # Save segmentation if available
            if 'segmented' in results:
                seg_path = self.output_dir / f"segmented_{image_path.name}"
                tifffile.imwrite(seg_path, results['segmented'].astype(np.uint8) * 255)
            
            return f"Processed: {image_path.name}"
            
        except Exception as e:
            return f"Error processing {image_path.name}: {str(e)}"
    
    def processing_pipeline(self, image):
        """Define your processing pipeline here"""
        # Example pipeline
        denoised = filters.gaussian(image, sigma=1.0)
        enhanced = exposure.equalize_adapthist(denoised)
        
        # Segmentation
        threshold = filters.threshold_otsu(enhanced)
        segmented = enhanced > threshold
        
        return {
            'enhanced': enhanced,
            'segmented': segmented
        }
    
    def process_batch(self, file_pattern="*.tif", max_workers=4):
        """Process all images in input directory"""
        image_files = list(self.input_dir.glob(file_pattern))
        
        if not image_files:
            print(f"No images found matching pattern {file_pattern}")
            return
        
        print(f"Processing {len(image_files)} images...")
        
        # Process images in parallel
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_file = {executor.submit(self.process_single_image, img_file): img_file 
                             for img_file in image_files}
            
            for future in as_completed(future_to_file):
                result = future.result()
                print(result)
        
        print("Batch processing completed!")

# Usage
batch_processor = BatchProcessor(
    input_dir="/path/to/input/images",
    output_dir="/path/to/output/images"
)

batch_processor.process_batch(file_pattern="*.tif", max_workers=4)
```

## Quality Control and Metrics

### Image Quality Assessment

```python
class ImageQualityAssessment:
    def __init__(self):
        self.metrics = {}
        
    def calculate_snr(self, image, signal_region=None, noise_region=None):
        """Calculate Signal-to-Noise Ratio"""
        if signal_region is None:
            # Use center region as signal
            h, w = image.shape[:2]
            signal_region = image[h//4:3*h//4, w//4:3*w//4]
        
        if noise_region is None:
            # Use corner regions as noise
            noise_region = np.concatenate([
                image[:50, :50].flatten(),
                image[-50:, -50:].flatten()
            ])
        
        signal_mean = np.mean(signal_region)
        noise_std = np.std(noise_region)
        
        snr = signal_mean / noise_std if noise_std > 0 else float('inf')
        return snr
    
    def calculate_focus_measure(self, image):
        """Calculate focus quality using Laplacian variance"""
        gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY) if len(image.shape) == 3 else image
        laplacian = cv2.Laplacian(gray, cv2.CV_64F)
        focus_measure = laplacian.var()
        return focus_measure
    
    def detect_blur(self, image, threshold=100):
        """Detect if image is blurry"""
        focus_measure = self.calculate_focus_measure(image)
        return focus_measure < threshold
    
    def calculate_brightness_metrics(self, image):
        """Calculate brightness statistics"""
        return {
            'mean_intensity': np.mean(image),
            'median_intensity': np.median(image),
            'std_intensity': np.std(image),
            'min_intensity': np.min(image),
            'max_intensity': np.max(image)
        }
    
    def assess_image_quality(self, image):
        """Comprehensive image quality assessment"""
        quality_metrics = {
            'snr': self.calculate_snr(image),
            'focus_measure': self.calculate_focus_measure(image),
            'is_blurry': self.detect_blur(image),
            'brightness': self.calculate_brightness_metrics(image)
        }
        
        return quality_metrics

# Usage in processing pipeline
qa = ImageQualityAssessment()

def quality_controlled_processing(image):
    """Process image only if quality criteria are met"""
    quality = qa.assess_image_quality(image)
    
    # Quality gates
    if quality['snr'] < 5:
        print("Warning: Low SNR detected")
    
    if quality['is_blurry']:
        print("Warning: Image appears blurry")
    
    if quality['brightness']['mean_intensity'] < 10:
        print("Warning: Image is very dark")
    
    # Proceed with processing if quality is acceptable
    if quality['snr'] > 3 and not quality['is_blurry']:
        # Apply processing pipeline
        processed = process_microscopy_image(image)
        return processed, quality
    else:
        return None, quality
```

## Custom Processing Plugins

### Creating ImSwitch Processing Plugins

```python
from imswitch.imcontrol.model.interfaces import ProcessingInterface

class CustomProcessingPlugin(ProcessingInterface):
    def __init__(self):
        super().__init__()
        self.name = "Custom Image Processor"
        self.description = "Custom processing pipeline for specific application"
        
    def process(self, image, parameters=None):
        """Main processing function"""
        if parameters is None:
            parameters = self.get_default_parameters()
        
        # Implement your custom processing here
        processed_image = self.custom_algorithm(image, parameters)
        
        return processed_image
    
    def get_default_parameters(self):
        """Return default processing parameters"""
        return {
            'noise_reduction': True,
            'enhancement_factor': 1.5,
            'segmentation': False
        }
    
    def custom_algorithm(self, image, params):
        """Implement your custom processing algorithm"""
        result = image.copy()
        
        if params['noise_reduction']:
            result = filters.gaussian(result, sigma=1.0)
        
        if params['enhancement_factor'] != 1.0:
            result = result * params['enhancement_factor']
        
        return result

# Register plugin with ImSwitch
# plugin = CustomProcessingPlugin()
# imswitch.register_processing_plugin(plugin)
```

## Performance Optimization

### Optimizing Processing Speed

```python
import numba
from numba import jit

@jit(nopython=True)
def fast_contrast_enhancement(image, factor):
    """JIT-compiled contrast enhancement for speed"""
    output = np.empty_like(image)
    flat_image = image.flatten()
    flat_output = output.flatten()
    
    for i in range(len(flat_image)):
        flat_output[i] = min(255, max(0, flat_image[i] * factor))
    
    return output

class OptimizedProcessor:
    def __init__(self):
        # Pre-compile JIT functions
        dummy_image = np.zeros((100, 100), dtype=np.uint8)
        fast_contrast_enhancement(dummy_image, 1.0)
        
    def process_large_image(self, image, tile_size=512):
        """Process large images in tiles to manage memory"""
        h, w = image.shape[:2]
        processed = np.zeros_like(image)
        
        for y in range(0, h, tile_size):
            for x in range(0, w, tile_size):
                y_end = min(y + tile_size, h)
                x_end = min(x + tile_size, w)
                
                tile = image[y:y_end, x:x_end]
                processed_tile = self.process_tile(tile)
                processed[y:y_end, x:x_end] = processed_tile
        
        return processed
    
    def process_tile(self, tile):
        """Process individual tile"""
        return fast_contrast_enhancement(tile, 1.5)
```

## Next Steps

- **[Jupyter Workflows](./Jupyter-Workflows.md)** - Interactive analysis with Jupyter notebooks
- **[Scripting and Automation](./Scripting.md)** - Advanced automation techniques
- **[Multi-Position Imaging](./Multi-Position-Imaging.md)** - Automated scanning workflows

## Resources

- **[Napari Documentation](https://napari.org/)**
- **[scikit-image Tutorials](https://scikit-image.org/docs/stable/auto_examples/)**
- **[OpenCV Python Tutorials](https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html)**
- **[ImSwitch Processing Examples](https://github.com/openUC2/ImSwitchExamples)**