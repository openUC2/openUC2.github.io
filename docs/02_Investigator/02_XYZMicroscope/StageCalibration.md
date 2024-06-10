# Stage Mapping and Stage Calibration

Richard Bowman and his team provided a very nice way to calibrate stage coordinates to camera pixel coordinates. We burtally integrated the open-source software which you can find here: https://gitlab.com/openflexure/microscope-extensions/camera-stage-mapping into ImSwitch. If you activate the `HistoScan` Controller and Widget you can start it either by the GUI or using the HTTP interface by calling http://localhost:8002/HistoScanController/startStageMapping (URL and PORT may differ). What the stage will do is moving a certain series of steps in XY, performs a cross-correlation of the images and computes the shift in XY of the mciroscope image on the camera, compares it to the expected shift on and returns the Image-To-Stage-Displacement Matrix as well as the Backlashvector. Both matrices/vectors are microscope specificand will help you matching e.g. stage coordinates for stitching software such as ASHLAR or OFM Stitching. This document should give you a rough idea of what's happening.

Some terminology:

- **Combine X and Y calibrations**: The calibration involves combining two separate measurements or calibration runs for the x and y directions, ensuring that the directions are orthogonal (at right angles to each other).

- **2x2 transformation matrix**: The `image_to_stage_displacement` matrix maps image displacements to stage displacements. This ensures that movements in the image coordinate system are accurately translated to movements in the stage coordinate system.

- **backlash_vector**: This is a vector estimating the backlash (mechanical slack or play in the system) in each direction. In this case, the estimated backlash is zero, indicating a precise calibration with no noticeable mechanical play.

- **backlash**: The function is expected to return the highest element of `backlash_vector` as a scalar value, which would be zero in this case.

## Interpreation of the Matrix

### Calibration Matrix `image_to_stage_displacement`

The entries of the calibration matrix `image_to_stage_displacement` can be given specific names and meanings based on their positions within the matrix. Let's denote the matrix as follows:

$$
\text{image\_to\_stage\_displacement} =
\begin{pmatrix}
0 & -1.0 \\
-1.0 & 0
\end{pmatrix}
$$
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$


#### Entries and Their Names

1. **a (0)**:
   - **Name:** `a`
   - **Meaning:** Represents the scaling factor from the x-coordinate in the image to the x-coordinate in the stage. Here, it is 0, indicating no direct mapping from image x to stage x.

2. **b (-1.0)**:
   - **Name:** `b`
   - **Meaning:** Represents the scaling factor from the y-coordinate in the image to the x-coordinate in the stage. The value -1.0 indicates an inverse and slightly scaled mapping from image y to stage x.

3. **c (-1.0)**:
   - **Name:** `c`
   - **Meaning:** Represents the scaling factor from the x-coordinate in the image to the y-coordinate in the stage. The value -1.0 indicates an inverse and slightly scaled mapping from image x to stage y.

4. **d (0)**:
   - **Name:** `d`
   - **Meaning:** Represents the scaling factor from the y-coordinate in the image to the y-coordinate in the stage. Here, it is 0, indicating no direct mapping from image y to stage y.

### Summary of the Matrix Entries

- **a (0)**: No direct mapping from image x to stage x.
- **b (-1.0)**: Inverse mapping from image y to stage x.
- **c (-1.0)**: Inverse mapping from image x to stage y.
- **d (0)**: No direct mapping from image y to stage y.

This calibration matrix indicates that there is a transformation involving a 90-degree rotation combined with an inverse scaling factor slightly above 1 between the image coordinates and the stage coordinates. The exact interpretation may depend on the specific application, but generally, it implies that movements in one direction in the image are mapped to movements in the perpendicular direction on the stage with a slight scaling adjustment.


## Interpretation of the Values

The following simulation of the `VirtualMicroscope` inside ImSwitch (Config: https://github.com/openUC2/ImSwitchConfig/blob/master/imcontrol_setups/example_virtualmicroscope.json):

![](IMAGES/histoscan/StageMapping1.gif)

The result of the stage mapping is a json file containing (under `/ImSwitch/calibFile.json`) the following important element:

```json
    "camera_stage_mapping_calibration": {
        "backlash": 0.0,
        "backlash_vector": [
            0.0,
            0.0,
            0.0
        ],
        "image_to_stage_displacement": [
            [
                0.0,
                -1.0013599686228885
            ],
            [
                -1.0013599686228885,
                0.0
            ]
        ]
    }
```


The provided matrices explains transforming image coordinates to stage coordinates and estimating backlash. Let's break down the interpretation of the entries:

### 1. `image_to_stage_displacement` Matrix

```python
mData["camera_stage_mapping_calibration"]["image_to_stage_displacement"] =
array([[ 0.        , -1.00135997],
       [-1.00135997,  0.        ]])
```

This matrix is a 2x2 transformation matrix used to map image coordinates to stage coordinates. Each entry in this matrix has a specific meaning:

- **\[0,0\] = 0**: There is no direct transformation of the x-coordinate in the image to the x-coordinate in the stage.
- **\[0,1\] = -1.00135997**: The y-coordinate in the image inversely affects the x-coordinate in the stage.
- **\[1,0\] = -1.00135997**: The x-coordinate in the image inversely affects the y-coordinate in the stage.
- **\[1,1\] = 0**: There is no direct transformation of the y-coordinate in the image to the y-coordinate in the stage.

The presence of -1.00135997 off-diagonal elements indicates that the transformation involves a negative and approximately unit scaling between the coordinates, implying a possible 90-degree rotation combined with a scaling factor close to -1.

### 2. `backlash_vector` Matrix

```python
mData["camera_stage_mapping_calibration"]["backlash_vector"] =
array([ 0.,  0.,  0.])
```

This vector represents the estimated backlash in each direction (x, y, and possibly z, though z is not utilized in a 2D context). Here, all elements are zero, indicating no measurable backlash in the x and y directions.
