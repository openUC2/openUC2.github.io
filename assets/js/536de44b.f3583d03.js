"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={},o="ImSwitch in Docker",l={unversionedId:"ImSwitch/ImSwitchDocker",id:"ImSwitch/ImSwitchDocker",title:"ImSwitch in Docker",description:"Setting Up ImSwitch React and Backend (optional: with Docker Compose)",source:"@site/docs/04_ImSwitch/ImSwitchDocker.md",sourceDirName:"04_ImSwitch",slug:"/ImSwitch/ImSwitchDocker",permalink:"/docs/ImSwitch/ImSwitchDocker",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ImSwitchConfig",permalink:"/docs/ImSwitch/ImSwitchConfig"},next:{title:"ImSwitch in Docker II Tutorial",permalink:"/docs/ImSwitch/ImSwitchDocker2"}},s={},c=[{value:"Setting Up ImSwitch React and Backend (optional: with Docker Compose)",id:"setting-up-imswitch-react-and-backend-optional-with-docker-compose",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Docker Quick Start",id:"docker-quick-start",level:3},{value:"ARM64 + X86",id:"arm64--x86",level:4},{value:"Install the Docker Image and Run It",id:"install-the-docker-image-and-run-it",level:3},{value:"List of Arguments",id:"list-of-arguments",level:3},{value:"External folders for Config and Data",id:"external-folders-for-config-and-data",level:3},{value:"Make changes persistent",id:"make-changes-persistent",level:3},{value:"Breakdown of the Command:",id:"breakdown-of-the-command",level:3},{value:"Setting up docker on Raspi",id:"setting-up-docker-on-raspi",level:3},{value:"Additional Information",id:"additional-information",level:3},{value:"Docker Compose Configuration",id:"docker-compose-configuration",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Running Docker Compose",id:"running-docker-compose",level:3},{value:"Accessing the Services individually",id:"accessing-the-services-individually",level:3},{value:"Configuration Details",id:"configuration-details",level:3},{value:"Stopping the Services",id:"stopping-the-services",level:3},{value:"Additional Notes",id:"additional-notes",level:3},{value:"Autostarting ImSwitch on e.g. the Raspberry Pi",id:"autostarting-imswitch-on-eg-the-raspberry-pi",level:3},{value:"Explanation",id:"explanation-1",level:3},{value:"Detailed Steps:",id:"detailed-steps",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"imswitch-in-docker"},"ImSwitch in Docker"),(0,i.kt)("h2",{id:"setting-up-imswitch-react-and-backend-optional-with-docker-compose"},"Setting Up ImSwitch React and Backend (optional: with Docker Compose)"),(0,i.kt)("p",null,"More information on setting upt this on a raspberry pi, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"./launch_imswitch_raspi.md"},"INSTALL ON PI")," documentation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning")," This is very experimental. What you can expect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This installs an NO-QT (no PyQt/Qt dependency) headless version on your computer"),(0,i.kt)("li",{parentName:"ul"},"The APP is exposed under Port 8001 on your localhost"),(0,i.kt)("li",{parentName:"ul"},"You can access the Swagger GUI under https://localhost:8001/docs"),(0,i.kt)("li",{parentName:"ul"},"You can access the REACT APP (source: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openUC2/imswitch-aiortc-react/"},"https://github.com/openUC2/imswitch-aiortc-react/"),") under https://localhost:8001/imswitch/index.html"),(0,i.kt)("li",{parentName:"ul"},"You can customize the setup config/boot behaviour using additional arguments"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"dockerfile")," can mount HIK cameras (tested on ARM devices)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"dockerfile")," is available here: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openUC2/ImSwitch/blob/master/docker/HIK/dockerfile"},"https://github.com/openUC2/ImSwitch/blob/master/docker/HIK/dockerfile")),(0,i.kt)("li",{parentName:"ul"},"The github actions file that builds the NOQT branch into a docker image for ARM/X86 is available here: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openUC2/ImSwitch/blob/master/.github/workflows/imswitch-docker-multiarch-noqt.yaml"},"https://github.com/openUC2/ImSwitch/blob/master/.github/workflows/imswitch-docker-multiarch-noqt.yaml"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(64411).Z,width:"2862",height:"1802"}),"\n",(0,i.kt)("em",{parentName:"p"},"Swagger UI Interface of the ImSwitch Server")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(30204).Z,width:"2862",height:"1802"}),"\n",(0,i.kt)("em",{parentName:"p"},"The React APP is statically hosted using a fastaAPI endpoint under https://localhost:8001/imswitch/index.html (",(0,i.kt)("strong",{parentName:"em"},"ENSURE YOU HAVE ACCEPTED THE CERTIFICATE"),")")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(81969).Z,width:"2808",height:"644"}),"\n*The images are build using CI using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openUC2/ImSwitch/blob/master/.github/workflows/imswitch-docker-multiarch-noqt.yaml"},"actions")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(11960).Z,width:"2462",height:"644"}),"\n",(0,i.kt)("em",{parentName:"p"},"The docker Images are hosted on ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/orgs/openUC2/packages?repo_name=ImSwitch"},"github containers"))),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker installed on your system (Tested on Raspi, Jetson Nano, Mac M1, Windows)"),(0,i.kt)("li",{parentName:"ul"},"Optional: Docker Compose installed on your system")),(0,i.kt)("h3",{id:"docker-quick-start"},"Docker Quick Start"),(0,i.kt)("h4",{id:"arm64--x86"},"ARM64 + X86"),(0,i.kt)("p",null,"Pull the file from github containers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker pull ghcr.io/openuc2/imswitch-noqt-x64:latest\n")),(0,i.kt)("p",null,"Install the docker image and run it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo docker run -it --rm -p 8001:8001 -p 2222:22 -e HEADLESS=1 -e HTTP_PORT=8001 -e CONFIG_FILE=example_uc2_hik_flowstop.json -e UPDATE_GIT=0 -e UPDATE_CONFIG=0 --privileged ghcr.io/openuc2/imswitch-noqt-x64:latest\n")),(0,i.kt)("p",null,"Certainly! Here\u2019s the updated section of the documentation with the changes incorporated:"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"install-the-docker-image-and-run-it"},"Install the Docker Image and Run It"),(0,i.kt)("p",null,"To install and run the ImSwitch Docker image, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run -it --rm -p 8001:8001 -p 2222:22 \\\n-e HEADLESS=1 \\\n-e HTTP_PORT=8001 \\\n-e CONFIG_FILE=example_uc2_hik_flowstop.json \\\n-e UPDATE_GIT=0 \\\n-e UPDATE_CONFIG=0 \\\n--privileged ghcr.io/openuc2/imswitch-noqt-x64:latest\n")),(0,i.kt)("h3",{id:"list-of-arguments"},"List of Arguments"),(0,i.kt)("p",null,"Here\u2019s a breakdown of the arguments you can use to customize the ImSwitch Docker container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'HEADLESS=1                # ImSwitch will start without any GUI.\nHTTP_PORT=8001            # Port to access e.g. the ImSwitch React GUI.\nCONFIG_FILE=example_virtual_microscope.json # Default setup configuration.\nUPDATE_GIT=true           # Pull the latest ImSwitch repository.\nUPDATE_INSTALL_GIT=true   # Pull the latest ImSwitch repository and install all changes (e.g., new packages).\nUPDATE_UC2=true           # Pull the latest UC2-REST repository.\nUPDATE_INSTALL_UC2=true   # Pull the latest UC2-REST repository and install all changes.\nUPDATE_CONFIG=true        # Pull the latest changes for setup configurations.\nMODE=terminal             # Start Docker with bash for better debugging.\nCONFIG_PATH=/Users/bene/Downloads # Path to the local ImSwitchConfig folder (uses the default inside the container if not specified).\nDATA_PATH=/Users/bene/Downloads # Path to store data (e.g., USB drive; needs to be mounted via command line; uses the default inside the container if not specified).\nPIP_PACKAGES (e.g. "arkitekt UC2-REST") # add new packages after container building\n')),(0,i.kt)("h3",{id:"external-folders-for-config-and-data"},"External folders for Config and Data"),(0,i.kt)("p",null,"We can use external path (outside the container) to store and read data. This is helpful if we want to make changes e.g. to the config or want to store data/images. Remember, the docker container gets reseted after the next reboot!"),(0,i.kt)("p",null,"We have two options."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Config folder. Let's have the following use case, where the folder should be linked to your Downloads folder. For this you ahve to specify two things in the way you call the docker image:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"-e CONFIG_PATH=/config  -v ~/Downloads:/config\n")),(0,i.kt)("p",null,"This means that ImSwitch inside docker will use the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/config/ImSwitchConfig/config")," to specify the setup configuration. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," command will mount the host's Downloads folder as ",(0,i.kt)("inlineCode",{parentName:"p"},"/config")," inside the docker container."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"The same mechanism can be used for specifying the datapath to specify the dataset storage. For this we have to specify:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"-e  DATA_PATH=/dataset  -v ~/Downloads:/dataset\n")),(0,i.kt)("p",null,"Images will be stored in that folder. Ensure the folder exists!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-v ~/Downloads:/config\n")),(0,i.kt)("h3",{id:"make-changes-persistent"},"Make changes persistent"),(0,i.kt)("p",null,"This command configures and runs the ImSwitch Docker container with the following features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Update the ImSwitch Repository and Make Changes Persistent:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_INSTALL_GIT=1")," environment variable triggers an update and reinstallation of the ImSwitch repository."),(0,i.kt)("li",{parentName:"ul"},"The ImSwitch repository changes are stored in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/tmp/ImSwitch-changes")," directory within the container, which is mounted to ",(0,i.kt)("inlineCode",{parentName:"li"},"~/Documents/imswitch_docker/imswitch_git")," on the host. This makes any updates or modifications persistent across container restarts."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Persistent Storage of Installed Pip Packages:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"PIP_PACKAGES"),' environment variable allows you to specify additional pip packages to install. In this example, "arkitekt" and "UC2-REST" are installed.'),(0,i.kt)("li",{parentName:"ul"},"The installed pip packages are stored in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/persistent_pip_packages")," directory within the container, which is mounted to ",(0,i.kt)("inlineCode",{parentName:"li"},"~/Documents/imswitch_docker/imswitch_pip")," on the host, ensuring persistence across container restarts."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Using an External ImSwitchConfig Folder:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ImSwitch configuration files are stored in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/root/ImSwitchConfig")," directory within the container, which is mounted to ",(0,i.kt)("inlineCode",{parentName:"li"},"~/Downloads")," on the host. This allows you to easily manage and update your configuration files from your host machine."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Using an External Dataset Folder:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The dataset files are stored in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/dataset")," directory within the container, which is mounted to ",(0,i.kt)("inlineCode",{parentName:"li"},"/media/uc2/SD2/")," on the host. This allows you to work with large datasets stored on your host machine.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Command Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker run -it --rm -p 8001:8001 -p 2222:22 \\\n-e UPDATE_INSTALL_GIT=1 \\\n-e PIP_PACKAGES="arkitekt UC2-REST" \\\n-e DATA_PATH=/dataset \\\n-e CONFIG_PATH=/config \\\n-v ~/Documents/imswitch_docker/imswitch_git:/tmp/ImSwitch-changes \\\n-v ~/Documents/imswitch_docker/imswitch_pip:/persistent_pip_packages \\\n-v /media/uc2/SD2/:/dataset \\\n-v ~/Downloads:/config \\\nimswitch_hik\n')),(0,i.kt)("h3",{id:"breakdown-of-the-command"},"Breakdown of the Command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Port Mapping:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p 8001:8001"),": Maps the container\u2019s HTTP server port 8001 to the host\u2019s port 8001."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p 2222:22"),": Maps the container\u2019s SSH server port 22 to the host\u2019s port 2222."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Environment Variables:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-e UPDATE_INSTALL_GIT=1"),": Updates and reinstalls the ImSwitch repository during container startup."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'-e PIP_PACKAGES="arkitekt UC2-REST"'),": Installs additional pip packages (",(0,i.kt)("inlineCode",{parentName:"li"},"arkitekt"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"UC2-REST"),") and makes them persistent."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Volume Mounting:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v ~/Documents/imswitch_docker/imswitch_git:/tmp/ImSwitch-changes"),": Mounts the host directory ",(0,i.kt)("inlineCode",{parentName:"li"},"~/Documents/imswitch_docker/imswitch_git")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"/tmp/ImSwitch-changes")," inside the container to persist changes to the ImSwitch repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v ~/Documents/imswitch_docker/imswitch_pip:/persistent_pip_packages"),": Mounts the host directory ",(0,i.kt)("inlineCode",{parentName:"li"},"~/Documents/imswitch_docker/imswitch_pip")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"/persistent_pip_packages")," inside the container for persistent pip package storage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v /media/uc2/SD2/:/dataset"),": Mounts the host directory ",(0,i.kt)("inlineCode",{parentName:"li"},"/media/uc2/SD2/")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"/dataset")," inside the container to use external datasets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v ~/Downloads:/config"),": Mounts the host directory ",(0,i.kt)("inlineCode",{parentName:"li"},"~/Downloads")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"/config")," inside the container to use external configuration files.")))),(0,i.kt)("p",null,"This command is a comprehensive way to set up and run the ImSwitch Docker container, ensuring that updates, configurations, and additional installations are persistent and easily manageable."),(0,i.kt)("h3",{id:"setting-up-docker-on-raspi"},"Setting up docker on Raspi"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Update package lists\nsudo apt update -y\n\n# Upgrade installed packages\nsudo apt upgrade -y\n\n# Install Docker\ncurl -sSL https://get.docker.com | sh\n\n# Add current user to the Docker group\nsudo usermod -aG docker $USER\n\n# Print message to logout and login again\necho "Please log out and log back in to apply the Docker group changes."\n\n# Verify group membership (this will not reflect the changes until you log out and log back in)\ngroups\n')),(0,i.kt)("p",null,"To save this script, you can copy the content above into a file, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"install_docker.sh"),", and then run the script using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x install_docker.sh\n./install_docker.sh\n")),(0,i.kt)("p",null,"After running the script, you will need to log out and log back in to apply the Docker group changes. Once you log back in, you can verify your membership in the Docker group by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"groups\n")),(0,i.kt)("h3",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,"This tutorial will guide you through the process of setting up the ImSwitch React frontend and backend using Docker Compose. The ImSwitch React frontend is exposed on port 3000 and provides access to the REST API via a Swagger UI running in another Docker container on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8001"),". The Swagger UI is available at ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8001/docs"),". This setup uses a simulated microscope with a line-like sample. The configuration is provided by a JSON file that can be updated if the corresponding flag is set. Additionally, the ImSwitch version can be updated based on a flag. If access to the camera (HIK camera and UC2-REST) is needed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"--privileged")," flag must be set."),(0,i.kt)("h3",{id:"docker-compose-configuration"},"Docker Compose Configuration"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file with the following content or use the file in ",(0,i.kt)("a",{parentName:"p",href:"compose.yaml"},"compose.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.8\'\n\nservices:\n  imswitch-aiortc-react:\n    image: ghcr.io/openuc2/imswitch-aiortc-react:latest\n    ports:\n      - "5000:5000"\n      - "8002:8001"\n    environment:\n      - NODE_ENV=production\n    stdin_open: true\n    tty: true\n\n  imswitch-docker-arm64-noqt:\n    image: ghcr.io/openuc2/imswitch-docker-arm64-noqt:latest\n    privileged: true\n    ports:\n      - "8001:8001"\n      - "2222:22"\n    environment:\n      - HEADLESS=1\n      - HTTP_PORT=8001\n      - CONFIG_FILE=example_virtual_microscope.json\n      - UPDATE_GIT=1\n      - UPDATE_CONFIG=0\n    stdin_open: true\n    tty: true\n    restart: always\n')),(0,i.kt)("h3",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"imswitch-aiortc-react"),": This service runs the ImSwitch React frontend."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"image"),": Specifies the Docker image to use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ports"),": Maps the container ports to the host ports."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"environment"),": Sets environment variables inside the container."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stdin_open")," and ",(0,i.kt)("strong",{parentName:"li"},"tty"),": Keeps the container running in interactive mode."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"imswitch-docker-arm64-noqt"),": This service runs the backend with the Swagger UI."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"image"),": Specifies the Docker image to use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"privileged"),": Grants the container privileged access to the hardware."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ports"),": Maps the container ports to the host ports."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"environment"),": Sets environment variables inside the container."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stdin_open")," and ",(0,i.kt)("strong",{parentName:"li"},"tty"),": Keeps the container running in interactive mode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"restart"),": Ensures the container restarts automatically if it stops.")))),(0,i.kt)("h3",{id:"running-docker-compose"},"Running Docker Compose"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Save the ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file to a directory on your machine."),(0,i.kt)("li",{parentName:"ol"},"Open a terminal and navigate to the directory containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file."),(0,i.kt)("li",{parentName:"ol"},"Start the services with Docker Compose:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose -f docker-compose.yml up -d\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"go to your browser and access the microscope server under https://localhost:8001/docs to access the swagger uI"),(0,i.kt)("li",{parentName:"ol"},"go to your browser and access the microscope control UI under http://localhost:3000\n5.1 enter the IP address and port und ",(0,i.kt)("inlineCode",{parentName:"li"},"Connections"),":  ",(0,i.kt)("inlineCode",{parentName:"li"},"https://localhost")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"8001")," as port")),(0,i.kt)("h3",{id:"accessing-the-services-individually"},"Accessing the Services individually"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ImSwitch React Frontend"),": Open your browser and navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," to access the ImSwitch React frontend."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Swagger UI"),": Navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:8001/docs")," to access the Swagger UI for the backend API.")),(0,i.kt)("h3",{id:"configuration-details"},"Configuration Details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simulated Microscope"),": The current configuration uses a simulated microscope offering a line-like sample. The configuration is provided by a JSON file specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"CONFIG_FILE")," environment variable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Updating Configuration and Version"),": The JSON configuration and the ImSwitch version can be updated if the ",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_CONFIG")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_GIT")," flags are set, respectively."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Camera Access"),": If access to the camera (HIK camera and UC2-REST) is needed, the ",(0,i.kt)("inlineCode",{parentName:"li"},"--privileged")," flag must be set.")),(0,i.kt)("h3",{id:"stopping-the-services"},"Stopping the Services"),(0,i.kt)("p",null,"To stop the services, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose -f docker-compose.yml down\n")),(0,i.kt)("p",null,"This command stops and removes all containers defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."),(0,i.kt)("h3",{id:"additional-notes"},"Additional Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure that Docker and Docker Compose are installed and running on your system."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"--privileged")," flag is necessary for accessing certain hardware components like cameras.")),(0,i.kt)("p",null,"By following this tutorial, you should be able to set up and run the ImSwitch React frontend and backend with Docker Compose, providing a seamless environment for interacting with the simulated microscope and accessing the API via Swagger UI."),(0,i.kt)("p",null,"To make the ",(0,i.kt)("inlineCode",{parentName:"p"},"CONFIG_PATH")," available as a folder outside the container on the host computer (e.g., in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Downloads/ImSwitchConfig"),"), you can use Docker's volume mounting feature. This allows you to mount a directory from the host machine into the container, making it accessible from within the container."),(0,i.kt)("p",null,"Here's how you can modify your Docker run command to mount the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Downloads/ImSwitchConfig")," directory from the host to the container:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Modify the Docker run command"),": Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"-v")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"--volume"),") option to mount the directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker run -it --rm -p 8001:8001 -p 2222:22 \\\n    -e HEADLESS=1 \\\n    -e HTTP_PORT=8001 \\\n    -e CONFIG_FILE=example_virtual_microscope.json \\\n    -e UPDATE_GIT=0 \\\n    -e UPDATE_CONFIG=0 \\\n    -e CONFIG_PATH=/config \\\n    --privileged \\\n    -v ~/Downloads/ImSwitchConfig:/config \\\n    imswitch_hik\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Update the CMD")," in your Dockerfile to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"CONFIG_PATH")," environment variable:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'CMD ["/bin/bash", "-c", "\\\n    if [ \\"$MODE\\" = \\"terminal\\" ]; then \\\n        /bin/bash; \\\n    else \\\n        echo \'LSUSB\' && lsusb && \\\n        /usr/sbin/sshd -D & \\\n        ls /root/ImSwitchConfig && \\\n        if [ \\"$UPDATE_GIT\\" = \\"true\\" ]; then \\\n            cd /tmp/ImSwitch && \\\n            git pull; \\\n        fi && \\\n        if [ \\"$UPDATE_INSTALL_GIT\\" = \\"true\\" ]; then \\\n            cd /tmp/ImSwitch && \\\n            git pull && \\\n            /bin/bash -c \'source /opt/conda/bin/activate imswitch && pip install -e /tmp/ImSwitch\'; \\\n        fi && \\\n        if [ \\"$UPDATE_UC2\\" = \\"true\\" ]; then \\\n            cd /tmp/UC2-REST && \\\n            git pull; \\\n        fi && \\\n        if [ \\"$UPDATE_INSTALL_UC2\\" = \\"true\\" ]; then \\\n            cd /tmp/UC2-REST && \\\n            git pull && \\\n            /bin/bash -c \'source /opt/conda/bin/activate imswitch && pip install -e /tmp/UC2-ESP\'; \\\n        fi && \\\n        if [ \\"$UPDATE_CONFIG\\" = \\"true\\" ]; then \\\n            cd /root/ImSwitchConfig && \\\n            git pull; \\\n        fi && \\\n        source /opt/conda/bin/activate imswitch && \\\n        HEADLESS=${HEADLESS:-1} && \\\n        HTTP_PORT=${HTTP_PORT:-8001} && \\\n        CONFIG_FILE=${CONFIG_FILE:-/root/ImSwitchConfig/imcontrol_setup/example_virtual_microscope.json} && \\\n        USB_DEVICE_PATH=${USB_DEVICE_PATH:-/dev/bus/usb} && \\\n        CONFIG_PATH=${CONFIG_PATH:-None} && \\\n        echo \\"python3 /tmp/ImSwitch/main.py --headless $HEADLESS --config-file $CONFIG_FILE --http-port $HTTP_PORT \\" && \\\n        python3 /tmp/ImSwitch/main.py --headless $HEADLESS --config-file $CONFIG_FILE --http-port $HTTP_PORT --config-folder $CONFIG_PATH; \\\n    fi"]\n')),(0,i.kt)("p",null,"By adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"-v ~/Downloads/ImSwitchConfig:/config")," option in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command, you mount the host's ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Downloads/ImSwitchConfig")," directory to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/config")," directory inside the container. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-e CONFIG_PATH=/config")," environment variable makes sure that the container uses this mounted directory as the configuration path."),(0,i.kt)("p",null,"Now, any changes you make in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Downloads/ImSwitchConfig")," on your host machine will be reflected inside the container at ",(0,i.kt)("inlineCode",{parentName:"p"},"/config"),", and the application running inside the container will use this directory for its configuration files."),(0,i.kt)("p",null,"Certainly! Here's a summary and explanation of the combined script:"),(0,i.kt)("h3",{id:"autostarting-imswitch-on-eg-the-raspberry-pi"},"Autostarting ImSwitch on e.g. the Raspberry Pi"),(0,i.kt)("p",null,"The script ",(0,i.kt)("inlineCode",{parentName:"p"},"setup_autostart.sh")," performs the following actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Creates a startup script (",(0,i.kt)("inlineCode",{parentName:"strong"},"start_imswitch.sh"),")")," that:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Waits for the X server to be available."),(0,i.kt)("li",{parentName:"ul"},"Starts the Docker container in the background."),(0,i.kt)("li",{parentName:"ul"},"Launches Chromium in fullscreen mode, opening a specific URL and zooming out the page to 70%."),(0,i.kt)("li",{parentName:"ul"},"Logs output to a file for debugging purposes."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Creates a systemd service (",(0,i.kt)("inlineCode",{parentName:"strong"},"start_imswitch.service"),")")," that:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ensures the startup script runs only after the X server is available."),(0,i.kt)("li",{parentName:"ul"},"Restarts the script on failure."),(0,i.kt)("li",{parentName:"ul"},"Configures logging to the systemd journal.")))),(0,i.kt)("h3",{id:"explanation-1"},"Explanation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/bash\n\n# Define variables\nSTART_SCRIPT_PATH="$HOME/start_imswitch.sh"\nSERVICE_FILE_PATH="/etc/systemd/system/start_imswitch.service"\n\n# Create the startup script\ncat << \'EOF\' > $START_SCRIPT_PATH\n#!/bin/bash\nset -x\n\nLOGFILE=/home/uc2/start_imswitch.log\nexec > $LOGFILE 2>&1\n\necho "Starting IMSwitch Docker container and Chromium"\n\n# Wait for the X server to be available\nwhile ! xset q &>/dev/null; do\n  echo "Waiting for X server..."\n  sleep 2\ndone\n\nexport DISPLAY=:0\n\n# Start Docker container in the background\necho "Running Docker container..."\nnohup sudo docker run --rm -d -p 8001:8001 -p 2222:22 \\\n  -e HEADLESS=1 -e HTTP_PORT=8001 \\\n  -e CONFIG_FILE=example_uc2_hik_flowstop.json \\\n  -e UPDATE_GIT=1 -e UPDATE_CONFIG=0 \\\n  --privileged ghcr.io/openuc2/imswitch-noqt-x64:latest &\n\n# Wait a bit to ensure Docker starts\nsleep 10\n\n# Start Chromium\necho "Starting Chromium..."\n/usr/bin/chromium-browser --start-fullscreen --ignore-certificate-errors \\\n  --unsafely-treat-insecure-origin-as-secure=https://0.0.0.0:8001 \\\n  --app="data:text/html,<html><body><script>window.location.href=\'https://0.0.0.0:8001/imswitch/index.html\';setTimeout(function(){document.body.style.zoom=\'0.7\';}, 3000);<\/script></body></html>"\n\necho "Startup script completed"\nEOF\n\n# Make the startup script executable\nchmod +x $START_SCRIPT_PATH\n\necho "Startup script created at $START_SCRIPT_PATH and made executable."\n\n# Create the systemd service file\nsudo bash -c "cat << EOF > $SERVICE_FILE_PATH\n[Unit]\nDescription=Start IMSwitch Docker and Chromium\nAfter=display-manager.service\nRequires=display-manager.service\n\n[Service]\nType=simple\nExecStart=$START_SCRIPT_PATH\nUser=$USER\nEnvironment=DISPLAY=:0\nRestart=on-failure\nTimeoutSec=300\nStandardOutput=journal\nStandardError=journal\n\n[Install]\nWantedBy=graphical.target\nEOF"\n\n# Reload systemd, enable and start the new service\nsudo systemctl daemon-reload\nsudo systemctl enable start_imswitch.service\nsudo systemctl start start_imswitch.service\n\necho "Systemd service created and enabled to start at boot."\n')),(0,i.kt)("h3",{id:"detailed-steps"},"Detailed Steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Define Paths"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"START_SCRIPT_PATH")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SERVICE_FILE_PATH")," are set to the paths where the startup script and the systemd service file will be created."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create the Startup Script"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logging"),": Redirects output to a log file (",(0,i.kt)("inlineCode",{parentName:"li"},"/home/uc2/start_imswitch.log"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wait for X Server"),": Uses a loop to check if the X server is available (",(0,i.kt)("inlineCode",{parentName:"li"},"xset q"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start Docker"),": Runs the Docker container in detached mode (",(0,i.kt)("inlineCode",{parentName:"li"},"-d"),"), ensuring it runs in the background without expecting a TTY."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start Chromium"),": Opens Chromium in fullscreen mode, bypassing certificate errors, and zooms the page to 70%."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Make the Script Executable"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the ",(0,i.kt)("inlineCode",{parentName:"li"},"start_imswitch.sh")," script as executable using ",(0,i.kt)("inlineCode",{parentName:"li"},"chmod +x"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create the Systemd Service File"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dependencies"),": Ensures the service runs after the display manager service (",(0,i.kt)("inlineCode",{parentName:"li"},"display-manager.service"),"), which starts the X server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Service Configuration"),": Specifies the script to run (",(0,i.kt)("inlineCode",{parentName:"li"},"ExecStart"),"), user to run it as (",(0,i.kt)("inlineCode",{parentName:"li"},"User"),"), environment variables (",(0,i.kt)("inlineCode",{parentName:"li"},"Environment"),"), and restart behavior on failure (",(0,i.kt)("inlineCode",{parentName:"li"},"Restart=on-failure"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logging"),": Configures logging to the systemd journal (",(0,i.kt)("inlineCode",{parentName:"li"},"StandardOutput")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"StandardError"),")."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Enable and Start the Service"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Reloads systemd to recognize the new service."),(0,i.kt)("li",{parentName:"ul"},"Enables the service to start at boot."),(0,i.kt)("li",{parentName:"ul"},"Starts the service immediately.")))),(0,i.kt)("p",null,"By running the combined script, you ensure that the IMSwitch Docker container and Chromium browser will start automatically after the X server is available, with proper logging and background execution."))}m.isMDXComponent=!0},64411:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Docker_ImSwitch_1-46523a83577f327deaab210ebd929265.png"},30204:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Docker_ImSwitch_2-7143f54609aa866ebe0592a9b7dd54ca.png"},81969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Docker_ImSwitch_3-b8a6e65086965e68cc250f32c0fb8d4c.png"},11960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Docker_ImSwitch_4-e216ed2e19ac6e51603ff9a50d193aea.png"}}]);