"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[437],{6617:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(5893),o=s(1151);const t={sidebar_position:2},r="Logging parameters",l={id:"guide/engine/logging-parameters",title:"Logging parameters",description:"OIBus logs have five levels (from the most to the less critical):",source:"@site/versioned_docs/version-v2/guide/engine/logging-parameters.md",sourceDirName:"guide/engine",slug:"/guide/engine/logging-parameters",permalink:"/zh/docs/v2/guide/engine/logging-parameters",draft:!1,unlisted:!1,tags:[],version:"v2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"OIBus access",permalink:"/zh/docs/v2/guide/engine/access"},next:{title:"Scan modes",permalink:"/zh/docs/v2/guide/engine/scan-modes"}},a={},d=[{value:"Console",id:"console",level:2},{value:"File",id:"file",level:2},{value:"SQLite",id:"sqlite",level:2},{value:"Loki",id:"loki",level:2}];function c(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"logging-parameters",children:"Logging parameters"}),"\n",(0,i.jsx)(n.p,{children:"OIBus logs have five levels (from the most to the less critical):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Error"}),"\n",(0,i.jsx)(n.li,{children:"Warning"}),"\n",(0,i.jsx)(n.li,{children:"Info"}),"\n",(0,i.jsx)(n.li,{children:"Debug"}),"\n",(0,i.jsx)(n.li,{children:"Trace"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Activating ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Info"})})," logs will also activate ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Warning"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Error"})})," logs. Activating ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Error"})})," logs will only\ndisplay ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Error"})})," logs.\nObviously, having ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Trace"})})," logs activated will result in extremely verbose logs. Use ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Trace"})})," and ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Debug"})})," for\ntroubleshooting purposes."]}),"\n",(0,i.jsx)(n.h2,{id:"console",children:"Console"}),"\n",(0,i.jsxs)(n.p,{children:["This section displays the logs in the Console, alongside values if a ",(0,i.jsx)(n.a,{href:"../north-connectors/console",children:"North Console connector\n"})," is used."]}),"\n",(0,i.jsx)(n.h2,{id:"file",children:"File"}),"\n",(0,i.jsx)(n.p,{children:"To store logs in one or several files. You can choose the file maximum size and the number of files to roll logs."}),"\n",(0,i.jsx)(n.h2,{id:"sqlite",children:"SQLite"}),"\n",(0,i.jsxs)(n.p,{children:["To store logs in a local SQLite database to be displayed in the ",(0,i.jsx)(n.em,{children:"Logs tab"})," of OIBus."]}),"\n",(0,i.jsx)(n.h2,{id:"loki",children:"Loki"}),"\n",(0,i.jsxs)(n.p,{children:["To send the logs to a remote ",(0,i.jsx)(n.em,{children:"loki"})," instance. Logs are sent to the specified host, in batches a tunable time period\n(default is 60s). You can change this period to have smaller or bigger batches of logs."]}),"\n",(0,i.jsxs)(n.p,{children:["Loki can be accessed directly by ",(0,i.jsx)(n.em,{children:"username"})," and ",(0,i.jsx)(n.em,{children:"password"})," using Basic Auth. If a JWT token should be retrieved first,\nfill the ",(0,i.jsx)(n.em,{children:"Token address"})," to use to retrieve the token, using Basic Auth (with the username and password).\nThe token will be used by OIBus to send logs to the remote ",(0,i.jsx)(n.em,{children:"loki"})," instance. Keep the token address empty if you\ndon't use JWT token authentication."]}),"\n",(0,i.jsx)(n.admonition,{title:"Loki logs with multiple OIBus",type:"caution",children:(0,i.jsx)(n.p,{children:"Logs sent to loki are identified by the OIBus engine name. Be sure to update this name appropriately to find your OIBus\nlogs in your loki instance."})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(7294);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);