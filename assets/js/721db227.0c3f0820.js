"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[6774],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=i,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:3},l="Data rate estimation and cache sizing",o={unversionedId:"guide/advanced/oibus-data-rate",id:"guide/advanced/oibus-data-rate",title:"Data rate estimation and cache sizing",description:"OIBus sends values to a target application via North connectors (OIConnect, OIAnalytics...). There are two sending",source:"@site/docs/guide/advanced/oibus-data-rate.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/oibus-data-rate",permalink:"/docs/guide/advanced/oibus-data-rate",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guideSidebar",previous:{title:"OIBus to OIBus communication",permalink:"/docs/guide/advanced/oibus-to-oibus"},next:{title:"OIBus Agent",permalink:"/docs/category/oibus-agent"}},s={},u=[{value:"Sending files (CSV)",id:"sending-files-csv",level:2},{value:"Column files",id:"column-files",level:3},{value:"Row files",id:"row-files",level:3},{value:"Column row files",id:"column-row-files",level:3},{value:"Sending values (JSON payload)",id:"sending-values-json-payload",level:2},{value:"Comparison",id:"comparison",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-rate-estimation-and-cache-sizing"},"Data rate estimation and cache sizing"),(0,i.kt)("p",null,"OIBus sends values to a target application via North connectors (OIConnect, OIAnalytics...). There are two sending\nmodes: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"through a file with a files' endpoint"),(0,i.kt)("li",{parentName:"ul"},"through JSON payloads with a values' endpoint. ")),(0,i.kt)("p",null,"The volumes to be taken into account can be estimated according to the data to be sent and the sending mode selected.\nThese estimates can also be used to size the amount of cache storage needed to ensure the store and forward under\ngood conditions."),(0,i.kt)("p",null,"This section gives some hints on how to estimate the cache size."),(0,i.kt)("h2",{id:"sending-files-csv"},"Sending files (CSV)"),(0,i.kt)("p",null,"We will focus on data in the form of CSV files. In this case the volume will depend on several parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The data sampling frequency"),(0,i.kt)("li",{parentName:"ul"},"The file sending frequency"),(0,i.kt)("li",{parentName:"ul"},"The timestamp format"),(0,i.kt)("li",{parentName:"ul"},"The data format: number of characters used (precision)"),(0,i.kt)("li",{parentName:"ul"},"The size of data references"),(0,i.kt)("li",{parentName:"ul"},"The file format: in lines or in columns")),(0,i.kt)("p",null,"In the following examples, we will calculate how much space a CSV file generated by OIBus takes.\nWe took the following assumptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The sampling frequency: one point per minute."),(0,i.kt)("li",{parentName:"ul"},"The frequency of sending the file: one file every 30 minutes."),(0,i.kt)("li",{parentName:"ul"},"The timestamp format: ISO 8601 format, 24 bytes in size."),(0,i.kt)("li",{parentName:"ul"},"Data format: 3 digits with a separator for the decimal places. Therefore, the data in the following examples have a\nsize of 4 bytes."),(0,i.kt)("li",{parentName:"ul"},"The size of the point ID (data reference): DataXXX, where XXX represents three numbers characters. Therefore, the\nreferences of the following examples have a size of 7 bytes.")),(0,i.kt)("h3",{id:"column-files"},"Column files"),(0,i.kt)("p",null,"This format is particularly suitable for data repeated on the same timestamp. It saves space compared to a ",(0,i.kt)("em",{parentName:"p"},"lines"),"\nformat."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"Timestamp                   Data001     Data002     Data003\n2020-02-01T20:04:00.000Z    12.0        10.0        10.0\n2020-02-01T20:05:00.000Z    10.0        19.0        10.0\n2020-02-01T20:06:00.000Z    10.0        10.0        14.0\n...\n")),(0,i.kt)("p",null,"The size of the header is ",(0,i.kt)("inlineCode",{parentName:"p"},"10 + 1 + 7 + 1 + 7 + 1 + 7 + 1 = 35 bytes"),". "),(0,i.kt)("p",null,"The size of one line is ",(0,i.kt)("inlineCode",{parentName:"p"},"24 + 1 + 4 + 1 + 4 + 1 + 4 + 1 = 40 bytes")," (column separators and newlines are taken into\naccount)."),(0,i.kt)("p",null,"The number of lines depends on the frequency of the data, here one line every minute. With a file sent every 30 minutes,\nit will therefore have a size of ",(0,i.kt)("inlineCode",{parentName:"p"},"35+40x30 = 1235 bytes"),". Over a day, there will be 48 files, a total of 59,280 bytes\nor 58 kB."),(0,i.kt)("h3",{id:"row-files"},"Row files"),(0,i.kt)("p",null,"This format is particularly suitable when the different data transmitted do not have the same sampling frequency. In\nthe example we assume that all data has the same sample rate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"Timestamp                   Reference       Value\n2020-02-01T20:04:00.000Z    Data001         12.0\n2020-02-01T20:04:00.000Z    Data002         10.0\n2020-02-01T20:04:00.000Z    Data003         10.0\n2020-02-01T20:05:00.000Z    Data001         10.0\n2020-02-01T20:05:00.000Z    Data002         19.0\n2020-02-01T20:05:00.000Z    Data003         10.0\n2020-02-01T20:06:00.000Z    Data001         10.0\n2020-02-01T20:06:00.000Z    Data002         10.0\n2020-02-01T20:06:00.000Z    Data003         14.0\n...\n")),(0,i.kt)("p",null,"The size of the header is ",(0,i.kt)("inlineCode",{parentName:"p"},"10 + 1 + 9 + 1 + 6 + 1 = 28 octets"),".\nThe size of a line is ",(0,i.kt)("inlineCode",{parentName:"p"},"24 + 1 + 7 + 1 + 4 + 1 = 38 bytes")," (column separators and newlines are taken into account)."),(0,i.kt)("p",null,"The number of lines depends on the frequency of the data and the number of references, here one line every minute\nmultiplied by 3 references (which makes 3 lines per minute). With one file sent every 30 minutes, it will therefore have\na size of ",(0,i.kt)("inlineCode",{parentName:"p"},"28+38x30x3 = 3448 bytes"),". Over a day, there will be 48 files, a total of 165,504 bytes or 162 kB."),(0,i.kt)("h3",{id:"column-row-files"},"Column row files"),(0,i.kt)("p",null,"This format has the advantage of the column file and allows the pooling of data identifiers (001, 002, 003) with the\nreferences if there are several, which is not the case here since only Data is used. This allows you to obtain the\nreferences Data001, Data002, Data003."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"Timestamp                   Reference   001     002     003\n2020-02-01T20:04:00.000Z    Data        12,0    10,0    10,0\n2020-02-01T20:05:00.000Z    Data        10.0    19.0    10.0\n2020-02-01T20:06:00.000Z    Data        10.0    10.0    14.0\n...\n")),(0,i.kt)("p",null,"The size of the header is ",(0,i.kt)("inlineCode",{parentName:"p"},"10 + 1 + 9 + 1 + 3 + 1 + 3 + 1 + 3 + 1 = 33 bytes"),"."),(0,i.kt)("p",null,"The size of a line here is ",(0,i.kt)("inlineCode",{parentName:"p"},"24 + 1 + 4 + 1 + 4 + 1 + 4 + 1 + 4 + 1 = 45 bytes")," (column separators and newlines are taken\ninto account)."),(0,i.kt)("p",null,"The number of lines depends on the frequency of the data and the number of references, here a line every minute\nmultiplied by a reference (which makes one line per minute). With one file sent every 30 minutes, the file to be sent\nwill therefore have a size of ",(0,i.kt)("inlineCode",{parentName:"p"},"33+45x30 = 1383 bytes"),". Over a day, there will be 48 files, a total of 66,384 bytes or\n65 kB."),(0,i.kt)("h2",{id:"sending-values-json-payload"},"Sending values (JSON payload)"),(0,i.kt)("p",null,"When values are retrieved by the North connector and sent to a values' endpoint (OIConnect or OIAnalytics), they are\nformatted in an array like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {"timestamp": "2020-02-01T20:04:00.000Z", "pointId":"Data001", "data": {"value": "12.0", "quality": "192"}},\n    {"timestamp": "2020-02-01T20:04:00.000Z", "pointId":"Data002", "data": {"value": "10.0", "quality": "192"}}, \n    {"timestamp": "2020-02-01T20:04:00.000Z", "pointId":"Data003", "data": {"value": "10.0", "quality": "192"}}\n]\n')),(0,i.kt)("p",null,"Each field has the following meaning:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"timestamp"),": indicates the timestamp of the value in ISO 8601 format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pointId"),": reference of the value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data"),": JSON object containing the recorded value (value) and the quality (quality)")),(0,i.kt)("p",null,"We will focus on data in JSON file format. In this case the size depends on several parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The data sampling frequency"),(0,i.kt)("li",{parentName:"ul"},"The number of points grouped by sending (defined by ",(0,i.kt)("a",{parentName:"li",href:"../north-connectors/common-settings#caching"},(0,i.kt)("em",{parentName:"a"},"Group Count")),")"),(0,i.kt)("li",{parentName:"ul"},"The sending frequency (defined by ",(0,i.kt)("a",{parentName:"li",href:"../north-connectors/common-settings#caching"},(0,i.kt)("em",{parentName:"a"},"Send Interval")),")"),(0,i.kt)("li",{parentName:"ul"},"The format of data and quality: number of characters used (precision)"),(0,i.kt)("li",{parentName:"ul"},"The size of the data references")),(0,i.kt)("p",null,"It is then possible to estimate the space occupied by a value."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The timestamp size is 39 bytes (",(0,i.kt)("inlineCode",{parentName:"li"},'"timestamp": "2020-02-01T20: 00: 00.000Z"'),")"),(0,i.kt)("li",{parentName:"ul"},"The pointId size is of the form of ",(0,i.kt)("inlineCode",{parentName:"li"},'"pointId": "DataXXX"'),", i.e. 13 bytes added to the number of bytes of the\nreference (here the 7 bytes of ",(0,i.kt)("em",{parentName:"li"},"DataXXX"),")"),(0,i.kt)("li",{parentName:"ul"},"The data field size is 10 bytes (",(0,i.kt)("inlineCode",{parentName:"li"},'"data": {...}'),") added to its content:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The value field is of the form of ",(0,i.kt)("inlineCode",{parentName:"li"},'"value": "10.0"'),", i.e. 11 bytes added the variable number of bytes on\nwhich is encoded the value (here 4 bytes)"),(0,i.kt)("li",{parentName:"ul"},"The quality field is of the form of ",(0,i.kt)("inlineCode",{parentName:"li"},'"quality": "192"'),", i.e. 13 bytes plus the variable number of bytes on which\nthe quality is encoded (here 3 bytes)")))),(0,i.kt)("p",null,"Hence, the size of the object representing a value can be broken down into:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The constant object size: ",(0,i.kt)("inlineCode",{parentName:"li"},"39 + 13 + 10 + 11 + 13 + 6 = 92 bytes")," (6 corresponding to the separators of the different\nelements: commas...)"),(0,i.kt)("li",{parentName:"ul"},"The size of the reference: 7 bytes"),(0,i.kt)("li",{parentName:"ul"},"The size of the value: 4 bytes"),(0,i.kt)("li",{parentName:"ul"},"The size of the quality: 3 bytes")),(0,i.kt)("p",null,"The size of a single object to sent is therefore 106 bytes, for a single value."),(0,i.kt)("p",null,"With a sampling frequency of 1 point per minute and 3 data, with Group Count equal to 1000 and Send Interval equal to\n1000ms, then OIBus will transmit a JSON every minute with 3 data or 318 bytes. "),(0,i.kt)("p",null,"Over one day, this will represent 318 x 24 x 60 = 457,920 bytes, or 447 kB."),(0,i.kt)("h2",{id:"comparison"},"Comparison"),(0,i.kt)("p",null,"Under the conditions defined in the example, it appears that the transmission mode and the data format have a\nsignificant impact on the transmitted volumes. This will be even more critical when the number of data and\ntheir sampling frequency are higher than described in this example."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"CSV columns"),(0,i.kt)("th",{parentName:"tr",align:"center"},"CSV rows"),(0,i.kt)("th",{parentName:"tr",align:"center"},"CSV rows + columns"),(0,i.kt)("th",{parentName:"tr",align:"center"},"JSON payload"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sent by day"),(0,i.kt)("td",{parentName:"tr",align:"center"},"58 kB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"162 kB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"65 kB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"447 kB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Size by value"),(0,i.kt)("td",{parentName:"tr",align:"center"},"13,7 bytes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"38,3 bytes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"15,4 bytes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"106 bytes")))))}m.isMDXComponent=!0}}]);