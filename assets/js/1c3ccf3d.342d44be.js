"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[9861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={displayed_sidebar:"developerSidebar",sidebar_position:1},i="OIBus developer handbook",l={unversionedId:"developer/index",id:"version-2.x/developer/index",title:"OIBus developer handbook",description:"Steps to try out the application",source:"@site/versioned_docs/version-2.x/developer/index.md",sourceDirName:"developer",slug:"/developer/",permalink:"/docs/2.x/developer/",draft:!1,tags:[],version:"2.x",sidebarPosition:1,frontMatter:{displayed_sidebar:"developerSidebar",sidebar_position:1},sidebar:"developerSidebar"},p={},s=[{value:"Steps to try out the application",id:"steps-to-try-out-the-application",level:2},{value:"Run database servers",id:"run-database-servers",level:2},{value:"Commit and branch naming conventions",id:"commit-and-branch-naming-conventions",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oibus-developer-handbook"},"OIBus developer handbook"),(0,o.kt)("h2",{id:"steps-to-try-out-the-application"},"Steps to try out the application"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clone the repository : ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone ")),(0,o.kt)("li",{parentName:"ul"},"Run command ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," in project root"),(0,o.kt)("li",{parentName:"ul"},"Run command ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run internal:build:web-client"),". It will create a ",(0,o.kt)("inlineCode",{parentName:"li"},"build/web-client")," folder for the frontend bundle. If you edit\nthe frontend and want to auto-recompile the bundle, you can instead use the command ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run watch:web-client"),"."),(0,o.kt)("li",{parentName:"ul"},"Run command ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start")," (this will start both the backend and frontend)"),(0,o.kt)("li",{parentName:"ul"},"Open up in the browser the following url: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:2223"),". The port is specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},"default-config.json"),"\nfile (currently 2223 is the default port, it can be changed locally in your own config file generated at project startup)")),(0,o.kt)("p",null,"The folder ",(0,o.kt)("inlineCode",{parentName:"p"},"data-folder")," is used to store the cache, logs and configuration files."),(0,o.kt)("p",null,"The project is up and running, but currently there are no South or North connectors. A simple way to try out OIBus is\nto create a ",(0,o.kt)("inlineCode",{parentName:"p"},"FolderScanner")," South connector and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Console")," North connector."),(0,o.kt)("h2",{id:"run-database-servers"},"Run database servers"),(0,o.kt)("p",null,"With the help of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/docker-compose.yml")," file, we can run a few databases with the following command: "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run test:setup-env")),(0,o.kt)("p",null,"The following services will start: ",(0,o.kt)("strong",{parentName:"p"},"mysql, mssql, postgresql"),".\nIf you want to change the credentials or the ports for the services, you can create your own ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file that won't be\npushed to the repository. Note that in this case you will need to replace the environment file path to ",(0,o.kt)("inlineCode",{parentName:"p"},"./.env")," in the\ncommand above (",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),")."),(0,o.kt)("h2",{id:"commit-and-branch-naming-conventions"},"Commit and branch naming conventions"),(0,o.kt)("p",null,"The default branch is ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", every new branches should be created from here. "),(0,o.kt)("p",null,"Branch naming convention: ",(0,o.kt)("strong",{parentName:"p"},"descriptive-name-of-the-issue#\\<issue-number",">")," "),(0,o.kt)("p",null,"For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"fix-folder-scanner-path#1564")),(0,o.kt)("p",null,"Commits and PR name convention must follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits standard")))}u.isMDXComponent=!0}}]);