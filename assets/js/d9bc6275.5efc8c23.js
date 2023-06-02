"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},i="SQL with ODBC",c={unversionedId:"guide/advanced/sql-with-odbc",id:"guide/advanced/sql-with-odbc",title:"SQL with ODBC",description:"What is ODBC",source:"@site/docs/guide/advanced/sql-with-odbc.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/sql-with-odbc",permalink:"/docs/guide/advanced/sql-with-odbc",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guideSidebar",previous:{title:"OPCHDA agent",permalink:"/docs/guide/advanced/opchda-agent"}},s={},l=[{value:"What is ODBC",id:"what-is-odbc",level:2},{value:"Example with MSSQL ODBC",id:"example-with-mssql-odbc",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql-with-odbc"},"SQL with ODBC"),(0,a.kt)("h2",{id:"what-is-odbc"},"What is ODBC"),(0,a.kt)("p",null,"ODBC stands for Open Database Connectivity. It is a standard application programming interface (API) for accessing\ndatabases. It was developed by the SQL Access Group in the early 1990s and is now maintained by the Open Data Base\nConnectivity Foundation (ODBC Foundation)."),(0,a.kt)("p",null,"To connect OIBus with a database through ODBC technology, a driver must be installed on the OIBus machine. Each\ndatabase has its own driver. This article will explore how to set up an ODBC connection with a MSSQL database."),(0,a.kt)("h2",{id:"example-with-mssql-odbc"},"Example with MSSQL ODBC"),(0,a.kt)("p",null,"Microsoft already offers documentation to install its driver on\n",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/sql/connect/odbc/windows/microsoft-odbc-driver-for-sql-server-on-windows?view=sql-server-ver16"},"Window"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/sql/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server?view=sql-server-ver16"},"Linux"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/sql/connect/odbc/linux-mac/install-microsoft-odbc-driver-sql-server-macos?view=sql-server-ver16"},"MacOS")),(0,a.kt)("p",null,"Once the driver installed on the OIBus machine, locate the ",(0,a.kt)("strong",{parentName:"p"},"ODBC Driver Path")," on the SQL connector, and specify the\nDriver path:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For macOS, it can be like ",(0,a.kt)("inlineCode",{parentName:"li"},"/opt/homebrew/lib/libmsodbcsql.18.dylib")),(0,a.kt)("li",{parentName:"ul"},"For Windows, only the ODBC Driver Name is needed : ",(0,a.kt)("inlineCode",{parentName:"li"},"ODBC Driver 18 for SQL Server"),". You can retrieve the list of\ninstalled ODBC driver in the ODBC drivers Tab of the Windows ODBC data sources.")))}p.isMDXComponent=!0}}]);