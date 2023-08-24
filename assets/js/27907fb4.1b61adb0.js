"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[3797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},A=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),A=c(n),p=a,h=A["".concat(l,".").concat(p)]||A[p]||u[p]||o;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=A;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}A.displayName="MDXCreateElement"},3709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},s="OPCHDA agent",r={unversionedId:"guide/oibus-agent/opchda",id:"guide/oibus-agent/opchda",title:"OPCHDA agent",description:"WORK IN PROGRESS",source:"@site/docs/guide/oibus-agent/opchda.md",sourceDirName:"guide/oibus-agent",slug:"/guide/oibus-agent/opchda",permalink:"/docs/next/guide/oibus-agent/opchda",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"ODBC",permalink:"/docs/next/guide/oibus-agent/odbc"}},l={},c=[{value:"HTTP API",id:"http-api",level:2},{value:"Status",id:"status",level:3},{value:"Connection",id:"connection",level:3},{value:"Read",id:"read",level:3},{value:"Disconnection",id:"disconnection",level:3},{value:"COM/DCOM setup",id:"comdcom-setup",level:2},{value:"Background",id:"background",level:2},{value:"COM",id:"com",level:3},{value:"DCOM",id:"dcom",level:3},{value:"Windows settings (client)",id:"windows-settings-client",level:2},{value:"Client machine settings",id:"client-machine-settings",level:3},{value:"Test communication",id:"test-communication",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Firewall configuration",id:"firewall-configuration",level:3},{value:"OPCEnum tool",id:"opcenum-tool",level:3},{value:"RPC unavailable",id:"rpc-unavailable",level:4},{value:"Access denied",id:"access-denied",level:4},{value:"Server settings",id:"server-settings",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opchda-agent"},"OPCHDA agent"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"WORK IN PROGRESS")),(0,a.kt)("h2",{id:"http-api"},"HTTP API"),(0,a.kt)("h3",{id:"status"},"Status"),(0,a.kt)("h3",{id:"connection"},"Connection"),(0,a.kt)("h3",{id:"read"},"Read"),(0,a.kt)("h3",{id:"disconnection"},"Disconnection"),(0,a.kt)("h2",{id:"comdcom-setup"},"COM/DCOM setup"),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("h3",{id:"com"},"COM"),(0,a.kt)("p",null,"COM is the standard protocol for communication between objects located on the same computer but which are part of\ndifferent programs. The server is the object providing services, such as making data available. The client is an\napplication that uses the services provided by the server."),(0,a.kt)("h3",{id:"dcom"},"DCOM"),(0,a.kt)("p",null,"DCOM represents an expansion of COM functionality to allow access to objects on remote computers. This protocol allows\nstandardized data exchange between applications from industry, administrative offices and manufacturing. Previously, the\napplications that accessed the process data were tied to the access protocols of the communication network. The OPC\nstandard software interface allows devices and applications from different manufacturers to be combined in a uniform way."),(0,a.kt)("p",null,"The OPC client is an application that accesses process data, messages, and archives of an OPC server. Access is through\nthe OPC software interface. An OPC server is a program that provides standard software interface to read or write data.\nThe OPC server is the intermediate layer between the applications for handling process data, the various network\nprotocols and the interfaces for accessing these data. Only devices with operating systems based on Windows COM and\nDCOM technology can use the OPC software interface for data exchange."),(0,a.kt)("admonition",{title:"DCOM connectivity",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page gives some hints on how to set up a communication with COM/DCOM to an OPCHDA server. However, in industrial\ncontext, it is often the responsibility of the IT team to correctly set the permissions, firewall and Windows\nconfiguration.")),(0,a.kt)("h2",{id:"windows-settings-client"},"Windows settings (client)"),(0,a.kt)("h3",{id:"client-machine-settings"},"Client machine settings"),(0,a.kt)("p",null,"Follow these steps to enable COM/DCOM communications from the client. First, open the Component services, and access the\n",(0,a.kt)("em",{parentName:"p"},"Properties")," of the computer."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Component Services",src:n(9728).Z,width:"226",height:"187"})),(0,a.kt)("p",null,"Be sure to enable ",(0,a.kt)("em",{parentName:"p"},"Distributed COM")," on this computer."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Computer Properties",src:n(6054).Z,width:"373",height:"349"})),(0,a.kt)("p",null,"On the COM Security tab, edit default access permissions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"COM Security",src:n(1282).Z,width:"379",height:"381"})),(0,a.kt)("p",null,"On the Access permissions window, allow the following permissions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Local Launch"),(0,a.kt)("li",{parentName:"ul"},"Remote Launch"),(0,a.kt)("li",{parentName:"ul"},"Local Activation"),(0,a.kt)("li",{parentName:"ul"},"Remote Activation")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Access Permissions",src:n(5803).Z,width:"337",height:"105"})),(0,a.kt)("h3",{id:"test-communication"},"Test communication"),(0,a.kt)("p",null,"DCOM uses port 135 of the HDA server to exchange with the client. To do so, it is interesting to use the tnc command of\nthe Windows Powershell installed as standard. Below, a test that fails (because of the firewall) then a test that\nsucceeds:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tnc 35.180.44.30 -port 135")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test DCOM communication",src:n(5146).Z,width:"908",height:"666"})),(0,a.kt)("p",null,"If you have a communication problem, see the ",(0,a.kt)("a",{parentName:"p",href:"#firewall-configuration"},"firewall configuration section")," which is probably the source of the problem."),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"An OPCDA client program will communicate with the DA/HDA server with the IP address or hostname of the server followed\nby the \u201cprogId\u201d of the server. It will then have to be identified at the Windows level with a name and a password which\nare (by default) those of the user who launches the client program. This user must therefore be known on the HDA\nserver as well. You must therefore either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a user with the same password on the HDA server (assuming it is accessible)"),(0,a.kt)("li",{parentName:"ul"},"Be part of the same domain (so the user is accessible from all computers in the domain)")),(0,a.kt)("admonition",{title:"Important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The user must be a member of the ",(0,a.kt)("em",{parentName:"p"},"Distributed COM Users")," group")),(0,a.kt)("admonition",{title:"Service",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the program runs through a service (such as OIBus), go to the Service manager window, and right-click on the service.\nThen click on ",(0,a.kt)("em",{parentName:"p"},"Launch as user"),".")),(0,a.kt)("h3",{id:"firewall-configuration"},"Firewall configuration"),(0,a.kt)("p",null,"In case of communication issue, the most likely cause is the configuration of a firewall between the two computers\nand/or at the hosting company in the case of machines on the cloud. On a Windows server, it is possible to configure\nthe firewall by adding a rule on port 135."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Firewall Configuration",src:n(4675).Z,width:"1390",height:"785"})),(0,a.kt)("p",null,"In the case of a server hosted by Lightsail, there is an additional firewall in which a custom rule must be configured\nfor port 135."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Lightsail Firewall Configuration",src:n(1976).Z,width:"908",height:"442"})),(0,a.kt)("h3",{id:"opcenum-tool"},"OPCEnum tool"),(0,a.kt)("p",null,"The OPC Foundation has provided a tool to allow OPCHDA clients to locate servers on remote nodes, without having\ninformation about those servers in the local registry. This tool is called OPCEnum and is freely distributed by the OPC\nFoundation. The PI OPCHDA interface installation installs OPCEnum as well. The primary function of OPCEnum is to inform\nor request information from other instances of OPCEnum about existing OPCHDA Servers on the local system. When OPCEnum\nis installed, it grants Launch and Access DCOM permission to ",(0,a.kt)("em",{parentName:"p"},"Everyone")," and sets the ",(0,a.kt)("em",{parentName:"p"},"Authentication level")," to NONE.\nThis allows access to any user who can log on to the system. The permissions can be changed using ",(0,a.kt)("inlineCode",{parentName:"p"},"dcomcnfg.exe"),"."),(0,a.kt)("h4",{id:"rpc-unavailable"},"RPC unavailable"),(0,a.kt)("p",null,"If the RPC server is unavailable, try again testing COM/DCOM communication\n",(0,a.kt)("a",{parentName:"p",href:"#test-communication"},"testing COM/DCOM communication")," and check your firewall."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"RPC Unavailable",src:n(2962).Z,width:"908",height:"214"})),(0,a.kt)("h4",{id:"access-denied"},"Access denied"),(0,a.kt)("p",null,"Access rights can be diagnosed using the server security log. If the following error happens, check the user and its\npassword created on the HDA server and that the user is in the ",(0,a.kt)("em",{parentName:"p"},"Distributed COM Users")," group on the HDA server."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Access denied",src:n(4495).Z,width:"1370",height:"732"})),(0,a.kt)("h2",{id:"server-settings"},"Server settings"),(0,a.kt)("p",null,"Check on the server machine if DCOM is enabled for the OPC Server application by opening the ",(0,a.kt)("em",{parentName:"p"},"Component Service")," window."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Machine DCOM Configuration",src:n(3232).Z,width:"435",height:"163"})))}u.isMDXComponent=!0},1282:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OPCHDA-COM-security-cb9d95fd440940efb1d2d8cdfbb299f2.png"},4495:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OPCHDA-access-denied-8203f722add5f399a9753da6145f9888.png"},5803:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},9728:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OPCHDA-component-services-e7aac22d92b43939c8342abe1bd6e0cb.png"},6054:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OPCHDA-computer-properties-625a8f6e76f8c90e93bd7d605569aa9d.png"},1976:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OPCHDA-lightsail-firewall-56e27e7a446d930e611762f6acc024e2.png"},2962:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OPCHDA-rpc-unavailable-39f6b46627fd092a7d0199d5eb0578b3.png"},3232:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OPCHDA-server-DCOM-configuration-9382bd05033ce686321776a2881ed87a.png"},5146:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OPCHDA-test-communication-b3414b996a28224ba11df91530555870.png"},4675:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OPCHDA-windows-firewall-a635e64f88cea6c0a2d288aaa329b5f7.png"}}]);