"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[240],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:6},a="Console",s={unversionedId:"guide/north-connectors/console",id:"guide/north-connectors/console",title:"Console",description:"The console is mainly used for development or troubleshooting purposes.",source:"@site/docs/guide/north-connectors/console.md",sourceDirName:"guide/north-connectors",slug:"/guide/north-connectors/console",permalink:"/docs/guide/north-connectors/console",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guideSidebar",previous:{title:"AWS S3",permalink:"/docs/guide/north-connectors/aws-s3"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},l={},c=[{value:"Display Console in production",id:"display-console-in-production",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"console"},"Console"),(0,r.kt)("p",null,"The console is mainly used for development or troubleshooting purposes."),(0,r.kt)("p",null,"It only accepts one option: ",(0,r.kt)("strong",{parentName:"p"},"verbose"),". When verbose is enabled, received data are fully displayed in tables in\nthe console. Otherwise, only the number of values received by this North connector is displayed."),(0,r.kt)("h2",{id:"display-console-in-production"},"Display Console in production"),(0,r.kt)("p",null,"In production, specially on Windows or Linux, you may have OIBus running as a service. In this case, to see the\nconsole output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stop the service"),(0,r.kt)("li",{parentName:"ul"},"Run OIBus from a terminal with admin access from its installation folder:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Windows: run ",(0,r.kt)("inlineCode",{parentName:"li"},"go.bat")," script "),(0,r.kt)("li",{parentName:"ul"},"On Linux: run ",(0,r.kt)("inlineCode",{parentName:"li"},"go.sh")," script")))))}p.isMDXComponent=!0}}]);