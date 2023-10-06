"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[7393],{7614:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(7294),o=i(5697),a=i.n(o);const s=e=>{let{children:t,link:i,color:o}=e;return n.createElement("div",{style:{marginBottom:"20px",marginTop:"10px",textAlign:"center"}},n.createElement("a",{rel:"nofollow",href:i,style:{backgroundColor:o,borderRadius:"10px",color:"#f5f5f5",padding:"10px",cursor:"pointer",minWidth:"10rem",textAlign:"center",display:"flex",justifyContent:"space-around"}},t))};s.propTypes={link:a().string.isRequired,color:a().string,children:a().object.isRequired},s.defaultProps={color:"#009ee0"};const l=s},6620:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=i(7462),o=(i(7294),i(3905)),a=i(614),s=i(7614),l=i(4147);const r={sidebar_position:4},d="macOS",c={unversionedId:"guide/installation/macos",id:"guide/installation/macos",title:"macOS",description:"Download",source:"@site/docs/guide/installation/macos.mdx",sourceDirName:"guide/installation",slug:"/guide/installation/macos",permalink:"/docs/guide/installation/macos",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guideSidebar",previous:{title:"Linux",permalink:"/docs/guide/installation/linux"},next:{title:"First access",permalink:"/docs/guide/installation/first-access"}},u={},p=[{value:"Download",id:"download",level:2}],m={toc:p},k="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(k,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"macos"},"macOS"),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"space-around"}},(0,o.kt)(s.Z,{link:`https://github.com/OptimistikSAS/OIBus/releases/download/v${l.i8}/oibus-macos_x64-v${l.i8}.zip`,mdxType:"DownloadButton"},(0,o.kt)("div",null,(0,o.kt)("div",null,`OIBus v${l.i8}`),(0,o.kt)("div",null,"MacOS (Intel chip)")))),(0,o.kt)("p",null,"macOS OIBus binary can be run through its executable. Once unzipped, start a Terminal and enter the following command:"),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"./oibus --config ./data-folder"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"./data-folder")," path must be adapted according to the place where the OIBus cache and config will be stored."),(0,o.kt)("p",null,"For example, if the binary is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/")," and the cache and configuration files are stored in\n",(0,o.kt)("inlineCode",{parentName:"p"},"~/test/oibus-data"),", the command will be:"),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"/bin/oibus --config ~/test/oibus-data"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to have admin permissions to run the binary")),(0,o.kt)("p",null,"Get familiar with the OIBus interface on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/installation/first-access"},"first access page"),"."))}f.isMDXComponent=!0},4147:e=>{e.exports={i8:"3.0.3"}}}]);