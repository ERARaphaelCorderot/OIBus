"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[6801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4335:(e,t,n)=>{n.d(t,{ZP:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={toc:[{value:"CSV Serialization",id:"csv-serialization",level:3},{value:"Splitting large queries",id:"splitting-large-queries",level:2}]},o="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"csv-serialization"},"CSV Serialization"),(0,r.kt)("p",null,"OIBus offers the option to serialize retrieved data into CSV files, and you can customize the serialization process with\nthe following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Filename"),": The name of the file where the result will be stored. You can use several internal variables like\n",(0,r.kt)("strong",{parentName:"li"},"@ConnectorName")," (the name of the connector) and ",(0,r.kt)("strong",{parentName:"li"},"@CurrentDate")," (the current date in ",(0,r.kt)("inlineCode",{parentName:"li"},"yyyy_MM_dd_HH_mm_ss_SSS")," format)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delimiter"),": The delimiter to use in the CSV."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compression"),": Choose whether to compress the file with gzip or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Output datetime format"),": Specify the format of the datetime in the CSV. OIBus will only convert the\n",(0,r.kt)("a",{parentName:"li",href:"#datetime-fields"},"datetime fields")," specified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Output timezone"),": The timezone to use for storing the datetime.")),(0,r.kt)("h2",{id:"splitting-large-queries"},"Splitting large queries"),(0,r.kt)("p",null,"In situations where a query may impose a significant load on the server, especially when a large time interval is requested\nand the @StartTime and @EndTime ",(0,r.kt)("a",{parentName:"p",href:"#query-variables"},"query variables")," are utilized, you can split the query into several\nsub-queries with smaller intervals. This can be achieved by configuring the ",(0,r.kt)("strong",{parentName:"p"},"Max read interval")," field in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/south-connectors/common-settings#history-settings"},"history settings"),"."))}s.isMDXComponent=!0},9273:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(7462),r=(n(7294),n(3905)),a=n(4335);const o={toc:[{value:"Item settings",id:"item-settings",level:2},{value:"Query",id:"query",level:3},{value:"Query variables",id:"query-variables",level:4},{value:"Datetime fields",id:"datetime-fields",level:3}]},s="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"item-settings"},"Item settings"),(0,r.kt)("p",null,"In the South connector, each item can be configured to be queried according to the chosen scan mode. Multiple queries to\nthe same database can be configured within the same South connector. OIBus will execute the queries one after another,\nprepare the output file, and then send it to North connectors."),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"The query field in the South connector accepts SQL syntax and can utilize several internal variables. These variables\nserve various purposes, including enhancing data stream resilience in the event of a connection failure and breaking\ndown large intervals into smaller chunks, which helps reduce the load on the server and network. For more information,\nrefer to the ",(0,r.kt)("a",{parentName:"p",href:"#splitting-large-queries"},"big queries")," section."),(0,r.kt)("h4",{id:"query-variables"},"Query variables"),(0,r.kt)("p",null,"In OIBus, you can utilize the following internal variables that will be interpreted by the system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@StartTime"),": Initially, the @StartTime variable is set to the date of the first execution of the query. When results\nare retrieved from the database, the @StartTime value is updated to the most recent timestamp among those results in the\nfield used as a reference (refer to ",(0,r.kt)("a",{parentName:"li",href:"#datetime-fields"},"the datetime fields section"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@EndTime"),": The @EndTime variable is set to either the current time (",(0,r.kt)("em",{parentName:"li"},"now()"),") or the end of the sub-interval if a\nquery is split.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="SQL query with @StartTime and @EndTime"',title:'"SQL',query:!0,with:!0,"@StartTime":!0,and:!0,'@EndTime"':!0},"SELECT reference, value, timestamp FROM table WHERE timestamp > @StartTime AND timestamp < @EndTime\n")),(0,r.kt)("h3",{id:"datetime-fields"},"Datetime fields"),(0,r.kt)("p",null,"In the South connector, you can specify an array of fields that are of datetime type and indicate the format to use for\neach field. Here are the details for configuring datetime fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field name"),": The field name in the SELECT section of the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reference field"),": Use this field as a reference for the next @StartTime value (refer to ",(0,r.kt)("a",{parentName:"li",href:"#query-variables"},"query variables"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": The type of data in the result."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timezone")," (for string, Date, DateTime, DateTime2, SmallDateTime types): The timezone of the datetime stored in the\ndatabase."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Format")," (for string only): The string format of the datetime stored in the database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Locale")," (for string only): The locale to use when the format contains locale-specific strings (such as MMM format\nfor months).")),(0,r.kt)("p",null,"OIBus internally uses these dates in ISO UTC format, and the output datetime format can be set in the\n",(0,r.kt)("a",{parentName:"p",href:"#serialization"},"serialization section"),"."),(0,r.kt)(a.ZP,{mdxType:"SerializationSettings"}))}l.isMDXComponent=!0},9697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905)),a=n(9273);const o={sidebar_position:5},s="SQLite",l={unversionedId:"guide/south-connectors/sqlite",id:"guide/south-connectors/sqlite",title:"SQLite",description:"Send SQL queries to interact with an SQLite database.",source:"@site/docs/guide/south-connectors/sqlite.mdx",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/sqlite",permalink:"/docs/guide/south-connectors/sqlite",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guideSidebar",previous:{title:"Modbus",permalink:"/docs/guide/south-connectors/modbus"},next:{title:"MQTT",permalink:"/docs/guide/south-connectors/mqtt"}},u={},c=[{value:"Specific settings",id:"specific-settings",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sqlite"},"SQLite"),(0,r.kt)("p",null,"Send SQL queries to interact with an SQLite database."),(0,r.kt)("h2",{id:"specific-settings"},"Specific settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database path"),": the path of the SQLite database")),(0,r.kt)(a.ZP,{mdxType:"ItemSettings"}))}d.isMDXComponent=!0}}]);