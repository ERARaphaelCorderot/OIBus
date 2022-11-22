"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:5},i="OPCHDA (Windows only)",s={unversionedId:"guide/south-connectors/opchda",id:"guide/south-connectors/opchda",title:"OPCHDA (Windows only)",description:"OPCDA and OPCHDA are communication protocols used in the industrial world and developed by the",source:"@site/docs/guide/south-connectors/opchda.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/opchda",permalink:"/docs/guide/south-connectors/opchda",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guideSidebar",previous:{title:"OPCUA",permalink:"/docs/guide/south-connectors/opcua"},next:{title:"Modbus",permalink:"/docs/guide/south-connectors/modbus"}},l={},c=[{value:"OPCHDA connector",id:"opchda-connector",level:2},{value:"HDA Agent section",id:"hda-agent-section",level:3},{value:"Connection and network",id:"connection-and-network",level:3},{value:"Accessing data",id:"accessing-data",level:3},{value:"Scan groups",id:"scan-groups",level:4},{value:"Points and nodes",id:"points-and-nodes",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opchda-windows-only"},"OPCHDA (Windows only)"),(0,a.kt)("p",null,"OPCDA and OPCHDA are communication protocols used in the industrial world and developed by the\n",(0,a.kt)("a",{parentName:"p",href:"https://opcfoundation.org/"},"OPC Foundation"),". This technology has been replaced by OPCUA but is still widely used in\nthe industry. To use OPCUA in OIBus, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/south-connectors/opcua"},"OPCUA connector documentation"),"."),(0,a.kt)("p",null,"An HDA server allows to retrieve the history of data over a more or less long period, while a DA server allows to\nretrieve only the most recent value of a tag."),(0,a.kt)("p",null,"Only OPCHDA is supported by OIBus. OIBus uses an HDA agent, i.e. a module integrated to OIBus, but available in\nstandalone, to perform OPC history extractions in command line. See the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/advanced/opchda-agent"},"OPCHDA agent documentation")," to use the agent in standalone."),(0,a.kt)("p",null,"Both the OPCHDA connector and the standalone agent are available under Windows only and use Microsoft\u2019s proprietary DCOM\ntechnology to transfer information over the network. This technology is much more complex to set up than traditional TCP\ncommunications. A dedicated guide is offered ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/advanced/opchda-dcom"},"here")," to correctly setup HDA communications\nwith COM/DCOM interfaces."),(0,a.kt)("h2",{id:"opchda-connector"},"OPCHDA connector"),(0,a.kt)("p",null,"OIBus uses a HDA agent, compiled for Windows platforms, to interact with COM/DCOM interfaces. The HDA agent can also be\nused ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/advanced/opchda-agent"},"in standalone"),". "),(0,a.kt)("h3",{id:"hda-agent-section"},"HDA Agent section"),(0,a.kt)("p",null,"OIBus exchanges commands and data with the HDA agent through a TCP server/client communication. Therefore, several\nfields must be filled to make OIBus communicate with the HDA Agent:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Agent filename"),": the file path of the HDA Agent. By default, the HDA agent is in the same folder as the OIBus binary."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TCP port"),": the TCP port that the HDA Agent will use to create its own TCP server. If you need two OPCHDA connectors,\nbe careful to have two distinct TCP ports to avoid conflicts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logging level"),": the level of log the HDA Agent will use. If the HDA agent log level is lower than the OIBus log levels,\nthe lowest logs will be lost. See the ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide/engine/logging-parameters"},"Engine log section")," to know more about logging parameters.")),(0,a.kt)("h3",{id:"connection-and-network"},"Connection and network"),(0,a.kt)("p",null,"Some information are required to connect to the OPCHDA server:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Host"),": the hostname or its IP address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Server name"),": the name of the OPCHDA server")),(0,a.kt)("p",null,"Several options are available to better manage network failure or inactivity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Retry interval"),": in case of connection failure, time to wait before reconnecting (in ms)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Max read interval"),": split the request interval into smaller chunks (in s)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Read interval delay"),": time to wait (in ms) between two sub-intervals in case a split occurs (ignored otherwise)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Max return values"),": max number of values to retrieve ",(0,a.kt)("strong",{parentName:"li"},"per node"),". If 100 nodes are requested, this value is\nmultiplied by 100 to have the total number of values retrieved.")),(0,a.kt)("h3",{id:"accessing-data"},"Accessing data"),(0,a.kt)("h4",{id:"scan-groups"},"Scan groups"),(0,a.kt)("p",null,"OIBus retrieves data by intervals. It is then possible to aggregate these values or to resample them. To do so, a scan\nmode must be selected (to create additional scan modes, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/engine/scan-modes"},"Engine settings"),"), with its\nassociated aggregate and resampling options."),(0,a.kt)("admonition",{title:"Creating scan groups",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Creating scan groups is mandatory to choose them in the ",(0,a.kt)("em",{parentName:"p"},"Points")," section when adding new points to request.")),(0,a.kt)("admonition",{title:"Compatibility with the OPCUA server",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Not every aggregate and resampling are supported by OPCUA server. ",(0,a.kt)("em",{parentName:"p"},"Raw")," aggregate and ",(0,a.kt)("em",{parentName:"p"},"None")," resampling are preferred to\navoid compatibility issues.")),(0,a.kt)("h4",{id:"points-and-nodes"},"Points and nodes"),(0,a.kt)("p",null,"The OPCHDA connector retrieves values from specific addresses. Addresses (called node ID, or just node) are organized in\nnamespaces, in a tree-like structure. These can be added in the ",(0,a.kt)("em",{parentName:"p"},"Points section")," (in the upper right corner)."),(0,a.kt)("p",null,"To request a data, specify the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Point ID"),(0,a.kt)("li",{parentName:"ul"},"Node ID"),(0,a.kt)("li",{parentName:"ul"},"Scan group")),(0,a.kt)("p",null,"The Node ID matches the path of the data in the appropriate namespace in the OPCHDA server. The point ID will be used\nwhen sent to North connectors. It can be the same as the Node ID, but it allows friendlier names to manage."))}u.isMDXComponent=!0}}]);