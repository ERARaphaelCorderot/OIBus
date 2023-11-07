"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[2876],{9231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(5893),s=t(1151);const r={sidebar_position:2},l="SQL",a={id:"guide/south-connectors/sql",title:"SQL",description:"The SQL connector allows you to run an SQL query at regular intervals and retrieve the results as CSV files.",source:"@site/versioned_docs/version-2.x/guide/south-connectors/sql.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/sql",permalink:"/docs/2.x/guide/south-connectors/sql",draft:!1,unlisted:!1,tags:[],version:"2.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"Common South settings",permalink:"/docs/2.x/guide/south-connectors/common-settings"},next:{title:"Folder Scanner",permalink:"/docs/2.x/guide/south-connectors/folder-scanner"}},o={},d=[{value:"Connection to a SQL database",id:"connection-to-a-sql-database",level:2},{value:"Driver",id:"driver",level:3},{value:"Connection",id:"connection",level:3},{value:"SQL Query",id:"sql-query",level:2},{value:"Query variables",id:"query-variables",level:3},{value:"@StartTime",id:"starttime",level:4},{value:"@EndTime",id:"endtime",level:4},{value:"Example",id:"example",level:4},{value:"Splitting large queries",id:"splitting-large-queries",level:3},{value:"Result exportation",id:"result-exportation",level:3},{value:"@CurrentDate",id:"currentdate",level:4},{value:"@ConnectorName",id:"connectorname",level:4},{value:"@QueryPart",id:"querypart",level:4},{value:"Example",id:"example-1",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sql",children:"SQL"}),"\n",(0,i.jsx)(n.p,{children:"The SQL connector allows you to run an SQL query at regular intervals and retrieve the results as CSV files."}),"\n",(0,i.jsx)(n.h2,{id:"connection-to-a-sql-database",children:"Connection to a SQL database"}),"\n",(0,i.jsx)(n.h3,{id:"driver",children:"Driver"}),"\n",(0,i.jsx)(n.p,{children:"Several databases are supported by OIBus:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MSSQL"}),"\n",(0,i.jsx)(n.li,{children:"PostgreSQL"}),"\n",(0,i.jsx)(n.li,{children:"Oracle. This driver requires the local installation of an Oracle Instant Client (Basic or Basic Light, minimal supported version is 18.5.0.0.0)"}),"\n",(0,i.jsx)(n.li,{children:"MySQL"}),"\n",(0,i.jsx)(n.li,{children:"SQLite"}),"\n",(0,i.jsxs)(n.li,{children:["ODBC. This driver requires ",(0,i.jsx)(n.a,{href:"/docs/2.x/guide/advanced/sql-with-odbc",children:"the installation of a local module"})," that matches the\nDatabase you want to connect."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"connection",children:"Connection"}),"\n",(0,i.jsx)(n.p,{children:"Several fields are required to connect to a database."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Host"}),": the address of the SQL server"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Port"}),": SQL server port"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Database"}),": the name of the database to connect to"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Username"}),": the username used for authentication"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Password"}),": the password used for authentication"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Domain"})," (MSSQL only): this field is useful for example when the user wishes to connect to an Active Directory domain"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Database path"})," (SQLite only): Path of the SQLite file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Encryption"})," (MSSQL only): Encrypt the data between the database and OIBus (can overload the server)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ODBC Driver Path"})," (ODBC only): The path to the ODBC driver config to be used to connect to your DB (for example libmsodbcsql.18.dylib)"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Database access",type:"tip",children:(0,i.jsx)(n.p,{children:"Using a read only user to connect to the database is strongly advised."})}),"\n",(0,i.jsx)(n.h2,{id:"sql-query",children:"SQL Query"}),"\n",(0,i.jsx)(n.p,{children:"The query must follow the syntax of the selected driver."}),"\n",(0,i.jsx)(n.h3,{id:"query-variables",children:"Query variables"}),"\n",(0,i.jsx)(n.p,{children:"Several OIBus variables can be used and will be interpreted according to the selected driver by OIBus."}),"\n",(0,i.jsx)(n.p,{children:"OIBus manages some variables for the SQL connector. These variables, if used in the query, will be replaced by their\nvalues."}),"\n",(0,i.jsx)(n.h4,{id:"starttime",children:"@StartTime"}),"\n",(0,i.jsx)(n.p,{children:"The @StartTime variable initially takes the date of the first execution of the query. When results are retrieved from\nthe database, @StartTime value is set to the most recent timestamp among those results."}),"\n",(0,i.jsxs)(n.p,{children:["The most recent timestamp is retrieved from the field specified in the ",(0,i.jsx)(n.em,{children:"Time column"})," field that must match a\ncolumn in the results."]}),"\n",(0,i.jsx)(n.h4,{id:"endtime",children:"@EndTime"}),"\n",(0,i.jsxs)(n.p,{children:["The @EndTime variable is set to the current time (",(0,i.jsx)(n.em,{children:"now()"}),") or to the end of the sub-interval if a query is split."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM table WHERE timestamp > @StartTime AND timestamp < @EndTime\n"})}),"\n",(0,i.jsx)(n.h3,{id:"splitting-large-queries",children:"Splitting large queries"}),"\n",(0,i.jsxs)(n.p,{children:["In some cases, a query can be quite heavy for the server, especially if a large time interval is requested. If\n@StartTime and @EndTime query variables are used, the query can be split in several sub-queries with smaller intervals\nusing the ",(0,i.jsx)(n.em,{children:"Max read interval"})," field. It gives the length of the smaller intervals (in seconds) the query will be split\nto. If this field is set to 0, queries won't be split."]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, to not overload the server, a delay between sub-queries can be set (in milliseconds) in the ",(0,i.jsx)(n.em,{children:"Read interval\ndelay"})," field."]}),"\n",(0,i.jsx)(n.p,{children:"Each sub-query will result in a specific file and a file name variable can be used."}),"\n",(0,i.jsx)(n.h3,{id:"result-exportation",children:"Result exportation"}),"\n",(0,i.jsx)(n.p,{children:"The result of each query (or sub-query) will be stored in a CSV file that can be compressed with gunzip (.gz extension).\nBy default, a comma is used to delimit the CSV columns. However, another delimiter can be chosen."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"Time column"})," field is used to specify which field of the query results contains the timestamp (if needed). If\nidentified in the query results, this field will be parsed and associated to the specified ",(0,i.jsx)(n.em,{children:"Timezone"})," (example:\nEurope/Paris) at the appropriate ",(0,i.jsx)(n.em,{children:"Date format"})," (example: yyyy-MM-dd HH:mm",":ss",".SSS)."]}),"\n",(0,i.jsx)(n.admonition,{title:"Time column",type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"Time column"})," must match a column returned by the query, not a column in the database Table. For example\n",(0,i.jsx)(n.code,{children:"SELECT prod_date AS timestamp"})," will result timestamp column. So ",(0,i.jsx)(n.em,{children:"Time column"})," should be set to ",(0,i.jsx)(n.strong,{children:"timestamp"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"The file name where to store the results can be specified with variables to make it unique, so it is not overwritten by\nanother query."}),"\n",(0,i.jsx)(n.h4,{id:"currentdate",children:"@CurrentDate"}),"\n",(0,i.jsx)(n.p,{children:"The date at file creation. The date format is yyyy_MM_dd_HH_mm_ss_SSS."}),"\n",(0,i.jsx)(n.h4,{id:"connectorname",children:"@ConnectorName"}),"\n",(0,i.jsx)(n.p,{children:"The name of the current south connector."}),"\n",(0,i.jsx)(n.h4,{id:"querypart",children:"@QueryPart"}),"\n",(0,i.jsx)(n.p,{children:"The sub-query part of a big query that has been split by OIBus. If the query is not split, this value will always be 0."}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Assuming the SQL connector name is ",(0,i.jsx)(n.em,{children:"sql"}),", and that the file will be created on the first of January 2020 at midnight, as\na result of one query (not split), ",(0,i.jsx)(n.code,{children:"@ConnectorName-@CurrentDate-@QueryPart.csv"})," will yield the following name:\nsql-2020_01_01_00_00_00-0.csv."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var i=t(7294);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);