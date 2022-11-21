"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[240],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:6},s="Console",a={unversionedId:"guide/north-connectors/console",id:"guide/north-connectors/console",title:"Console",description:"The console is mainly used for development or troubleshooting purposes.",source:"@site/docs/guide/north-connectors/console.md",sourceDirName:"guide/north-connectors",slug:"/guide/north-connectors/console",permalink:"/OIBus/fr/docs/guide/north-connectors/console",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guideSidebar",previous:{title:"AWS S3",permalink:"/OIBus/fr/docs/guide/north-connectors/aws-s3"},next:{title:"Advanced",permalink:"/OIBus/fr/docs/category/advanced"}},l={},c=[{value:"Display Console in production",id:"display-console-in-production",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"console"},"Console"),(0,o.kt)("p",null,"The console is mainly used for development or troubleshooting purposes."),(0,o.kt)("p",null,"It only accepts one option: ",(0,o.kt)("strong",{parentName:"p"},"verbose"),". When verbose is enabled, received data are fully displayed in tables in\nthe console. Otherwise, only the number of values received by this North connector is displayed."),(0,o.kt)("h2",{id:"display-console-in-production"},"Display Console in production"),(0,o.kt)("p",null,"In production, specially on Windows or Linux, you may have OIBus running as a service. In this case, to see the\nconsole output:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stop the service"),(0,o.kt)("li",{parentName:"ul"},"Run OIBus from a terminal with admin access from its installation folder:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On Windows: run ",(0,o.kt)("inlineCode",{parentName:"li"},"go.bat")," script "),(0,o.kt)("li",{parentName:"ul"},"On Linux: run ",(0,o.kt)("inlineCode",{parentName:"li"},"go.sh")," script")))))}p.isMDXComponent=!0}}]);