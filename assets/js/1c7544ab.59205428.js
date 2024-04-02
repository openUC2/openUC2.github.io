"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[1393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={id:"XYZ_stage_mico",title:"XYZ Micrometer Stage for Precise Motion Control"},a=void 0,s={unversionedId:"Toolboxes/DiscoveryElectronics/XYZ_stage_mico",id:"Toolboxes/DiscoveryElectronics/XYZ_stage_mico",title:"XYZ Micrometer Stage for Precise Motion Control",description:'The XYZ Micrometer Stage, branded as "openUC2 XYZ Stage," is a highly accurate motion control device designed for precise manipulation in three dimensions (XYZ). The stage is primarily intended for use in microscopy applications and interferometers, where precise sample positioning is essential. It offers microstepping control with a step size of approximately 320 nanometers in all directions, enabling micron-level adjustments.',source:"@site/docs/01_Toolboxes/02_DiscoveryElectronics/03_xyz_stage.md",sourceDirName:"01_Toolboxes/02_DiscoveryElectronics",slug:"/Toolboxes/DiscoveryElectronics/XYZ_stage_mico",permalink:"/docs/Toolboxes/DiscoveryElectronics/XYZ_stage_mico",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"XYZ_stage_mico",title:"XYZ Micrometer Stage for Precise Motion Control"},sidebar:"tutorialSidebar",previous:{title:"openUC2 Camera Setup",permalink:"/docs/Toolboxes/DiscoveryElectronics/Camera Setup"},next:{title:"ESP32 XIAO Sense-based microscope",permalink:"/docs/Toolboxes/DiscoveryElectronics/seeedmicroscope"}},p={},l=[],c={toc:l};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'The XYZ Micrometer Stage, branded as "openUC2 XYZ Stage," is a highly accurate motion control device designed for precise manipulation in three dimensions (XYZ). The stage is primarily intended for use in microscopy applications and interferometers, where precise sample positioning is essential. It offers microstepping control with a step size of approximately 320 nanometers in all directions, enabling micron-level adjustments.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Compatibility and Control:"),"\nThe XYZ stage is compatible with the UC2e system and can be conveniently controlled through multiple methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Webpage Interface:")," Users can control the stage using the web-based interface available at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://youseetoo.github.io/indexWebSerialTest.html"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"UC2-REST Python Package:")," For Python-savvy users, the UC2-REST Python package, accessible from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/openUC2/UC2-REST/"),", provides a programmatic way to manipulate the XYZ stage.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ImSwitch Software:")," Another option for controlling the XYZ stage is through ImSwitch, a software tool available at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/openUC2/ImSwitch/"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fully Assembled XYZ Stage",src:r(91550).Z,width:"2736",height:"3648"}),"\n",(0,o.kt)("em",{parentName:"p"},"Fully assembled XYZ stage with high precision stepper motors, designed for seamless automation in microscopy setups.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key Features:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Mounting Flexibility:")," The XYZ stage can be easily mounted on top of a cube or suspended at the side, offering flexibility in integrating it into various experimental setups.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Interferometer and Microscopy Applications:")," This stage finds application in interferometers and light-sheet/fluorescence microscopes, where it plays a crucial role in precisely manipulating the sample in all directions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Durable Construction:")," Constructed entirely from metal, the XYZ stage ensures robustness and stability during delicate experiments.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"High Precision Stepper Motors:")," The stage is equipped with non-captive stepper motors, delivering exceptional precision during positioning operations."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"XYZ Stage in an Interferometer Setup",src:r(2781).Z,width:"3648",height:"2736"}),"\n",(0,o.kt)("em",{parentName:"p"},"Image showing two XYZ stages (one motorized and one manual stage) employed in an OCT / Michelson type interferometer.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Setup and Integration:"),"\nTo assist users in setting up and integrating the XYZ stage into their experimental configurations, a comprehensive video guide is available. This instructional video can be viewed at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.youtube.com/embed/E_hhclFqx5g"),"."),(0,o.kt)("p",null,"For further information or inquiries regarding the openUC2 XYZ Micrometer Stage, interested parties can refer to the official openOCT project page at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/openUC2/openUC2-Hackathon-openOCTRemote"),". The project page contains additional details, resources, and support for utilizing the XYZ stage effectively in diverse research settings."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/E_hhclFqx5g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}m.isMDXComponent=!0},91550:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/IMG_20230514_142419-8bb79f2e44153c63c78ef5c31067733b.jpg"},2781:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/xyzstagemicro-040f07b26fb7a01a94d8b5aa5a9758ac.jpeg"}}]);