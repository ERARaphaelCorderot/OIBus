"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[2350],{6155:(e,t,i)=>{i.d(t,{ZP:()=>o});var n=i(5893),s=i(1151);function r(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"csv-serialization",children:"CSV Serialization"}),"\n",(0,n.jsx)(t.p,{children:"OIBus offers the option to serialize retrieved data into CSV files, and you can customize the serialization process with\nthe following settings:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Filename"}),": The name of the file where the result will be stored. You can use several internal variables like\n",(0,n.jsx)(t.strong,{children:"@ConnectorName"})," (the name of the connector) and ",(0,n.jsx)(t.strong,{children:"@CurrentDate"})," (the current date in ",(0,n.jsx)(t.code,{children:"yyyy_MM_dd_HH_mm_ss_SSS"})," format)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Delimiter"}),": The delimiter to use in the CSV."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Compression"}),": Choose whether to compress the file with gzip or not."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Output datetime format"}),": Specify the format of the datetime in the CSV. OIBus will only convert the\n",(0,n.jsx)(t.a,{href:"#datetime-fields",children:"datetime fields"})," specified."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Output timezone"}),": The timezone to use for storing the datetime."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"splitting-large-queries",children:"Splitting large queries"}),"\n",(0,n.jsxs)(t.p,{children:["In situations where a query may impose a significant load on the server, especially when a large time interval is requested\nand the @StartTime and @EndTime ",(0,n.jsx)(t.a,{href:"#query-variables",children:"query variables"})," are utilized, you can split the query into several\nsub-queries with smaller intervals. This can be achieved by configuring the ",(0,n.jsx)(t.strong,{children:"Max read interval"})," field in the\n",(0,n.jsx)(t.a,{href:"/docs/guide/south-connectors/common-settings#history-settings",children:"history settings"}),"."]})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},875:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=i(5893),s=i(1151),r=i(6155);const o={sidebar_position:13},a="OIAnalytics (Rest API)",l={id:"guide/south-connectors/oianalytics",title:"OIAnalytics (Rest API)",description:"Retrieve data from the Optimistik OIAnalytics application.",source:"@site/docs/guide/south-connectors/oianalytics.mdx",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/oianalytics",permalink:"/docs/guide/south-connectors/oianalytics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"guideSidebar",previous:{title:"SLIM (Rest API)",permalink:"/docs/guide/south-connectors/slims"},next:{title:"ODBC",permalink:"/docs/guide/south-connectors/odbc"}},c={},h=[{value:"Specific settings",id:"specific-settings",level:2},{value:"Item settings",id:"item-settings",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Query params",id:"query-params",level:3},{value:"Query variables",id:"query-variables",level:4}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"oianalytics-rest-api",children:"OIAnalytics (Rest API)"}),"\n",(0,n.jsxs)(t.p,{children:["Retrieve data from the ",(0,n.jsx)(t.a,{href:"https://optimistik.com/oianalytics/",children:"Optimistik OIAnalytics"})," application."]}),"\n",(0,n.jsx)(t.h2,{id:"specific-settings",children:"Specific settings"}),"\n",(0,n.jsx)(t.p,{children:"Here are the configuration details:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"URL"}),": This is the address of the OIAnalytics application."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Accept unauthorized certificate"}),": Decide whether to accept certificates even if they are outdated or self-signed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Access key"}),": Provide the access key used for authentication."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Secret key"}),": Enter the secret key used for authentication."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Use proxy"}),": Choose whether to route the request through a proxy."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"item-settings",children:"Item settings"}),"\n",(0,n.jsx)(t.p,{children:"In the South connector, each item can be configured to be queried according to the chosen scan mode. Multiple queries to\nthe same database can be configured within the same South connector. OIBus will execute the queries one after another,\nprepare the output file, and then send it to North connectors."}),"\n",(0,n.jsx)(t.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsxs)(t.p,{children:["The endpoint where to send the HTTP request, for instance ",(0,n.jsx)(t.code,{children:"/api/oianalytics/data/values"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"query-params",children:"Query params"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Query params"})," field can utilize internal variables. These variables serve two primary purposes:\nensuring data stream resilience in case of connection failures and breaking down large intervals into smaller chunks,\nthus reducing the load on both the server and the network (as explained in the ",(0,n.jsx)(t.a,{href:"#splitting-large-queries",children:"big queries section"}),")."]}),"\n",(0,n.jsx)(t.h4,{id:"query-variables",children:"Query variables"}),"\n",(0,n.jsx)(t.p,{children:"In OIBus, you can utilize the following internal variables that will be interpreted by the system:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"@StartTime"}),": Initially, the @StartTime variable is set to the date of the first execution of the query. When results\nare retrieved from the application, the @StartTime value is updated to the most recent timestamp among those results in the\nfield used as a reference (refer to ",(0,n.jsx)(t.a,{href:"#datetime-fields",children:"the datetime fields section"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"@EndTime"}),": The @EndTime variable is set to either the current time (",(0,n.jsx)(t.em,{children:"now()"}),") or the end of the sub-interval if a\nquery is split."]}),"\n"]}),"\n",(0,n.jsx)(r.ZP,{})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var n=i(7294);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);