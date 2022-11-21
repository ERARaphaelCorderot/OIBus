"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[682],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4451:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:7},i="External sources",s={unversionedId:"guide/engine/external-sources",id:"guide/engine/external-sources",title:"External sources",description:"Declaring an external source is useful when values and files are sent directly to OIBus endpoints /engine/addValues",source:"@site/docs/guide/engine/external-sources.md",sourceDirName:"guide/engine",slug:"/guide/engine/external-sources",permalink:"/OIBus/fr/docs/guide/engine/external-sources",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guideSidebar",previous:{title:"Health signal",permalink:"/OIBus/fr/docs/guide/engine/health-signal"},next:{title:"South connectors",permalink:"/OIBus/fr/docs/category/south-connectors"}},c={},u=[],l={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"external-sources"},"External sources"),(0,o.kt)("p",null,"Declaring an external source is useful when values and files are sent directly to OIBus endpoints ",(0,o.kt)("inlineCode",{parentName:"p"},"/engine/addValues"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"/engine/addFile"),". These endpoints require the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," query param to identify the source. When it comes from another\nOIBus with ",(0,o.kt)("a",{parentName:"p",href:"/OIBus/fr/docs/guide/north-connectors/oiconnect"},"OIConnect"),", the name can be for example ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFirstOIBus:MyOIConnect"),"."),(0,o.kt)("p",null,"A North connector can only subscribe to external sources of data, explicitly defined in the ",(0,o.kt)("strong",{parentName:"p"},"External sources"),"\nsection."),(0,o.kt)("p",null,"To do so, click on the add button and fill the ID of the newly created external source with ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFirstOIBus:MyOIConnect"),"\nwhere MyFirstOIBus is the name of the source OIBus, and MyOIConnect is the name given to the North connector of the\nsource OIBus."))}p.isMDXComponent=!0}}]);