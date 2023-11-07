"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[7170],{6155:(e,n,t)=>{t.d(n,{ZP:()=>a});var i=t(5893),s=t(1151);function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"csv-serialization",children:"CSV Serialization"}),"\n",(0,i.jsx)(n.p,{children:"OIBus offers the option to serialize retrieved data into CSV files, and you can customize the serialization process with\nthe following settings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Filename"}),": The name of the file where the result will be stored. You can use several internal variables like\n",(0,i.jsx)(n.strong,{children:"@ConnectorName"})," (the name of the connector) and ",(0,i.jsx)(n.strong,{children:"@CurrentDate"})," (the current date in ",(0,i.jsx)(n.code,{children:"yyyy_MM_dd_HH_mm_ss_SSS"})," format)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delimiter"}),": The delimiter to use in the CSV."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compression"}),": Choose whether to compress the file with gzip or not."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Output datetime format"}),": Specify the format of the datetime in the CSV. OIBus will only convert the\n",(0,i.jsx)(n.a,{href:"#datetime-fields",children:"datetime fields"})," specified."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Output timezone"}),": The timezone to use for storing the datetime."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"splitting-large-queries",children:"Splitting large queries"}),"\n",(0,i.jsxs)(n.p,{children:["In situations where a query may impose a significant load on the server, especially when a large time interval is requested\nand the @StartTime and @EndTime ",(0,i.jsx)(n.a,{href:"#query-variables",children:"query variables"})," are utilized, you can split the query into several\nsub-queries with smaller intervals. This can be achieved by configuring the ",(0,i.jsx)(n.strong,{children:"Max read interval"})," field in the\n",(0,i.jsx)(n.a,{href:"/docs/guide/south-connectors/common-settings#history-settings",children:"history settings"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151),r=t(6155);const a={sidebar_position:12},o="SLIM (Rest API)",l={id:"guide/south-connectors/slims",title:"SLIM (Rest API)",description:"Retrieve data from the Agilent SLIMS",source:"@site/docs/guide/south-connectors/slims.mdx",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/slims",permalink:"/docs/guide/south-connectors/slims",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"guideSidebar",previous:{title:"Oracle",permalink:"/docs/guide/south-connectors/oracle"},next:{title:"OIAnalytics (Rest API)",permalink:"/docs/guide/south-connectors/oianalytics"}},d={},c=[{value:"Specific settings",id:"specific-settings",level:2},{value:"Item settings",id:"item-settings",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Body and query params",id:"body-and-query-params",level:3},{value:"Query variables",id:"query-variables",level:4},{value:"Datetime fields",id:"datetime-fields",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"slim-rest-api",children:"SLIM (Rest API)"}),"\n",(0,i.jsxs)(n.p,{children:["Retrieve data from the ",(0,i.jsx)(n.a,{href:"https://www.agilent.com/en/product/software-informatics/lab-workflow-management-software/slims",children:"Agilent SLIMS"}),"\napplication, which serves as a comprehensive laboratory management solution."]}),"\n",(0,i.jsx)(n.h2,{id:"specific-settings",children:"Specific settings"}),"\n",(0,i.jsx)(n.p,{children:"Here are the details for configuring your connection:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"URL"}),": This is the address of the SLIMS application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Port"}),": Specify the port that the application is listening on."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Username"}),": Provide the username used for authentication."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Password"}),": Enter the password used for authentication."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use proxy"}),": Choose whether to route the request through a proxy."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Accept unauthorized certificate"}),": Decide whether to accept certificates even if they are outdated or self-signed."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"item-settings",children:"Item settings"}),"\n",(0,i.jsx)(n.p,{children:"In the South connector, each item can be configured to be queried according to the chosen scan mode. Multiple queries to\nthe same database can be configured within the same South connector. OIBus will execute the queries one after another,\nprepare the output file, and then send it to North connectors."}),"\n",(0,i.jsx)(n.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["The endpoint where to send the HTTP request, for instance ",(0,i.jsx)(n.code,{children:"/slimsrest/rest/Result/advanced"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"body-and-query-params",children:"Body and query params"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Body"})," field supports JSON syntax and can utilize internal variables. These variables serve two primary purposes:\nensuring data stream resilience in case of connection failures and breaking down large intervals into smaller chunks,\nthus reducing the load on both the server and the network (as explained in the ",(0,i.jsx)(n.a,{href:"#splitting-large-queries",children:"big queries section"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Query params"})," field is structured as a key/value array and can also make use of the same interval variables."]}),"\n",(0,i.jsx)(n.h4,{id:"query-variables",children:"Query variables"}),"\n",(0,i.jsx)(n.p,{children:"In OIBus, you can utilize the following internal variables that will be interpreted by the system:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"@StartTime"}),": Initially, the @StartTime variable is set to the date of the first execution of the query. When results\nare retrieved from the application, the @StartTime value is updated to the most recent timestamp among those results in the\nfield used as a reference (refer to ",(0,i.jsx)(n.a,{href:"#datetime-fields",children:"the datetime fields section"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"@EndTime"}),": The @EndTime variable is set to either the current time (",(0,i.jsx)(n.em,{children:"now()"}),") or the end of the sub-interval if a\nquery is split."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="Body example with variables"',children:'{\n    "criteria": {\n        "operator": "and",\n        "criteria": [\n            {\n                "fieldName": "rslt_fk_status",\n                "operator": "equals",\n                "value": 14\n            },\n            {\n                "fieldName": "rslt_cf_pid",\n                "operator": "notNull"\n            },\n            {\n                "fieldName": "rslt_cf_samplingDateAndTime",\n                "operator": "notNull"\n            },\n            {\n                "fieldName": "rslt_modifiedOn",\n                "operator": "between",\n                "start": @StartTime,\n                "end": @EndTime\n            }\n        ]\n    },\n    "sortBy": [\n        "rslt_modifiedOn"\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"datetime-fields",children:"Datetime fields"}),"\n",(0,i.jsx)(n.p,{children:"You can specify in this array which fields are a datetime type, and which format to use."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Field name"}),": The field name in the HTTP payload result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference field"}),": Use this field as reference for the next @StartTime value (see ",(0,i.jsx)(n.a,{href:"#query-variables",children:"query variables"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": The type of the data in the result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Timezone"})," (for string only): The timezone of the datetime stored in the\ndatabase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Format"})," (for string only): The string format of the datetime retrieved."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Locale"})," (for string only): The locale to use when the format contains locale specific string (such as MMM format for\nmonths)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For SLIMS, two datetime fields must be specified:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"rslt_modifiedOn"})," (used as reference): this field will be stored in the internal variable @StartTime for the next HTTP request"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"rslt_cf_samplingDateAndTime"}),": this field is not used as reference but must be specified to be correctly parsed. It will be used\nas the timestamp of the value retrieved."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["OIBus will internally use these dates in ISO UTC format. The output datetime format can be set in the\n",(0,i.jsx)(n.a,{href:"#serialization",children:"serialization section"}),"."]}),"\n",(0,i.jsx)(r.ZP,{})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);