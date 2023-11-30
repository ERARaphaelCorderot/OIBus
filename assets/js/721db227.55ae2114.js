"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[6774],{7096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(5893),i=n(1151);const a={sidebar_position:3},r="Data rate estimation and cache sizing",o={id:"guide/advanced/oibus-data-rate",title:"Data rate estimation and cache sizing",description:"OIBus facilitates the transmission of values to a target application via North connectors such as OIBus and OIAnalytics,",source:"@site/docs/guide/advanced/oibus-data-rate.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/oibus-data-rate",permalink:"/docs/guide/advanced/oibus-data-rate",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guideSidebar",previous:{title:"OIBus to OIBus communication",permalink:"/docs/guide/advanced/oibus-to-oibus"},next:{title:"OIBus Agent",permalink:"/docs/category/oibus-agent"}},l={},d=[{value:"Sending files (CSV)",id:"sending-files-csv",level:2},{value:"Row files",id:"row-files",level:3},{value:"Column files",id:"column-files",level:3},{value:"Column row files",id:"column-row-files",level:3},{value:"Sending values (JSON payload)",id:"sending-values-json-payload",level:2},{value:"Format",id:"format",level:3},{value:"Size estimation",id:"size-estimation",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"data-rate-estimation-and-cache-sizing",children:"Data rate estimation and cache sizing"}),"\n",(0,s.jsx)(t.p,{children:"OIBus facilitates the transmission of values to a target application via North connectors such as OIBus and OIAnalytics,\noffering two distinct sending modes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"File Endpoint"}),": Data can be sent by storing it in a file, which is then transferred via the files' endpoint."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"JSON Payloads Endpoint"}),": Alternatively, data can be transmitted as JSON payloads using the values' endpoint."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Estimating the appropriate cache size is essential to ensure smooth and reliable store-and-forward operations, and it\ndepends on various factors including the type of data to be sent and the chosen sending mode. Here are some tips for\nestimating the cache size effectively:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Data Volume"}),": Analyze the volume of data that your OIBus instance needs to transmit. Consider both the size of individual\ndata elements and the frequency of data updates."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sending Frequency"}),": Evaluate how often data needs to be sent. Frequent transmissions may require larger caches to\naccommodate temporary disruptions in connectivity."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Transmission Mode"}),": The chosen sending mode (file or JSON payloads) can impact cache size requirements. JSON\npayloads may consume more memory due to their structured format."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Network Reliability"}),": If the network connection to the target application is unreliable or experiences frequent\ninterruptions, a larger cache may be needed to store data during downtime."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Latency Tolerance"}),": Consider the acceptable latency between data generation and data delivery to the target\napplication. A larger cache can help mitigate delays caused by network issues."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Retention Policy"}),": Determine how long data should be retained in the cache before attempting to resend it. This\nretention period will influence cache size requirements."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Resource Availability"}),": Assess the available resources on the OIBus machine, including RAM and storage, as these\nwill impact your ability to allocate a sufficiently sized cache."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Monitoring and Testing"}),": Regularly monitor and test your cache system to ensure it meets the actual needs of your\ndata transmission process. Adjust the cache size as necessary based on real-world performance."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"By carefully considering these factors, you can make informed decisions about the cache size needed to support efficient\nand reliable data transmission from OIBus to your target application."}),"\n",(0,s.jsx)(t.h2,{id:"sending-files-csv",children:"Sending files (CSV)"}),"\n",(0,s.jsx)(t.p,{children:"Some protocols like SQL can let you organize the data in the resulting file. Here are some tips to understand how it\nimpacts the resulting file size."}),"\n",(0,s.jsx)(t.p,{children:"Based on the provided assumptions, you can calculate the approximate space a CSV file generated by OIBus would\noccupy. Let's break down the key parameters and calculate the file size with the given examples:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sampling Frequency"}),": One point per minute, which means there are 60 data points per hour."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"File Sending Frequency"}),": One file sent every 30 minutes, resulting in 2 files per hour."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Timestamp Format"}),": ISO 8601 format, 24 bytes in size."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Data Value Format"}),": 3 digits with a separator for decimal places, making the data size 4 bytes."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Size of data References"}),': Data references are in the format "DataXXX," where XXX represents three numeric characters. Therefore, each reference is 7 bytes in size.']}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"row-files",children:"Row files"}),"\n",(0,s.jsx)(t.p,{children:"This format is particularly suitable when the different data transmitted do not have the same sampling frequency. In\nthe example we assume that all data has the same sample rate."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csv",metastring:'title="Row file CSV"',children:"Timestamp\t                Reference\t    Value\n2020-02-01T20:04:00.000Z\tData001\t        12.0\n2020-02-01T20:04:00.000Z\tData002\t        10.0\n2020-02-01T20:04:00.000Z\tData003\t        10.0\n2020-02-01T20:05:00.000Z\tData001\t        10.0\n2020-02-01T20:05:00.000Z\tData002\t        19.0\n2020-02-01T20:05:00.000Z\tData003\t        10.0\n2020-02-01T20:06:00.000Z\tData001\t        10.0\n2020-02-01T20:06:00.000Z\tData002\t        10.0\n2020-02-01T20:06:00.000Z\tData003\t        14.0\n...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now, let's calculate the size of each row file CSV:\n",(0,s.jsx)(t.code,{children:"Timestamp (24 bytes) + Data Reference (7 bytes) + Data Value (4 bytes) + 3 separators (3 bytes) = 38 bytes"})," per data point."]}),"\n",(0,s.jsxs)(t.p,{children:["For 60 data points per hour, the data size per hour is: ",(0,s.jsx)(t.code,{children:"38 bytes/data point * 60 data points = 2280 bytes per hour"}),"\n(header excluded)."]}),"\n",(0,s.jsxs)(t.p,{children:["With 2 files sent per hour, the hourly file size would be: ",(0,s.jsx)(t.code,{children:"2 files/hour * 2100 bytes/file = 4560 bytes per hour"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Keep in mind that this calculation provides an estimate based on the specified assumptions, and actual file sizes may\nvary depending on additional factors such as the ",(0,s.jsx)(t.strong,{children:"Data Value Format"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"column-files",children:"Column files"}),"\n",(0,s.jsx)(t.p,{children:"This format is especially well-suited for data that shares the same timestamp repeatedly, offering space savings compared\nto a format where each data point is placed on a separate line."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csv",metastring:'title="Column file CSV"',children:"Timestamp\t                Data001\t    Data002\t    Data003\n2020-02-01T20:04:00.000Z\t12.0\t    10.0\t    10.0\n2020-02-01T20:05:00.000Z\t10.0\t    19.0\t    10.0\n2020-02-01T20:06:00.000Z\t10.0\t    10.0\t    14.0\n...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Let's calculate the size of each column file CSV:\n",(0,s.jsx)(t.code,{children:"Timestamp (24 bytes) + Data Value (4 bytes) * 3 + 4 separators (4 bytes) = 40 bytes"})," per data point."]}),"\n",(0,s.jsxs)(t.p,{children:["For 60 data points per hour, the data size per hour is: ",(0,s.jsx)(t.code,{children:"40 bytes/data point * 60 data points = 2400 bytes per hour"}),"\n(header excluded)."]}),"\n",(0,s.jsxs)(t.p,{children:["With 2 files sent per hour, the hourly file size would be: ",(0,s.jsx)(t.code,{children:"2 files/hour * 2400 bytes/file = 4800 bytes per hour"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"column-row-files",children:"Column row files"}),"\n",(0,s.jsxs)(t.p,{children:["This format combines the benefits of a column-based file structure and allows for the consolidation of data identifiers\n(001, 002, 003) with their references, although in this case, only ",(0,s.jsx)(t.code,{children:"Data"})," is utilized. This results in references like\n",(0,s.jsx)(t.strong,{children:"Data001"}),", ",(0,s.jsx)(t.strong,{children:"Data002"}),", and ",(0,s.jsx)(t.strong,{children:"Data003"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csv",metastring:'title="Column row file CSV"',children:"Timestamp\t                Reference\t001\t    002\t    003\n2020-02-01T20:04:00.000Z\tData\t    12.0\t10.0\t10.0\n2020-02-01T20:05:00.000Z\tData\t    10.0\t19.0\t10.0\n2020-02-01T20:06:00.000Z\tData\t    10.0\t10.0\t14.0\n...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Let's calculate the size of each column file CSV:\n",(0,s.jsx)(t.code,{children:"Timestamp (24 bytes) + Data Reference (4 bytes) + Data Value (4 bytes) * 3 + 5 separators (5 bytes) = 45 bytes"})," per\ndata point."]}),"\n",(0,s.jsxs)(t.p,{children:["For 60 data points per hour, the data size per hour is: ",(0,s.jsx)(t.code,{children:"45 bytes/data point * 60 data points = 2700 bytes per hour"}),"\n(header excluded)."]}),"\n",(0,s.jsxs)(t.p,{children:["With 2 files sent per hour, the hourly file size would be: ",(0,s.jsx)(t.code,{children:"2 files/hour * 2700 bytes/file = 5400 bytes per hour"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"sending-values-json-payload",children:"Sending values (JSON payload)"}),"\n",(0,s.jsx)(t.h3,{id:"format",children:"Format"}),"\n",(0,s.jsx)(t.p,{children:"When the North connector retrieves values and transmits them to a values' endpoint (OIBus North Connector or OIAnalytics),\nthey are presented in an array format as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="JSON payload"',children:'[\n    {"timestamp": "2020-02-01T20:04:00.000Z", "pointId":"Data001", "data": {"value": "12.0", "quality": "192"}},\n    {"timestamp": "2020-02-01T20:04:00.000Z", "pointId":"Data002", "data": {"value": "10.0", "quality": "192"}}, \n    {"timestamp": "2020-02-01T20:04:00.000Z", "pointId":"Data003", "data": {"value": "10.0", "quality": "192"}}\n]\n'})}),"\n",(0,s.jsx)(t.p,{children:"Each field conveys the following information:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"timestamp"}),": denotes the timestamp of the value in ISO 8601 format."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"pointId"}),": serves as a reference for the value."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"data"}),": a JSON object that encompasses the recorded value (value) and its quality (quality) or other fields."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Our primary focus will be on the data within the JSON file format. In this context, its size is contingent upon various\nparameters, including:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The data sampling frequency."}),"\n",(0,s.jsxs)(t.li,{children:["The number of points grouped together for transmission (as defined by ",(0,s.jsx)(t.a,{href:"../north-connectors/common-settings#caching",children:"Group Count"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["The frequency of transmission (as defined by ",(0,s.jsx)(t.a,{href:"../north-connectors/common-settings#caching",children:"Send Interval"}),")."]}),"\n",(0,s.jsx)(t.li,{children:"The format of data and quality, specifically the number of characters used for precision."}),"\n",(0,s.jsx)(t.li,{children:"The size of the data references."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"size-estimation",children:"Size estimation"}),"\n",(0,s.jsx)(t.p,{children:"It is possible to estimate the space occupied by a single value based on the following criteria:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The timestamp size is 39 bytes (",(0,s.jsx)(t.code,{children:'"timestamp": "2020-02-01T20:00:00.000Z"'}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["The pointId size takes the form of ",(0,s.jsx)(t.code,{children:'"pointId": "DataXXX"'}),', adding 13 bytes to the number of bytes in the reference\n(in this case, 7 bytes for "DataXXX").']}),"\n",(0,s.jsxs)(t.li,{children:["The data field size is 10 bytes (",(0,s.jsx)(t.code,{children:'"data": {...}'}),"), in addition to its content:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The value field follows the format ",(0,s.jsx)(t.code,{children:'"value": "10.0"'}),", adding 11 bytes plus the variable number of bytes required to\nencode the value (in this case, 4 bytes)."]}),"\n",(0,s.jsxs)(t.li,{children:["The quality field is of the form ",(0,s.jsx)(t.code,{children:'"quality": "192"'}),", adding 13 bytes plus the variable number of bytes needed to\nencode the quality (here, 3 bytes)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Therefore, the size of the object representing a value can be broken down as follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Constant object size: 39 + 13 + 10 + 11 + 13 + 6 = 92 bytes (6 corresponds to the separators between different elements, such as commas)."}),"\n",(0,s.jsx)(t.li,{children:"Size of the reference: 7 bytes"}),"\n",(0,s.jsx)(t.li,{children:"Size of the value: 4 bytes"}),"\n",(0,s.jsx)(t.li,{children:"Size of the quality: 3 bytes"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The total size of a single object to be sent is therefore ",(0,s.jsx)(t.strong,{children:"106 bytes"})," for a single value."]}),"\n",(0,s.jsx)(t.p,{children:"With a sampling frequency of 1 point per minute and 3 data points, a Group Count equal to 1000, and a Send Interval equal\nto 60000ms, OIBus will transmit a JSON every minute with 3 data points, totaling 318 bytes."}),"\n",(0,s.jsxs)(t.p,{children:["Over the course of one day, this would amount to ",(0,s.jsx)(t.code,{children:"318 x 60 = 19080 bytes"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);