"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[1590],{8643:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var i=s(5893),r=s(1151);const o={sidebar_position:2},c="OPCUA",t={id:"guide/south-connectors/opcua",title:"OPCUA",description:"OPCUA\uff0c\u5373OPC\u7edf\u4e00\u67b6\u6784\uff0c\u662f\u4e00\u4e2a\u65e8\u5728\u8bfb\u5199\u6a21\u5f0f\u4e0b\u8bbf\u95ee\u6570\u636e\u7684\u534f\u8bae\u3002\u6570\u636e\u5728\u7c7b\u4f3c\u6811\u7684\u5730\u5740\u7a7a\u95f4\u4e2d\u7ec4\u7ec7\uff0c\u5e76\u4f7f\u7528\u88ab\u79f0\u4e3a\u8282\u70b9ID\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u5f15\u7528\u3002OPCUA\u662f\u57fa\u4e8eTCP/IP\u7684\u73b0\u4ee3\u6807\u51c6\uff0c\u5df2\u53d6\u4ee3\u4e86\u65e9\u671f\u7684OPC HDA/DA\u6280\u672f\uff08\u53c2\u89c1OPCHDA\u8fde\u63a5\u5668\uff09\u3002\u5b83\u901a\u5e38\u5929\u7136\u5d4c\u5165\u4e8e\u5de5\u4e1a\u63a7\u5236\u5668\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guide/south-connectors/opcua.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/opcua",permalink:"/zh/docs/guide/south-connectors/opcua",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"\u6587\u4ef6\u5939\u626b\u63cf\u5668",permalink:"/zh/docs/guide/south-connectors/folder-scanner"},next:{title:"\u5fae\u8f6f SQL \u670d\u52a1\u5668 (MSSQL)",permalink:"/zh/docs/guide/south-connectors/mssql"}},d={},l=[{value:"\u7279\u5b9a\u8bbe\u7f6e",id:"\u7279\u5b9a\u8bbe\u7f6e",level:2},{value:"\u9879\u8bbe\u7f6e",id:"\u9879\u8bbe\u7f6e",level:2},{value:"\u5b89\u5168\u8bbe\u7f6e",id:"\u5b89\u5168\u8bbe\u7f6e",level:2},{value:"\u901a\u4fe1",id:"\u901a\u4fe1",level:3},{value:"\u8ba4\u8bc1",id:"\u8ba4\u8bc1",level:3},{value:"\u4f7f\u7528\u76f8\u540c\u8bc1\u4e66\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u548c\u5b89\u5168\u901a\u4fe1",id:"\u4f7f\u7528\u76f8\u540c\u8bc1\u4e66\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u548c\u5b89\u5168\u901a\u4fe1",level:3},{value:"\u4f7f\u7528ProSys OPC UA\u6a21\u62df\u670d\u52a1\u5668\u7684\u8bc1\u4e66",id:"\u4f7f\u7528prosys-opc-ua\u6a21\u62df\u670d\u52a1\u5668\u7684\u8bc1\u4e66",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"opcua",children:"OPCUA"}),"\n",(0,i.jsxs)(n.p,{children:["OPCUA\uff0c\u5373OPC\u7edf\u4e00\u67b6\u6784\uff0c\u662f\u4e00\u4e2a\u65e8\u5728\u8bfb\u5199\u6a21\u5f0f\u4e0b\u8bbf\u95ee\u6570\u636e\u7684\u534f\u8bae\u3002\u6570\u636e\u5728\u7c7b\u4f3c\u6811\u7684\u5730\u5740\u7a7a\u95f4\u4e2d\u7ec4\u7ec7\uff0c\u5e76\u4f7f\u7528\u88ab\u79f0\u4e3a\u8282\u70b9ID\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u5f15\u7528\u3002OPCUA\u662f\u57fa\u4e8eTCP/IP\u7684\u73b0\u4ee3\u6807\u51c6\uff0c\u5df2\u53d6\u4ee3\u4e86\u65e9\u671f\u7684OPC HDA/DA\u6280\u672f\uff08\u53c2\u89c1",(0,i.jsx)(n.a,{href:"/zh/docs/guide/south-connectors/opchda",children:"OPCHDA\u8fde\u63a5\u5668"}),"\uff09\u3002\u5b83\u901a\u5e38\u5929\u7136\u5d4c\u5165\u4e8e\u5de5\u4e1a\u63a7\u5236\u5668\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"OPCUA\u5305\u542b\u4e86\u4e24\u79cd\u534f\u8bae\u53d8\u4f53\uff1aHA\uff08\u5386\u53f2\u8bbf\u95ee\uff09\u548cDA\uff08\u6570\u636e\u8bbf\u95ee\uff09\u3002\u5728HA\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u8bbf\u95ee\u6307\u5b9a\u65f6\u95f4\u95f4\u9694\u5185\u8bf7\u6c42\u6570\u636e\u70b9\u7684\u503c\u5386\u53f2\uff0c\u5728DA\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u5728\u6bcf\u4e2a\u8bf7\u6c42\u65f6\u8bbf\u95ee\u503c\uff0c\u6216\u76d1\u542c\u503c\u7684\u53d8\u5316\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["OIBus\u96c6\u6210\u4e86\u4e24\u79cdOPCUA\u6a21\u5f0f\uff08HA\u548cDA\uff09\uff0c\u4ec5\u7528\u4e8e\u53ea\u8bfb\u6a21\u5f0f\uff0c\u4f7f\u7528",(0,i.jsx)(n.a,{href:"https://github.com/node-opcua/node-opcua",children:"node-opcua\u5e93"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7279\u5b9a\u8bbe\u7f6e",children:"\u7279\u5b9a\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u5efa\u7acb\u4e0eOPCUA\u670d\u52a1\u5668\u7684\u8fde\u63a5\uff0cOIBus\u9700\u8981\u51e0\u4e2a\u8bbe\u7f6e\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"URL"}),"\uff1a\u7528\u4e8e\u8fde\u63a5\u670d\u52a1\u5668\u7684\u5b57\u7b26\u4e32\uff0c\u5176\u683c\u5f0f\u4e3a ",(0,i.jsx)(n.code,{children:"opc.tcp://<host>:<port>/<server-name>"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u91cd\u8bd5\u95f4\u9694"}),"\uff1a\u8fde\u63a5\u5931\u8d25\u65f6\uff0c\u91cd\u8fde\u5c1d\u8bd5\u4e4b\u95f4\u7684\u7b49\u5f85\u65f6\u95f4\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5b89\u5168\u6a21\u5f0f"}),"\uff1a\u53ef\u4ee5\u4f7f\u7528\u5b89\u5168\u6a21\u5f0f\u548c\u5b89\u5168\u7b56\u7565\u5b57\u6bb5\u6765\u4fdd\u62a4\u901a\u4fe1\u3002\u53ef\u7528\u7684\u5b89\u5168\u6a21\u5f0f\u5305\u62ec\uff1a",(0,i.jsx)(n.em,{children:"None"}),"\uff08\u65e0\uff09\u3001",(0,i.jsx)(n.em,{children:"Sign"}),"\uff08\u7b7e\u540d\uff09\u3001",(0,i.jsx)(n.em,{children:"SignAndEncrypt"}),"\uff08\u7b7e\u540d\u5e76\u52a0\u5bc6\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5b89\u5168\u7b56\u7565"}),"\uff08\u5f53\u5b89\u5168\u6a21\u5f0f\u4e0d\u662fNone\u65f6\u9002\u7528\uff09\uff1a\u5b89\u5168\u7b56\u7565\u5b9a\u4e49\u4e86\u901a\u4fe1\u7684\u5b89\u5168\u7ea7\u522b\u3002\u53ef\u7528\u7684\u5b89\u5168\u7b56\u7565\u5305\u62ec\uff1aNone\u3001Basic128\u3001Basic192\u3001Basic256\u3001Basic128Rsa15\u3001Basic192Rsa15\u3001Basic256Rsa15\u3001Basic256Sha256\u3001Aes128_Sha256_RsaOaep\u3001PubSub_Aes128_CTR\u3001PubSub_Aes256_CTR\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8ba4\u8bc1"}),"\uff1a\u8ba4\u8bc1\u9009\u9879\u5305\u62ecNone\uff08\u65e0\uff09\u3001Basic\uff08\u57fa\u7840\uff09\u548cCertificate\uff08\u8bc1\u4e66\uff09\u3002\u8be6\u60c5\u8bf7\u53c2\u8003",(0,i.jsx)(n.a,{href:"#authentication",children:"\u5b89\u5168\u8bbe\u7f6e"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u4e0eOPCUA\u670d\u52a1\u5668\u7684\u517c\u5bb9\u6027",type:"caution",children:(0,i.jsx)(n.p,{children:"\u9009\u62e9\u4e0e\u60a8\u8981\u8fde\u63a5\u7684OPCUA\u670d\u52a1\u5668\u652f\u6301\u7684\u5b89\u5168\u6a21\u5f0f\u548c\u5b89\u5168\u7b56\u7565\u81f3\u5173\u91cd\u8981\uff0c\u786e\u4fdd\u517c\u5bb9\u6027\u5bf9\u4e8e\u6210\u529f\u8fde\u63a5\u81f3\u5173\u91cd\u8981\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9879\u8bbe\u7f6e",children:"\u9879\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u914d\u7f6e\u6bcf\u4e2a\u9879\u4ee5\u5728JSON\u6709\u6548\u8f7d\u8377\u4e2d\u68c0\u7d22\u6570\u636e\u65f6\uff0c\u60a8\u9700\u8981\u6307\u5b9a\u4ee5\u4e0b\u7279\u5b9a\u8bbe\u7f6e\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8282\u70b9ID"}),"\uff1a\u8282\u70b9ID\u5bf9\u5e94\u4e8eOPCUA\u670d\u52a1\u5668\u4e0a\u9002\u5f53\u547d\u540d\u7a7a\u95f4\u4e2d\u6570\u636e\u7684\u8def\u5f84\u3002\u8003\u8651\u670d\u52a1\u5668\u652f\u6301\u7684\u8282\u70b9\u683c\u5f0f\u975e\u5e38\u91cd\u8981\uff0c\u5b83\u53ef\u80fd\u4f7f\u7528\u6570\u5b57\u6216\u5b57\u7b26\u4e32\u3002\u4f8b\u5982\uff0c\u5728Prosys\u4e0a\uff0c",(0,i.jsx)(n.code,{children:"ns=3;i=1001"})," \u4e0e ",(0,i.jsx)(n.code,{children:"ns=3;s=Counter"}),"\u76f8\u5339\u914d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6a21\u5f0f"}),"\uff1a\u6839\u636e\u60a8\u7684\u9700\u6c42\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9HA\uff08\u5386\u53f2\u8bbf\u95ee\uff09\u6216DA\uff08\u6570\u636e\u8bbf\u95ee\uff09\u6a21\u5f0f\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u805a\u5408"}),"\uff08\u4ec5\u5728HA\u6a21\u5f0f\u4e0b\uff09\uff1a\u5728HA\u6a21\u5f0f\u4e0b\uff0c\u6709\u4e00\u4e2a\u9009\u9879\u53ef\u4ee5\u5728\u8bf7\u6c42\u7684\u95f4\u9694\u671f\u95f4\u5bf9\u68c0\u7d22\u7684\u503c\u8fdb\u884c\u805a\u5408\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u91cd\u91c7\u6837"}),"\uff08\u4ec5\u5728HA\u6a21\u5f0f\u4e0b\uff09\uff1a\u540c\u6837\uff0c\u5728HA\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u5728\u8bf7\u6c42\u7684\u95f4\u9694\u671f\u95f4\u5bf9\u68c0\u7d22\u7684\u503c\u8fdb\u884c\u91cd\u91c7\u6837\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u4e0eOPCUA\u670d\u52a1\u5668\u7684\u517c\u5bb9\u6027",type:"caution",children:(0,i.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5e76\u975e\u6240\u6709\u7684\u805a\u5408\u548c\u91cd\u91c7\u6837\u9009\u9879\u90fd\u88abOPCUA\u670d\u52a1\u5668\u652f\u6301\u3002\u4e3a\u4e86\u907f\u514d\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u5efa\u8bae\u5c3d\u53ef\u80fd\u4f7f\u7528",(0,i.jsx)(n.code,{children:"Raw"}),"\u805a\u5408\u548c",(0,i.jsx)(n.code,{children:"None"}),"\u91cd\u91c7\u6837\u3002\u53e6\u5916\uff0c\u8bf7\u786e\u4fdd\u6240\u9009\u7684\u6a21\u5f0f\uff08HA\u6216DA\uff09\u7531\u60a8\u6b63\u5728\u8fde\u63a5\u7684\u670d\u52a1\u5668\u652f\u6301\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u9879\u7684\u540d\u79f0\u5c06\u5728JSON\u6709\u6548\u8f7d\u8377\u4e2d\uff0c\u7279\u522b\u662f\u5728\u5317\u5411\u5e94\u7528\u7684",(0,i.jsx)(n.code,{children:"pointID"}),"\u5b57\u6bb5\u4e2d\u7528\u4f5c\u53c2\u8003\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5b89\u5168\u8bbe\u7f6e",children:"\u5b89\u5168\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.h3,{id:"\u901a\u4fe1",children:"\u901a\u4fe1"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u9664_None_\u4e4b\u5916\u7684\u5b89\u5168\u6a21\u5f0f\u65f6\uff0c\u9700\u8981\u4e00\u4e2a\u8bc1\u4e66\u6765\u7b7e\u540d\u5e76\u53ef\u80fd\u52a0\u5bc6\u901a\u4fe1\u3002OIBus\u5728\u542f\u52a8\u65f6\u751f\u6210\u4e86\u4e00\u4e2a\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u7528\u4e8e\u4fdd\u62a4\u4e0eOPCUA\u670d\u52a1\u5668\u7684\u901a\u4fe1\u3002\u60a8\u53ef\u4ee5\u5728\u5357\u5411\u7f13\u5b58\u7684",(0,i.jsx)(n.code,{children:"opcua"}),"\u6587\u4ef6\u5939\u4e2d\u627e\u5230OPCUA\u4f7f\u7528\u7684\u8bc1\u4e66\u3002\u8fd9\u4e2a\u8bc1\u4e66\u5fc5\u987b\u5f97\u5230OPCUA\u670d\u52a1\u5668\u7684\u4fe1\u4efb\uff0c\u4ee5\u542f\u7528\u5b89\u5168\u901a\u4fe1\u3002"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u5728Prosys OPCUA\u6a21\u62df\u670d\u52a1\u5668\u4e0a\u7684\u793a\u4f8b",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Prosys OPCUA\u6a21\u62df\u670d\u52a1\u5668\u8bc1\u4e66",src:s(6861).Z+"",width:"995",height:"627"}),"\n\u5982\u679c\u8bc1\u4e66\u6ca1\u6709\u88abOPCUA\u670d\u52a1\u5668\u4fe1\u4efb\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u5305\u542b\u4fe1\u606f\uff1a",(0,i.jsx)(n.code,{children:"Error: The connection may have been rejected by the server"})," \u7684\u9519\u8bef\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"\u8ba4\u8bc1",children:"\u8ba4\u8bc1"}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4e8e\u5ba2\u6237\u7aef\u8ba4\u8bc1\u7684\u8bc1\u4e66\u5fc5\u987b\u6dfb\u52a0\u5230OPCUA\u670d\u52a1\u5668\u7684\u4fe1\u4efb\u7528\u6237\u8bc1\u4e66\u5217\u8868\u4e2d\u3002\u5b83\u4e0e\u524d\u9762\u63d0\u5230\u7684\u7528\u4e8e",(0,i.jsx)(n.a,{href:"#communication",children:"\u4fdd\u62a4\u901a\u4fe1"}),"\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u5206\u5f00\u7ba1\u7406\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{title:"\u5728Prosys OPCUA\u6a21\u62df\u670d\u52a1\u5668\u4e0a\u7684\u793a\u4f8b",type:"info",children:[(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8eProsys OPC UA\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u8ba4\u8bc1OIBus\u7684\u8bc1\u4e66\u5fc5\u987b\u653e\u7f6e\u5728",(0,i.jsx)(n.code,{children:".prosysopc\\prosys-opc-ua-simulation-server\\USERS_PKI\\CA\\certs"}),"\u6587\u4ef6\u5939\u4e2d\u3002\u5982\u679c\u4e0d\u8fd9\u6837\u505a\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u5305\u542b\u4fe1\u606f\uff1a",(0,i.jsx)(n.code,{children:"Error: serviceResult = BadIdentityTokenRejected (0x80210000)"})," \u7684\u9519\u8bef\u3002"]}),(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4e4b\u524d\u5df2\u7ecf\u5c1d\u8bd5\u8fc7\u8fde\u63a5\u5e76\u88ab\u62d2\u7edd\uff0c\u60a8\u5e94\u8be5\u4ece",(0,i.jsx)(n.strong,{children:"\u62d2\u7edd\u8bc1\u4e66"}),"\u6587\u4ef6\u5939\uff08",(0,i.jsx)(n.code,{children:".prosysopc\\prosys-opc-ua-simulation-server\\USERS_PKI\\CA\\rejected"}),"\uff09\u4e2d\u5220\u9664\u8bc1\u4e66\uff0c\u5e76\u5c06\u5176\u79fb\u52a8\u5230",(0,i.jsx)(n.strong,{children:"\u4fe1\u4efb"}),"\u6587\u4ef6\u5939\uff08",(0,i.jsx)(n.code,{children:".prosysopc\\prosys-opc-ua-simulation-server\\USERS_PKI\\CA\\certs"}),"\uff09\u3002"]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u4f7f\u7528\u76f8\u540c\u8bc1\u4e66\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u548c\u5b89\u5168\u901a\u4fe1",children:"\u4f7f\u7528\u76f8\u540c\u8bc1\u4e66\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u548c\u5b89\u5168\u901a\u4fe1"}),"\n",(0,i.jsxs)(n.p,{children:["\u540c\u4e00\u4e2a\u8bc1\u4e66\u53ef\u4ee5\u7528\u4e8e\u7b7e\u540d\u548c\u52a0\u5bc6\u64cd\u4f5c\u4ee5\u53ca\u8ba4\u8bc1\u3002\u4e3a\u6b64\uff0c\u5fc5\u987b\u6307\u5b9a",(0,i.jsx)(n.code,{children:"cert.pem"}),"\u548c",(0,i.jsx)(n.code,{children:"private.pem"}),"\u6587\u4ef6\u7684\u8def\u5f84\u3002\u5b83\u4eec\u4f4d\u4e8e\u5357\u5411\u6570\u636e\u6d41\u6587\u4ef6\u5939\u7684opcua\u76ee\u5f55\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728OPCUA\u670d\u52a1\u5668\u7aef\uff0c\u81ea\u7b7e\u540d\u8bc1\u4e66\uff08",(0,i.jsx)(n.code,{children:"cert.pem"}),"\uff09\u5fc5\u987b\u88ab\u590d\u5236\u5230\u7528\u6237\u8bc1\u4e66\u6587\u4ef6\u5939\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5728Prosys OPCUA\u6a21\u62df\u670d\u52a1\u5668\u4e0a\uff1a",(0,i.jsx)(n.code,{children:".prosysopc\\prosys-opc-ua-simulation-server\\USERS_PKI\\CA\\certs"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528prosys-opc-ua\u6a21\u62df\u670d\u52a1\u5668\u7684\u8bc1\u4e66",children:"\u4f7f\u7528ProSys OPC UA\u6a21\u62df\u670d\u52a1\u5668\u7684\u8bc1\u4e66"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u521b\u5efa\u60a8\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u6765\u8ba4\u8bc1OIBus\uff0c\u4f7f\u7528",(0,i.jsx)(n.strong,{children:"Cert"}),"\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2acert.conf\u6587\u4ef6\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[ req ]\ndefault_bits = 2048\ndefault_md = sha256\ndistinguished_name = subject\nreq_extensions = req_ext\nx509_extensions = req_ext\nstring_mask = utf8only\nprompt = no\n\n[ req_ext ]\nbasicConstraints = CA:FALSE\nnsCertType = client, server\nkeyUsage = nonRepudiation, digitalSignature, keyEncipherment, dataEncipherment, keyCertSign\nextendedKeyUsage= serverAuth, clientAuth\nnsComment = "OIBus User Cert"\nsubjectKeyIdentifier=hash\nauthorityKeyIdentifier=keyid,issuer\nsubjectAltName = URI:urn:opcua:user:oibus,IP: 127.0.0.1\n\n[ subject ]\ncountryName = FR\nstateOrProvinceName = FR\nlocalityName = Chamb\xe9ry\norganizationName = OI\ncommonName = oibus\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"cert.conf"}),"\u521b\u5efa\u4e00\u4e2a\u79c1\u94a5\u548c\u8bc1\u4e66\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"openssl req -new -x509 -keyout oibus.key -out oibus.pem -config cert.conf\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u79fb\u9664\u79c1\u94a5\u5bc6\u7801\u77ed\u8bed\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"openssl rsa -in oibus.key -out oibus.key\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u4e3aProSys\u521b\u5efaDER\u8bc1\u4e66\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"openssl x509 -inform PEM -outform DER -in oibus.pem -out oibus.der\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["\u5c06DER\u8bc1\u4e66\u590d\u5236\u5230ProSys USERS_PKI\u8bc1\u4e66\u6587\u4ef6\u5939\uff1a",(0,i.jsx)(n.code,{children:"prosys-opc-ua-simulation-server\\USERS_PKI\\CA\\certs"})]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6861:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/prosys-opcua-simulation-server-certificates-3aa9f72ae5a03d39b377b01e927c54ba.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var i=s(7294);const r={},o=i.createContext(r);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);