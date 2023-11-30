"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[5293],{8135:(e,n,t)=>{t.d(n,{ZP:()=>o});var i=t(5893),s=t(1151);function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"csv-serialization",children:"CSV Serialization"}),"\n",(0,i.jsx)(n.p,{children:"OIBus offers the option to serialize retrieved data into CSV files, and you can customize the serialization process with\nthe following settings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Filename"}),": The name of the file where the result will be stored. You can use several internal variables like\n",(0,i.jsx)(n.strong,{children:"@ConnectorName"})," (the name of the connector) and ",(0,i.jsx)(n.strong,{children:"@CurrentDate"})," (the current date in ",(0,i.jsx)(n.code,{children:"yyyy_MM_dd_HH_mm_ss_SSS"})," format)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delimiter"}),": The delimiter to use in the CSV."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compression"}),": Choose whether to compress the file with gzip or not."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Output datetime format"}),": Specify the format of the datetime in the CSV. OIBus will only convert the\n",(0,i.jsx)(n.a,{href:"#datetime-fields",children:"datetime fields"})," specified."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Output timezone"}),": The timezone to use for storing the datetime."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"splitting-large-queries",children:"Splitting large queries"}),"\n",(0,i.jsxs)(n.p,{children:["In situations where a query may impose a significant load on the server, especially when a large time interval is requested\nand the @StartTime and @EndTime ",(0,i.jsx)(n.a,{href:"#query-variables",children:"query variables"})," are utilized, you can split the query into several\nsub-queries with smaller intervals. This can be achieved by configuring the ",(0,i.jsx)(n.strong,{children:"Max read interval"})," field in the\n",(0,i.jsx)(n.a,{href:"/zh/docs/guide/south-connectors/common-settings#history-settings",children:"history settings"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},9117:(e,n,t)=>{t.d(n,{ZP:()=>l});var i=t(5893),s=t(1151),r=t(8135);function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"item-settings",children:"Item settings"}),"\n",(0,i.jsx)(n.p,{children:"In the South connector, each item can be configured to be queried according to the chosen scan mode. Multiple queries to\nthe same database can be configured within the same South connector. OIBus will execute the queries one after another,\nprepare the output file, and then send it to North connectors."}),"\n",(0,i.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,i.jsxs)(n.p,{children:["The query field in the South connector accepts SQL syntax and can utilize several internal variables. These variables\nserve various purposes, including enhancing data stream resilience in the event of a connection failure and breaking\ndown large intervals into smaller chunks, which helps reduce the load on the server and network. For more information,\nrefer to the ",(0,i.jsx)(n.a,{href:"#splitting-large-queries",children:"big queries"})," section."]}),"\n",(0,i.jsx)(n.h4,{id:"query-variables",children:"Query variables"}),"\n",(0,i.jsx)(n.p,{children:"In OIBus, you can utilize the following internal variables that will be interpreted by the system:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"@StartTime"}),": Initially, the @StartTime variable is set to the date of the first execution of the query. When results\nare retrieved from the database, the @StartTime value is updated to the most recent timestamp among those results in the\nfield used as a reference (refer to ",(0,i.jsx)(n.a,{href:"#datetime-fields",children:"the datetime fields section"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"@EndTime"}),": The @EndTime variable is set to either the current time (",(0,i.jsx)(n.em,{children:"now()"}),") or the end of the sub-interval if a\nquery is split."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="SQL query with @StartTime and @EndTime"',children:"SELECT reference, value, timestamp FROM table WHERE timestamp > @StartTime AND timestamp < @EndTime\n"})}),"\n",(0,i.jsx)(n.h3,{id:"datetime-fields",children:"Datetime fields"}),"\n",(0,i.jsx)(n.p,{children:"In the South connector, you can specify an array of fields that are of datetime type and indicate the format to use for\neach field. Here are the details for configuring datetime fields:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Field name"}),": The field name in the SELECT section of the query."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference field"}),": Use this field as a reference for the next @StartTime value (refer to ",(0,i.jsx)(n.a,{href:"#query-variables",children:"query variables"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": The type of data in the result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Timezone"})," (for string, Date, DateTime, DateTime2, SmallDateTime types): The timezone of the datetime stored in the\ndatabase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Format"})," (for string only): The string format of the datetime stored in the database."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Locale"})," (for string only): The locale to use when the format contains locale-specific strings (such as MMM format\nfor months)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["OIBus internally uses these dates in ISO UTC format, and the output datetime format can be set in the\n",(0,i.jsx)(n.a,{href:"#serialization",children:"serialization section"}),"."]}),"\n",(0,i.jsx)(r.ZP,{})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},7879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=t(5893),s=t(1151),r=t(9117);const o={sidebar_position:3},l="\u5fae\u8f6f SQL \u670d\u52a1\u5668 (MSSQL)",a={id:"guide/south-connectors/mssql",title:"\u5fae\u8f6f SQL \u670d\u52a1\u5668 (MSSQL)",description:"\u53d1\u9001 SQL \u67e5\u8be2\u5230 Microsoft SQL \u670d\u52a1\u5668\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guide/south-connectors/mssql.mdx",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/mssql",permalink:"/zh/docs/guide/south-connectors/mssql",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guideSidebar",previous:{title:"OPCUA",permalink:"/zh/docs/guide/south-connectors/opcua"},next:{title:"Modbus",permalink:"/zh/docs/guide/south-connectors/modbus"}},c={},h=[{value:"\u7279\u5b9a\u8bbe\u7f6e",id:"\u7279\u5b9a\u8bbe\u7f6e",level:2}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5fae\u8f6f-sql-\u670d\u52a1\u5668-mssql",children:"\u5fae\u8f6f SQL \u670d\u52a1\u5668 (MSSQL)"}),"\n",(0,i.jsx)(n.p,{children:"\u53d1\u9001 SQL \u67e5\u8be2\u5230 Microsoft SQL \u670d\u52a1\u5668\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7279\u5b9a\u8bbe\u7f6e",children:"\u7279\u5b9a\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e SQL \u8fde\u63a5\u5668\u5411 Microsoft SQL \u670d\u52a1\u5668\u53d1\u9001 SQL \u67e5\u8be2\u65f6\uff0c\u60a8\u9700\u8981\u63d0\u4f9b\u4ee5\u4e0b\u8be6\u7ec6\u4fe1\u606f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4e3b\u673a"}),"\uff1aMicrosoft SQL \u670d\u52a1\u5668\u7684\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7aef\u53e3"}),"\uff1aMSSQL \u670d\u52a1\u5668\u7aef\u53e3\uff08\u9ed8\u8ba4\u4e3a 1433\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6570\u636e\u5e93"}),"\uff1a\u8981\u8fde\u63a5\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7528\u6237\u540d"}),"\uff1a\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u540d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5bc6\u7801"}),"\uff1a\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u5bc6\u7801\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u57df"}),"\uff08\u53ef\u9009\uff09\uff1a\u5728\u8fde\u63a5\u5230 Active Directory \u57df\u65f6\u6709\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4f7f\u7528\u52a0\u5bc6"}),"\uff1a\u9009\u62e9\u52a0\u5bc6\u6570\u636e\u5e93\u4e0e OIBus \u4e4b\u95f4\u7684\u6570\u636e\uff08\u8bf7\u6ce8\u610f\uff0c\u52a0\u5bc6\u53ef\u80fd\u4f1a\u4f7f\u670d\u52a1\u5668\u8d1f\u62c5\u8fc7\u91cd\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4fe1\u4efb\u670d\u52a1\u5668\u8bc1\u4e66"}),"\uff1a\u5373\u4f7f\u670d\u52a1\u5668\u8bc1\u4e66\u8fc7\u65f6\u6216\u81ea\u7b7e\u540d\u4e5f\u63a5\u53d7\u7684\u9009\u9879\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8fde\u63a5\u8d85\u65f6"}),"\uff1a\u5efa\u7acb\u8fde\u63a5\u7684\u8d85\u65f6\u8bbe\u7f6e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8bf7\u6c42\u8d85\u65f6"}),"\uff1a\u6bcf\u4e2a SQL \u67e5\u8be2\u7684\u8d85\u65f6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u6570\u636e\u5e93\u8bbf\u95ee",type:"tip",children:(0,i.jsx)(n.p,{children:"\u51fa\u4e8e\u5b89\u5168\u548c\u6570\u636e\u5b8c\u6574\u6027\u76ee\u7684\uff0c\u5efa\u8bae\u4f7f\u7528\u53ea\u8bfb\u7528\u6237\u8fde\u63a5\u5230\u6570\u636e\u5e93\u3002"})}),"\n",(0,i.jsx)(r.ZP,{})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);