"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[8244],{3905:(e,r,n)=>{n.d(r,{Zo:()=>R,kt:()=>m});var o=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var E=o.createContext({}),a=function(e){var r=o.useContext(E),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},R=function(e){var r=a(e.components);return o.createElement(E.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},P=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,E=e.parentName,R=s(e,["components","mdxType","originalType","parentName"]),P=a(n),m=t,S=P["".concat(E,".").concat(m)]||P[m]||c[m]||i;return n?o.createElement(S,l(l({ref:r},R),{},{components:n})):o.createElement(S,l({ref:r},R))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=P;var s={};for(var E in r)hasOwnProperty.call(r,E)&&(s[E]=r[E]);s.originalType=e,s.mdxType="string"==typeof e?e:t,l[1]=s;for(var a=2;a<i;a++)l[a]=n[a];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}P.displayName="MDXCreateElement"},50290:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>E,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var o=n(87462),t=(n(67294),n(3905));const i={},l=void 0,s={unversionedId:"Electronics/PS4-Controller",id:"Electronics/PS4-Controller",title:"PS4-Controller",description:"If you are using the webserial online flashing tool provided by UC2 (https://youseetoo.github.io/) to flash the firmware onto your ESP8266 or ESP32 development board, the process of connecting the PS4 controller to the UC2-ESP remains similar to the steps mentioned earlier. However, please note that the flashing tool is a separate tool for uploading firmware, and the Bluetooth communication with the PS4 controller needs to be implemented in your firmware code.",source:"@site/docs/03_Electronics/010-PS4-Controller.md",sourceDirName:"03_Electronics",slug:"/Electronics/PS4-Controller",permalink:"/docs/Electronics/PS4-Controller",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Replace Hardware",permalink:"/docs/Electronics/uc2e9"},next:{title:"Python commands",permalink:"/docs/Electronics/uc2e5.2"}},E={},a=[{value:"Step 1: Gather Required Materials",id:"step-1-gather-required-materials",level:2},{value:"Step 2: Upload the Firmware",id:"step-2-upload-the-firmware",level:2},{value:"STep 3: Bring ESP into scanning mode and  Put the PS4 Controller in Pairing Mode",id:"step-3-bring-esp-into-scanning-mode-and--put-the-ps4-controller-in-pairing-mode",level:2},{value:"Step 4: Monitor Serial Output (Optional)",id:"step-4-monitor-serial-output-optional",level:2},{value:"Step 5: Test the PS4 Controller",id:"step-5-test-the-ps4-controller",level:2},{value:"Step 6: Interact with Your Project",id:"step-6-interact-with-your-project",level:2},{value:"Conclusion",id:"conclusion",level:2}],R={toc:a};function c(e){let{components:r,...i}=e;return(0,t.kt)("wrapper",(0,o.Z)({},R,i,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"If you are using the webserial online flashing tool provided by UC2 (",(0,t.kt)("a",{parentName:"p",href:"https://youseetoo.github.io/"},"https://youseetoo.github.io/"),") to flash the firmware onto your ESP8266 or ESP32 development board, the process of connecting the PS4 controller to the UC2-ESP remains similar to the steps mentioned earlier. However, please note that the flashing tool is a separate tool for uploading firmware, and the Bluetooth communication with the PS4 controller needs to be implemented in your firmware code."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Attention")," Chrome only!"),(0,t.kt)("p",null,"Here's how the process would look like with the webserial online flashing tool:"),(0,t.kt)("h2",{id:"step-1-gather-required-materials"},"Step 1: Gather Required Materials"),(0,t.kt)("p",null,"As mentioned earlier, you will need the following materials:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"UC2-ESP development board (ESP8266 or ESP32)."),(0,t.kt)("li",{parentName:"ol"},"PS4 controller."),(0,t.kt)("li",{parentName:"ol"},"Micro USB cable (for charging the PS4 controller)."),(0,t.kt)("li",{parentName:"ol"},"Computer with a web browser and the webserial online flashing tool (",(0,t.kt)("a",{parentName:"li",href:"https://youseetoo.github.io/"},"https://youseetoo.github.io/"),").")),(0,t.kt)("h2",{id:"step-2-upload-the-firmware"},"Step 2: Upload the Firmware"),(0,t.kt)("p",null,"Use the webserial online flashing tool provided by UC2 (",(0,t.kt)("a",{parentName:"p",href:"https://youseetoo.github.io/"},"https://youseetoo.github.io/"),") to upload your custom firmware code to the UC2-ESP development board. The details of this process might vary depending on the specific tool's interface, but generally, you will need to:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Connect the UC2-ESP to your computer using a USB cable."),(0,t.kt)("li",{parentName:"ol"},"Open the webserial online flashing tool in your web browser."),(0,t.kt)("li",{parentName:"ol"},"Select the correct board (most likely UART-something) and COM port (which should be automatically detected by the tool)."),(0,t.kt)("li",{parentName:"ol"},"Upload your custom firmware code that includes the Bluetooth communication with the PS4 controller.")),(0,t.kt)("h2",{id:"step-3-bring-esp-into-scanning-mode-and--put-the-ps4-controller-in-pairing-mode"},"STep 3: Bring ESP into scanning mode and  Put the PS4 Controller in Pairing Mode"),(0,t.kt)("p",null,"Go to ",(0,t.kt)("a",{parentName:"p",href:"https://youseetoo.github.io/indexWebSerialTest.html"},"https://youseetoo.github.io/indexWebSerialTest.html")," and connect to the ESP again (make sure the other tab closed the serial connection - close it or reload it); Hit the BT paring button"),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(38701).Z,width:"828",height:"136"})),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Alternative:")," Go to any serial monitor and paste ",(0,t.kt)("inlineCode",{parentName:"p"},'{"task":"/bt_scan"}')),(0,t.kt)("p",null,'Follow the same steps to put the PS4 controller into pairing mode by pressing and holding the "PS" button and the "Share" button on the controller simultaneously until the light on the controller starts flashing rapidly.'),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(89729).Z,width:"1600",height:"1068"})),(0,t.kt)("h2",{id:"step-4-monitor-serial-output-optional"},"Step 4: Monitor Serial Output (Optional)"),(0,t.kt)("p",null,"As in the previous explanation, you can open the Serial Monitor in the Arduino IDE or other compatible software to monitor the UC2-ESP's output for debugging purposes."),(0,t.kt)("p",null,"This will be the resulting output if everything goes right"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[397987][I][SerialProcess.cpp:50] loop(): process single task\nI (398691) HIDGamePad: SCAN...\nBLE: 0a:1c:6e:49:95:41, RSSI: -46, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'RANDOM'\nBLE: b8:bc:5b:90:26:3d, RSSI: -82, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'PUBLIC'\nBLE: 72:63:5d:ef:d7:eb, RSSI: -46, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'RANDOM'\nBLE: f4:f9:51:e2:66:bc, RSSI: -70, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'PUBLIC'\nBLE: 42:0b:37:00:45:b4, RSSI: -68, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'RANDOM'\nBLE: 40:33:6a:63:f2:d4, RSSI: -45, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'RANDOM'\nBLE: b8:bc:5b:90:26:3d, RSSI: -86, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'PUBLIC', NAME: '[TV] Samsung Q70 Series (55)'\nBLE: 24:fc:e5:27:da:f8, RSSI: -83, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'PUBLIC'\nBLE: 4c:e8:a0:e3:65:41, RSSI: -60, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'RANDOM'\nBLE: 24:fc:e5:27:da:f8, RSSI: -86, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'PUBLIC', NAME: '[AV] Samsung Soundbar Q70R'\nBLE: d2:2f:54:06:51:0b, RSSI: -60, UUID: 0x0000, APPEARANCE: 0x0000, ADDR_TYPE: 'RANDOM'\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -44, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -45, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : b8:bc:5b:90:26:3d, COD: major: AV, minor: 15, service: 0x060, RSSI: -87, NAME: [TV] Samsung Q70 Series (55)\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -44, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -44, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -45, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 7c:2f:80:34:51:c6, COD: major: PHONE, minor: 2, service: 0x080, RSSI: -53, NAME: SL4 professional\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -44, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -44, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -44, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -45, NAME: Wireless Controller\nBT : b8:bc:5b:90:26:3d, COD: major: AV, minor: 15, service: 0x060, RSSI: -80, NAME: [TV] Samsung Q70 Series (55)\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -45\nBT : b8:bc:5b:90:26:3d, COD: major: AV, minor: 15, service: 0x060, RSSI: -80\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -44, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : b8:bc:5b:90:26:3d, COD: major: AV, minor: 15, service: 0x060, RSSI: -82\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -44, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -46, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -42, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 84:30:95:7f:83:c6, COD: major: PERIPHERAL, minor: 2, service: 0x001, RSSI: -43, NAME: Wireless Controller\nBT : 7c:2f:80:34:51:c6, BDNAME: SL4 professional\nBT : b8:bc:5b:90:26:3d, BDNAME: [TV] Samsung Q70 Series (55)\nI (407539) HIDGamePad: SCAN: 1 results\n  BT : 84:30:95:7f:83:c6, RSSI: -43, USAGE: GENERIC, COD: PERIPHERAL[GAMEPAD] srv 0x001, UUID16: 0x0000, NAME: Wireless Controller\nI (407553) HIDGamePad: connect...\nI (407557) HIDGamePad: connected...\nesp_hidh_dev_open returned 1073459020\nI (407565) HIDGamePad: vtaskdelete hid_demo_task\nW (408159) ESP_HID_GAP: BT GAP EVENT AUTH_CMPL\nI (408224) HIDGamePad: 84:30:95:7f:83:c6 OPEN:\nBDA:84:30:95:7f:83:c6, Status: OK, Connected: YES, Handle: 0, Usage: GAMEPAD\nName: , Manufacturer: , Serial Number:\nPID: 0x09cc, VID: 0x054c, VERSION: 0x0100\nReport Map Length: 442\n    VENDOR FEATURE REPORT, ID: 212, Length:  63\n    VENDOR FEATURE REPORT, ID: 208, Length:  63\n    VENDOR FEATURE REPORT, ID: 181, Length:  63\n    VENDOR FEATURE REPORT, ID: 180, Length:  63\n    VENDOR FEATURE REPORT, ID: 179, Length:  63\n    VENDOR FEATURE REPORT, ID: 173, Length:  63\n    VENDOR FEATURE REPORT, ID: 172, Length:  63\n    VENDOR FEATURE REPORT, ID: 171, Length:  63\n    VENDOR FEATURE REPORT, ID: 170, Length:  63\n    VENDOR FEATURE REPORT, ID: 169, Length:  63\n    VENDOR FEATURE REPORT, ID: 168, Length:  63\n    VENDOR FEATURE REPORT, ID: 167, Length:  63\n    VENDOR FEATURE REPORT, ID: 164, Length:  63\n    VENDOR FEATURE REPORT, ID: 160, Length:  63\n    VENDOR FEATURE REPORT, ID: 148, Length:  63\n    VENDOR FEATURE REPORT, ID: 147, Length:  63\n    VENDOR FEATURE REPORT, ID: 146, Length:  63\n    VENDOR FEATURE REPORT, ID: 145, Length:  63\n    VENDOR FEATURE REPORT, ID: 144, Length:  63\n    VENDOR FEATURE REPORT, ID: 132, Length:  63\n    VENDOR FEATURE REPORT, ID: 131, Length:  63\n    VENDOR FEATURE REPORT, ID: 130, Length:  63\n    VENDOR  OUTPUT REPORT, ID:  25, Length: 546\n    VENDOR   INPUT REPORT, ID:  25, Length: 546\n    VENDOR  OUTPUT REPORT, ID:  24, Length: 525\n    VENDOR   INPUT REPORT, ID:  24, Length: 525\n    VENDOR  OUTPUT REPORT, ID:  23, Length: 461\n    VENDOR   INPUT REPORT, ID:  23, Length: 461\n    VENDOR  OUTPUT REPORT, ID:  22, Length: 397\n    VENDOR   INPUT REPORT, ID:  22, Length: 397\n    VENDOR  OUTPUT REPORT, ID:  21, Length: 333\n    VENDOR   INPUT REPORT, ID:  21, Length: 333\n    VENDOR  OUTPUT REPORT, ID:  20, Length: 269\n    VENDOR   INPUT REPORT, ID:  20, Length: 269\n    VENDOR  OUTPUT REPORT, ID:  19, Length: 205\n    VENDOR   INPUT REPORT, ID:  19, Length: 205\n    VENDOR  OUTPUT REPORT, ID:  18, Length: 141\n    VENDOR   INPUT REPORT, ID:  18, Length: 141\n    VENDOR  OUTPUT REPORT, ID:  17, Length:  77\n    VENDOR   INPUT REPORT, ID:  17, Length:  77\n    VENDOR FEATURE REPORT, ID: 242, Length:  15\n    VENDOR FEATURE REPORT, ID: 241, Length:  63\n    VENDOR FEATURE REPORT, ID: 240, Length:  63\n    VENDOR FEATURE REPORT, ID:   4, Length:  46\n    VENDOR FEATURE REPORT, ID:   3, Length:  38\n    VENDOR FEATURE REPORT, ID:   9, Length:  19\n    VENDOR FEATURE REPORT, ID:   8, Length:  47\n    VENDOR FEATURE REPORT, ID:   7, Length:  48\n    VENDOR FEATURE REPORT, ID:   6, Length:  52\n    VENDOR FEATURE REPORT, ID:   5, Length:  40\n    VENDOR FEATURE REPORT, ID: 163, Length:  48\n    VENDOR FEATURE REPORT, ID:   2, Length:  36\n   GAMEPAD   INPUT REPORT, ID:   1, Length:   9\nTurning on LAser 10000\n")),(0,t.kt)("h2",{id:"step-5-test-the-ps4-controller"},"Step 5: Test the PS4 Controller"),(0,t.kt)("p",null,"After successfully flashing the firmware, disconnect the UC2-ESP from the computer and power it using an external power source (e.g., a USB power bank). The UC2-ESP should now be ready to receive input from the PS4 controller as per the implemented functionality in your custom firmware."),(0,t.kt)("h2",{id:"step-6-interact-with-your-project"},"Step 6: Interact with Your Project"),(0,t.kt)("p",null,"The PS4 controller should now be able to communicate with your UC2-ESP development board as specified in the firmware code. Depending on the implementation, you can use the PS4 controller's buttons, joysticks, and other features to control your project wirelessly."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"right joystick moves stage x/y"),(0,t.kt)("li",{parentName:"ul"},"left joystick moves z-focus and a-axis"),(0,t.kt)("li",{parentName:"ul"},"x turns led on"),(0,t.kt)("li",{parentName:"ul"},"o turns led off")),(0,t.kt)("h2",{id:"conclusion"},"Conclusion"),(0,t.kt)("p",null,"By utilizing the webserial online flashing tool provided by UC2, you can conveniently upload your custom firmware code to the UC2-ESP development board. This allows you to implement Bluetooth communication with the PS4 controller and integrate it seamlessly into your projects. Enjoy experimenting and creating with your PS4 controller and UC2-ESP!"))}c.isMDXComponent=!0},38701:(e,r,n)=>{n.d(r,{Z:()=>o});const o=n.p+"assets/images/BTpairing-98542df284e175afcce69866f2215f5d.png"},89729:(e,r,n)=>{n.d(r,{Z:()=>o});const o=n.p+"assets/images/ds4-bluetooth-pair-01-en-12oct20-210647d8558f2fcd312731ea35914314.png"}}]);