"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Common North settings",c={unversionedId:"guide/north-connectors/common-settings",id:"guide/north-connectors/common-settings",title:"Common North settings",description:"Add a connector",source:"@site/docs/guide/north-connectors/common-settings.md",sourceDirName:"guide/north-connectors",slug:"/guide/north-connectors/common-settings",permalink:"/OIBus/docs/guide/north-connectors/common-settings",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guideSidebar",previous:{title:"North connectors",permalink:"/OIBus/docs/category/north-connectors"},next:{title:"OIAnalytics",permalink:"/OIBus/docs/guide/north-connectors/oianalytics"}},s={},l=[{value:"Add a connector",id:"add-a-connector",level:2},{value:"Main settings",id:"main-settings",level:2},{value:"Caching",id:"caching",level:2},{value:"Subscription",id:"subscription",level:2},{value:"Network",id:"network",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-north-settings"},"Common North settings"),(0,r.kt)("h2",{id:"add-a-connector"},"Add a connector"),(0,r.kt)("p",null,"To add a North connector, click on the Engine menu, and select ",(0,r.kt)("em",{parentName:"p"},"Add North"),". Select one of the available North connector\ntypes, name the connector and validate by clicking on ",(0,r.kt)("em",{parentName:"p"},"Add"),"."),(0,r.kt)("h2",{id:"main-settings"},"Main settings"),(0,r.kt)("p",null,"The window may change depending on the selected type of connector. However, some concepts are the same. The\nnavigation sub-menu (the grey bar at the page top) allows you to edit the connector name (top left) or to access the\nstatus of the connector (top right)."),(0,r.kt)("p",null,"The status window displays several metrics, according to the connector."),(0,r.kt)("p",null,"The connector can be enabled or disabled from the toggle action, at the top of the ",(0,r.kt)("strong",{parentName:"p"},"General settings")," section."),(0,r.kt)("h2",{id:"caching"},"Caching"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/OIBus/docs/guide/engine/cache-and-archive"},"this page")," to understand how and why OIBus manages caches."),(0,r.kt)("p",null,"The caching section allow OIBus to better manage network congestion:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Send interval"),": time to wait between successive sending of data to a North (in ms)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Retry interval"),": time to wait before retrying to send data to a North after a failure (in ms)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Group count"),": Instead of waiting for ",(0,r.kt)("em",{parentName:"li"},"Send interval"),", trigger the North connector to send the data as soon as the\nnumber of data to send reach this number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max group count"),": When the connection is lost for some time, the cache of a north connector can store many data.\nTo avoid sending them all at once, this field can be set to split the data to send in several smaller chunks of data,\nseparated by ",(0,r.kt)("em",{parentName:"li"},"Send interval"),".")),(0,r.kt)("p",null,"It is also possible to enable archive mode, and to set a retention duration. With archive mode enabled, files will be\nkept in the ",(0,r.kt)("inlineCode",{parentName:"p"},"archive")," subfolder. Otherwise, they are deleted once sent to the North application."),(0,r.kt)("admonition",{title:"Disk space",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you choose to keep files indefinitely, be careful to manually clear the archive folder from time to time. Otherwise,\nthe archive folder may use a lot of disk space.")),(0,r.kt)("h2",{id:"subscription"},"Subscription"),(0,r.kt)("p",null,"By default, a North connector receives data from all activated South connectors. It is possible to subscribe a\nNorth connector to a specific South (or list of South connectors). In the Subscription section, add a South connector.\nOnly data from this South connector will be added to the cache of this North connector, all other South data will be\ndiscarded or sent to other North connectors if they are active."),(0,r.kt)("admonition",{title:"No data for disabled North",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If a North connector is disabled, it won't store any data in its cache.")),(0,r.kt)("h2",{id:"network"},"Network"),(0,r.kt)("p",null,"If some proxies are defined in the ",(0,r.kt)("a",{parentName:"p",href:"/OIBus/docs/guide/engine/proxy"},"Engine section"),", it is possible to select a proxy from the\nNorth connector to use when an HTTP query occurs. This setting is only possible for HTTP-compatible North connectors\n(OIAnalytics, OIConnect)."))}p.isMDXComponent=!0}}]);