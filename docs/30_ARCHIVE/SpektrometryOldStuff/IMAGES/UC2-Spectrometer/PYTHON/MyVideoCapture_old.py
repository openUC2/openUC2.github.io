
class MyVideoCapture:
	def __init__(self, calibration, video_source=0):
		self.calibration = calibration

		#settings for peak detect
		self.mindist = 50 #minumum distance between peaks
		self.thresh = 20 #Threshold
		self.savpoly = 7 #savgol filter polynomial
		self.intensity = [0] * 636 #array for intensity data...full of zeroes
		self.holdpeaks = False

		# Open the video source
		self.vid = cv2.VideoCapture(video_source)
		#Settings
		'''
		0. CV_CAP_PROP_POS_MSEC Current position of the video file in milliseconds.
		1. CV_CAP_PROP_POS_FRAMES 0-based index of the frame to be decoded/captured next.
		2. CV_CAP_PROP_POS_AVI_RATIO Relative position of the video file
		3. CV_CAP_PROP_FRAME_WIDTH Width of the frames in the video stream.
		4. CV_CAP_PROP_FRAME_HEIGHT Height of the frames in the video stream.
		5. CV_CAP_PROP_FPS Frame rate.
		6. CV_CAP_PROP_FOURCC 4-character code of codec.
		7. CV_CAP_PROP_FRAME_COUNT Number of frames in the video file.
		8. CV_CAP_PROP_FORMAT Format of the Mat objects returned by retrieve() .
		9. CV_CAP_PROP_MODE Backend-specific value indicating the current capture mode.
		10. CV_CAP_PROP_BRIGHTNESS Brightness of the image (only for cameras).
		11. CV_CAP_PROP_CONTRAST Contrast of the image (only for cameras).
		12. CV_CAP_PROP_SATURATION Saturation of the image (only for cameras).
		13. CV_CAP_PROP_HUE Hue of the image (only for cameras).
		14. CV_CAP_PROP_GAIN Gain of the image (only for cameras).
		15. CV_CAP_PROP_EXPOSURE Exposure (only for cameras).
		16. CV_CAP_PROP_CONVERT_RGB Boolean flags indicating whether images should be converted to RGB.
		17. CV_CAP_PROP_WHITE_BALANCE Currently unsupported
		18. CV_CAP_PROP_RECTIFICATION Rectification flag for stereo cameras (note: only supported by DC1394 v 2.x backend currently)
		'''
		self.vid.set(cv2.CAP_PROP_FRAME_WIDTH,640)
		self.vid.set(cv2.CAP_PROP_FRAME_HEIGHT,480)
		self.vid.set(cv2.CAP_PROP_FPS, 25)

		if not self.vid.isOpened():
			raise ValueError("Unable to open video source", video_source)

		# Get video source width and height
		self.width = self.vid.get(cv2.CAP_PROP_FRAME_WIDTH)
		self.height = self.vid.get(cv2.CAP_PROP_FRAME_HEIGHT)
		#print(self.width)

	def recalibrate(self, calibration):
		self.calibration = calibration

	def get_frame(self):
		if self.vid.isOpened():
			ret, frame = self.vid.read()
			if ret:
				# Return a boolean success flag and the current frame converted to BGR
				frame = cv2.resize(frame, (320, 240)) #resize the live image
				cv2.line(frame,(0,120),(320,120),(255,255,255),1)
				return (ret, cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
			else:
				return (ret, None)
		else:
			return (ret, None)
