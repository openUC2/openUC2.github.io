from urllib import request
import cv2
import numpy as np

url='http://192.168.4.1/cam-hi.jpg'


while(1):
    # all the opencv processing is done here
    imgResp = request.urlopen(url)
    imgNp=np.array(bytearray(imgResp.read()),dtype=np.uint8)
    img=cv2.imdecode(imgNp,-1)

    cv2.imshow('test',img)
    if ord('q')==cv2.waitKey(10):
        exit(0)