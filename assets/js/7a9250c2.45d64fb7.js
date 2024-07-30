"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[7886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"uc2e1",title:"Introduction"},i="UC2e - A guide to use the UC2 Electronics",l={unversionedId:"Electronics/uc2e1",id:"Electronics/uc2e1",title:"Introduction",description:"Overview",source:"@site/docs/03_Electronics/01_Overview.md",sourceDirName:"03_Electronics",slug:"/Electronics/uc2e1",permalink:"/docs/Electronics/uc2e1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"uc2e1",title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/Investigator/FlowStopper/"},next:{title:"UC2 Standalone Boar V2",permalink:"/docs/Electronics/uc2e2v2"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"What will you learn?",id:"what-will-you-learn",level:3},{value:"Introduction into the UC2e Board (&quot;Standalone&quot;)",id:"introduction-into-the-uc2e-board-standalone",level:2}],s={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uc2e---a-guide-to-use-the-uc2-electronics"},"UC2e - A guide to use the UC2 Electronics"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Duration:1"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("b",null,"IMPORTANT")," The system is under constant development and may be subject to changes. If you find any bug or something feels unclear, you can help us improving the system! Feel lucky and file your issue today by opening one here: ",(0,o.kt)("a",{href:"https://github.com/openUC2/UC2-REST/issues/new"},"GitHub: UC2-REST")),(0,o.kt)("h3",{id:"what-will-you-learn"},"What will you learn?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to connect the UC2 electronics?"),(0,o.kt)("li",{parentName:"ul"},"How to wire up the board with external components"),(0,o.kt)("li",{parentName:"ul"},"How to get the playstation controller working?\n\u02d8")),(0,o.kt)("h2",{id:"introduction-into-the-uc2e-board-standalone"},'Introduction into the UC2e Board ("Standalone")'),(0,o.kt)("p",null,"Duration: 5"),(0,o.kt)("p",null,"For a microscsope you have several I/Os that need to be controlled via Software. This majorly concerns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lasers"),(0,o.kt)("li",{parentName:"ul"},"Motors (e.g. for positioning)"),(0,o.kt)("li",{parentName:"ul"},"LEDs for changing the contrast (e.g. LED Array)"),(0,o.kt)("li",{parentName:"ul"},"Sensors (e.g. Endstops)")),(0,o.kt)("p",null,"There exist a number of boards that can do it by default. Here, we created our own driver electronics that is based on the Espressif ESP32 microcontroller unit (MCU) that has:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4x Stepper outputs"),(0,o.kt)("li",{parentName:"ul"},"3x PWM outputs for e.g. Lasers"),(0,o.kt)("li",{parentName:"ul"},"1x Neopixel Slot (for the LED Ring Array)"),(0,o.kt)("li",{parentName:"ul"},"3x PWM amplified for e.g. power LEDs"),(0,o.kt)("li",{parentName:"ul"},"1x I2C connection"),(0,o.kt)("li",{parentName:"ul"},"USB Serial connection"),(0,o.kt)("li",{parentName:"ul"},"2x DAC (8Bit)")),(0,o.kt)("p",null,'It is based on common "GRBL" boards that drive 3D printers, CNC routers or alike.'),(0,o.kt)("p",null,"A fully assembled board with 12V power, the UC2 LED matrix and the linear stepper motor can be found below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(77501).Z,width:"2736",height:"3648"})))}p.isMDXComponent=!0},77501:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UC2_electronics_board0-7ce4a4577db082e6506bd74d9749d544.jpg"}}]);