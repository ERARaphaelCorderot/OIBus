"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[7839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},a="Scan modes",s={unversionedId:"guide/engine/scan-modes",id:"guide/engine/scan-modes",title:"Scan modes",description:"Cron-defined scan modes are utilized in OIBus to retrieve or send data from",source:"@site/docs/guide/engine/scan-modes.md",sourceDirName:"guide/engine",slug:"/guide/engine/scan-modes",permalink:"/docs/guide/engine/scan-modes",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"OIBus Settings",permalink:"/docs/guide/engine/engine-settings"},next:{title:"IP Filters",permalink:"/docs/guide/engine/ip-filters"}},c={},u=[],l={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scan-modes"},"Scan modes"),(0,o.kt)("p",null,"Cron-defined scan modes are utilized in OIBus to retrieve or send data from\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/south-connectors/common-settings"},"South connectors")," at specific dates and intervals."),(0,o.kt)("p",null,"There are six default scan modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every second: (* * * * * *)"),(0,o.kt)("li",{parentName:"ul"},"Every 10 seconds: (/10 * * * *)"),(0,o.kt)("li",{parentName:"ul"},"Every minute: (0 * * * * *), running every minute at precisely 0 seconds."),(0,o.kt)("li",{parentName:"ul"},"Every 10 minutes: (0 /10 * * *), running every 10 minutes at precisely 0 seconds."),(0,o.kt)("li",{parentName:"ul"},"Every hour: (0 0 * * * *), running every hour at precisely 0 seconds."),(0,o.kt)("li",{parentName:"ul"},"Every 24 hours: (0 0 0 * * *), running every day at midnight exactly.")),(0,o.kt)("p",null,"You have the option to create your custom scan modes by adding one, assigning it a name, and specifying the Cron expression.\nYou can test your Cron expression using the following website: ",(0,o.kt)("a",{parentName:"p",href:"https://crontab.cronhub.io/"},"https://crontab.cronhub.io/"),"."))}p.isMDXComponent=!0}}]);