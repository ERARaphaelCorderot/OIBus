"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},i="Modbus",s={unversionedId:"guide/south-connectors/modbus",id:"guide/south-connectors/modbus",title:"Modbus",description:"Modbus is a communication protocol used for PLC networks. Historically, it was designed for communication on a serial",source:"@site/docs/guide/south-connectors/modbus.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/modbus",permalink:"/OIBus/fr/docs/guide/south-connectors/modbus",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guideSidebar",previous:{title:"OPCHDA (Windows only)",permalink:"/OIBus/fr/docs/guide/south-connectors/opchda"},next:{title:"ADS - TwinCAT",permalink:"/OIBus/fr/docs/guide/south-connectors/ads"}},l={},d=[{value:"Connection settings",id:"connection-settings",level:2},{value:"PLC settings",id:"plc-settings",level:2},{value:"Points and Modbus addresses",id:"points-and-modbus-addresses",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modbus"},"Modbus"),(0,o.kt)("p",null,"Modbus is a communication protocol used for PLC networks. Historically, it was designed for communication on a serial\ninterface (RS232, RS422,RS485) and was extended to support the TCP mode."),(0,o.kt)("p",null,"OIBus uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Cloud-Automation/node-modbus"},"jsmodbus")," library ",(0,o.kt)("strong",{parentName:"p"},"in TCP mode only"),"."),(0,o.kt)("h2",{id:"connection-settings"},"Connection settings"),(0,o.kt)("p",null,"In this TCP mode, Modbus sets up a client-server connection: the server provides data referenced by addresses but\nremains passive. It is the Modbus client that fetches the data values. The Modbus connector is a Modbus client. It is\ntherefore necessary to indicate to the connector:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"host")," (IP address or hostname of the Modbus server machine)"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"port")," (502 by default)"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"slave ID")," to identify the Modbus source machine if necessary (1 by default).")),(0,o.kt)("h2",{id:"plc-settings"},"PLC settings"),(0,o.kt)("p",null,"Depending on the PLC, several settings are possible on how to access the data. These settings are common to the whole\nPLC. Here are the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Address offset"),": For most of the PLCs, there is no offset (",(0,o.kt)("em",{parentName:"li"},"Modbus")," option). Some PLCs start the address range at 1\ninstead of 0 (",(0,o.kt)("em",{parentName:"li"},"JBus")," option)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Endianness"),": Indicates the type of bit encoding (Big Endian or LittleEndian)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Swap Bytes"),": Indicates whether the bytes within a group of 16 bits (a word) should be inverted or not"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Swap Words"),": Indicates whether the words (16-bit group) should be inverted or not within a 32-bit group.")),(0,o.kt)("h2",{id:"points-and-modbus-addresses"},"Points and Modbus addresses"),(0,o.kt)("p",null,"The Modbus connector retrieves values from specific addresses. These can be added in the Points section (in the upper right\ncorner)."),(0,o.kt)("p",null,"In this list, points can be added with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Point ID"),": the name of the data in the result (example: ",(0,o.kt)("inlineCode",{parentName:"li"},"My point variable"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Address"),": the address of the data in the machine"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modbus type"),": ",(0,o.kt)("em",{parentName:"li"},"coil"),", ",(0,o.kt)("em",{parentName:"li"},"discrete input"),", ",(0,o.kt)("em",{parentName:"li"},"input register")," or ",(0,o.kt)("em",{parentName:"li"},"holding register")," (default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data type"),": Used in case of ",(0,o.kt)("em",{parentName:"li"},"holding registers")," or ",(0,o.kt)("em",{parentName:"li"},"input registers")," (ignored otherwise). This parameter indicates\nthe type of data retrieved from the register: UInt16 (default), Int16, UInt32, Int32, UInt64, Int64, Float or Double."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multiplier Coefficient")," (default 1)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scan mode"),": the request frequency. To define more scan modes, see ",(0,o.kt)("a",{parentName:"li",href:"/OIBus/fr/docs/guide/engine/scan-modes"},"Engine settings"),".  ")),(0,o.kt)("p",null,"The address corresponds to the address of the variable in the PLC, ",(0,o.kt)("strong",{parentName:"p"},"in hexadecimal without the data type digit"),". For\nexample:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For the ",(0,o.kt)("em",{parentName:"li"},"holding register")," data 0x40001, enter the address 0x0001 (omit the digit ",(0,o.kt)("inlineCode",{parentName:"li"},"4"),") and specify the Modbus type\n",(0,o.kt)("em",{parentName:"li"},"holdingRegister"),"."),(0,o.kt)("li",{parentName:"ul"},"For the ",(0,o.kt)("em",{parentName:"li"},"coil")," data 0x009C, enter 0x009C and specify the Modbus type ",(0,o.kt)("em",{parentName:"li"},"coil"),".")),(0,o.kt)("p",null,"Modbus data addresses follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.modbus.org/docs/PI_MBUS_300.pdf"},(0,o.kt)("strong",{parentName:"a"},"Modicon Convention Notation")," (MCN)"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Coil: ",(0,o.kt)("inlineCode",{parentName:"li"},"[0x00001 - 0x09999]")," ; from 1 to 39,321"),(0,o.kt)("li",{parentName:"ul"},"Discrete Input: ",(0,o.kt)("inlineCode",{parentName:"li"},"[0x10001 - 0x19999]")," ; from 65,537 to 104,857"),(0,o.kt)("li",{parentName:"ul"},"Input Register: ",(0,o.kt)("inlineCode",{parentName:"li"},"[0x30001 - 0x39999]")," ; from 196,609 to 235,929"),(0,o.kt)("li",{parentName:"ul"},"Holding Register: ",(0,o.kt)("inlineCode",{parentName:"li"},"[0x40001 - 0x49999]")," ; from 262,145 to 301,465")),(0,o.kt)("p",null,"An extended version of MCN allows the user to specify larger address spaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Coil: ",(0,o.kt)("inlineCode",{parentName:"li"},"[0x000001 - 0x065535]")),(0,o.kt)("li",{parentName:"ul"},"Discrete Input: ",(0,o.kt)("inlineCode",{parentName:"li"},"[0x100001 - 0x165535]")),(0,o.kt)("li",{parentName:"ul"},"Input Register: ",(0,o.kt)("inlineCode",{parentName:"li"},"[0x300001 - 0x365535]")),(0,o.kt)("li",{parentName:"ul"},"Holding Register: ",(0,o.kt)("inlineCode",{parentName:"li"},"[0x400001 - 0x465535]"))))}p.isMDXComponent=!0}}]);