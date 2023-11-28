"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[4235],{2958:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(5893),s=n(1151);const r={sidebar_position:3},o="Folder Scanner",d={id:"guide/south-connectors/folder-scanner",title:"Folder Scanner",description:"The Folder Scanner connector periodically checks the input folder for new files at an interval specified by the scan",source:"@site/versioned_docs/version-v2/guide/south-connectors/folder-scanner.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/folder-scanner",permalink:"/zh/docs/v2/guide/south-connectors/folder-scanner",draft:!1,unlisted:!1,tags:[],version:"v2",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guideSidebar",previous:{title:"SQL",permalink:"/zh/docs/v2/guide/south-connectors/sql"},next:{title:"OPCUA",permalink:"/zh/docs/v2/guide/south-connectors/opcua"}},l={},c=[{value:"Settings",id:"settings",level:2},{value:"Input folder",id:"input-folder",level:3},{value:"Preserve File and modified date",id:"preserve-file-and-modified-date",level:4},{value:"Filtering",id:"filtering",level:3},{value:"RegExp",id:"regexp",level:4},{value:"Minimum age",id:"minimum-age",level:4},{value:"Compression",id:"compression",level:3}];function a(e){const i={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"folder-scanner",children:"Folder Scanner"}),"\n",(0,t.jsx)(i.p,{children:"The Folder Scanner connector periodically checks the input folder for new files at an interval specified by the scan\nmode. When a new file is detected, it is sent to any North capable of handling files and configured to accept files\nfrom this South."}),"\n",(0,t.jsx)(i.h2,{id:"settings",children:"Settings"}),"\n",(0,t.jsx)(i.h3,{id:"input-folder",children:"Input folder"}),"\n",(0,t.jsxs)(i.p,{children:["The folder path must be entered in the ",(0,t.jsx)(i.em,{children:"Input folder"})," field. The path can be absolute or relative. Be careful:\n",(0,t.jsx)(i.strong,{children:"the path is case-sensitive"}),"."]}),"\n",(0,t.jsx)(i.admonition,{title:"Relative path",type:"tip",children:(0,t.jsxs)(i.p,{children:["The relative path is computed from the cache folder (mentioned in the About section, ",(0,t.jsx)(i.em,{children:"configuration directory"})," field)."]})}),"\n",(0,t.jsx)(i.admonition,{title:"User access",type:"danger",children:(0,t.jsx)(i.p,{children:"The user running OIBus (logged user when OIBus run from a terminal, the service session when OIBus run from a service)\nmust have read access to the input folder to be able to read the files."})}),"\n",(0,t.jsxs)(i.p,{children:["OIBus can also read folders from a remote location. To do so, remote path can be specified (example:\n",(0,t.jsx)(i.code,{children:"/remote.server/data"})," or ",(0,t.jsx)(i.code,{children:"D:\\\\Remote disk\\\\DATA "}),"). Be sure to have access to this folder (network and authentication)."]}),"\n",(0,t.jsx)(i.h4,{id:"preserve-file-and-modified-date",children:"Preserve File and modified date"}),"\n",(0,t.jsxs)(i.p,{children:["When ",(0,t.jsx)(i.em,{children:"Preserve File?"})," is checked, retrieved files are kept in the folder. Otherwise, they are deleted once copied in\nthe OIBus cache."]}),"\n",(0,t.jsx)(i.admonition,{title:"Important",type:"info",children:(0,t.jsx)(i.p,{children:"When this field file is not preserved, OIBus moves it from the input folder to its cache, which in computer terms means it\ndeletes the file from the input folder. For this reason, OIBus also needs write access. Otherwise, the file will be\ncopied."})}),"\n",(0,t.jsx)(i.p,{children:"When this field is checked, OIBus keeps track of the modification date of files already retrieved. It will only retrieve\na file if its modification date has changed."}),"\n",(0,t.jsxs)(i.p,{children:["If ",(0,t.jsx)(i.em,{children:"Ignore modified date"})," is checked, files will be resent each time the folder is scanned, regardless of when the file\nwas modified. This field is not used when ",(0,t.jsx)(i.em,{children:"Preserve File?"})," is not checked."]}),"\n",(0,t.jsx)(i.h3,{id:"filtering",children:"Filtering"}),"\n",(0,t.jsx)(i.h4,{id:"regexp",children:"RegExp"}),"\n",(0,t.jsx)(i.p,{children:"A RegExp can be used to retrieve only certain files matching the regular expression."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:".*"})," retrieves all files of the input folder"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:".*.txt"})," retrieves all txt files of the input folder"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:".*.csv"})," retrieves all csv files of the input folder"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:".csv||.xlsx"})," retrieves all csv or xlsx files of the input folder"]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"minimum-age",children:"Minimum age"}),"\n",(0,t.jsxs)(i.p,{children:["Writing large files to the input folder can take some time. To avoid retrieving a corrupted file (because it is\nbeing written), the ",(0,t.jsx)(i.em,{children:"Minimum Age"})," field can be adjusted. By default, OIBus recovers files that has been written more\nthan one second ago."]}),"\n",(0,t.jsx)(i.h3,{id:"compression",children:"Compression"}),"\n",(0,t.jsx)(i.p,{children:"By default, files are retrieved exactly as they are in the input folder. They can be compressed to reduce their size\nduring transfer. If enabled, files stored in the OIBus cache are compressed too."}),"\n",(0,t.jsx)(i.admonition,{title:"Important",type:"danger",children:(0,t.jsx)(i.p,{children:"When compression is enabled, OIBus writes the compressed file to the input folder. Therefore, OIBus also needs\nwrite access. Otherwise, the compression will be ignored and the raw file will be copied."})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>o});var t=n(7294);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);