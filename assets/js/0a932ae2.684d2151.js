"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[6454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var g=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},7614:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(5697),o=n.n(r);const i=e=>{let{children:t,link:n,color:r}=e;return a.createElement("div",{style:{marginBottom:"20px",marginTop:"10px",textAlign:"center"}},a.createElement("a",{rel:"nofollow",href:n,style:{backgroundColor:r,borderRadius:"10px",color:"#f5f5f5",padding:"10px",cursor:"pointer",minWidth:"10rem",textAlign:"center",display:"flex",justifyContent:"space-around"}},t))};i.propTypes={link:o().string.isRequired,color:o().string,children:o().object.isRequired},i.defaultProps={color:"#009ee0"};const l=i},4e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162),l=n(7614);const s={sidebar_position:6},u="Migrate to v3",c={unversionedId:"guide/installation/migrate",id:"guide/installation/migrate",title:"Migrate to v3",description:"Migrate from OIBus v1 and v2 into the new OIBus v3 version with our migration tool and a few manuel steps.",source:"@site/docs/guide/installation/migrate.mdx",sourceDirName:"guide/installation",slug:"/guide/installation/migrate",permalink:"/docs/guide/installation/migrate",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guideSidebar",previous:{title:"First access",permalink:"/docs/guide/installation/first-access"},next:{title:"Engine",permalink:"/docs/category/engine"}},p={},d=[{value:"Download link",id:"download-link",level:2},{value:"Download specific v3.0.0 OIBus version",id:"download-specific-v300-oibus-version",level:2},{value:"Migration steps",id:"migration-steps",level:2}],m={toc:d},f="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrate-to-v3"},"Migrate to v3"),(0,r.kt)("p",null,"Migrate from OIBus v1 and v2 into the new OIBus v3 version with our migration tool and a few manuel steps."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"WORK IN PROGRESS")),(0,r.kt)("h2",{id:"download-link"},"Download link"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,r.kt)(l.Z,{link:"https://github.com/OptimistikSAS/OIBus-upgrade-v3/releases/latest/download/oibus-upgrade-tool-win_x64.zip",mdxType:"DownloadButton"},"Migration tool (x64)")),(0,r.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)(l.Z,{link:"https://github.com/OptimistikSAS/OIBus-upgrade-v3/releases/latest/download/oibus-upgrade-tool-linux_x64.zip",mdxType:"DownloadButton"},"Migration tool (x64)")),(0,r.kt)(i.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,r.kt)(l.Z,{link:"https://github.com/OptimistikSAS/OIBus-upgrade-v3/releases/latest/download/oibus-upgrade-tool-macos_x64.zip",mdxType:"DownloadButton"},"Migration tool (x64)"))),(0,r.kt)("h2",{id:"download-specific-v300-oibus-version"},"Download specific v3.0.0 OIBus version"),(0,r.kt)("admonition",{title:"OIBus version",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The migration will work only with the 3.0.0 OIBus version. If you want to migrate to a later version, first install OIBus v3.0.0\nfrom one of the links below, and then update OIBus from v3.0.0 to a later version.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,r.kt)("div",{style:{display:"flex",justifyContent:"space-around"}},(0,r.kt)(l.Z,{link:"https://github.com/OptimistikSAS/OIBus/releases/download/v3.1.0-story-angular.0/oibus-setup-win_x64.exe",mdxType:"DownloadButton"},"OIBus 3.0 Windows installer (x64)"),(0,r.kt)(l.Z,{link:"https://github.com/OptimistikSAS/OIBus/releases/download/v3.1.0-story-angular.0/oibus-win_x64.zip",mdxType:"DownloadButton"},"OIBus 3.0 bat scripts (x64)"))),(0,r.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)(l.Z,{link:"https://github.com/OptimistikSAS/OIBus/releases/download/v3.1.0-story-angular.0/oibus-linux_x64.zip",mdxType:"DownloadButton"},"OIBus 3.0 (x64)")),(0,r.kt)(i.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,r.kt)(l.Z,{link:"https://github.com/OptimistikSAS/OIBus/releases/download/v3.1.0-story-angular.0/oibus-macos_x64.zip",mdxType:"DownloadButton"},"OIBus 3.0 (x64)"))),(0,r.kt)("h2",{id:"migration-steps"},"Migration steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the OIBus service."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can zip the data folder, or at least the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"oibus.json")," and its ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," as a backup"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"#download-specific-v3.0.0-oibus-version"},"OIBus v3.0.0"),". Be careful to specify the ",(0,r.kt)("strong",{parentName:"p"},"same data folder"),". Check\nthat OIBus v3 run properly by login on ",(0,r.kt)("inlineCode",{parentName:"p"},"http::localhost:2223")," with admin / pass. If everything works, go on with the next step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop OIBus v3.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the migration tool in the OIBus ",(0,r.kt)("strong",{parentName:"p"},"binary folder"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the OIBus migration tool. Be sure to specify the appropriate data folder."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./oibus-upgrade --config ./data-folder\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./build/bin/macos-arm64/oibus-upgrade --config ./data-folder\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Start OIBus v3.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The file ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade-journal.log")," contains the logs of the migration.")))}b.isMDXComponent=!0}}]);