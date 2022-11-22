"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[5],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},i="OPCUA",s={unversionedId:"guide/south-connectors/opcua",id:"guide/south-connectors/opcua",title:"OPCUA",description:"OPCUA technology is a protocol for accessing data in read or write mode. The data are organized in a tree-like address",source:"@site/docs/guide/south-connectors/opcua.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/opcua",permalink:"/docs/guide/south-connectors/opcua",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guideSidebar",previous:{title:"Folder Scanner",permalink:"/docs/guide/south-connectors/folder-scanner"},next:{title:"OPCHDA (Windows only)",permalink:"/docs/guide/south-connectors/opchda"}},l={},c=[{value:"Connection settings",id:"connection-settings",level:2},{value:"Network",id:"network",level:3},{value:"Security settings",id:"security-settings",level:2},{value:"Communication",id:"communication",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Accessing data",id:"accessing-data",level:2},{value:"Scan groups (HA only)",id:"scan-groups-ha-only",level:3},{value:"Points and nodes",id:"points-and-nodes",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"opcua"},"OPCUA"),(0,r.kt)("p",null,"OPCUA technology is a protocol for accessing data in read or write mode. The data are organized in a tree-like address\nspace and are referenced with a unique address each (called node ID). OPCUA is a modern standard based on TPC, replacing\nOPC HDA/DA (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/south-connectors/opchda"},"OPCHDA connector"),") technologies, and is often embedded natively in industrial controllers."),(0,r.kt)("p",null,"OPCUA embeds two variants of the protocol: HA (Historical Access) and DA (Data Access). The first mode allows access to\na history of values over a time interval for the requested points (data), while the second mode accesses the values at\neach request."),(0,r.kt)("p",null,"OIBus integrates the two OPCUA modes (HA and DA) in read-only mode. Each mode has its own connector.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/node-opcua/node-opcua"},"node-opcua")," library is used."),(0,r.kt)("h2",{id:"connection-settings"},"Connection settings"),(0,r.kt)("p",null,"To connect to a OPCUA server, OIBus needs an URL which is composed of several part:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The protocol: ",(0,r.kt)("inlineCode",{parentName:"li"},"opc.tcp://")," (for now, only this one is supported)"),(0,r.kt)("li",{parentName:"ul"},"The host or IP address"),(0,r.kt)("li",{parentName:"ul"},"The port number"),(0,r.kt)("li",{parentName:"ul"},"The endpoint (or server name)")),(0,r.kt)("p",null,"All together, these elements form a URL. Here is an example: ",(0,r.kt)("inlineCode",{parentName:"p"},"opc.tcp://localhost:53530/OPCUA/MyServer")),(0,r.kt)("h3",{id:"network"},"Network"),(0,r.kt)("p",null,"Several options are available to better manage network failure or inactivity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Retry interval"),": in case of connection failure, time to wait before reconnecting (in ms)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Read timeout")," (HA only): time to wait before aborting a read request (in ms). It may happen if the read request\nretrieves too many values at once or if the network has a problem."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max read interval")," (HA only): split the request interval into smaller chunks (in s)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Read interval delay")," (HA only): time to wait (in ms) between two sub-interval in case a split occurs (ignored\notherwise)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max return values")," (HA only): max number of values to retrieve ",(0,r.kt)("strong",{parentName:"li"},"per node"),". If 100 nodes are requested, this value\nis multiplied by 100 to have the total number of values retrieved.")),(0,r.kt)("h2",{id:"security-settings"},"Security settings"),(0,r.kt)("h3",{id:"communication"},"Communication"),(0,r.kt)("p",null,"The communications can be secured thanks to the ",(0,r.kt)("strong",{parentName:"p"},"security mode")," and ",(0,r.kt)("strong",{parentName:"p"},"security policy")," fields. Available modes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None"),(0,r.kt)("li",{parentName:"ul"},"Sign"),(0,r.kt)("li",{parentName:"ul"},"SignAndEncrypt")),(0,r.kt)("p",null,"OIBus supports the following policies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None"),(0,r.kt)("li",{parentName:"ul"},"Basic128"),(0,r.kt)("li",{parentName:"ul"},"Basic192"),(0,r.kt)("li",{parentName:"ul"},"Basic256"),(0,r.kt)("li",{parentName:"ul"},"Basic128Rsa15"),(0,r.kt)("li",{parentName:"ul"},"Basic192Rsa15"),(0,r.kt)("li",{parentName:"ul"},"Basic256Rsa15"),(0,r.kt)("li",{parentName:"ul"},"Basic256Sha256"),(0,r.kt)("li",{parentName:"ul"},"Aes128_Sha256_RsaOaep"),(0,r.kt)("li",{parentName:"ul"},"PubSub_Aes128_CTR"),(0,r.kt)("li",{parentName:"ul"},"PubSub_Aes256_CTR")),(0,r.kt)("admonition",{title:"Compatibility with the OPCUA server",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Be careful to select a security mode and a security policy supported by the OPCUA server!")),(0,r.kt)("p",null,"If a security mode other than ",(0,r.kt)("em",{parentName:"p"},"None")," is used, a certificate will be needed to sign and possible encrypt the\ncommunications. A self-signed certificate called ",(0,r.kt)("strong",{parentName:"p"},"OIBus")," (generated by OIBus at startup) is used to secure the\ncommunication with the OPCUA server. It must be trusted by the OPCUA server to allow communication."),(0,r.kt)("admonition",{title:"Example on Prosys OPCUA Simulation Server",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Prosys OPCUA Simulation Server Certificates",src:n(1172).Z,width:"995",height:"627"})),(0,r.kt)("p",{parentName:"admonition"},"If the certificate is not trusted, an error will occur: ",(0,r.kt)("inlineCode",{parentName:"p"},"Error: The connection may have been rejected by server"))),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"If the certificate and key paths are empty, OIBus will try to use a user authentication with username and password. The\nusername and password must exist on the OPCUA server."),(0,r.kt)("p",null,"If the username and password are empty, an anonymous authentication will be used. In this case, Anonymous authentication\nmust be accepted by the OPCUA server."),(0,r.kt)("p",null,"The certificate, used to authenticate the client, must be added in the trusted user certificates of the OPCUA server. It\nis managed differently than the ",(0,r.kt)("strong",{parentName:"p"},"OIBus")," certificate mentioned before, used for ",(0,r.kt)("a",{parentName:"p",href:"#communication"},"secure communication"),"."),(0,r.kt)("admonition",{title:"Example on Prosys OPCUA Simulation Server",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For Prosys, the certificate used to authenticate OIBus must be placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},".prosysopc\\prosys-opc-ua-simulation-server\\USERS_PKI\\CA\\certs"),"\nfolder. Otherwise, an error will occur: ",(0,r.kt)("inlineCode",{parentName:"p"},"Error:  serviceResult = BadIdentityTokenRejected (0x80210000)"),"."),(0,r.kt)("p",{parentName:"admonition"},"If a connection has already been tried and rejected, the certificate must be removed from the rejected certificates'\nfolder ",(0,r.kt)("inlineCode",{parentName:"p"},".prosysopc\\prosys-opc-ua-simulation-server\\USERS_PKI\\CA\\rejected")," and be placed in the trusted folder\n(",(0,r.kt)("inlineCode",{parentName:"p"},".prosysopc\\prosys-opc-ua-simulation-server\\USERS_PKI\\CA\\certs"),").")),(0,r.kt)("admonition",{title:"Use the same certificate for user authentication and secure communications",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The same certificate can be used. To do that, the cert.pem and privateKey.pem file paths must be specified. They are\nlocated in the cache/certs folder of OIBus."),(0,r.kt)("p",{parentName:"admonition"},"On the OPCUA server side, the ",(0,r.kt)("strong",{parentName:"p"},"OIBus")," certificate (cert.pem) must be copied in the user certificates' folder. "),(0,r.kt)("p",{parentName:"admonition"},"For example, with Prosys OPCUA Simulation Server: ",(0,r.kt)("inlineCode",{parentName:"p"},".prosysopc\\prosys-opc-ua-simulation-server\\USERS_PKI\\CA\\certs"),".")),(0,r.kt)("h2",{id:"accessing-data"},"Accessing data"),(0,r.kt)("h3",{id:"scan-groups-ha-only"},"Scan groups (HA only)"),(0,r.kt)("p",null,"With HA mode, data are retrieved by intervals. It is then possible to aggregate these values or to resample them. To do\nso, a scan mode must be selected (to create additional scan modes, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/engine/scan-modes"},"Engine settings"),"), with\nits associated aggregate and resampling options."),(0,r.kt)("admonition",{title:"Creating scan groups",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Creating scan groups is mandatory to choose them in the ",(0,r.kt)("em",{parentName:"p"},"Points")," section when adding new points to request.")),(0,r.kt)("admonition",{title:"Compatibility with the OPCUA server",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Not every aggregate and resampling are supported by OPCUA server. ",(0,r.kt)("em",{parentName:"p"},"Raw")," aggregate and ",(0,r.kt)("em",{parentName:"p"},"None")," resampling are preferred to\navoid compatibility issues.")),(0,r.kt)("h3",{id:"points-and-nodes"},"Points and nodes"),(0,r.kt)("p",null,"The OPCUA connector retrieves values from specific addresses. Addresses (called node ID, or just node) are organized in\nnamespaces, in a tree-like structure. These can be added in the ",(0,r.kt)("em",{parentName:"p"},"Points section")," (in the upper right corner)."),(0,r.kt)("p",null,"To request a data, specify the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Point ID"),(0,r.kt)("li",{parentName:"ul"},"Node ID"),(0,r.kt)("li",{parentName:"ul"},"Scan Mode (DA only)"),(0,r.kt)("li",{parentName:"ul"},"Scan Group (HA only)")),(0,r.kt)("p",null,"The Node ID matches the path of the data in the appropriate namespace in the OPCUA server. The point ID will be used\nwhen sent to North connectors. It can be the same as the Node ID, but it allows friendlier names to manage."))}u.isMDXComponent=!0},1172:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/prosys-opcua-simulation-server-certificates-3aa9f72ae5a03d39b377b01e927c54ba.png"}}]);