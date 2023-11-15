"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[8165],{4782:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=i(5893),r=i(1151);const a={sidebar_position:4},o="Cache and archive",c={id:"guide/engine/cache-and-archive",title:"Cache and archive",description:"All files and values are stored in local caches (one for each North connector). In case communication errors prevent",source:"@site/versioned_docs/version-v2/guide/engine/cache-and-archive.md",sourceDirName:"guide/engine",slug:"/guide/engine/cache-and-archive",permalink:"/docs/v2/guide/engine/cache-and-archive",draft:!1,unlisted:!1,tags:[],version:"v2",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guideSidebar",previous:{title:"Scan modes",permalink:"/docs/v2/guide/engine/scan-modes"},next:{title:"Proxy",permalink:"/docs/v2/guide/engine/proxy"}},s={},h=[{value:"Managing values",id:"managing-values",level:2},{value:"Managing files",id:"managing-files",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cache-and-archive",children:"Cache and archive"}),"\n",(0,t.jsx)(n.p,{children:"All files and values are stored in local caches (one for each North connector). In case communication errors prevent\nOIBus to send information to a North connector, they will be retried regularly, even after a machine restart."}),"\n",(0,t.jsx)(n.p,{children:"When the communication is restored, all files and values in the cache are forwarded to the North connector."}),"\n",(0,t.jsx)(n.admonition,{title:"Cache location",type:"tip",children:(0,t.jsxs)(n.p,{children:["The cache is located in the ",(0,t.jsx)(n.code,{children:"cache"})," folder (",(0,t.jsx)(n.code,{children:"data-stream"})," and ",(0,t.jsx)(n.code,{children:"history-query"}),") and each connector has its own folder in\nthe form ",(0,t.jsx)(n.code,{children:"north-id"})," or ",(0,t.jsx)(n.code,{children:"south-id"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"managing-values",children:"Managing values"}),"\n",(0,t.jsxs)(n.p,{children:["When a South connector retrieves values, they are sent to each activated North and gathered in batches, directly written\non disk for persistence in case of server crash (in the folder ",(0,t.jsx)(n.code,{children:"values"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["When getting values, the North cache first create a ",(0,t.jsx)(n.code,{children:"<random-string>.buffer.tmp file"})," file which contains a JSON with the\nvalues retrieved from the South. These files allow OIBus to persist values right away."]}),"\n",(0,t.jsxs)(n.p,{children:["Every 300ms, the North cache gather the ",(0,t.jsx)(n.code,{children:"<random-string>.buffer.tmp"})," files into a ",(0,t.jsx)(n.code,{children:"<random-string>.queue.tmp"})," single file\nand put it at the end of the connector queue."]}),"\n",(0,t.jsxs)(n.p,{children:["The queue is used at regular interval (parameter ",(0,t.jsx)(n.em,{children:"Send Interval"}),") to send values into the North target. The values can\nbe sent when a ",(0,t.jsx)(n.em,{children:"Group count"})," is reached."]}),"\n",(0,t.jsxs)(n.p,{children:["In case of failure (for example a network error), the size of the queue will grow. If ",(0,t.jsx)(n.em,{children:"Max group count"})," is reach, several\nqueue files will be gathered into a single ",(0,t.jsx)(n.code,{children:"<random-string>.compact.tmp"})," JSON file. These files will be on top of the queue\nto be sent once the network comes back online. Increasing the max chunk size (number of values in each chunk)\nwill increase the size of these compact files."]}),"\n",(0,t.jsx)(n.h2,{id:"managing-files",children:"Managing files"}),"\n",(0,t.jsxs)(n.p,{children:["When a South connector retrieves files, it copies each file in the North cache directory (in the folder ",(0,t.jsx)(n.code,{children:"files"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"If several North connectors are set and enabled, files will be duplicated in each North folder. In this case, make sure\nto have enough disk space to manage them."}),"\n",(0,t.jsxs)(n.p,{children:["To set up archive mode, and tune caching settings from North specific configuration, refer to\n",(0,t.jsx)(n.a,{href:"/docs/v2/guide/north-connectors/common-settings",children:"this page"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>o});var t=i(7294);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);