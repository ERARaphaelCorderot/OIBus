"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=a,h=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},i="Health signal",l={unversionedId:"guide/engine/health-signal",id:"guide/engine/health-signal",title:"Health signal",description:"A message can be sent regularly to the logs or to an HTTP endpoint to give information about OIBus status.",source:"@site/docs/guide/engine/health-signal.md",sourceDirName:"guide/engine",slug:"/guide/engine/health-signal",permalink:"/OIBus/fr/docs/guide/engine/health-signal",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guideSidebar",previous:{title:"Proxy",permalink:"/OIBus/fr/docs/guide/engine/proxy"},next:{title:"External sources",permalink:"/OIBus/fr/docs/guide/engine/external-sources"}},s={},u=[{value:"Log",id:"log",level:2},{value:"HTTP",id:"http",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"health-signal"},"Health signal"),(0,a.kt)("p",null,"A message can be sent regularly to the logs or to an HTTP endpoint to give information about OIBus status."),(0,a.kt)("h2",{id:"log"},"Log"),(0,a.kt)("p",null,"When enabled, the health signal is sent to the logs with an ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," criticality, at the desired frequency. It will be\nsent to the appropriate channels (console, file, SQLite, loki...) according to the\n",(0,a.kt)("a",{parentName:"p",href:"/OIBus/fr/docs/guide/engine/logging-parameters"},"logging settings"),"."),(0,a.kt)("h2",{id:"http"},"HTTP"),(0,a.kt)("p",null,"It is also possible to send the OIBus health signal to a remote HTTP endpoint as a JSON payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "version": "OIBus version",\n      "architecture": "OS architecture",\n      "executable": "path to the OIBus binary",\n      "processId": "Process ID",\n      "hostname": "OS hostname",\n      "osRelease": "OS release",\n      "osType": "OS type",\n      "id": "OIBusName"\n    }\n')),(0,a.kt)("p",null,"To do so, activate the HTTP signal and fill in the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Host"),": the hostname or IP address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Endpoint"),": endpoint that will receive the JSON payload"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Frequency"),": time interval between HTTP signals (in s)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proxy"),": select a proxy to use if needed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Verbose"),": to have more details about the status of OIBus")),(0,a.kt)("p",null,"Also fill in the authentication section according to the authentication method used in the target endpoint."))}p.isMDXComponent=!0}}]);