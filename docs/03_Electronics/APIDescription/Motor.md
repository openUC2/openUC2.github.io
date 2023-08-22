# Motor

This API provides a straightforward way to control and manage motors using the UC2-ESP firmware. The interface operates over USB serial communication and accepts JSON documents to control motor movements. The main endpoint for motor control is `/motor_act`.

## Endpoint

**Endpoint:** `/motor_act`

The endpoint `/motor_act` is used to initiate motor actions and control motor movement parameters.

## Request Format

The API expects a JSON document with the following structure:

```json
{
  "task": "/motor_act",
  "qid": 4,
  "motor": {
    "steppers": [
      {
        "stepperid": 1,
        "position": -20090,
        "speed": -20000,
        "isabs": 0,
        "isaccel": 1,
        "accel": 10000
      }
    ]
  }
}
```

- `"task"`: Specifies the task to perform, in this case, it is `/motor_act`.
- `"qid"`: The Queue ID (qid) is used to identify the messaging queue for returning status or completion notifications.
- `"motor"`: This object contains motor-related parameters.
  - `"steppers"`: An array of stepper motor configurations.
    - `"stepperid"`: The ID of the stepper motor to control. It can be values 0 to 3, corresponding to different motors (e.g., a, x, y, z).
    - `"position"`: The desired position in steps. Negative values indicate movement in the opposite direction.
    - `"speed"`: The speed of movement in steps per second.
    - `"isabs"`: A flag (0 or 1) indicating whether the movement is absolute (1) or relative (0) to the current position.
    - `"isaccel"`: A flag (0 or 1) indicating whether acceleration ramping should be applied at the beginning of the movement.
    - `"accel"`: The acceleration value in steps per second squared.

## Example Request

```json
{
  "task": "/motor_act",
  "qid": 4,
  "motor": {
    "steppers": [
      {
        "stepperid": 1,
        "position": -20090,
        "speed": -20000,
        "isabs": 0,
        "isaccel": 1,
        "accel": 10000
      }
    ]
  }
}
```

## Response

The response from the motor interface API will depend on the actual execution of the motor movement task. It might include status updates, completion notifications, or any relevant error messages.

Please refer to the specific implementation or documentation for details on response formats and meaning.

## Additional Endpoint: Motor Information Retrieval

For querying motor information, an additional endpoint is available:

**Endpoint:** `/motor_get`

This endpoint can be used to retrieve information about the current state of the motor or its settings.

## Conclusion

The UC2-ESP Motor Interface API provides a clear and structured way to control and manage motor movements using JSON documents over USB serial communication. It allows for precise control of motor parameters, movement types, and acceleration profiles, enhancing the flexibility and efficiency of motor control within the UC2-ESP firmware environment.
