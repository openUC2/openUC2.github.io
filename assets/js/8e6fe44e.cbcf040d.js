"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[3242],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=h(i),u=a,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return i?n.createElement(g,r(r({ref:t},p),{},{components:i})):n.createElement(g,r({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var h=2;h<o;h++)r[h]=i[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},61970:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=i(87462),a=(i(67294),i(3905));const o={id:"LightSheet Sample",title:"openUC2 Light-Sheet Tips and Tricks"},r=void 0,l={unversionedId:"Investigator/Lightsheet/LightSheet Sample",id:"Investigator/Lightsheet/LightSheet Sample",title:"openUC2 Light-Sheet Tips and Tricks",description:"Introduction to the openUC2 Light-Sheet Microscope",source:"@site/docs/02_Investigator/04_Lightsheet/04_LightSheetSample.md",sourceDirName:"02_Investigator/04_Lightsheet",slug:"/Investigator/Lightsheet/LightSheet Sample",permalink:"/docs/Investigator/Lightsheet/LightSheet Sample",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"LightSheet Sample",title:"openUC2 Light-Sheet Tips and Tricks"},sidebar:"tutorialSidebar",previous:{title:"openUC2 Light-Sheet Microscope (Old Version)",permalink:"/docs/Investigator/Lightsheet/LightSheetOld"},next:{title:"Light-sheet alignment",permalink:"/docs/Investigator/Lightsheet/LightsheetCalibration"}},s={},h=[{value:"Introduction to the openUC2 Light-Sheet Microscope",id:"introduction-to-the-openuc2-light-sheet-microscope",level:2},{value:"ImSwitch integration into 3D imaging including 3D volumetric rendering",id:"imswitch-integration-into-3d-imaging-including-3d-volumetric-rendering",level:3},{value:"The fully assembled Light-sheet Microscope",id:"the-fully-assembled-light-sheet-microscope",level:2},{value:"Protocol to align the light-sheet w.r.t. the focus plane",id:"protocol-to-align-the-light-sheet-wrt-the-focus-plane",level:2},{value:"Alignment Protocol for Light-Sheet Microscope Focus Plane",id:"alignment-protocol-for-light-sheet-microscope-focus-plane",level:2},{value:"Finding the the focus (waiste) of the light-sheet",id:"finding-the-the-focus-waiste-of-the-light-sheet",level:2},{value:"Brightfield imaging",id:"brightfield-imaging",level:2},{value:"Using the Fully Assembled Light-Sheet Microscope for Sample Imaging",id:"using-the-fully-assembled-light-sheet-microscope-for-sample-imaging",level:2},{value:"ImSwitch data acquisition and Reconstruction",id:"imswitch-data-acquisition-and-reconstruction",level:2},{value:"Mount the sample on a metal tip",id:"mount-the-sample-on-a-metal-tip",level:2},{value:"Sample preparation \xe1 la agarose-in-syringe method",id:"sample-preparation-\xe1-la-agarose-in-syringe-method",level:2},{value:"Further tweaks for the system",id:"further-tweaks-for-the-system",level:2},{value:"Remove the xyz stage from the top",id:"remove-the-xyz-stage-from-the-top",level:3},{value:"Swap the sample mounting plate",id:"swap-the-sample-mounting-plate",level:3},{value:"ImSwitch configuration for the ligth-sheet",id:"imswitch-configuration-for-the-ligth-sheet",level:2}],p={toc:h};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction-to-the-openuc2-light-sheet-microscope"},"Introduction to the openUC2 Light-Sheet Microscope"),(0,a.kt)("p",null,"Welcome to the openUC2 Light-Sheet Microscope documentation. This page aims to provide technical insights and practical guidance for utilizing the openUC2 modular optical toolbox to build and operate a light-sheet microscope. The openUC2 light-sheet microscope endeavors to bring accessible volumetric imaging of fluorescent samples to a wider audience. As you navigate through this documentation, please keep in mind the following key points:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Dynamic Nature of the Microscope:"),"\nThe openUC2 light-sheet microscope is in its early stages of development and refinement. As such, expect ongoing changes and updates to various components, techniques, and procedures. Your feedback, suggestions, and contributions are essential to enhancing the microscope's capabilities and documentation.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(69733).Z,width:"3318",height:"2241"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Principles of Operation:"),"\nThe fundamental concept of the openUC2 light-sheet microscope revolves around creating a static light-sheet using a fiber-coupled laser (488nm in 4\xb5m single mode fiber). This light-sheet is formed by collimating the laser and subsequently shaping it using a cylindrical lens. The illumination object projects this light-sheet onto the sample plane for imaging.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sample Handling and Illumination:"),"\nThe microscope's setup includes provisions for hanging the sample from above, enabling XYZ movement with micrometer precision. The static light-sheet intersects the sample, facilitating volumetric imaging. Please note that a rotational axis has not been implemented in the current design.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Objective Lens Alignment:"),"\nThe openUC2 light-sheet microscope incorporates the ability to adjust the objective lens for proper alignment with the light-sheet plane. This adjustment is crucial for achieving optimal imaging quality.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Documentation Scope:"),"\nThis document serves as an initial guide for the openUC2 light-sheet microscope. While comprehensive, it may not cover every detail or aspect. Your understanding and engagement with the microscope's components, principles, and setup will be crucial in filling any gaps in the documentation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Contributions and Support:"),"\nWe invite you to actively contribute to this documentation and the overall openUC2 project. If you encounter challenges, have questions, or discover areas for improvement, please create issues in our GitHub repository: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openUC2/UC2-GIT/issues"},"https://github.com/openUC2/UC2-GIT/issues"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Community Collaboration:"),"\nThe openUC2 project thrives on community collaboration. We encourage users to share their experiences, insights, and modifications with the community. This collective effort ensures that the openUC2 light-sheet microscope continues to evolve and meet the needs of its users."))),(0,a.kt)("h3",{id:"imswitch-integration-into-3d-imaging-including-3d-volumetric-rendering"},"ImSwitch integration into 3D imaging including 3D volumetric rendering"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/EadREZTqJFo?si=IXIoxpxwjvSjv5M_",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,a.kt)("p",null,"Please dive into the documentation and begin your journey into the technical intricacies of the openUC2 light-sheet microscope."),(0,a.kt)("h2",{id:"the-fully-assembled-light-sheet-microscope"},"The fully assembled Light-sheet Microscope"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Component Information:"),"\nThis repository contains various components related to the openUC2 light-sheet microscope. You can explore these components to better understand their functionality and integration within the setup.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Component Replacement and Improvement:"),"\nIf any component requires replacement or upgrading, please feel free to contact us. We're eager to provide you with the latest STL files to enhance the overall setup. Your feedback and insights are vital in refining the microscope's performance."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(69733).Z,width:"3318",height:"2241"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Assembled Light-Sheet Configuration:"),"\nThe accompanying image showcases the fully assembled openUC2 light-sheet microscope, displaying all components in their designated positions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sample Mounting:"),"\nThe sample is securely mounted within a syringe, which is a critical element of the imaging process. Precise sample positioning ensures accurate volumetric imaging.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"System Requirements:"),"\nTo operate the microscope effectively, you'll need a laptop with more than 8GB of RAM and a USB3 port. These specifications are necessary for handling the data-intensive operations and real-time imaging tasks.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ImSwitch Software Integration:"),"\nOur customized version of ImSwitch software is tailored for operating the light-sheet microscope and generating volumetric images. ImSwitch streamlines the imaging process, allowing you to focus on your research."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(90320).Z,width:"3648",height:"2736"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Motorized Axes:"),"\nThe openUC2 light-sheet microscope features motorized axes for enhanced control and precision:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Z"),"-axis adjusts the objective lens focus relative to the light-sheet plane."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"X")," axis moves the sample in the vertical direction with respect to the ground surface."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Y")," axis shifts the sample parallel to the light-sheet plane."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," axis moves the sample along the light-sheet plane, towards or away from the objective lens."),(0,a.kt)("li",{parentName:"ul"},"Each step corresponds to approximately 300nm in physical units, enabling fine-tuned movement and positioning.")))),(0,a.kt)("p",null,"We appreciate your engagement with the openUC2 light-sheet microscope and hope that these technical details enhance your understanding of the setup and its capabilities. Should you have any inquiries or require further assistance, please don't hesitate to reach out."),(0,a.kt)("h2",{id:"protocol-to-align-the-light-sheet-wrt-the-focus-plane"},"Protocol to align the light-sheet w.r.t. the focus plane"),(0,a.kt)("h2",{id:"alignment-protocol-for-light-sheet-microscope-focus-plane"},"Alignment Protocol for Light-Sheet Microscope Focus Plane"),(0,a.kt)("p",null,"Efficient alignment of the light-sheet with the microscope objective lens's focus plane is crucial for optimal imaging results. This protocol outlines the steps to achieve precise alignment using fluorescent markers and manipulation of the kinematic mirror."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(26028).Z,width:"3648",height:"2736"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Alignment Steps:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Fluorescent Marker Setup:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Begin by ensuring that the light-sheet is coplanar with the microscope's objective lens field of view."),(0,a.kt)("li",{parentName:"ul"},"Use a fluorescent pen marker to label the embedding media, effectively visualizing the light-sheet.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(34168).Z,width:"2736",height:"3648"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Activating the Laser:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Turn on the laser source either via ImSwitch software or the web interface ",(0,a.kt)("a",{parentName:"li",href:"https://youseetoo.github.io/indexWebSerialTest.html"},"https://youseetoo.github.io/indexWebSerialTest.html"),".")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Visualizing the Light-Sheet:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"With the laser activated, you should observe the light-sheet within the water chamber. Refer to the provided image for a reference."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Kinematic Mirror Adjustment:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The three screws on the kinematic mirror in the right corner control the orientation of the light-sheet in 3D space."),(0,a.kt)("li",{parentName:"ul"},"Familiarize yourself with the degrees of freedom associated with these screws.")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(44827).Z,width:"3648",height:"2736"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Fundamental Considerations:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The cylindrical lens focuses the primary light-sheet in the backfocal plane of the illumination objective (4x, 0.1 NA)."),(0,a.kt)("li",{parentName:"ul"},"Rotating the objective lens adjusts the orientation of the light-sheet."),(0,a.kt)("li",{parentName:"ul"},"The square orientation of the cylindrical lens ensures proper alignment with the detection objective lens."),(0,a.kt)("li",{parentName:"ul"},"The primary light-sheet exits the cylindrical lens at the center."),(0,a.kt)("li",{parentName:"ul"},"The kinematic mirror manipulates the light-sheet's position in the x and y directions, as well as introducing an offset."),(0,a.kt)("li",{parentName:"ul"},"Correct mirror alignment is crucial, placing it precisely at the diagonal center of the cube."),(0,a.kt)("li",{parentName:"ul"},"This central placement ensures that the primary light-sheet enters the objective lens's backfocal plane (BFP) at the center."),(0,a.kt)("li",{parentName:"ul"},"Such alignment results in the secondary illuminating light-sheet being parallel to the detection lens's focus plane."),(0,a.kt)("li",{parentName:"ul"},"Observe the effects of rotating the screws and adjust accordingly.")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(2937).Z,width:"3648",height:"2736"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Fluorescent Solution Application:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Utilize a syringe for convenient application of the fluorescent solution.")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(81189).Z,width:"3648",height:"2736"}),"\n7. ",(0,a.kt)("strong",{parentName:"p"},"Sample Cube Handling:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The sample cube is magnetically held, facilitating easy removal for cleaning.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Take care as the sample cube's coverslips are relatively thin and can break."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(76394).Z,width:"3648",height:"2736"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(87962).Z,width:"3648",height:"2736"})))),(0,a.kt)("p",null,"Achieving precise alignment between the light-sheet and the objective lens's focus plane is critical for obtaining accurate imaging results. This protocol provides a systematic approach to optimizing your light-sheet microscope setup. For further assistance or questions, feel free to reach out to our community and support channels. Your engagement contributes to the ongoing refinement of the openUC2 light-sheet microscope system."),(0,a.kt)("h2",{id:"finding-the-the-focus-waiste-of-the-light-sheet"},"Finding the the focus (waiste) of the light-sheet"),(0,a.kt)("p",null,"To effectively align the light-sheet in your setup, it's crucial to follow these two key steps:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1: Centering the Sheet within the Field of View (FOV)")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Begin by ensuring that the waist of the light-sheet is positioned at the center of the microscope's field of view (FOV)."),(0,a.kt)("li",{parentName:"ol"},"To achieve this, the cylindrical lens needs to be temporarily removed. Carefully release the lower puzzle pieces to detach the cylindrical lens cube.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(89087).Z,width:"3648",height:"2736"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"With the cylindrical lens removed, a collimated beam should enter the back focal plane (BFP) of the illuminating objective lens."),(0,a.kt)("li",{parentName:"ol"},"Adjust the kinematic mirror to guide the round beam, approximately 10mm in diameter, into the center of the BFP of the illuminating objective lens. This alignment should be parallel to the optical axis.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2: Achieving Focus with the Detection Objective Lens")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Activate the camera, such as using Galaxy Viewer software that comes with the camera drivers, to observe the light-sheet's focus."),(0,a.kt)("li",{parentName:"ol"},"The fluorescently labeled region should now exhibit a focused beam, perceptible to the naked eye."),(0,a.kt)("li",{parentName:"ol"},"Initiate axial movement of the objective lens (Axis Z) using the online control website. You'll notice an increase in intensity at either the positive or negative direction until the light-sheet focus becomes visible within the field of view.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(794).Z,width:"3648",height:"2736"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"To optimize focus, make fine adjustments to the kinematic mirror to direct the light-sheet beam if it's positioned too high or too low."),(0,a.kt)("li",{parentName:"ol"},"It's common for the light-sheet's focus not to align precisely with the center of the FOV. In this case, carefully adjust the position of the illuminating objective lens along the cube axis to relocate the focus positions."),(0,a.kt)("li",{parentName:"ol"},"Once you're content with the alignment, deactivate the laser and reinsert the cylindrical lens."),(0,a.kt)("li",{parentName:"ol"},"Notably, this step doesn't need to be repeated each time the light-sheet is activated. The position of the cylindrical lens is relatively stable and doesn't require frequent recalibration.")),(0,a.kt)("p",null,"Following these steps meticulously will ensure that the light-sheet is accurately aligned both within the FOV's center and in-focus with the detection objective lens. This alignment process is essential for obtaining reliable and high-quality imaging results with the openUC2 light-sheet microscope."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(55329).Z,width:"3648",height:"2736"})),(0,a.kt)("p",null,"Once the cylindrical lens is back in, you can readjust the light-sheet wr.t. to the focus plane of the objective lens since they may be a slight variation after reassembly."),(0,a.kt)("h2",{id:"brightfield-imaging"},"Brightfield imaging"),(0,a.kt)("p",null,"In case you want to image the sample in transmisson mode, turn on the Neopixel LED that is connected to the sample cube and optionally remove the fluorescent filter by pulling it up and store it somewhere safe (dust and scratch free!)."),(0,a.kt)("h2",{id:"using-the-fully-assembled-light-sheet-microscope-for-sample-imaging"},"Using the Fully Assembled Light-Sheet Microscope for Sample Imaging"),(0,a.kt)("p",null,"Now that all components are meticulously aligned, the openUC2 light-sheet microscope is primed for sample imaging. Follow these steps to prepare and capture your fluorescent sample:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(49793).Z,width:"3648",height:"2736"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sample Preparation:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Begin by preparing your fluorescent sample according to the specified protocols."),(0,a.kt)("li",{parentName:"ul"},"Carefully follow the steps outlined in the dedicated sample preparation section within this document."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Assembling the Sample Holder:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Loosen the nut that secures the syringe and insert the syringe into the sample holder."),(0,a.kt)("li",{parentName:"ul"},"Gradually lower the syringe so that the tip of the sample barely touches the light-sheet within the sample plane.")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(1465).Z,width:"3648",height:"2736"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Squeezing out the Agarose:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Squeeze out the agarose gently from the syringe while observing the sample, starting with brightfield imaging."),(0,a.kt)("li",{parentName:"ul"},"Monitor the camera's image stream to ensure the sample becomes visible within the field of view.")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(77615).Z,width:"3648",height:"2736"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Observing Brightfield Image:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the sample isn't immediately visible, confirm its positioning within the sample cube and make minor adjustments in XYZ to bring it into view on the camera screen."),(0,a.kt)("li",{parentName:"ul"},"Once visible in brightfield, deactivate the LED light source.")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(15889).Z,width:"3648",height:"2736"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Switching to Laser Illumination:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Turn on the laser source, and initially, remove the fluorescent filter."),(0,a.kt)("li",{parentName:"ul"},"Adjust the imaging settings to enhance contrast and visibility, increasing intensity, exposure time, and/or camera gain until you obtain a clear, well-exposed image with minimal noise."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Fine-tuning Laser Position:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Using bright scattering as a guide, locate the laser's position while ensuring you have reinserted the fluorescent filter."),(0,a.kt)("li",{parentName:"ul"},"Adjust the intensity as needed."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sample Positioning:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Manipulate the sample's position in XYZ space to center it on a region of interest."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ImSwitch Scan and Reconstruction:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Utilize ImSwitch software's scan and reconstruction plugin to perform scans of your sample."),(0,a.kt)("li",{parentName:"ul"},"The specific scan and reconstruction process details are provided in the ImSwitch documentation.")))),(0,a.kt)("p",null,"This completes the procedure for imaging your fluorescent sample using the fully assembled openUC2 light-sheet microscope. With careful preparation and precise adjustments, you can capture high-quality volumetric images that offer valuable insights into the structure and behavior of your sample. Your engagement with the microscope's capabilities contributes to ongoing advancements in microscopic research and exploration."),(0,a.kt)("h2",{id:"imswitch-data-acquisition-and-reconstruction"},"ImSwitch data acquisition and Reconstruction"),(0,a.kt)("p",null,"We assume the system is running and you were able to install ImSwitch on your computer. The configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON"),"file that describes the light-sheet system can be found further down this document. A tutorial on how to install our ImSwitch Version (SRC: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openUC2/ImSwitch/"},"https://github.com/openUC2/ImSwitch/"),") can be either found in the imSwitch repository or in the ImSwitch section in this wiki."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/N00-kKrRXX4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"mount-the-sample-on-a-metal-tip"},"Mount the sample on a metal tip"),(0,a.kt)("p",null,"Glue the sample on an M5 set screw using super glue or blutek (non-safe, sample can fall off). Insects offer a great level of fluorescent signal due to autofluorescence and act as nice training samples that can simply hang down using this method"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(27946).Z,width:"3648",height:"2736"})),(0,a.kt)("h2",{id:"sample-preparation-\xe1-la-agarose-in-syringe-method"},"Sample preparation \xe1 la agarose-in-syringe method"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hcbi.fas.harvard.edu/files/lightsheetz1_sample-preparation_zeiss.pdf"},"SRC"),"\n",(0,a.kt)("img",{src:i(2672).Z,width:"1368",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample Preparation Protocol for openUC2 Light-Sheet Microscope Imaging: Fluorescently Labeled Zebrafish")),(0,a.kt)("p",null,'This simplified protocol outlines the steps to prepare a fluorescently labeled zebrafish sample for imaging using the openUC2 light-sheet microscope. This method involves embedding the sample in an agarose cylinder for stable imaging in an aqueous environment. the "aquarium" or water-filled sample chamber is used to do refractive index matching as the sample would scatter too much light otherwise.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Materials Required:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.5% Agar"),(0,a.kt)("li",{parentName:"ul"},"Glass capillary"),(0,a.kt)("li",{parentName:"ul"},"Zebrafish embryo (some other volumetric, mostly clear sample that can be excited at 488nm)"),(0,a.kt)("li",{parentName:"ul"},"Sample medium"),(0,a.kt)("li",{parentName:"ul"},"Falcon tube or small beaker"),(0,a.kt)("li",{parentName:"ul"},"syringe or FEP tube (optional, for increased stability)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Procedure:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mounting in Free-Hanging Agarose Cylinder:")),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},"Take the syringe and cut away the tip"),(0,a.kt)("li",{parentName:"ol"},"Melt 1.5% agar at 70\xbaC and maintain it at 37\xbaC."),(0,a.kt)("li",{parentName:"ol"},"Insert the plunger into the syringe capillary, ensuring the white end barely protrudes and suck in enough agarose"),(0,a.kt)("li",{parentName:"ol"},"Gently place the zebrafish embryo into the already solidified agarose, minimizing the water content."),(0,a.kt)("li",{parentName:"ol"},"Pull the plunger to draw up about 3cm (1 inch) of melted agarose."),(0,a.kt)("li",{parentName:"ol"},"Carefully position the sample close to the capillary's end."),(0,a.kt)("li",{parentName:"ol"},"Allow the agarose to set for 1-2 minutes."),(0,a.kt)("li",{parentName:"ol"},"When ready to image, gently push the plunger down to extrude the agarose cylinder with the sample, placing it just outside the capillary for imaging.")),(0,a.kt)("h2",{id:"further-tweaks-for-the-system"},"Further tweaks for the system"),(0,a.kt)("p",null,"These steps are not necessary, but help you to customize the microscope to better match your sample configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Further information can be found in the Zeiss Z1 sample prepration protocol: ",(0,a.kt)("a",{parentName:"li",href:"https://hcbi.fas.harvard.edu/files/lightsheetz1_sample-preparation_zeiss.pdf"},"https://hcbi.fas.harvard.edu/files/lightsheetz1_sample-preparation_zeiss.pdf")),(0,a.kt)("li",{parentName:"ul"},"or here: ",(0,a.kt)("a",{parentName:"li",href:"https://huiskenlab.com/sample-mounting/"},"https://huiskenlab.com/sample-mounting/"))),(0,a.kt)("h3",{id:"remove-the-xyz-stage-from-the-top"},"Remove the xyz stage from the top"),(0,a.kt)("p",null,"In case you want to do maintenance on the microscope, the xyz stage can easily be removed by releasing the M3x55mm screws from the bottom part. Therfore, remove the puzzle piece that has be mounted below the objective lens and release the 3 screws that mount the stage plate to the uppoer part of the microscope. You can now release the stage. In order to move it back on, do the reverse process."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(15717).Z,width:"3648",height:"2736"})),(0,a.kt)("h3",{id:"swap-the-sample-mounting-plate"},"Swap the sample mounting plate"),(0,a.kt)("p",null,"In principle the XYZ stage can mount any sample geometry. We wanted to start with something and adapted the common syringe mount. Only two screws from below have to be released in order to swap the sample mount plate:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(53774).Z,width:"3648",height:"2736"})),(0,a.kt)("p",null,"This part can be customized to adapt e.g. conventional sample slides"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(62754).Z,width:"3648",height:"2736"})),(0,a.kt)("h2",{id:"imswitch-configuration-for-the-ligth-sheet"},"ImSwitch configuration for the ligth-sheet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "positioners": {\n    "ESP32Stage": {\n      "managerName": "ESP32StageManager",\n      "managerProperties": {\n        "rs232device": "ESP32",\n        "enableauto": 0,\n        "isEnable": 1\n      },\n      "axes": [\n        "X",\n        "Y",\n        "Z",\n        "A"\n      ],\n      "forScanning": true,\n      "forPositioning": true\n    }\n  },\n  "rs232devices": {\n    "ESP32": {\n      "managerName": "ESP32Manager",\n      "managerProperties": {\n        "host_": "192.168.43.129",\n        "serialport_": "COM3",\n        "serialport": "/dev/cu.usbserial-A50285BI"\n      }\n    }\n  },\n  "lasers": {\n    "488 Laser": {\n      "analogChannel": null,\n      "digitalLine": null,\n      "managerName": "ESP32LEDLaserManager",\n      "managerProperties": {\n        "rs232device": "ESP32",\n        "channel_index":1,\n        "filter_change": false,\n        "laser_despeckle_period": 10,\n        "laser_despeckle_amplitude": 0\n      },\n      "wavelength": 488,\n      "valueRangeMin": 0,\n      "valueRangeMax": 1024\n    },\n    "LED Matrix": {\n      "analogChannel": null,\n      "digitalLine": null,\n      "managerName": "ESP32LEDLaserManager",\n      "managerProperties": {\n        "rs232device": "ESP32",\n        "channel_index": "LED",\n        "filter_change": false,\n        "filter_axis": 3,\n        "filter_position": 32000,\n        "filter_position_init": -0\n      },\n      "wavelength": 635,\n      "valueRangeMin": 0,\n      "valueRangeMax": 255\n    }\n  },\n  "detectors": {\n    "WidefieldCamera": {\n      "ExtPackage": "imswitch_det_webcam",\n      "analogChannel": null,\n      "digitalLine": null,\n      "managerName": "GXPIPYManager",\n      "managerProperties": {\n        "cameraListIndex": 1,\n        "gxipycam": {\n          "exposure": 20,\n          "gain": 0,\n          "blacklevel": 10,\n          "image_width": 1000,\n          "image_height": 1000\n        }\n      },\n      "forAcquisition": true,\n      "forFocusLock": true\n    }\n    },\n  "rois": {\n    "Full chip": {\n      "x": 600,\n      "y": 600,\n      "w": 1200,\n      "h": 1200\n    }\n  },\n  "LEDMatrixs": {\n    "ESP32 LEDMatrix": {\n      "analogChannel": null,\n      "digitalLine": null,\n      "managerName": "ESP32LEDMatrixManager",\n      "managerProperties": {\n        "rs232device": "ESP32",\n        "Nx": 4,\n        "Ny": 4\n      },\n      "wavelength": 488,\n      "valueRangeMin": 0,\n      "valueRangeMax": 32768\n    }\n  },\n  "autofocus": {\n    "camera": "WidefieldCamera",\n    "positioner": "ESP32Stage",\n    "updateFreq": 10,\n    "frameCropx": 780,\n    "frameCropy": 400,\n    "frameCropw": 500,\n    "frameCroph": 100\n  },\n  "uc2Config": {\n    "defaultConfig": "pindefWemos.json",\n    "defaultConfig2": "pindefUC2Standalon2.json",\n    "defaultConfig1": "pindefUC2Standalon.json"\n  },\n  "mct": {\n    "monitorIdx": 2,\n    "width": 1080,\n    "height": 1920,\n    "wavelength": 0,\n    "pixelSize": 0,\n    "angleMount": 0,\n    "patternsDirWin": "C:\\\\Users\\\\wanghaoran\\\\Documents\\\\ImSwitchConfig\\\\imcontrol_slm\\\\488\\\\",\n    "patternsDir": "/users/bene/ImSwitchConfig/imcontrol_sim/488"\n  },\n  "dpc": {\n    "wavelength": 0.53,\n    "pixelsize": 0.2,\n    "NA":0.3,\n    "NAi": 0.3,\n    "n": 1.0,\n    "rotations": [0, 180, 90, 270]\n  },\n  "webrtc":{},\n  "PixelCalibration": {},\n  "availableWidgets": [\n    "Settings",\n    "Positioner",\n    "View",\n    "Recording",\n    "Image",\n    "Laser",\n    "UC2Config",\n    "Joystick",\n    "Lightsheet",\n    "LEDMatrix"\n  ],\n  "nonAvailableWidgets":[\n    "STORMRecon",\n    "LEDMatrix",\n    "MCT",\n\n    "ImSwitchServer",\n    "PixelCalibration",\n    "Hypha",\n    "FocusLock",\n    "HistoScan",\n\n    "FocusLock"]\n}\n')))}c.isMDXComponent=!0},76394:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230811_163453-edba07f558a10bb590dd958207f9da95.jpg"},87962:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230811_163457-17abef213ff7ba5b4c97e947f88c8363.jpg"},15717:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IMG_20230811_165551-c1bde2ad19ba8a8d9a8856c2cc5476e9.jpg"},69733:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetLabeled-9e4499269fc146842a0886bfc2c06fa8.png"},27946:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetSample_10-fd777f9b639a2da88b0393cd337e7a7c.jpg"},62754:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetSample_11-b7118603dfbe4abae2bdd531ca986076.jpg"},53774:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetSample_4-0d8ecf1098f3248c2af4a4ff484a36a1.jpg"},49793:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetSample_6-cdc6a24bd61f919cd2c8591b6ab49f0f.jpg"},1465:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetSample_7-cab32207756dae19c65214c15d912d0e.jpg"},77615:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetSample_8-93d5c2afeb96e08a3db43943af9b0095.jpg"},15889:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetSample_9-2954a76e12a60ff1a440c0e259995ec8.jpg"},81189:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetTutorial_10-a49c1d796f90253966485a951cd085de.jpg"},90320:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetTutorial_11-4dd07e5f1d4374e88aa5180f96990739.jpg"},89087:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetTutorial_2-fe1eaf946d695f718040a9d34e8eeba9.jpg"},794:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetTutorial_3-984c90359046913a2de030e99abfe01d.jpg"},55329:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetTutorial_4-38013435a2aa4dfed3407fc6b9b70db1.jpg"},44827:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetTutorial_6-025637af0c0d6624bdf6deefd24a8edb.jpg"},2937:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetTutorial_7-0f34aa37c4b4ccc40666595370f37e6a.jpg"},34168:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetTutorial_8-c8a85a779f1a3afdd31b10e098b11251.jpg"},26028:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LightsheetTutorial_9-bc9d79a5cafcac818ccf4027ee353ecf.jpg"},2672:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Samplemount-7267613150ede017650da2b891cbef62.png"}}]);