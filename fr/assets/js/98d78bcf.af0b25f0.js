"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Logging parameters",s={unversionedId:"guide/engine/logging-parameters",id:"guide/engine/logging-parameters",title:"Logging parameters",description:"OIBus logs have five levels (from the most to the less critical):",source:"@site/docs/guide/engine/logging-parameters.md",sourceDirName:"guide/engine",slug:"/guide/engine/logging-parameters",permalink:"/fr/docs/guide/engine/logging-parameters",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"OIBus access",permalink:"/fr/docs/guide/engine/access"},next:{title:"Scan modes",permalink:"/fr/docs/guide/engine/scan-modes"}},l={},p=[{value:"Console",id:"console",level:2},{value:"File",id:"file",level:2},{value:"SQLite",id:"sqlite",level:2},{value:"Loki",id:"loki",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging-parameters"},"Logging parameters"),(0,o.kt)("p",null,"OIBus logs have five levels (from the most to the less critical):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Error"),(0,o.kt)("li",{parentName:"ul"},"Warning"),(0,o.kt)("li",{parentName:"ul"},"Info"),(0,o.kt)("li",{parentName:"ul"},"Debug"),(0,o.kt)("li",{parentName:"ul"},"Trace")),(0,o.kt)("p",null,"Activating ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Info"))," logs will also activate ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Warning"))," and ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Error"))," logs. Activating ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Error"))," logs will only\ndisplay ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Error"))," logs.\nObviously, having ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Trace"))," logs activated will result in extremely verbose logs. Use ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Trace"))," and ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Debug"))," for\ntroubleshooting purposes."),(0,o.kt)("h2",{id:"console"},"Console"),(0,o.kt)("p",null,"This section displays the logs in the Console, alongside values if a ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/guide/north-connectors/console"},"North Console connector\n")," is used. "),(0,o.kt)("h2",{id:"file"},"File"),(0,o.kt)("p",null,"To store logs in one or several files. You can choose the file maximum size and the number of files to roll logs."),(0,o.kt)("h2",{id:"sqlite"},"SQLite"),(0,o.kt)("p",null,"To store logs in a local SQLite database to be displayed in the ",(0,o.kt)("em",{parentName:"p"},"Logs tab")," of OIBus."),(0,o.kt)("h2",{id:"loki"},"Loki"),(0,o.kt)("p",null,"To send the logs to a remote ",(0,o.kt)("em",{parentName:"p"},"loki")," instance. Logs are sent to the specified host, in batches a tunable time period\n(default is 60s). You can change this period to have smaller or bigger batches of logs."),(0,o.kt)("p",null,"Loki can be accessed directly by ",(0,o.kt)("em",{parentName:"p"},"username")," and ",(0,o.kt)("em",{parentName:"p"},"password")," using Basic Auth. If a JWT token should be retrieved first,\nfill the ",(0,o.kt)("em",{parentName:"p"},"Token address")," to use to retrieve the token, using Basic Auth (with the username and password).\nThe token will be used by OIBus to send logs to the remote ",(0,o.kt)("em",{parentName:"p"},"loki")," instance. Keep the token address empty if you\ndon't use JWT token authentication."),(0,o.kt)("admonition",{title:"Loki logs with multiple OIBus",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Logs sent to loki are identified by the OIBus engine name. Be sure to update this name appropriately to find your OIBus\nlogs in your loki instance.")))}c.isMDXComponent=!0}}]);