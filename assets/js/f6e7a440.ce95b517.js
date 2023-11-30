"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[7223],{490:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(5893),s=i(1151);const r={sidebar_position:6},a="MQTT",o={id:"guide/south-connectors/mqtt",title:"MQTT",description:"MQTT (Message Queuing Telemetry Transport) is a protocol designed for real-time messaging and data exchange using a",source:"@site/docs/guide/south-connectors/mqtt.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/mqtt",permalink:"/docs/guide/south-connectors/mqtt",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guideSidebar",previous:{title:"SQLite",permalink:"/docs/guide/south-connectors/sqlite"},next:{title:"PostgreSQL",permalink:"/docs/guide/south-connectors/postgresql"}},c={},l=[{value:"Specific settings",id:"specific-settings",level:2},{value:"Item settings",id:"item-settings",level:2},{value:"Address space and topic",id:"address-space-and-topic",level:3},{value:"Payload and timestamp",id:"payload-and-timestamp",level:2},{value:"Data types",id:"data-types",level:3},{value:"JSON object",id:"json-object",level:4},{value:"JSON array",id:"json-array",level:4},{value:"Timestamp",id:"timestamp",level:3},{value:"Current OIBus Timestamp",id:"current-oibus-timestamp",level:4},{value:"Timestamp in Payload",id:"timestamp-in-payload",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"mqtt",children:"MQTT"}),"\n",(0,t.jsx)(n.p,{children:"MQTT (Message Queuing Telemetry Transport) is a protocol designed for real-time messaging and data exchange using a\npublish/subscribe model. In MQTT, data is organized into topics, and clients can publish or subscribe to these topics to\nexchange information."}),"\n",(0,t.jsx)(n.p,{children:"The MQTT protocol consists of two primary components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MQTT Broker"}),": This acts as the server and is responsible for collecting and distributing data. It manages the topics\nand facilitates communication between clients."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MQTT Client"}),": Clients can publish data to a broker by specifying a topic, and they can also subscribe to topics to\nreceive data from the broker."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["OIBus functions as an MQTT client and utilizes the ",(0,t.jsx)(n.a,{href:"https://github.com/mqttjs/MQTT.js",children:"MQTT.js"})," library to interact with\nMQTT brokers for data exchange."]}),"\n",(0,t.jsx)(n.h2,{id:"specific-settings",children:"Specific settings"}),"\n",(0,t.jsx)(n.p,{children:"MQTT is a versatile protocol for exchanging data, and OIBus provides various configuration options to tailor its behavior\nto your needs. Here are some of the key configuration parameters for MQTT connections in OIBus:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"URL"}),": This specifies the address of the MQTT broker, typically in the format ",(0,t.jsx)(n.code,{children:"mqtt://address:port"}),". The default MQTT\nport is 1883, but it may vary depending on the broker's configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quality of Service"})," (QoS): MQTT offers three levels of QoS for message delivery:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"QoS 0: At most once. Messages are sent once, but there's no guarantee of successful receipt."}),"\n",(0,t.jsx)(n.li,{children:"QoS 1: At least once. Messages are sent multiple times until the recipient acknowledges receipt. Some duplicates may\noccur."}),"\n",(0,t.jsx)(n.li,{children:"QoS 2: Exactly once. Messages are sent only once, and retries are attempted until the recipient confirms successful\nreceipt. No duplicates are expected."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Persistence"}),": QoS 1 and QoS 2 allow for persistent connections. This means that the broker can retain a certain number\nof messages in memory until the client reconnects, ensuring that no data is lost in case of connection interruptions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authentication"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"None: No authentication is required."}),"\n",(0,t.jsx)(n.li,{children:"Basic: Authenticate using a username and password."}),"\n",(0,t.jsxs)(n.li,{children:["Certificate: Authenticate using certificates.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cert file path: Path to the signed certificate file used to authenticate OIBus with the broker."}),"\n",(0,t.jsx)(n.li,{children:"Key file path: Path to the key file used to sign the certificate."}),"\n",(0,t.jsx)(n.li,{children:"CA file path: Path to the certificate authority file used to generate the certificate. If empty, the certificate is considered self-signed."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reject unauthorized connection"}),": Decide whether to reject connections that cannot be verified, such as those with\nself-signed certificates from the broker."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reconnect period"}),": The time to wait before attempting to reconnect the socket in case of a connection loss."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connect timeout"}),": The maximum time to wait for a connection to be established before it is considered a failure."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These configuration options provide flexibility in setting up MQTT connections in OIBus to suit your specific requirements\nand security needs."}),"\n",(0,t.jsx)(n.h2,{id:"item-settings",children:"Item settings"}),"\n",(0,t.jsx)(n.h3,{id:"address-space-and-topic",children:"Address space and topic"}),"\n",(0,t.jsx)(n.p,{children:"MQTT connectors in OIBus use a subscription-based approach, which means there's no need to set scan modes for these items.\nInstead, you specify the topics you want to subscribe to, and the MQTT connector retrieves data published to those topics\nby the broker."}),"\n",(0,t.jsx)(n.p,{children:"Topics in MQTT are structured hierarchically, organized in a tree-like structure. Topics are used to address specific\ndata points or information within the MQTT broker's address space."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="Topic structure example"',children:"France\n    | -> Paris\n        | -> temperatureTank1\n        | -> temperatureTank2\n    | -> Chambery\n        | -> temperatureTank1\n        | -> temperatureTank2\n"})}),"\n",(0,t.jsx)(n.p,{children:"When you subscribe to a dataset in MQTT, you can use wildcard characters to specify the topics you're interested in.\nHere are some examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using # (hash) as a wildcard:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'France/# will subscribe to all topics under the "France" branch, including all subtopics and their data points.'}),"\n",(0,t.jsx)(n.li,{children:'France/Chambery/# will subscribe to all topics under "France/Chambery," including all subtopics and data points specific to Chambery.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Using specific topic paths:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'France/Paris/temperatureTank1 will subscribe to only the data point "temperatureTank1" in the "France/Paris" branch.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"payload-and-timestamp",children:"Payload and timestamp"}),"\n",(0,t.jsx)(n.h3,{id:"data-types",children:"Data types"}),"\n",(0,t.jsx)(n.p,{children:"When you subscribe to an MQTT topic and receive a payload, the payload can contain various types of data, such as numbers,\nstrings, or JSON objects. Depending on the type of data you receive, you may need to parse the payload to extract the\ninformation you want to store in OIBus North caches."}),"\n",(0,t.jsx)(n.p,{children:"Here are some common scenarios for parsing MQTT payloads:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Number"}),": If the payload contains a single numeric value, you can parse it directly as a number and store it in\nNorth caches. For example, if you receive a payload like ",(0,t.jsx)(n.code,{children:"25.5"}),", you can parse it as a floating-point number and store\nit as a numeric data point."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"String"}),": If the payload is a string, you can store it as-is in North caches. For example, if you receive a payload\nlike ",(0,t.jsx)(n.code,{children:"Hello, MQTT!"}),", you can store it as a string data point."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"JSON"}),": If the payload is a JSON object, you'll need to specify the payload format it to extract the relevant data\nfields."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"json-object",children:"JSON object"}),"\n",(0,t.jsx)(n.p,{children:"Below is a JSON payload format example where data must be extracted."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="JSON payload format example"',children:'{\n    "pointId": "point1",\n    "value": "666.666",\n    "timestamp": "2020-02-02 02:02:02",\n    "quality": "true"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then the following configuration must be applied:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payload in array"}),": ",(0,t.jsx)(n.em,{children:"false"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Point ID origin"}),": ",(0,t.jsx)(n.em,{children:"payload"})," (it will override the name of the item as reference)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timestamp origin"}),": ",(0,t.jsx)(n.em,{children:"payload"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Value path"}),": ",(0,t.jsx)(n.em,{children:"value"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Point ID path"}),": ",(0,t.jsx)(n.em,{children:"pointId"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timestamp path"}),": ",(0,t.jsx)(n.em,{children:"timestamp"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": ",(0,t.jsx)(n.em,{children:"String"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timezone"}),": ",(0,t.jsx)(n.em,{children:"UTC"})," (if the broker is in UTC timezone)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timestamp format"}),": ",(0,t.jsx)(n.em,{children:"yyyy-MM-dd HH:mm:ss"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can retrieve additional fields, such as the quality field, by clicking on the ",(0,t.jsx)(n.code,{children:"+"})," button on the last section."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Field name in output"}),": ",(0,t.jsx)(n.em,{children:"quality"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Path in the retrieved payload"}),": ",(0,t.jsx)(n.em,{children:"quality"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"json-array",children:"JSON array"}),"\n",(0,t.jsx)(n.p,{children:"Below is another example with an array."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="JSON payload with array format example"',children:'{\n  "metrics": [\n    {\n      "customValue": "666.666",\n      "customTimestamp": "2020-02-02 02:02:02",\n      "customQuality": "true"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then the following configuration must be applied:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Values in array"}),": ",(0,t.jsx)(n.em,{children:"true"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Array path"}),": ",(0,t.jsx)(n.em,{children:"metrics"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Point ID origin"}),": ",(0,t.jsx)(n.em,{children:"oibus"})," (the name of the item will be taken as point ID reference)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timestamp origin"}),": ",(0,t.jsx)(n.em,{children:"payload"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Value path"}),": ",(0,t.jsx)(n.em,{children:"customValue"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timestamp path"}),": ",(0,t.jsx)(n.em,{children:"customTimestamp"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": ",(0,t.jsx)(n.em,{children:"String"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timezone"}),": ",(0,t.jsx)(n.em,{children:"UTC"})," (if the broker is in UTC timezone)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timestamp format"}),": ",(0,t.jsx)(n.em,{children:"yyyy-MM-dd HH:mm:ss"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here, the quality field can be added with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Field name in output"}),": ",(0,t.jsx)(n.em,{children:"quality"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Path in the retrieved payload"}),": ",(0,t.jsx)(n.em,{children:"customQuality"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"timestamp",children:"Timestamp"}),"\n",(0,t.jsx)(n.p,{children:"You can either extract the timestamp from the payload or you can use the current UTC timestamp provided by OIBus. The\nchoice between these two approaches depends on how timestamps are provided by your MQTT source. OIBus allows you to\nconfigure these options to suit your data source's requirements."}),"\n",(0,t.jsx)(n.h4,{id:"current-oibus-timestamp",children:"Current OIBus Timestamp"}),"\n",(0,t.jsx)(n.p,{children:"If the MQTT payload doesn't contain a timestamp or if you prefer to use the current timestamp from OIBus, you can\nconfigure OIBus to use the current UTC timestamp. In this case, OIBus will automatically generate a UTC timestamp when\nprocessing the MQTT payload, and you don't need to extract it from the payload."}),"\n",(0,t.jsx)(n.h4,{id:"timestamp-in-payload",children:"Timestamp in Payload"}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, if the MQTT payload contains a timestamp, specify the ",(0,t.jsx)(n.strong,{children:"Timestamp path"})," to retrieve it and specify its\ntype (String, ISO8601, UNIX Epoch (s) or UNIX Epoch (ms)). String timestamp can be parsed with the specified",(0,t.jsx)(n.strong,{children:"timezone"}),"\nand ",(0,t.jsx)(n.strong,{children:"timestamp format"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(7294);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);