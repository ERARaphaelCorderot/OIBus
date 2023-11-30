"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[556],{3047:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var i=n(5893),u=n(1151);const o={sidebar_position:2},r="OIBus \u81f3 OIBus \u901a\u4fe1",t={id:"guide/advanced/oibus-to-oibus",title:"OIBus \u81f3 OIBus \u901a\u4fe1",description:"\u4e0a\u4e0b\u6587",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guide/advanced/oibus-to-oibus.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/oibus-to-oibus",permalink:"/zh/docs/guide/advanced/oibus-to-oibus",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"OIBus \u5b89\u5168",permalink:"/zh/docs/guide/advanced/oibus-security"},next:{title:"Data rate estimation and cache sizing",permalink:"/zh/docs/guide/advanced/oibus-data-rate"}},d={},c=[{value:"\u4e0a\u4e0b\u6587",id:"\u4e0a\u4e0b\u6587",level:2},{value:"\u6570\u636e\u6d41\u8bbe\u7f6e",id:"\u6570\u636e\u6d41\u8bbe\u7f6e",level:2},{value:"\u5728 OIBus1 \u4e2d\u8bbe\u7f6e\u5317\u5411\u8fde\u63a5\u5668 OIConnect",id:"\u5728-oibus1-\u4e2d\u8bbe\u7f6e\u5317\u5411\u8fde\u63a5\u5668-oiconnect",level:3},{value:"\u5728 OIBus2 \u4e2d\u8bbe\u7f6e\u5916\u90e8\u6765\u6e90",id:"\u5728-oibus2-\u4e2d\u8bbe\u7f6e\u5916\u90e8\u6765\u6e90",level:3},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:2},{value:"\u901a\u8fc7\u53e6\u4e00\u4e2a OIBus \u4f20\u8f93 Loki",id:"\u901a\u8fc7\u53e6\u4e00\u4e2a-oibus-\u4f20\u8f93-loki",level:3}];function l(s){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,u.a)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"oibus-\u81f3-oibus-\u901a\u4fe1",children:"OIBus \u81f3 OIBus \u901a\u4fe1"}),"\n",(0,i.jsx)(e.h2,{id:"\u4e0a\u4e0b\u6587",children:"\u4e0a\u4e0b\u6587"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u5e38\uff0cPLC \u53ea\u80fd\u5728\u79f0\u4e3a\u8fd0\u7ef4\u6280\u672f (OT) \u9886\u57df\u7684\u53d7\u9650\u7f51\u7edc\u5185\u8bbf\u95ee\uff0c\u8fd9\u4e2a\u9886\u57df\u901a\u5e38\u5b58\u5728\u4e8e\u4fe1\u606f\u6280\u672f (IT) \u9886\u57df\u4e2d\u6216\u4e0e\u4e4b\u76f8\u90bb\uff0c\u540e\u8005\u5305\u542b\u4e86\u6570\u636e\u4e2d\u5fc3\u548c\u4e91\u7cfb\u7edf\u3002\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0cOT \u673a\u5668\u65e0\u6cd5\u8bbf\u95ee\u4e92\u8054\u7f51\u3002OIBus \u53ef\u80fd\u9700\u8981\u4e92\u8054\u7f51\u8bbf\u95ee\u6743\u9650\u3002\u6709\u4e24\u79cd\u53ef\u884c\u7684\u65b9\u6cd5\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e9b\u7f51\u7edc\u4e2d\u7684\u6570\u636e\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728 IT \u9886\u57df\u5b89\u88c5 OIBus\uff0c\u5e76\u5141\u8bb8 PLC \u5728 OT \u4e2d\u4ece OIBus \u673a\u5668\u8fde\u63a5\u3002\u5728\u8fd9\u79cd\u65b9\u6cd5\u4e2d\uff0c\u4f60\u5141\u8bb8\u6bcf\u4e2a\u6570\u636e\u6e90\u4ece\u4f4d\u4e8e IT \u9886\u57df\uff08\u5916\u90e8\u4e8e OT\uff09\u7684 OIBus \u673a\u5668\u901a\u8fc7\u9632\u706b\u5899\u8fdb\u884c\u8fde\u63a5\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u4e24\u4e2a\u7f51\u7edc\u4e2d\u90fd\u5b89\u88c5 OIBus\uff1a\u7b2c\u4e8c\u4e2a\u9009\u9879\u6d89\u53ca\u5728 OT \u5185\u90e8\u548c IT \u5185\u90e8\u8bbe\u7f6e\u4e00\u4e2a OIBus \u5b9e\u4f8b\u3002\u8fd9\u4f7f\u5f97\u4e24\u4e2a\u7f51\u7edc\u4e4b\u95f4\u4ec5\u9700\u7ba1\u7406\u5355\u4e00\u7684\u901a\u4fe1\u8fde\u63a5\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u4f60\u53ea\u6709\u4e00\u53f0\u53ef\u7528\u4e8e OIBus \u5b89\u88c5\u7684\u673a\u5668\u65f6\uff0c\u7b2c\u4e00\u4e2a\u9009\u9879\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\uff0c\u4f46\u5b83\u6d89\u53ca\u66f4\u590d\u6742\u7684\u7f51\u7edc\u914d\u7f6e\uff0c\u5e76\u627f\u62c5\u5c06\u4f60\u7684\u673a\u5668\u66b4\u9732\u7ed9\u6f5c\u5728\u5b89\u5168\u5a01\u80c1\u7684\u98ce\u9669\u3002\u7b2c\u4e8c\u4e2a\u9009\u9879\u662f\u66f4\u53ef\u53d6\u7684\u9009\u62e9\u3002\u91c7\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u4f4d\u4e8e OT \u7684\u521d\u59cb OIBus \u5b9e\u4f8b\uff0c\u79f0\u4e3a OIBus1\uff0c\u53ef\u4ee5\u8bbf\u95ee\u540c\u4e00\u7f51\u7edc\u5185\u7684\u673a\u5668\uff0c\u5e76\u901a\u8fc7\u5355\u4e00\u88ab\u9632\u706b\u5899\u5141\u8bb8\u7684\u8fde\u63a5\uff08\u4ece OIBus1 \u5230 OIBus2\uff09\u5c06\u6570\u636e\u4f20\u8f93\u5230\u529e\u516c\u7f51\u7edc\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u8bbe\u7f6e\u6b64\u901a\u4fe1\u65b9\u6cd5\u7684\u7ec6\u8282\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u6570\u636e\u6d41\u8bbe\u7f6e",children:"\u6570\u636e\u6d41\u8bbe\u7f6e"}),"\n",(0,i.jsx)(e.h3,{id:"\u5728-oibus1-\u4e2d\u8bbe\u7f6e\u5317\u5411\u8fde\u63a5\u5668-oiconnect",children:"\u5728 OIBus1 \u4e2d\u8bbe\u7f6e\u5317\u5411\u8fde\u63a5\u5668 OIConnect"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/zh/docs/guide/north-connectors/oibus",children:"OIBus \u5317\u5411\u8fde\u63a5\u5668"}),"\u5728\u4e00\u4e2a OIBus \u5b9e\u4f8b\u7531\u4e8e\u5904\u4e8e\u5de5\u4e1a\u7f51\u7edc\u800c\u7f3a\u4e4f\u76f4\u63a5\u4e92\u8054\u7f51\u8bbf\u95ee\u6743\u9650\u65f6\u975e\u5e38\u6709\u4ef7\u503c\uff0c\u5c3d\u7ba1\u5982\u6b64\uff0c\u5b83\u53ef\u4ee5\u4e0e\u4f4d\u4e8e\u53e6\u4e00\u4e2a\u6709\u4e92\u8054\u7f51\u8bbf\u95ee\u7684\u7f51\u7edc\u4e2d\u7684\u53e6\u4e00\u4e2a OIBus \u5efa\u7acb\u901a\u4fe1\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f8b\u5982\uff0c\u4e3b\u673a\u5730\u5740\u53ef\u80fd\u91c7\u7528 ",(0,i.jsx)(e.a,{href:"http://1.2.3.4:2223",children:"http://1.2.3.4:2223"})," \u7684\u5f62\u5f0f\uff08OIBus2 \u7684 IP \u5730\u5740\u548c\u7aef\u53e3\uff09\u3002\u786e\u4fdd\u5728\u7b2c\u4e8c\u4e2a OIBus \u5f15\u64ce\u7684\u8bbe\u7f6e\u4e2d\u6388\u6743\u8fdc\u7a0b\u8fde\u63a5\uff0c\u5c24\u5176\u662f\u5728",(0,i.jsx)(e.a,{href:"/zh/docs/guide/engine/ip-filters",children:"IP\u7b5b\u9009\u5668\u90e8\u5206"}),"\u4e2d\uff0c\u81f3\u5173\u91cd\u8981\u3002\u53e6\u5916\uff0c\u5e94\u4f7f\u7528\u9002\u5f53\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5e94\u8be5\u4f7f\u7528 OIBus \u9ed8\u8ba4\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff08admin \u548c pass\uff09\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5728-oibus2-\u4e2d\u8bbe\u7f6e\u5916\u90e8\u6765\u6e90",children:"\u5728 OIBus2 \u4e2d\u8bbe\u7f6e\u5916\u90e8\u6765\u6e90"}),"\n",(0,i.jsxs)(e.p,{children:["\u73b0\u5728\u5728 OIBus2 \u4e0a\uff0c\u4f60\u5fc5\u987b\u5b9a\u4e49\u4e00\u4e2a",(0,i.jsx)(e.a,{href:"/zh/docs/guide/engine/external-sources",children:"\u5916\u90e8\u6765\u6e90"}),"\u3002\u5982\u679c\u5728 OIBus2 \u4e2d\u6ca1\u6709\u8bbe\u7f6e\u5916\u90e8\u6765\u6e90\uff0cOIBus1 \u53d1\u9001\u5230 OIBus2 \u7684\u6570\u636e\u5c06\u88ab\u4e22\u5f03\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u4e2a\u5916\u90e8\u6765\u6e90\u7684\u540d\u79f0\u5e94\u9075\u5faa\u540d\u79f0\u67e5\u8be2\u53c2\u6570\u7684\u8bed\u6cd5\uff0c\u4f8b\u5982\uff0c",(0,i.jsx)(e.code,{children:"MyOIBus:MyOIConnect"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5b9a\u4e49\u4e86\u5916\u90e8\u6765\u6e90\u540e\uff0cOIBus2 \u7684\u5317\u5411\u8fde\u63a5\u5668\u53ef\u4ee5\u7ee7\u7eed\u8ba2\u9605\u8fd9\u4e2a\u7279\u5b9a\u7684\u5916\u90e8\u6765\u6e90\uff0c\u4ece\u800c\u4f7f\u4e24\u4e2a OIBus \u5b9e\u4f8b\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6362\u6210\u4e3a\u53ef\u80fd\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u65e5\u5fd7",children:"\u65e5\u5fd7"}),"\n",(0,i.jsx)(e.h3,{id:"\u901a\u8fc7\u53e6\u4e00\u4e2a-oibus-\u4f20\u8f93-loki",children:"\u901a\u8fc7\u53e6\u4e00\u4e2a OIBus \u4f20\u8f93 Loki"}),"\n",(0,i.jsxs)(e.p,{children:["\u8981\u5c06\u65e5\u5fd7\u4ece OIBus1 \u4f20\u8f93\u5230 OIBus2\uff0c\u5728 ",(0,i.jsx)(e.em,{children:"Loki \u65e5\u5fd7"})," \u90e8\u5206\u5185\u7684",(0,i.jsx)(e.a,{href:"/zh/docs/guide/engine/engine-settings",children:"\u5f15\u64ce\u9875\u9762"}),"\u4e2d\uff0c\u6307\u5b9a OIBus2 \u7684\u5730\u5740\u5728 ",(0,i.jsx)(e.strong,{children:"\u4e3b\u673a"})," \u5b57\u6bb5\u4e2d\uff0c\u4ee5\u53ca\u5b83\u76f8\u5173\u7684\u7aef\u70b9\uff1a",(0,i.jsx)(e.a,{href:"http://1.2.3.4:2223/logs%E3%80%82%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E6%98%AF",children:"http://1.2.3.4:2223/logs\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f"})," OIBus2 \u4f7f\u7528\u57fa\u672c\u8ba4\u8bc1\u3002\u4fdd\u6301 token \u5730\u5740\u5b57\u6bb5\u4e3a\u7a7a\uff0c\u5e76\u63d0\u4f9b\u7528\u4e8e\u8fde\u63a5 OIBus2 \u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u51ed\u636e\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 OIBus1 \u4e2d\u5982\u679c loki \u7ea7\u522b\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(e.strong,{children:"info"}),"\uff0c\u5219\u53ea\u6709 ",(0,i.jsx)(e.strong,{children:"info"})," \u7ea7\u522b\u53ca\u4ee5\u4e0a\u7684\u65e5\u5fd7\u4f1a\u88ab\u8f6c\u53d1\u5230 OIBus2\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 OIBus2 \u4e2d\uff0c\u5982\u679c\u63a7\u5236\u53f0\u548c\u6587\u4ef6\u7ea7\u522b\u88ab\u914d\u7f6e\u4e3a ",(0,i.jsx)(e.strong,{children:"error"}),"\uff0c\u5219\u53ea\u6709 ",(0,i.jsx)(e.strong,{children:"error"})," \u7ea7\u522b\u6216\u66f4\u9ad8\u7ea7\u522b\u7684\u65e5\u5fd7\u624d\u4f1a\u5728\u63a7\u5236\u53f0\u548c\u6587\u4ef6\u4e2d\u8bb0\u5f55\u3002\u7136\u800c\uff0c\u5982\u679c OIBus2 \u7684 loki \u7ea7\u522b\u4e5f\u88ab\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(e.strong,{children:"info"}),"\uff0c\u90a3\u4e48\u4ece OIBus1 \u6536\u5230\u7684\u6240\u6709\u65e5\u5fd7\u90fd\u4f1a\u88ab\u53d1\u9001\u5230\u8fd9\u4e2a loki \u7aef\u70b9\uff08\u5728 OIBus2 \u4e2d\u8bbe\u7f6e\uff09\u3002"]})]})}function h(s={}){const{wrapper:e}={...(0,u.a)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(l,{...s})}):l(s)}},1151:(s,e,n)=>{n.d(e,{Z:()=>t,a:()=>r});var i=n(7294);const u={},o=i.createContext(u);function r(s){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(u):s.components||u:r(s.components),i.createElement(o.Provider,{value:e},s.children)}}}]);