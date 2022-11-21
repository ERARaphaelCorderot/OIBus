"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7},o="ADS - TwinCAT",s={unversionedId:"guide/south-connectors/ads",id:"guide/south-connectors/ads",title:"ADS - TwinCAT",description:"The ADS protocol (Automation Device Specification) is a transport layer within TwinCAT systems, developed by",source:"@site/docs/guide/south-connectors/ads.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/ads",permalink:"/OIBus/fr/docs/guide/south-connectors/ads",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guideSidebar",previous:{title:"Modbus",permalink:"/OIBus/fr/docs/guide/south-connectors/modbus"},next:{title:"MQTT",permalink:"/OIBus/fr/docs/guide/south-connectors/mqtt"}},l={},u=[{value:"Connection settings",id:"connection-settings",level:2},{value:"With local TwinCAT runtime",id:"with-local-twincat-runtime",level:3},{value:"With remote ADS server",id:"with-remote-ads-server",level:3},{value:"Data settings and structures",id:"data-settings-and-structures",level:2},{value:"Points list",id:"points-list",level:3},{value:"Data settings",id:"data-settings",level:3},{value:"PLC name",id:"plc-name",level:4},{value:"Enumerations and booleans",id:"enumerations-and-booleans",level:4},{value:"Structures",id:"structures",level:4}],d={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ads---twincat"},"ADS - TwinCAT"),(0,r.kt)("p",null,"The ADS protocol (Automation Device Specification) is a transport layer within TwinCAT systems, developed by\nBeckhoff."),(0,r.kt)("p",null,"Each data item is referenced by a unique address within the controller and can be accessed by OIBus with the ADS\nconnector."),(0,r.kt)("p",null,"OIBus uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jisotalo/ads-client"},"ads-client")," library."),(0,r.kt)("h2",{id:"connection-settings"},"Connection settings"),(0,r.kt)("p",null,"The AMS Router is the entity which connects ADS clients (OIBus) to PLCs and TwinCAT runtime. This allows OIBus to\naccess PLCs data."),(0,r.kt)("p",null,"Depending on the AMS Router location, several setups are possible. "),(0,r.kt)("h3",{id:"with-local-twincat-runtime"},"With local TwinCAT runtime"),(0,r.kt)("p",null,"When TwinCAT is installed on the same machine as OIBus, the ADS connector can use the same TwinCAT runtime and directly\ncommunicate with the PLC, with its Net ID and ADS Port."),(0,r.kt)("p",null,"The Net ID is an IP-like address with two additional numbers. Usually, the Net ID is the IP address on which the PLC is\naddressed from the network, with two additional numbers to address the appropriate PLC (several PLCs can be accessed\nfrom one AMS Router), for example ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1.1.1"),"."),(0,r.kt)("p",null,"The port is the one used to contact the PLC from the AMS Router (by default 851)."),(0,r.kt)("h3",{id:"with-remote-ads-server"},"With remote ADS server"),(0,r.kt)("p",null,"For a remote ADS server, the Net ID and the ADS Port are still required, and other fields are needed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Router address"),": the IP address (or domain name) of the AMS router"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Router TCP port"),": the port used by the AMS router"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client AMS Net ID"),": a client identifier used to identify a connection with the TwinCAT runtime."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client ADS port")," (optional): the port used by the client to exchange data. If empty, it is given randomly by the\nAMS server. If filled, be sure that the port is not used by another client. ")),(0,r.kt)("p",null,"TwinCAT runtime must accept the communication from the ADS connector. To do so, Static Routes must be added in the\n",(0,r.kt)("em",{parentName:"p"},"TwinCAT Static Routes")," tool. The following example accepts two routes whose AmsNetId is to be used on the OIBus\nside. It is important that the AmsNetId is used through the IP address specified."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TwinCAT Static Routes tool",src:n(7852).Z,width:"908",height:"492"})),(0,r.kt)("admonition",{title:"Multiple ADS connectors",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Only one remote ADS connector can be set for OIBus. If two ADS connectors are needed to connect two PLCs, use a local\nADS server (available by default if OIBus is installed on the same machine as\n",(0,r.kt)("a",{parentName:"p",href:"#with-local-twincat-runtime"},"the TwinCAT runtime"),").")),(0,r.kt)("h2",{id:"data-settings-and-structures"},"Data settings and structures"),(0,r.kt)("h3",{id:"points-list"},"Points list"),(0,r.kt)("p",null,"The ADS connector retrieves values from specific addresses. These can be added in the Points section (in the upper right\ncorner)."),(0,r.kt)("p",null,"In this list, points can be added with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Point ID"),": the address of the data in the targeted PLC (example: ",(0,r.kt)("inlineCode",{parentName:"li"},"GVL_Test1.TestINT"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scan mode"),": the request frequency. To define more scan modes, see ",(0,r.kt)("a",{parentName:"li",href:"/OIBus/fr/docs/guide/engine/scan-modes"},"Engine settings"),".  ")),(0,r.kt)("h3",{id:"data-settings"},"Data settings"),(0,r.kt)("h4",{id:"plc-name"},"PLC name"),(0,r.kt)("p",null,"In the case where data from similar PLCs (sharing the same point addresses for example) are retrieved from two ADS\nconnectors and sent to the same North, the values will have the same point ID even though they come from two different\nPLCs. "),(0,r.kt)("p",null,"To avoid this ambiguity, the ",(0,r.kt)("em",{parentName:"p"},"PLC name")," can be added in front of each point ID once the data is retrieved. In this way,\nthe point IDs sent to the North connector will be differentiated."),(0,r.kt)("admonition",{title:"Example",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If PLC1 has for PLC name ",(0,r.kt)("em",{parentName:"p"},"PLC001.")," (the dot is included in the name) and the point ID is MyVariable.Value, the\nresulting point ID once the values are retrieved will be ",(0,r.kt)("em",{parentName:"p"},"PLC001.MyVariable.Value")," and this will allow to identify the\ndata in a different way than the PLC2 which will have a resulting point ID of ",(0,r.kt)("em",{parentName:"p"},"PLC002.MyVariable.Value"),".")),(0,r.kt)("h4",{id:"enumerations-and-booleans"},"Enumerations and booleans"),(0,r.kt)("p",null,"An enumeration can be retrieved as an integer or as a character string (the PLC knows both thanks to its programming). "),(0,r.kt)("p",null,"A boolean value can be retrieved as an integer or a string (with 0 = false,1 = true)."),(0,r.kt)("h4",{id:"structures"},"Structures"),(0,r.kt)("p",null,"It is also possible to query an entire data structure. For example, if the data ",(0,r.kt)("strong",{parentName:"p"},"MyVariable")," is of type ",(0,r.kt)("em",{parentName:"p"},"MyStructure")," and\nhas the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MyDate"),(0,r.kt)("li",{parentName:"ul"},"MyNumber"),(0,r.kt)("li",{parentName:"ul"},"Value")),(0,r.kt)("p",null,"And if only ",(0,r.kt)("em",{parentName:"p"},"MyDate")," and ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," must be retrieved, then, in the ",(0,r.kt)("em",{parentName:"p"},"ADS structures section")," a new structure can be added\nwith the name ",(0,r.kt)("em",{parentName:"p"},"MyStructure"),", and in the fields part, only the two fields can be specified, separated by commas:\n",(0,r.kt)("em",{parentName:"p"},"MyDate,MyNumber")),(0,r.kt)("p",null,"This is especially useful when several data (here ",(0,r.kt)("strong",{parentName:"p"},"MyVariable"),") are of type MyStructure, and only a few fields of the\nstructure are requested (here ",(0,r.kt)("em",{parentName:"p"},"MyDate")," and ",(0,r.kt)("em",{parentName:"p"},"MyNumber"),"). The more fields the structure has, the more useful this feature\nis."),(0,r.kt)("p",null,"In the end, each field will give a unique resulting point ID. In the previous example, this will give for the single\npoint ",(0,r.kt)("strong",{parentName:"p"},"MyVariable")," the following two points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MyVariable.MyDate  "),(0,r.kt)("li",{parentName:"ul"},"MyVariable.MyNumber")))}c.isMDXComponent=!0},7852:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installation-ads-distant-7d043b9c61a135e76dc689cfa7df7017.png"}}]);