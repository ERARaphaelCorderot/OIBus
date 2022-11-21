"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[135],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(t),p=a,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:4},o="Cache and archive",c={unversionedId:"guide/engine/cache-and-archive",id:"guide/engine/cache-and-archive",title:"Cache and archive",description:"All files and values are stored in local caches (one for each North connector). In case communication errors prevent",source:"@site/docs/guide/engine/cache-and-archive.md",sourceDirName:"guide/engine",slug:"/guide/engine/cache-and-archive",permalink:"/OIBus/docs/guide/engine/cache-and-archive",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guideSidebar",previous:{title:"Scan modes",permalink:"/OIBus/docs/guide/engine/scan-modes"},next:{title:"Proxy",permalink:"/OIBus/docs/guide/engine/proxy"}},l={},s=[{value:"Managing values",id:"managing-values",level:2},{value:"Managing files",id:"managing-files",level:2}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cache-and-archive"},"Cache and archive"),(0,a.kt)("p",null,"All files and values are stored in local caches (one for each North connector). In case communication errors prevent\nOIBus to send information to a North connector, they will be retried regularly, even after a machine restart."),(0,a.kt)("p",null,"When the communication is restored, all files and values in the cache are forwarded to the North connector. "),(0,a.kt)("admonition",{title:"Cache location",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The cache is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cache")," folder (",(0,a.kt)("inlineCode",{parentName:"p"},"data-stream")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"history-query"),") and each connector has its own folder in\nthe form ",(0,a.kt)("inlineCode",{parentName:"p"},"north-id")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"south-id"),".")),(0,a.kt)("h2",{id:"managing-values"},"Managing values"),(0,a.kt)("p",null,"When a South connector retrieves values, they are sent to each activated North and gathered in batches, directly written\non disk for persistence in case of server crash (in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"values"),").\nThe values are flush in the queue (in-memory buffer) and persisted into chunk files on either one of the following conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The max buffer size is reached (default is 250)"),(0,a.kt)("li",{parentName:"ul"},"The buffer flush interval is reached (default is 300 ms)")),(0,a.kt)("p",null,"The queue is used at regular interval (parameter ",(0,a.kt)("em",{parentName:"p"},"Send Interval"),") to send values into the North. The values can be sent\nwhen a ",(0,a.kt)("em",{parentName:"p"},"Group count")," is reached. The max chunk size (number of values in each chunk, parameter ",(0,a.kt)("em",{parentName:"p"},"Max group count"),") can\nbe set to limit the size of the payload when taking back the network activity."),(0,a.kt)("h2",{id:"managing-files"},"Managing files"),(0,a.kt)("p",null,"When a South connector retrieves files, it copies each file in the North cache directory (in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"files"),")."),(0,a.kt)("p",null,"If several North connectors are set and enabled, files will be duplicated in each North folder. In this case, make sure\nto have enough disk space to manage them."),(0,a.kt)("p",null,"To set up archive mode, and tune caching settings from North specific configuration, refer to\n",(0,a.kt)("a",{parentName:"p",href:"/OIBus/docs/guide/north-connectors/common-settings"},"this page"),"."))}d.isMDXComponent=!0}}]);