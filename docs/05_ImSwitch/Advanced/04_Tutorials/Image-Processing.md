# Image Processing with ImSwitch

ImSwitch can be used to connect image processing and hardware control. There are multiple ways to do that. Here, we focus on the controller-way, which is the native way to have access on the hardware directly and process incoming frames using standard Python libraries. 

For this we take an exemplary Controller, the Autofocus Controller, that takes frames and processes them to compute the sharpest plane :


# Image Processing with ImSwitch

ImSwitch provides powerful integration between image processing and hardware control. This tutorial shows you how to create custom controllers that process live camera feeds and control hardware in real-time.

## Overview

ImSwitch offers multiple ways to integrate image processing:

1. **Controller-based Processing**: Native ImSwitch controllers with direct hardware access
2. **Plugin-based Processing**: Modular processing plugins  
3. **External Integration**: Using ImSwitch API from external processing tools
4. **Napari Integration**: Advanced image analysis workflows

## Autofocus Controller Tutorial

Based on the [AutofocusController](https://github.com/openUC2/ImSwitch/blob/master/imswitch/imcontrol/controller/controllers/AutofocusController.py), here's how to create image processing controllers:

### Basic Controller Structure

```python
from imswitch import IS_HEADLESS
import time
import numpy as np
import threading
from imswitch.imcommon.model import initLogger, APIExport
from ..basecontrollers import ImConWidgetController
from skimage.filters import gaussian
from imswitch.imcommon.framework import Signal
import cv2

class AutofocusController(ImConWidgetController):
    """Custom controller for autofocus functionality."""
    
    # Signals for updating GUI
    sigUpdateFocusPlot = Signal(object, object)
    sigUpdateFocusValue = Signal(object)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__logger = initLogger(self)
        self.isAutofocusRunning = False
        
        # Get hardware managers
        self.setupHardware()
        
    def setupHardware(self):
        """Initialize hardware connections"""
        # Get camera (detector)
        if self._setupInfo.autofocus is not None:
            self.cameraName = self._setupInfo.autofocus.camera
            self.stageName = self._setupInfo.autofocus.positioner
        else:
            # Use first available devices
            self.cameraName = self._master.detectorsManager.getAllDeviceNames()[0]
            self.stageName = self._master.positionersManager.getAllDeviceNames()[0]
        
        # Get hardware managers
        self.camera = self._master.detectorsManager[self.cameraName]
        self.stage = self._master.positionersManager[self.stageName]
        
        # Get laser manager (optional)
        if self._master.lasersManager.getAllDeviceNames():
            self.laserName = self._master.lasersManager.getAllDeviceNames()[0]
            self.laser = self._master.lasersManager[self.laserName]
        else:
            self.laser = None
```

### Hardware Access Examples

#### Camera Control

```python
def captureImage(self):
    """Capture single image from camera"""
    # Start acquisition if not running
    if not self.camera.acquisition:
        self.camera.startAcquisition()
    
    # Capture frame
    frame = self.camera.getLatestFrame()
    
    # Convert to numpy array if needed
    if hasattr(frame, 'getData'):
        image = np.array(frame.getData())
    else:
        image = np.array(frame)
    
    return image

def setCameraParameters(self, exposure_time=100, gain=1.0):
    """Set camera parameters"""
    if hasattr(self.camera, 'setParameter'):
        self.camera.setParameter('ExposureTime', exposure_time)
        self.camera.setParameter('Gain', gain)
```

#### Stage Control

```python
def moveStage(self, axis, position, relative=False):
    """Move stage to position"""
    if relative:
        current_pos = self.stage.position[axis]
        target_pos = current_pos + position
    else:
        target_pos = position
    
    # Move stage
    self.stage.move(axis, target_pos, absolute=not relative)
    
    # Wait for movement to complete
    time.sleep(0.1)
    while self.stage.isMoving(axis):
        time.sleep(0.01)

def getStagePosition(self, axis):
    """Get current stage position"""
    return self.stage.position[axis]
```

#### Laser/LED Control

```python
def setIllumination(self, enabled, power=50):
    """Control illumination"""
    if self.laser is not None:
        if enabled:
            self.laser.setValue(power)  # Set power (0-100%)
        else:
            self.laser.setValue(0)      # Turn off
    
    # Or control via LED manager
    if hasattr(self._master, 'ledsManager'):
        led_manager = self._master.ledsManager
        if led_manager.getAllDeviceNames():
            led = led_manager[led_manager.getAllDeviceNames()[0]]
            led.setValue(power if enabled else 0)
```

### Autofocus Algorithm Implementation

```python
def calculateFocusMetric(self, image):
    """Calculate focus metric from image"""
    # Convert to grayscale if needed
    if len(image.shape) == 3:
        gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    else:
        gray = image
    
    # Apply Gaussian blur to reduce noise
    blurred = gaussian(gray, sigma=1)
    
    # Calculate focus metrics
    # Method 1: Variance of Laplacian
    laplacian = cv2.Laplacian(blurred, cv2.CV_64F)
    focus_score = laplacian.var()
    
    # Method 2: Sobel gradient magnitude
    # sobelx = cv2.Sobel(blurred, cv2.CV_64F, 1, 0, ksize=3)
    # sobely = cv2.Sobel(blurred, cv2.CV_64F, 0, 1, ksize=3)
    # focus_score = np.mean(sobelx**2 + sobely**2)
    
    return focus_score

def runAutofocus(self, z_start, z_end, z_step=10, axis='Z'):
    """Run autofocus scan"""
    if self.isAutofocusRunning:
        return
    
    self.isAutofocusRunning = True
    
    try:
        # Generate Z positions
        z_positions = np.arange(z_start, z_end + z_step, z_step)
        focus_scores = []
        
        # Turn on illumination
        self.setIllumination(True, power=50)
        time.sleep(0.1)  # Wait for illumination to stabilize
        
        for z_pos in z_positions:
            # Move to Z position
            self.moveStage(axis, z_pos, relative=False)
            
            # Wait for settling
            time.sleep(0.1)
            
            # Capture image
            image = self.captureImage()
            
            # Calculate focus score
            score = self.calculateFocusMetric(image)
            focus_scores.append(score)
            
            # Update GUI (if available)
            self.sigUpdateFocusValue.emit(score)
            
            # Log progress
            self.__logger.info(f"Z={z_pos:.1f}, Focus Score={score:.2f}")
        
        # Find best focus position
        best_idx = np.argmax(focus_scores)
        best_z = z_positions[best_idx]
        best_score = focus_scores[best_idx]
        
        # Move to best position
        self.moveStage(axis, best_z, relative=False)
        
        # Turn off illumination
        self.setIllumination(False)
        
        # Update plot
        self.sigUpdateFocusPlot.emit(z_positions, focus_scores)
        
        self.__logger.info(f"Autofocus complete. Best Z: {best_z:.1f}, Score: {best_score:.2f}")
        
        return best_z, best_score
        
    finally:
        self.isAutofocusRunning = False
```

### Real-time Processing Example

```python
def startLiveProcessing(self):
    """Start live image processing"""
    def processing_loop():
        while self.isProcessingActive:
            try:
                # Capture frame
                image = self.captureImage()
                
                # Process image
                processed = self.processImage(image)
                
                # Make control decisions
                self.makeControlDecisions(processed)
                
                # Small delay to prevent overwhelming the system
                time.sleep(0.01)
                
            except Exception as e:
                self.__logger.error(f"Processing error: {e}")
    
    self.isProcessingActive = True
    self.processing_thread = threading.Thread(target=processing_loop)
    self.processing_thread.daemon = True
    self.processing_thread.start()

def processImage(self, image):
    """Custom image processing pipeline"""
    # Example: Edge detection and analysis
    gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    edges = cv2.Canny(gray, 50, 150)
    
    # Find contours
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    return {
        'original': image,
        'edges': edges,
        'contours': contours,
        'num_objects': len(contours)
    }

def makeControlDecisions(self, processed_data):
    """Make hardware control decisions based on image analysis"""
    num_objects = processed_data['num_objects']
    
    # Example: Adjust illumination based on object count
    if num_objects < 5:
        # Too few objects - increase illumination
        self.setIllumination(True, power=min(100, self.current_power + 10))
    elif num_objects > 20:
        # Too many objects - decrease illumination  
        self.setIllumination(True, power=max(10, self.current_power - 10))
```

### Integration with ImSwitch API

```python
@APIExport
def runAutofocusAPI(self, z_start: float, z_end: float, z_step: float = 10):
    """API endpoint for autofocus"""
    try:
        best_z, score = self.runAutofocus(z_start, z_end, z_step)
        return {
            'success': True,
            'best_z_position': best_z,
            'focus_score': score
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

@APIExport  
def getFocusScore(self):
    """API endpoint to get current focus score"""
    try:
        image = self.captureImage()
        score = self.calculateFocusMetric(image)
        return {
            'success': True,
            'focus_score': score
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }
```

## General Hardware Access Patterns

### Detector (Camera) Access
```python
# Get all available cameras
camera_names = self._master.detectorsManager.getAllDeviceNames()

# Access specific camera
camera = self._master.detectorsManager[camera_name]

# Start/stop acquisition
camera.startAcquisition()
camera.stopAcquisition()

# Get latest frame
frame = camera.getLatestFrame()
```

### Positioner (Stage) Access
```python
# Get all available stages
stage_names = self._master.positionersManager.getAllDeviceNames()

# Access specific stage
stage = self._master.positionersManager[stage_name]

# Move stage
stage.move(axis='X', dist=100, absolute=True)

# Get position
position = stage.position['X']
```

### Laser/LED Access
```python
# Get all available lasers
laser_names = self._master.lasersManager.getAllDeviceNames()

# Access specific laser
laser = self._master.lasersManager[laser_name]

# Set power (0-100%)
laser.setValue(50)

# Enable/disable
laser.setEnabled(True)
```

This tutorial provides the foundation for creating sophisticated image processing controllers in ImSwitch with full hardware integration.

        self._commChannel.sigAutoFocus.connect(self.autoFocus)
        if not IS_HEADLESS:
            self._widget.focusButton.clicked.connect(self.focusButton)

    def __del__(self):
        self._AutofocusThead.quit()
        self._AutofocusThead.wait()
        if hasattr(super(), '__del__'):
            super().__del__()

    def focusButton(self):
        if not self.isAutofusRunning:
            rangez = float(self._widget.zStepRangeEdit.text())
            resolutionz = float(self._widget.zStepSizeEdit.text())
            defocusz = float(self._widget.zBackgroundDefocusEdit.text())
            self._widget.focusButton.setText('Stop')
            self.autoFocus(rangez, resolutionz, defocusz)
        else:
            self.isAutofusRunning = False

    @APIExport(runOnUIThread=True)
    def autoFocus(self, rangez:int=100, resolutionz:int=10, defocusz:int=0):
        self.isAutofusRunning = True
        self._AutofocusThead = threading.Thread(
            target=self.doAutofocusBackground,
            args=(rangez, resolutionz, defocusz),
            daemon=True
        )
        self._AutofocusThead.start()

    @APIExport(runOnUIThread=True)
    def stopAutofocus(self):
        self.isAutofusRunning = False

    def grabCameraFrame(self):
        return self.camera.getLatestFrame()

    def recordFlatfield(self, nFrames=10, nGauss=16, defocusPosition=200, defocusAxis="Z"):
        flatfield = []
        posStart = self.stages.getPosition()[defocusAxis]
        time.sleep(1)
        self.stages.move(value=defocusPosition, axis=defocusAxis, is_absolute=False, is_blocking=True)
        for _ in range(nFrames):
            flatfield.append(self.grabCameraFrame())
        flatfield = np.mean(np.array(flatfield), 0)
        flatfield = gaussian(flatfield, sigma=nGauss)
        self.stages.move(value=-defocusPosition, axis=defocusAxis, is_absolute=False, is_blocking=True)
        time.sleep(1)
        return flatfield

    def doAutofocusBackground(self, rangez=100, resolutionz=10, defocusz=0):
        self._commChannel.sigAutoFocusRunning.emit(True)
        mProcessor = FrameProcessor()
        if defocusz != 0:
            flatfieldImage = self.recordFlatfield(defocusPosition=defocusz)
            mProcessor.setFlatfieldFrame(flatfieldImage)

        initialPosition = self.stages.getPosition()["Z"]
        Nz = int(2 * rangez // resolutionz)
        relative_positions = np.int32(np.linspace(-abs(rangez), abs(rangez), Nz))

        # Move to the first relative position
        self.stages.move(value=relative_positions[0], axis="Z", is_absolute=False, is_blocking=True)

        for iz in range(Nz):
            if not self.isAutofusRunning:
                break
            if iz != 0:
                step = relative_positions[iz] - relative_positions[iz - 1]
                self.stages.move(value=step, axis="Z", is_absolute=False, is_blocking=True)
            frame = self.grabCameraFrame()
            mProcessor.add_frame(frame, iz)

        allfocusvals = np.array(mProcessor.getFocusValueList(Nz))
        mProcessor.stop()

        if self.isAutofusRunning:
            coordinates = relative_positions + initialPosition
            if not IS_HEADLESS:
                self._widget.focusPlotCurve.setData(coordinates[:len(allfocusvals)], allfocusvals)
            else:
                self.sigUpdateFocusPlot.emit(coordinates[:len(allfocusvals)], allfocusvals)

            best_index = np.argmax(allfocusvals)
            bestzpos_rel = relative_positions[best_index]

            # Move to best focus
            self.stages.move(value=-2 * rangez, axis="Z", is_absolute=False, is_blocking=True)
            self.stages.move(value=(rangez + bestzpos_rel), axis="Z", is_absolute=False, is_blocking=True)
        else:
            # Return to initial absolute position if stopped
            self.stages.move(value=initialPosition, axis="Z", is_absolute=True, is_blocking=True)

        self._commChannel.sigAutoFocusRunning.emit(False)
        self.isAutofusRunning = False
        if not IS_HEADLESS:
            self._widget.focusButton.setText('Autofocus')

        final_z = bestzpos_rel + initialPosition if self.isAutofusRunning else initialPosition
        self.sigUpdateFocusValue.emit({"bestzpos": final_z})
        return final_z

class FrameProcessor:
    def __init__(self, nGauss=7, nCropsize=2048):
        self.isRunning = True
        self.frame_queue = queue.Queue()
        self.allfocusvals = []
        self.worker_thread = threading.Thread(target=self.process_frames, daemon=True)
        self.worker_thread.start()
        self.flatFieldFrame = None
        self.nGauss = nGauss
        self.nCropsize = nCropsize

    def setFlatfieldFrame(self, flatfieldFrame):
        self.flatFieldFrame = flatfieldFrame

    def add_frame(self, img, iz):
        self.frame_queue.put((img, iz))

    def process_frames(self):
        while self.isRunning:
            img, iz = self.frame_queue.get()
            self.process_frame(img, iz)

    def process_frame(self, img, iz):
        if self.flatFieldFrame is not None:
            img = img / self.flatFieldFrame
        img = self.extract(img, self.nCropsize)
        if len(img.shape) > 2:
            img = np.mean(img, -1)
        if 0:
            imagearraygf = ndi.gaussian_filter(img, self.nGauss)
            is_success, buffer = cv2.imencode(".jpg", imagearraygf, [int(cv2.IMWRITE_JPEG_QUALITY), 80])
            focusquality = len(buffer) if is_success else 0
        else:
            focusquality = self.calculate_focus_measure(img)
        self.allfocusvals.append(focusquality)

    def calculate_focus_measure(self, image, method="LAPE"):
        if len(image.shape) == 3:
            image = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)  # optional
        if method == "LAPE":
            if image.dtype == np.uint16:
                lap = cv2.Laplacian(image, cv2.CV_32F)
            else:
                lap = cv2.Laplacian(image, cv2.CV_16S)
            focus_measure = np.mean(np.square(lap))
        elif method == "GLVA":
            focus_measure = np.std(image, axis=None)  # GLVA
        else:
            focus_measure = np.std(image, axis=None)  # GLVA
        return focus_measure




    @staticmethod
    def extract(marray, crop_size):
        center_x, center_y = marray.shape[1] // 2, marray.shape[0] // 2
        x_start = center_x - crop_size // 2
        x_end = x_start + crop_size
        y_start = center_y - crop_size // 2
        y_end = y_start + crop_size
        return marray[y_start:y_end, x_start:x_end]

    def getFocusValueList(self, nFrameExpected, timeout=5):
        t0 = time.time()
        while len(self.allfocusvals) < nFrameExpected:
            time.sleep(0.01)
            if time.time() - t0 > timeout:
                break
        return self.allfocusvals

    def stop(self):
        self.isRunning = False


```
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