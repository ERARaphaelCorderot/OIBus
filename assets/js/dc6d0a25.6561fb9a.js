"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[5411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={displayed_sidebar:"guideSidebar",sidebar_position:1},o="Main concepts",s={unversionedId:"guide/index",id:"version-2.5/guide/index",title:"Main concepts",description:"Open-source, scalable and flexible",source:"@site/versioned_docs/version-2.5/guide/index.md",sourceDirName:"guide",slug:"/guide/",permalink:"/docs/guide/",draft:!1,tags:[],version:"2.5",sidebarPosition:1,frontMatter:{displayed_sidebar:"guideSidebar",sidebar_position:1},sidebar:"guideSidebar"},l={},c=[{value:"Open-source, scalable and flexible",id:"open-source-scalable-and-flexible",level:2},{value:"A streaming solution",id:"a-streaming-solution",level:2},{value:"Advanced capabilities",id:"advanced-capabilities",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"main-concepts"},"Main concepts"),(0,a.kt)("h2",{id:"open-source-scalable-and-flexible"},"Open-source, scalable and flexible"),(0,a.kt)("p",null,"OIBus is a lightweight and flexible data collection solution that simplifies data recovery in an industrial environment.\nIt collects data from a wide variety of sources encountered in the industry and transmits it to target applications\nwhether they are on-premises or in the cloud."),(0,a.kt)("p",null,"OIBus is an open-source solution which allows great flexibility to answer various use cases. Historically developed to\npower the OIAnalytics\xae solution, Optimistik offers and maintains since 2020 this solution under ",(0,a.kt)("a",{parentName:"p",href:"https://ec.europa.eu/info/european-union-public-licence_en"},"(EU-PL)\n")," open-source license. "),(0,a.kt)("p",null,"It is used by other solution providers who choose to join this initiative so that the collection of data in industry is\nno longer an obstacle to its digitization."),(0,a.kt)("h2",{id:"a-streaming-solution"},"A streaming solution"),(0,a.kt)("p",null,"OIBus is built in a modular way with a South (data collection from source systems), a North (transmission to target\nsystems) and an Engine (mainly in charge of configuration, orchestration and cache)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example banner",src:n(9756).Z,width:"1984",height:"838"})),(0,a.kt)("p",null,"This structure facilitates the scalability of the solution by concentrating most of the complexity in the Engine. Thus,\nthe development of North or South modules is made easier."),(0,a.kt)("h2",{id:"advanced-capabilities"},"Advanced capabilities"),(0,a.kt)("p",null,"OIBus already supports many industrial data sources and can be enriched thanks to its open-source code."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Industrial information systems"),": PLCs, supervisions, historians with various protocols (OPCUA-HA, OPCUA-HDA,\nOPC-HDA, TwinCAT ADS, ModBus\u2026)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Business information systems"),": Access to business information systems by SQL queries (Oracle, Microsoft SQL Server,\nPostgreSQL, MySQL, MariaDB, SQLite\u2026), files retrieval (xls, csv...)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IoT Sensors"),": Subscribe to IoT messaging services (MQTT, API...)")),(0,a.kt)("p",null,"OIBus also supports many application targets which can be extended as needed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SaaS Applications"),": OIAnalytics\xae, AWS S3, REST API\u2026"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IoT platforms"),": Subscription to IoT messaging services (MQTT, API...)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Databases"),": InfluxDB, TimeScale DB, MongoDB...")),(0,a.kt)("p",null,"In addition, OIBus has been designed to withstand large loads and is used on many industrial sites with data streams\nranging from 10 to 10,000 points with second-scale precision."),(0,a.kt)("p",null,"Overall, OIBus can manage:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reliable, secure and optimized communications"),(0,a.kt)("li",{parentName:"ul"},"Store and forward so as not to miss any data"),(0,a.kt)("li",{parentName:"ul"},"Communications secured by HTTPS"),(0,a.kt)("li",{parentName:"ul"},"Data compression"),(0,a.kt)("li",{parentName:"ul"},"Tunneling and proxy management")))}p.isMDXComponent=!0},9756:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/oibus-EN-0ce3af9f446a1e476e8355e9c51ecd5d.png"}}]);