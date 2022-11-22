"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},l="SQL",o={unversionedId:"guide/south-connectors/sql",id:"guide/south-connectors/sql",title:"SQL",description:"The SQL connector allows you to run an SQL query at regular intervals and retrieve the results as CSV files.",source:"@site/docs/guide/south-connectors/sql.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/sql",permalink:"/fr/docs/guide/south-connectors/sql",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"Common South settings",permalink:"/fr/docs/guide/south-connectors/common-settings"},next:{title:"Folder Scanner",permalink:"/fr/docs/guide/south-connectors/folder-scanner"}},s={},u=[{value:"Connection to a SQL database",id:"connection-to-a-sql-database",level:2},{value:"Driver",id:"driver",level:3},{value:"Connection",id:"connection",level:3},{value:"SQL Query",id:"sql-query",level:2},{value:"Query variables",id:"query-variables",level:3},{value:"@StartTime",id:"starttime",level:4},{value:"@EndTime",id:"endtime",level:4},{value:"Example",id:"example",level:4},{value:"Splitting large queries",id:"splitting-large-queries",level:3},{value:"Result exportation",id:"result-exportation",level:3},{value:"@CurrentDate",id:"currentdate",level:4},{value:"@ConnectorName",id:"connectorname",level:4},{value:"@QueryPart",id:"querypart",level:4},{value:"Example",id:"example-1",level:4}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sql"},"SQL"),(0,n.kt)("p",null,"The SQL connector allows you to run an SQL query at regular intervals and retrieve the results as CSV files."),(0,n.kt)("h2",{id:"connection-to-a-sql-database"},"Connection to a SQL database"),(0,n.kt)("h3",{id:"driver"},"Driver"),(0,n.kt)("p",null,"Several databases are supported by OIBus:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MSSQL"),(0,n.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,n.kt)("li",{parentName:"ul"},"Oracle. This driver requires the local installation of an Oracle Instant Client (Basic or Basic Light, minimal supported version is 18.5.0.0.0)"),(0,n.kt)("li",{parentName:"ul"},"MySQL"),(0,n.kt)("li",{parentName:"ul"},"SQLite")),(0,n.kt)("h3",{id:"connection"},"Connection"),(0,n.kt)("p",null,"Several fields are required to connect to a database."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Host"),": the address of the SQL server"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Port"),": SQL server port"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database"),": the name of the database to connect to"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Username"),": the username used for authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Password"),": the password used for authentication"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Domain"),": this field is useful for example when the user wishes to connect to an Active Directory domain"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database path"),": Path of the SQLite file "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Encryption"),": Encrypt the data between the database and OIBus (can overload the server)")),(0,n.kt)("admonition",{title:"Database access",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Using a read only user to connect to the database is strongly advised.")),(0,n.kt)("h2",{id:"sql-query"},"SQL Query"),(0,n.kt)("p",null,"The query must follow the syntax of the selected driver. "),(0,n.kt)("h3",{id:"query-variables"},"Query variables"),(0,n.kt)("p",null,"Several OIBus variables can be used and will be interpreted according to the selected driver by OIBus."),(0,n.kt)("p",null,"OIBus manages some variables for the SQL connector. These variables, if used in the query, will be replaced by their\nvalues."),(0,n.kt)("h4",{id:"starttime"},"@StartTime"),(0,n.kt)("p",null,"The @StartTime variable initially takes the date of the first execution of the query. When results are retrieved from\nthe database, @StartTime value is set to the most recent timestamp among those results."),(0,n.kt)("p",null,"The most recent timestamp is retrieved from the field specified in the ",(0,n.kt)("em",{parentName:"p"},"Time column")," field that must match a\ncolumn in the results."),(0,n.kt)("h4",{id:"endtime"},"@EndTime"),(0,n.kt)("p",null,"The @EndTime variable is set to the current time (",(0,n.kt)("em",{parentName:"p"},"now()"),") or to the end of the sub-interval if a query is split."),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE timestamp > @StartTime AND timestamp < @EndTime\n")),(0,n.kt)("h3",{id:"splitting-large-queries"},"Splitting large queries"),(0,n.kt)("p",null,"In some cases, a query can be quite heavy for the server, especially if a large time interval is requested. If\n@StartTime and @EndTime query variables are used, the query can be split in several sub-queries with smaller intervals\nusing the ",(0,n.kt)("em",{parentName:"p"},"Max read interval")," field. It gives the length of the smaller intervals (in seconds) the query will be split\nto. If this field is set to 0, queries won't be split."),(0,n.kt)("p",null,"Additionally, to not overload the server, a delay between sub-queries can be set (in milliseconds) in the ",(0,n.kt)("em",{parentName:"p"},"Read interval\ndelay")," field."),(0,n.kt)("p",null,"Each sub-query will result in a specific file and a file name variable can be used."),(0,n.kt)("h3",{id:"result-exportation"},"Result exportation"),(0,n.kt)("p",null,"The result of each query (or sub-query) will be stored in a CSV file that can be compressed with gunzip (.gz extension).\nBy default, a comma is used to delimit the CSV columns. However, another delimiter can be chosen."),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Time column")," field is used to specify which field of the query results contains the timestamp (if needed). If\nidentified in the query results, this field will be parsed and associated to the specified ",(0,n.kt)("em",{parentName:"p"},"Timezone")," (example:\nEurope/Paris) at the appropriate ",(0,n.kt)("em",{parentName:"p"},"Date format")," (example: yyyy-MM-dd HH:mm:ss.SSS)."),(0,n.kt)("admonition",{title:"Time column",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("em",{parentName:"p"},"Time column")," must match a column returned by the query, not a column in the database Table. For example\n",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT prod_date AS timestamp")," will result timestamp column. So ",(0,n.kt)("em",{parentName:"p"},"Time column")," should be set to ",(0,n.kt)("strong",{parentName:"p"},"timestamp"),".")),(0,n.kt)("p",null,"The file name where to store the results can be specified with variables to make it unique, so it is not overwritten by\nanother query."),(0,n.kt)("h4",{id:"currentdate"},"@CurrentDate"),(0,n.kt)("p",null,"The date at file creation. The date format is yyyy_MM_dd_HH_mm_ss_SSS."),(0,n.kt)("h4",{id:"connectorname"},"@ConnectorName"),(0,n.kt)("p",null,"The name of the current south connector."),(0,n.kt)("h4",{id:"querypart"},"@QueryPart"),(0,n.kt)("p",null,"The sub-query part of a big query that has been split by OIBus. If the query is not split, this value will always be 0."),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("p",null,"Assuming the SQL connector name is ",(0,n.kt)("em",{parentName:"p"},"sql"),", and that the file will be created on the first of January 2020 at midnight, as\na result of one query (not split), ",(0,n.kt)("inlineCode",{parentName:"p"},"@ConnectorName-@CurrentDate-@QueryPart.csv")," will yield the following name:\nsql-2020_01_01_00_00_00-0.csv."))}p.isMDXComponent=!0}}]);