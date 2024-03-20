"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[7815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=h(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var h=2;h<i;h++)o[h]=r[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=r(87462),a=(r(67294),r(3905));const i={id:"MichelsonInterferometer",title:"openUC2 Michelson Interferometer"},o=void 0,s={unversionedId:"Toolboxes/DiscoveryInterferometer/MichelsonInterferometer",id:"Toolboxes/DiscoveryInterferometer/MichelsonInterferometer",title:"openUC2 Michelson Interferometer",description:"Workshop Manual: Building a Michelson Interferometer using UC2",source:"@site/docs/01_Toolboxes/03_DiscoveryInterferometer/03_michelsoninterferometer.md",sourceDirName:"01_Toolboxes/03_DiscoveryInterferometer",slug:"/Toolboxes/DiscoveryInterferometer/MichelsonInterferometer",permalink:"/docs/Toolboxes/DiscoveryInterferometer/MichelsonInterferometer",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"MichelsonInterferometer",title:"openUC2 Michelson Interferometer"},sidebar:"tutorialSidebar",previous:{title:"openUC2 In-line holography",permalink:"/docs/Toolboxes/DiscoveryInterferometer/InlineHolography"},next:{title:"Building The CourseBOX",permalink:"/docs/Toolboxes/DiscoveryDiffraction/"}},l={},h=[{value:"Workshop Manual: Building a Michelson Interferometer using UC2",id:"workshop-manual-building-a-michelson-interferometer-using-uc2",level:2},{value:"Materials Needed",id:"materials-needed",level:3},{value:"Theory of Operation",id:"theory-of-operation",level:3},{value:"Theoretical Background: Interference",id:"theoretical-background-interference",level:2},{value:"Michelson Interferometer and Measurement of the Speed of Light",id:"michelson-interferometer-and-measurement-of-the-speed-of-light",level:2},{value:"Assembly Steps",id:"assembly-steps",level:3},{value:"Experimental Data",id:"experimental-data",level:2},{value:"Conclusion",id:"conclusion",level:3}],c={toc:h};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"workshop-manual-building-a-michelson-interferometer-using-uc2"},"Workshop Manual: Building a Michelson Interferometer using UC2"),(0,a.kt)("p",null,"In this workshop, we will construct a Michelson Interferometer using the UC2 modular microscope toolbox. The Michelson Interferometer is a device that measures the interference properties of light. We will treat light as a wave, with a very high frequency, and use it to perform interesting experiments."),(0,a.kt)("h3",{id:"materials-needed"},"Materials Needed"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Green Laser Pointer with a relatively high temporal coherence."),(0,a.kt)("li",{parentName:"ol"},"Lenses for beam expansion."),(0,a.kt)("li",{parentName:"ol"},"Beam splitter plate or cube with a partially reflective mirror coating."),(0,a.kt)("li",{parentName:"ol"},"Three mirrors."),(0,a.kt)("li",{parentName:"ol"},"Screen or camera sensor (e.g., ESP32 camera module) with USB cable."),(0,a.kt)("li",{parentName:"ol"},"UC2 Modular Microscope Toolbox (cubes, puzzle pieces, and holders).")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6269).Z,width:"1920",height:"1329"})),(0,a.kt)("h3",{id:"theory-of-operation"},"Theory of Operation"),(0,a.kt)("p",null,"A Michelson Interferometer splits a laser beam into two equal parts using a beam splitter. The two beams are then reflected by mirrors and recombined to interfere with each other. When the paths of the two beams are equal, they constructively interfere, resulting in a bright output. However, if one path is shifted by 1/4 of the wavelength, the beams destructively interfere, resulting in a dark output.\nCertainly! Let's delve into more theoretical background about interference and how the Michelson Interferometer was historically used to measure the speed of light."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(69515).Z,width:"1920",height:"1329"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(11900).Z,width:"1920",height:"1329"})),(0,a.kt)("h2",{id:"theoretical-background-interference"},"Theoretical Background: Interference"),(0,a.kt)("p",null,"Interference is a phenomenon that occurs when two or more waves overlap in space and combine their amplitudes. When the waves are in-phase (their crests and troughs align), they constructively interfere, resulting in a larger amplitude. On the other hand, if they are out of phase (their crests and troughs are misaligned), they destructively interfere, resulting in a smaller or zero amplitude. Interference is a fundamental concept in wave physics and plays a crucial role in understanding the behavior of light."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(94589).Z,width:"1920",height:"1329"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(24774).Z,width:"1920",height:"1329"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(33737).Z,width:"1920",height:"1329"})),(0,a.kt)("h2",{id:"michelson-interferometer-and-measurement-of-the-speed-of-light"},"Michelson Interferometer and Measurement of the Speed of Light"),(0,a.kt)("p",null,"The Michelson Interferometer, invented by Albert A. Michelson in the late 19th century, is a classic optical device that exploits the principles of interference to measure various optical properties, including the speed of light."),(0,a.kt)("p",null,"In the Michelson Interferometer setup, a light beam is split into two equal parts using a beam splitter. One part is directed towards a stationary mirror (the reference mirror) while the other part is directed towards a movable mirror (the sample mirror). The two beams are then reflected back towards the beam splitter, and they recombine. Depending on the path difference between the two beams, they may interfere constructively or destructively."),(0,a.kt)("p",null,"By moving the sample mirror, the path difference between the two beams changes. When the path difference corresponds to an integral number of wavelengths (constructive interference), the interference pattern exhibits bright fringes. Conversely, when the path difference corresponds to a half-integral number of wavelengths (destructive interference), the pattern exhibits dark fringes."),(0,a.kt)("p",null,"The key to measuring the speed of light with the Michelson Interferometer lies in precisely measuring the movement of the sample mirror. As the mirror is displaced, the fringe pattern shifts, and by measuring this shift, we can determine the change in path difference and, consequently, the speed of light."),(0,a.kt)("p",null,"Michelson used this interferometer in an elegant experiment to measure the speed of light by comparing the time it took for light to travel in two perpendicular directions. This famous experiment was performed in 1879 and yielded a remarkably accurate value for the speed of light."),(0,a.kt)("p",null,"The Michelson Interferometer remains an essential tool in modern optics and has found applications in diverse fields, including astronomy, spectroscopy, and interferometric microscopy."),(0,a.kt)("p",null,"Interference is a fundamental concept in wave physics, and the Michelson Interferometer is a classic optical device that exploits this phenomenon to make precise measurements. By understanding the principles of interference and the working of the Michelson Interferometer, we gain valuable insights into the nature of light and its behavior in different optical setups. It stands as a testament to the ingenuity of scientific instruments and continues to play a significant role in advancing our understanding of the physical world."),(0,a.kt)("h3",{id:"assembly-steps"},"Assembly Steps"),(0,a.kt)("p",null,"We want to replicate the following setup:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(36044).Z,width:"2177",height:"1622"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build the telescope using two lenses with different focal lengths to expand the laser beam. (Depending on the laser beam shape this step can be ignored)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the beam splitter plate/cube to split the enlarged beam into two equal beams.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Place mirrors at the end of each beam path and adjust their positions.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Position the camera or screen at the exit of the interferometer to observe the interference patterns.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cover one mirror path and adjust the other mirror so that the beam on the camera is in the center of the sensor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Repeat step 5 for the other arm to align the reference and sample arms.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove the covers from both arms, and you should see interference patterns on the camera.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Carefully align one of the mirrors to remove the interference patterns by turning the screws slightly.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Michelson Interferometer is now aligned and ready for use."))),(0,a.kt)("p",null,"Aaron Proposal with bunch of details:\n",(0,a.kt)("em",{parentName:"p"},"Note: After realizing the alignment of each element remember to turn off the Laser for safety!")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Insert the Laser diode in two nested cubes.\n",(0,a.kt)("em",{parentName:"p"},"Image"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Insert a diaphragm in a cube and connect it to the other two. Then, close the diaphragm until you get a pinhole and with the screws, align the Laser beam.\n",(0,a.kt)("em",{parentName:"p"},"Image"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove the cube with the diaphragm, leave it aside for later use and in the same spot add the tilted kinematic mirror.\n",(0,a.kt)("em",{parentName:"p"},"Image"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Place the rest of cubes to build one arm of the interferometer including the beamsplitter and instead of placing the Linear movable Mirror, place the diaphragm cube.\n",(0,a.kt)("em",{parentName:"p"},"Image"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Align the Laser beam so that it hits the pinhole in the diaphragm center. After aligning replace the diaphragm cube with the Linear movable mirror.\n",(0,a.kt)("em",{parentName:"p"},"Image"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Place the cubes to build the detection and reference arm of the interferometer with the kinematic mirror. Place the diaphragm cube in the detection arm end and use the screws of both kinematic mirrors if needed to make the two beams overlap as much as possible.\n",(0,a.kt)("em",{parentName:"p"},"Image"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use a screen after the pinhole produced by the diaphragm to see two beams and adjust both kinematic mirrors so that the beams overlap.\n",(0,a.kt)("em",{parentName:"p"},"Image"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"At this point you should see the interference ring-like pattern somewhere on the diaphragm. Align the center of the pattern to the center of the pinhole using the kinematic mirrors.\n",(0,a.kt)("em",{parentName:"p"},"Image"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Insert the camera in a cube and replace the diaphragm cube with it. Check alignment again.\n",(0,a.kt)("em",{parentName:"p"},"Image")))),(0,a.kt)("h2",{id:"experimental-data"},"Experimental Data"),(0,a.kt)("p",null,"This is the fully assembled UC2 interferometer with a green laser diode, a camera representing a scree and to digitize the inteference, a beamsplitter, a kinematic mirror and a mirror that can be translated along Z."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(96107).Z,width:"3648",height:"2736"})),(0,a.kt)("p",null,"If you bring the two beams on top of each other, you will be able to observe the interference pattern, which in case of one beam exactly overlaying the other will be a ring pattern. These rings are also called Newton rings and come from the fact that we interfere two divergent beams, leading to a super position of two spherical caps/waves."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(39120).Z,width:"2736",height:"3648"})),(0,a.kt)("p",null,"Using the ESP32 camera, we can quantify the motion of the beams and e.g. measure distances or angles."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(66845).Z,width:"2736",height:"3648"})),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Congratulations! You have successfully built a Michelson Interferometer using the UC2 modular microscope toolbox. This device allows you to explore the interference properties of light and perform fascinating experiments. As you move one of the arms, you will observe constructive and destructive interference patterns on the camera, demonstrating the wave-like nature of light. Have fun experimenting with different setups and learning more about the wave-particle duality of light!"))}p.isMDXComponent=!0},39120:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/IMG_20230812_144127-2da8b1dc7fa9c3ee0508aae02fccfb08.jpg"},96107:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/IMG_20230812_144849-50810f025a112a507b132a5e54b28994.jpg"},66845:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/IMG_20230812_144857-5c94d4985261c9e79730d82298c46435.jpg"},6269:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Michelson_1-efbc965148647a8087127c097feb9e80.png"},69515:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Michelson_2-a0ee9d49091bc1f5dadafebe8d94573f.png"},11900:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Michelson_3-fe6724c32fa9798d3dbf452f0ea73678.png"},94589:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Michelson_4-63275f63c4b2eecc9fb215445528ff1c.png"},24774:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Michelson_5-fec170b5698a852227f0c446a6a83ab1.png"},33737:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Michelson_6-6ba3104f89fd51922eee68e119befdf3.png"},36044:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/MichlesonInCubes-71b69655b81ac3bc2bc9d908e764f026.png"}}]);