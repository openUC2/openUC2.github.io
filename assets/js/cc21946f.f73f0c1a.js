"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[7801],{3905:(t,e,n)=>{n.d(e,{Zo:()=>h,kt:()=>m});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},h=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,o=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=l,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(u,r(r({ref:e},h),{},{components:n})):a.createElement(u,r({ref:e},h))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:l,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6791:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const i={id:"ImSwitchInstaller",title:"Install ImSwitch using the ImSwitch Installer"},r=void 0,s={unversionedId:"ImSwitch/ImSwitchInstaller",id:"ImSwitch/ImSwitchInstaller",title:"Install ImSwitch using the ImSwitch Installer",description:"We created a customized conda installer for the ImSwitchUC2 package that is based on the open-source conda constructor project. All files to construct the package installer can be found in this repository https://github.com/beniroquai/ImSwitchInstaller",source:"@site/docs/04_ImSwitch/ImSwitchInstaller.md",sourceDirName:"04_ImSwitch",slug:"/ImSwitch/ImSwitchInstaller",permalink:"/docs/ImSwitch/ImSwitchInstaller",draft:!1,tags:[],version:"current",frontMatter:{id:"ImSwitchInstaller",title:"Install ImSwitch using the ImSwitch Installer"},sidebar:"tutorialSidebar",previous:{title:"ImSwitchInstallWindows",permalink:"/docs/ImSwitch/ImSwitchInstallWindows"},next:{title:"ImSwitchUpdate",permalink:"/docs/ImSwitch/ImSwitchUpdate"}},o={},c=[{value:"General concept",id:"general-concept",level:2},{value:"How to install?",id:"how-to-install",level:2},{value:"Trouble shoot",id:"trouble-shoot",level:2}],h={toc:c};function p(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,a.Z)({},h,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We created a customized conda installer for the ImSwitchUC2 package that is based on the open-source ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/conda/constructor/"},"conda constructor")," project. All files to construct the package installer can be found in this repository ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/beniroquai/ImSwitchInstaller"},"https://github.com/beniroquai/ImSwitchInstaller")),(0,l.kt)("h2",{id:"general-concept"},"General concept"),(0,l.kt)("p",null,"We were seeking for a way to ship the latest version of ImSwitchUC2 as the simplest possible solution without using any command line hacks. Besides the PyInstaller Implementation that's still somewhere existent, we were looking for a nicer way in terms of shipping updates. The PyInstaller packages all the necessary libraries in one large ZIP file, but lacks the abbility to simply update it. A new version requires yet another >1GB file to be downloaded.\nOur solution works as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A local conda environemnt is created called ",(0,l.kt)("inlineCode",{parentName:"li"},"ImSwitchopenUC2")),(0,l.kt)("li",{parentName:"ul"},"The installer will start ",(0,l.kt)("inlineCode",{parentName:"li"},"post_install")," scripts that will:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"try to download and install the necessary usb drivers"),(0,l.kt)("li",{parentName:"ol"},"download the latest imswitch code and ",(0,l.kt)("inlineCode",{parentName:"li"},"pip install")," it"),(0,l.kt)("li",{parentName:"ol"},"Create a double-clickable icon on the desktop to start ImSwitch")),(0,l.kt)("h2",{id:"how-to-install"},"How to install?"),(0,l.kt)("p",null,"So far, we only have a windows installer, but for mac and linux it should work equally well. Ping us, if you need this :)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the latest exectuable here: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/beniroquai/ImSwitchInstaller"},"https://github.com/beniroquai/ImSwitchInstaller"))),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(99872).Z,width:"1920",height:"1004"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Double click on the installer and go through the process")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(15999).Z,width:"499",height:"388"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Agree to the license terms (yet a placeholder, text has to be updated..)")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(35106).Z,width:"499",height:"388"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install for me, which does not yet require admin rights\n",(0,l.kt)("img",{src:n(51359).Z,width:"499",height:"388"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Choose a path to install the conda environment to (Hint: path should not exceed 40 digits)"))),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(23253).Z,width:"499",height:"388"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Proceed")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(14349).Z,width:"499",height:"388"})),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Wait until the packages are installed")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(55981).Z,width:"499",height:"388"})),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A command prompt will appear and ask you for granting admin rights; Here a python script tries to download and install the silabs USB UART drivers for the ESP32\n",(0,l.kt)("img",{src:n(23583).Z,width:"1408",height:"804"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The installation will tell you if the installation process scussful"))),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1830).Z,width:"979",height:"512"})),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"In the next steps, all necessary packages in the environemnt for ImSwitch will be downloaded and installed")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(82830).Z,width:"979",height:"512"})),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},"The installer informs you once it's done")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(45845).Z,width:"979",height:"512"})),(0,l.kt)("ol",{start:12},(0,l.kt)("li",{parentName:"ol"},"Once everything has been installed, the installer tells you it'S done")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(42781).Z,width:"499",height:"388"})),(0,l.kt)("ol",{start:13},(0,l.kt)("li",{parentName:"ol"},"Exit the installer by hitting finish")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(33277).Z,width:"499",height:"388"})),(0,l.kt)("ol",{start:14},(0,l.kt)("li",{parentName:"ol"},"On the desktop a new icon has been created to start the ImSwitch software. Double click and wait until the windows shows up\n",(0,l.kt)("img",{src:n(14286).Z,width:"670",height:"565"}))),(0,l.kt)("h2",{id:"trouble-shoot"},"Trouble shoot"),(0,l.kt)("p",null,'The conda installer installs your environment in the location that you have selected previously. To find out, you can open a command line window by hiting the keys WIN+r and type "cmd" and enter. Then enter'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"conda env list\n")),(0,l.kt)("p",null,"The name ",(0,l.kt)("inlineCode",{parentName:"p"},"imswitchopenuc2")," should appear. You can activate this python environemnt by typing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"conda activate imswitchopenuc2\n")),(0,l.kt)("p",null,"If this works successfully, you can start imswitch by typing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"imswitch\n")),(0,l.kt)("h1",{id:"disclaimer"},"Disclaimer"),(0,l.kt)("p",null,"This is still very early stage and may have errors. ",(0,l.kt)("strong",{parentName:"p"},"Exepect Errors"),"  Feel free to file any issues in our repository  or write us a mail. :)"))}p.isMDXComponent=!0},99872:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_0-a969289e9ae32769c29f6393c745bf44.PNG"},15999:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_1-aaf9e5c617987b6f2a6d5b8ddd4a5426.PNG"},45845:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_10-a9082afcfd370b436f9c5ed63cf67a59.PNG"},42781:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_11-f05a7557d4ccc4f7bf050d94d15e1032.PNG"},33277:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_12-eef01896ec35ee6fe515e6d8509ba730.PNG"},14286:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_13-dd6536eb3e37c6cd45848bd147a36603.PNG"},35106:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_2-a7306d7cf09a422f5d352e5d8d9f26bc.PNG"},51359:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_3-77ee90109c387f3f6ffb8118d2a3fef8.PNG"},23253:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_4-23835641eb74caad6349ac886f2c3a74.PNG"},14349:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_5-dcd8c70b8c98a3f20c3da9efd369e989.PNG"},55981:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_6-fcf45389bb96c5132eb18ef0955f0595.PNG"},23583:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_7-dc4c4ca9c3aea24f58040992672c1253.PNG"},1830:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_8-efc75d57a4752d4e27832bb0cc0babdb.PNG"},82830:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/installer_9-94df8b8d066011016cfcc109f2806cda.PNG"}}]);