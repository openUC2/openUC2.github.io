# ROI Scanner

## Starting ImSwitch on Ubuntu and Start the ROI Scanner

First of all: Open the terminal. Type the following (all case sensitive):


```
conda activate imswitch

sudo chown user:user  /dev/ttyUSB0 # where user is the current user you're logged into (then enter password)
```

The USB port may differ, so perhaps also try this:
```
sudo chown veo:veo /dev/ttyUSB1
sudo chown veo:veo /dev/ttyUSB2
```

Then:

```
python -m imswitch
```

The images are stored in the working directory of the terminal.


<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
  <iframe 
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="https://www.youtube.com/embed/WATAgUStyF0" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
  />
</div>
