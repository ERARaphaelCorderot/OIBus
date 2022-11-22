"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},i="OIConnect",l={unversionedId:"guide/north-connectors/oiconnect",id:"guide/north-connectors/oiconnect",title:"OIConnect",description:"OIConnect is a North connector used to send both files and JSON payloads to a REST API endpoint (one for JSON, one for",source:"@site/docs/guide/north-connectors/oiconnect.md",sourceDirName:"guide/north-connectors",slug:"/guide/north-connectors/oiconnect",permalink:"/fr/docs/guide/north-connectors/oiconnect",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guideSidebar",previous:{title:"OIAnalytics",permalink:"/fr/docs/guide/north-connectors/oianalytics"},next:{title:"File Writer",permalink:"/fr/docs/guide/north-connectors/file-writer"}},c={},p=[{value:"Connection",id:"connection",level:2},{value:"JSON payload",id:"json-payload",level:2},{value:"Query param",id:"query-param",level:2},{value:"Connecting two OIBus together",id:"connecting-two-oibus-together",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oiconnect"},"OIConnect"),(0,r.kt)("p",null,"OIConnect is a North connector used to send both files and JSON payloads to a REST API endpoint (one for JSON, one for\nfiles). The files are not transformed, they are sent as they are received by the North (compressed or not)."),(0,r.kt)("h2",{id:"connection"},"Connection"),(0,r.kt)("p",null,"To send data (JSON or files) to OIAnalytics, the following fields must be filled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host"),": the hostname of the SaaS application (example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://myapp.mycompany.com"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Values endpoint"),": the endpoint that will receive JSON payloads ",(0,r.kt)("a",{parentName:"li",href:"#json-payload"},"(see JSON payload section)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"File endpoint"),": the endpoint that will receive files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host"),": the hostname of the SaaS application (example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://myapp.mycompany.com"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication type"),": Basic, Bearer, Api key (custom)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," (for ",(0,r.kt)("em",{parentName:"li"},"Basic"),"): the username to connect to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," (for ",(0,r.kt)("em",{parentName:"li"},"Basic"),"): the password associated to the username"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token")," (for ",(0,r.kt)("em",{parentName:"li"},"Bearer"),"): The token to use in the HTTP header"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key")," (for ",(0,r.kt)("em",{parentName:"li"},"API key"),"): the name of the key field in the HTTP header"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret")," (for ",(0,r.kt)("em",{parentName:"li"},"API key"),"): the value associated to the key field in the HTTP header")),(0,r.kt)("h2",{id:"json-payload"},"JSON payload"),(0,r.kt)("p",null,"The target application must be able to manage the payload that OIConnect send. Here is a payload example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "2020-01-01T00:00:00.000Z",\n    "data": "{ value: 28 }",\n    "pointId": "MyPointId1"\n  }\n]\n')),(0,r.kt)("h2",{id:"query-param"},"Query param"),(0,r.kt)("p",null,"A query param is added to the HTTP query. It is called ",(0,r.kt)("em",{parentName:"p"},"name")," and can be used to identify the source of the data.\nIts value is in the form of ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"<oibus-name>:<north-connector-name>")),"."),(0,r.kt)("p",null,"Example of an HTTP query: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://1.2.3.4:2223/engine/addValues?name=MyOIBus:MyOIConnect")),(0,r.kt)("h2",{id:"connecting-two-oibus-together"},"Connecting two OIBus together"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/guide/advanced/oibus-to-oibus"},"this doc")," to learn more on how to connect one OIBus to another."))}u.isMDXComponent=!0}}]);