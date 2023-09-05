"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[2226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var v=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},7614:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(5697),l=n.n(a);const i=e=>{let{children:t,link:n,color:a}=e;return r.createElement("div",{style:{marginBottom:"20px",marginTop:"10px",textAlign:"center"}},r.createElement("a",{rel:"nofollow",href:n,style:{backgroundColor:a,borderRadius:"10px",color:"#f5f5f5",padding:"10px",cursor:"pointer",minWidth:"10rem",textAlign:"center",display:"flex",justifyContent:"space-around"}},t))};i.propTypes={link:l().string.isRequired,color:l().string,children:l().object.isRequired},i.defaultProps={color:"#009ee0"};const o=i},584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),i=n(5162),o=n(7614),s=n(4147);const u={sidebar_position:2},c="Requirements and download",d={unversionedId:"guide/installation/installation",id:"guide/installation/installation",title:"Requirements and download",description:"Let's install OIBus in less than 2 minutes.",source:"@site/docs/guide/installation/installation.mdx",sourceDirName:"guide/installation",slug:"/guide/installation/",permalink:"/docs/guide/installation/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"Installation",permalink:"/docs/category/installation"},next:{title:"Windows",permalink:"/docs/guide/installation/windows"}},p={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Download links",id:"download-links",level:2}],f={toc:m},b="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"requirements-and-download"},"Requirements and download"),(0,a.kt)("p",null,"Let's install OIBus in less than 2 minutes."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To operate, OIBus must be installed on an environment with the following minimum characteristics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RAM: 2GB minimum"),". OIBus may require more or less RAM depending on your configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disk space: 200 MB"),". For the application. It is however recommended to have extra space (several GB, depending on\nyour data stream) to store the collected data in the cache if an upstream network failure occurs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Admin rights")," on the environment to install OIBus and register it as a service (for Windows and Linux)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modern web browser")," (IE not supported). Used to access the OIBus configuration interface. The browser can be on the\ntargeted computer or on another, provided you have configured the ",(0,a.kt)("a",{parentName:"li",href:"/docs/guide/engine/ip-filters"},"necessary access"),".")),(0,a.kt)("h2",{id:"download-links"},"Download links"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("div",{style:{display:"flex",justifyContent:"space-around"}},(0,a.kt)(o.Z,{link:`https://github.com/OptimistikSAS/OIBus/releases/download/v${s.i8}/oibus-setup-win_x64-v${s.i8}.exe`,mdxType:"DownloadButton"},(0,a.kt)("div",null,(0,a.kt)("div",null,`OIBus v${s.i8} (installer)`),(0,a.kt)("div",null,"Windows (x64)"))),(0,a.kt)(o.Z,{link:`https://github.com/OptimistikSAS/OIBus/releases/download/v${s.i8}/oibus-win_x64-v${s.i8}.zip`,mdxType:"DownloadButton"},(0,a.kt)("div",null,(0,a.kt)("div",null,`OIBus v${s.i8} (zip)`),(0,a.kt)("div",null,"Windows (x64)")))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"space-around"}},(0,a.kt)("a",{href:"./windows"}," Installation ")))),(0,a.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("div",{style:{display:"flex",justifyContent:"space-around"}},(0,a.kt)(o.Z,{link:`https://github.com/OptimistikSAS/OIBus/releases/download/v${s.i8}/oibus-linux_x64-v${s.i8}.zip`,mdxType:"DownloadButton"},(0,a.kt)("div",null,(0,a.kt)("div",null,`OIBus v${s.i8}`),(0,a.kt)("div",null,"Linux (x64)")))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"space-around"}},(0,a.kt)("a",{href:"./linux"}," Installation ")))),(0,a.kt)(i.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("div",{style:{display:"flex",justifyContent:"space-around"}},(0,a.kt)(o.Z,{link:`https://github.com/OptimistikSAS/OIBus/releases/download/v${s.i8}/oibus-macos_x64-v${s.i8}.zip`,mdxType:"DownloadButton"},(0,a.kt)("div",null,(0,a.kt)("div",null,`OIBus v${s.i8}`),(0,a.kt)("div",null,"MacOS (Intel chip)")))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"space-around"}},(0,a.kt)("a",{href:"./macos"}," Installation "))))))}v.isMDXComponent=!0},4147:e=>{e.exports={i8:"3.0.0"}}}]);