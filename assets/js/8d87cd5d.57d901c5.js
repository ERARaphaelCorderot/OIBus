"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[1081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4335:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={toc:[{value:"CSV Serialization",id:"csv-serialization",level:3},{value:"Splitting large queries",id:"splitting-large-queries",level:2}]},o="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"csv-serialization"},"CSV Serialization"),(0,a.kt)("p",null,"OIBus offers the option to serialize retrieved data into CSV files, and you can customize the serialization process with\nthe following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Filename"),": The name of the file where the result will be stored. You can use several internal variables like\n",(0,a.kt)("strong",{parentName:"li"},"@ConnectorName")," (the name of the connector) and ",(0,a.kt)("strong",{parentName:"li"},"@CurrentDate")," (the current date in ",(0,a.kt)("inlineCode",{parentName:"li"},"yyyy_MM_dd_HH_mm_ss_SSS")," format)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delimiter"),": The delimiter to use in the CSV."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Compression"),": Choose whether to compress the file with gzip or not."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output datetime format"),": Specify the format of the datetime in the CSV. OIBus will only convert the\n",(0,a.kt)("a",{parentName:"li",href:"#datetime-fields"},"datetime fields")," specified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Output timezone"),": The timezone to use for storing the datetime.")),(0,a.kt)("h2",{id:"splitting-large-queries"},"Splitting large queries"),(0,a.kt)("p",null,"In situations where a query may impose a significant load on the server, especially when a large time interval is requested\nand the @StartTime and @EndTime ",(0,a.kt)("a",{parentName:"p",href:"#query-variables"},"query variables")," are utilized, you can split the query into several\nsub-queries with smaller intervals. This can be achieved by configuring the ",(0,a.kt)("strong",{parentName:"p"},"Max read interval")," field in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/south-connectors/common-settings#history-settings"},"history settings"),"."))}s.isMDXComponent=!0},9273:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),a=(n(7294),n(3905)),i=n(4335);const o={toc:[{value:"Item settings",id:"item-settings",level:2},{value:"Query",id:"query",level:3},{value:"Query variables",id:"query-variables",level:4},{value:"Datetime fields",id:"datetime-fields",level:3}]},s="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"item-settings"},"Item settings"),(0,a.kt)("p",null,"In the South connector, each item can be configured to be queried according to the chosen scan mode. Multiple queries to\nthe same database can be configured within the same South connector. OIBus will execute the queries one after another,\nprepare the output file, and then send it to North connectors."),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("p",null,"The query field in the South connector accepts SQL syntax and can utilize several internal variables. These variables\nserve various purposes, including enhancing data stream resilience in the event of a connection failure and breaking\ndown large intervals into smaller chunks, which helps reduce the load on the server and network. For more information,\nrefer to the ",(0,a.kt)("a",{parentName:"p",href:"#splitting-large-queries"},"big queries")," section."),(0,a.kt)("h4",{id:"query-variables"},"Query variables"),(0,a.kt)("p",null,"In OIBus, you can utilize the following internal variables that will be interpreted by the system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"@StartTime"),": Initially, the @StartTime variable is set to the date of the first execution of the query. When results\nare retrieved from the database, the @StartTime value is updated to the most recent timestamp among those results in the\nfield used as a reference (refer to ",(0,a.kt)("a",{parentName:"li",href:"#datetime-fields"},"the datetime fields section"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"@EndTime"),": The @EndTime variable is set to either the current time (",(0,a.kt)("em",{parentName:"li"},"now()"),") or the end of the sub-interval if a\nquery is split.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="SQL query with @StartTime and @EndTime"',title:'"SQL',query:!0,with:!0,"@StartTime":!0,and:!0,'@EndTime"':!0},"SELECT reference, value, timestamp FROM table WHERE timestamp > @StartTime AND timestamp < @EndTime\n")),(0,a.kt)("h3",{id:"datetime-fields"},"Datetime fields"),(0,a.kt)("p",null,"In the South connector, you can specify an array of fields that are of datetime type and indicate the format to use for\neach field. Here are the details for configuring datetime fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Field name"),": The field name in the SELECT section of the query."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reference field"),": Use this field as a reference for the next @StartTime value (refer to ",(0,a.kt)("a",{parentName:"li",href:"#query-variables"},"query variables"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type"),": The type of data in the result."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Timezone")," (for string, Date, DateTime, DateTime2, SmallDateTime types): The timezone of the datetime stored in the\ndatabase."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Format")," (for string only): The string format of the datetime stored in the database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Locale")," (for string only): The locale to use when the format contains locale-specific strings (such as MMM format\nfor months).")),(0,a.kt)("p",null,"OIBus internally uses these dates in ISO UTC format, and the output datetime format can be set in the\n",(0,a.kt)("a",{parentName:"p",href:"#serialization"},"serialization section"),"."),(0,a.kt)(i.ZP,{mdxType:"SerializationSettings"}))}l.isMDXComponent=!0},8948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),i=n(9273);const o={sidebar_position:7},s="PostgreSQL",l={unversionedId:"guide/south-connectors/postgresql",id:"guide/south-connectors/postgresql",title:"PostgreSQL",description:"Send SQL queries to interact with a PostgreSQL database.",source:"@site/docs/guide/south-connectors/postgresql.mdx",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/postgresql",permalink:"/docs/guide/south-connectors/postgresql",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guideSidebar",previous:{title:"MQTT",permalink:"/docs/guide/south-connectors/mqtt"},next:{title:"ADS - TwinCAT",permalink:"/docs/guide/south-connectors/ads"}},u={},c=[{value:"Specific settings",id:"specific-settings",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgresql"},"PostgreSQL"),(0,a.kt)("p",null,"Send SQL queries to interact with a PostgreSQL database."),(0,a.kt)("h2",{id:"specific-settings"},"Specific settings"),(0,a.kt)("p",null,"When configuring the SQL connector to send SQL queries to a PostgreSQL Server, you will need to provide the following\ndetails:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Host"),": The address of the PostgreSQL server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port"),": The PostgreSQL server port (default is 5432)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Database"),": The name of the database to connect to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Username"),": The username used for authentication."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password"),": The password used for authentication."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connection timeout"),": Timeout setting for establishing the connection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Request timeout"),": Timeout for each SQL query.")),(0,a.kt)("admonition",{title:"Database access",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is strongly advised to use a read-only user when connecting to the database for security and data integrity purposes.")),(0,a.kt)(i.ZP,{mdxType:"ItemSettings"}))}d.isMDXComponent=!0}}]);