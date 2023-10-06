"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[5437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||i;return n?o.createElement(m,r(r({ref:t},l),{},{components:n})):o.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},r="OIBus to OIBus communication",s={unversionedId:"guide/advanced/oibus-to-oibus",id:"guide/advanced/oibus-to-oibus",title:"OIBus to OIBus communication",description:"Context",source:"@site/docs/guide/advanced/oibus-to-oibus.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/oibus-to-oibus",permalink:"/docs/guide/advanced/oibus-to-oibus",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"OIBus security",permalink:"/docs/guide/advanced/oibus-security"},next:{title:"Data rate estimation and cache sizing",permalink:"/docs/guide/advanced/oibus-data-rate"}},c={},u=[{value:"Context",id:"context",level:2},{value:"Data stream set-up",id:"data-stream-set-up",level:2},{value:"Set up a North connector OIConnect in OIBus1",id:"set-up-a-north-connector-oiconnect-in-oibus1",level:3},{value:"Set up an External source in OIBus2",id:"set-up-an-external-source-in-oibus2",level:3},{value:"Logs",id:"logs",level:2},{value:"Loki through another OIBus",id:"loki-through-another-oibus",level:3}],l={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oibus-to-oibus-communication"},"OIBus to OIBus communication"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Often, PLCs are exclusively reachable within a restricted network known as the Operational Technology (OT) domain which\noften coexists either within or adjacent to another network, the Information Technology (IT) domain, with datacenters and\ncloud systems. OT machines, for security reasons, don't have access to internet. OIBus may need an internet access. There\nare two viable approaches for accessing data within these networks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install OIBus in the IT domain, and allow connections of PLCs in OT from the OIBus Machine. In this approach, you permit\nconnections to each data source from the OIBus machine, which resides in the IT (external to the OT) through the firewall."),(0,a.kt)("li",{parentName:"ul"},"Installing OIBus in both networks: The second option involves setting up one instance of OIBus within the OT and another\nwithin the IT. This enables the management of a single communication link between the two networks.")),(0,a.kt)("p",null,"The first option is acceptable when you have only one machine available for OIBus installation, but it entails a more\ncomplex network configuration and carries the risk of exposing your machines to potential security threats. The second\noption is a preferable choice. With this approach, the initial OIBus instance in the OT, referred to as OIBus1, can\naccess machines within the same network and transmit data to the office network via a single firewall-permitted connection\n(from OIBus1 to OIBus2)."),(0,a.kt)("p",null,"Let's delve into the details of setting up this communication method."),(0,a.kt)("h2",{id:"data-stream-set-up"},"Data stream set-up"),(0,a.kt)("h3",{id:"set-up-a-north-connector-oiconnect-in-oibus1"},"Set up a North connector OIConnect in OIBus1"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guide/north-connectors/oibus"},"OIBus North connector")," proves highly valuable when one OIBus instance lacks direct internet\naccess, often due to isolation within an industrial network. However, it can establish communication with another OIBus\nlocated in a different network that does have internet access."),(0,a.kt)("p",null,"For instance, the host address might take the form of ",(0,a.kt)("a",{parentName:"p",href:"http://1.2.3.4:2223"},"http://1.2.3.4:2223"),", (IP address and port of OIBus2). It's crucial\nto ensure that remote connections are authorized in the settings of the second OIBus Engine, specifically within the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/engine/ip-filters"},"IP Filter section"),". Additionally, the appropriate username and password should be utilized. In\nthis case, the OIBus default username and password (admin and pass) should be employed for authentication purposes."),(0,a.kt)("h3",{id:"set-up-an-external-source-in-oibus2"},"Set up an External source in OIBus2"),(0,a.kt)("p",null,"On OIBus2, you must now define an ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/engine/external-sources"},"External Source"),". If no external source is set in OIBus2,\ndata sent by OIBus1 to OIBus2 will be discarded. "),(0,a.kt)("p",null,"The name of this external source should adhere to the syntax of the name query param, for instance, ",(0,a.kt)("inlineCode",{parentName:"p"},"MyOIBus:MyOIConnect"),"."),(0,a.kt)("p",null,"With the external source defined, the North connector of OIBus2 can then proceed to subscribe to this specific external source,\nenabling the exchange of data between the two OIBus instances."),(0,a.kt)("h2",{id:"logs"},"Logs"),(0,a.kt)("h3",{id:"loki-through-another-oibus"},"Loki through another OIBus"),(0,a.kt)("p",null,"To transmit logs to OIBus2 from OIBus1, navigate to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/engine/engine-settings"},"Engine page")," within the ",(0,a.kt)("em",{parentName:"p"},"Loki logs"),"\nsection and specify OIBus2's address in the ",(0,a.kt)("strong",{parentName:"p"},"Host")," field, along with its associated endpoint: ",(0,a.kt)("a",{parentName:"p",href:"http://1.2.3.4:2223/logs"},"http://1.2.3.4:2223/logs"),".\nIt's important to note that OIBus2 utilizes Basic Authentication. Keep the token address field empty and provide the username\nand password credentials used to connect to OIBus2."),(0,a.kt)("p",null,"In cases where the loki level is set to ",(0,a.kt)("strong",{parentName:"p"},"info")," in OIBus1, only logs with ",(0,a.kt)("strong",{parentName:"p"},"info")," level and above will be forwarded to\nOIBus2. "),(0,a.kt)("p",null,"In OIBus2, if the console and file levels are configured to ",(0,a.kt)("strong",{parentName:"p"},"error")," only logs with ",(0,a.kt)("strong",{parentName:"p"},"error")," level or higher will be\nrecorded in the console and file. However, if the loki level in OIBus2 is also set to ",(0,a.kt)("strong",{parentName:"p"},"info")," all the logs received\nfrom OIBus1 will be sent to this loki endpoint (set in OIBus2)."))}h.isMDXComponent=!0}}]);