"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[7223],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||i;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:6},o="MQTT",l={unversionedId:"guide/south-connectors/mqtt",id:"guide/south-connectors/mqtt",title:"MQTT",description:"MQTT (Message Queuing Telemetry Transport) is a real-time messaging protocol for exchanging data by topic with a",source:"@site/docs/guide/south-connectors/mqtt.md",sourceDirName:"guide/south-connectors",slug:"/guide/south-connectors/mqtt",permalink:"/docs/guide/south-connectors/mqtt",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guideSidebar",previous:{title:"SQLite",permalink:"/docs/guide/south-connectors/sqlite"},next:{title:"PostgreSQL",permalink:"/docs/guide/south-connectors/postgresql"}},s={},p=[{value:"Specific settings",id:"specific-settings",level:2},{value:"Item settings",id:"item-settings",level:2},{value:"Address space and topic",id:"address-space-and-topic",level:3},{value:"Payload and timestamp",id:"payload-and-timestamp",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mqtt"},"MQTT"),(0,r.kt)("p",null,"MQTT (Message Queuing Telemetry Transport) is a real-time messaging protocol for exchanging data by topic with a\n",(0,r.kt)("em",{parentName:"p"},"publish / subscribe")," approach. A topic is a point (or a set of points) representing a piece of data (or a set of data)."),(0,r.kt)("p",null,"The MQTT protocol is made up of two main types of entities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The MQTT broker: collects and makes available the requested data. It plays the role of server."),(0,r.kt)("li",{parentName:"ul"},"The MQTT client: it can publish data to a broker and subscribe topics to receive data from a broker. ")),(0,r.kt)("p",null,"OIBus is a MQTT client and uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mqttjs/MQTT.js"},"MQTT.js")," library."),(0,r.kt)("h2",{id:"specific-settings"},"Specific settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL"),": of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"mqtt://address:1883"),". The default MQTT port is 1883 but may differ depending on the broker\u2019s\nconfiguration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Quality of service (QoS)"),": agreement between the sender of a message and the receiver of a message that defines the\nguarantee of delivery for a specific message. Three modes are available:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"QoS 0: at most once. This means that the message is sent once but MQTT does not guarantee that the message will be\nreceived correctly. Good reception will depend on the quality of the underlying network of MQTT."),(0,r.kt)("li",{parentName:"ul"},"QoS 1: at least once. This means that the message is sent multiple times as duplicates until the client validates\nthe correct receipt of at least one of the duplicates. In some cases, the client may receive the same message more than\nonce."),(0,r.kt)("li",{parentName:"ul"},"QoS 2: exactly once. This means that the message is sent only once, and a new attempt to send the message takes\nplace after a certain time until the client confirms the good reception. There is no risk of multiple receptions in this\ncase."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Persistence")," (QoS1 and QoS2): Both QoS1 and QoS2 allow persistent connections. A persistent connection allows the\nbroker to keep a certain number of messages in memory (set on the broker) until the client reconnects in case of\nconnection loss."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"None: no authentication."),(0,r.kt)("li",{parentName:"ul"},"Username and password authentication."),(0,r.kt)("li",{parentName:"ul"},"Certificate based:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cert file path"),": signed file to authenticate OIBus from the broker. The certificate must be accepted by the broker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key file path"),": the key used to sign the certificate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CA file path"),": the certificate authority used to generate the cert file. If empty, the cert file is considered as\nself-signed."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reject unauthorized connection"),": Reject connection that can not be verified (because of a self-signed certificate\nfrom the broker for example)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reconnect period"),": Time to wait before reconnection the socket on connection loss."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connect timeout"),": Time to wait before the connection fails.")),(0,r.kt)("h2",{id:"item-settings"},"Item settings"),(0,r.kt)("h3",{id:"address-space-and-topic"},"Address space and topic"),(0,r.kt)("p",null,"MQTT uses subscription only. No scan mode can be set for these items."),(0,r.kt)("p",null,"The MQTT connector retrieves values from specific topics. A topic is the address associated to a data in the broker\nspace address. "),(0,r.kt)("p",null,"The broker organizes the data by tree structures. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"France\n    | -> Paris\n        | -> temperatureTank1\n        | -> temperatureTank2\n    | -> Chambery\n        | -> temperatureTank1\n        | -> temperatureTank2\n")),(0,r.kt)("p",null,"It is then possible to subscribe to a dataset by entering a parent node, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"France/#")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"France/Chambery/#"),".\nIt is also possible to directly enter a complete path, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"France/Paris/temperatureTank1")," to subscribe to only\none data."),(0,r.kt)("p",null,"When a MQTT client subscribes to a data item on the broker, the broker sends the new values as soon as they are\navailable for each client subscribing to this data."),(0,r.kt)("p",null,"When subscribing to a set of points as with ",(0,r.kt)("inlineCode",{parentName:"p"},"France/#"),", then the list of topic retrieved will be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"France/Paris/temperatureTank1"),(0,r.kt)("li",{parentName:"ul"},"France/Paris/temperatureTank2"),(0,r.kt)("li",{parentName:"ul"},"France/Chambery/temperatureTank1"),(0,r.kt)("li",{parentName:"ul"},"France/Chambery/temperatureTank2")),(0,r.kt)("h2",{id:"payload-and-timestamp"},"Payload and timestamp"),(0,r.kt)("p",null,"The MQTT payload can be of different type: number, string or json."),(0,r.kt)("p",null,"For the last case, it is possible to parse the payload to form the data that OIBus will store in North caches."),(0,r.kt)("p",null,"For example, if the payload is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "pointId": "point1",\n    "value": "666.666",\n    "timestamp": "2020-02-02 02:02:02",\n    "quality": "true"\n}\n')),(0,r.kt)("p",null,"Then the following configuration must be applied:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payload in array"),": ",(0,r.kt)("em",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Point ID origin"),": ",(0,r.kt)("em",{parentName:"li"},"payload")," (it will override the name of the item as reference)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timestamp origin"),": ",(0,r.kt)("em",{parentName:"li"},"payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Value path"),": ",(0,r.kt)("em",{parentName:"li"},"value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Point ID path"),": ",(0,r.kt)("em",{parentName:"li"},"pointId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timestamp path"),": ",(0,r.kt)("em",{parentName:"li"},"timestamp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": ",(0,r.kt)("em",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timezone"),": ",(0,r.kt)("em",{parentName:"li"},"UTC")," (if the broker is in UTC timezone)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timestamp format"),": ",(0,r.kt)("em",{parentName:"li"},"yyyy-MM-dd HH:mm:ss"))),(0,r.kt)("p",null,"You can retrieve additional fields, such as the quality field, by clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," button on the last section."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field name in output"),": ",(0,r.kt)("em",{parentName:"li"},"quality")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path in the retrieved payload"),": ",(0,r.kt)("em",{parentName:"li"},"quality"))),(0,r.kt)("p",null,"Another example, with a payload such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"metrics": [\n    {\n        "customValue": "666.666",\n        "customTimestamp": "2020-02-02 02:02:02",\n        "customQuality": "true"\n    }\n]\n')),(0,r.kt)("p",null,"Then the following configuration must be applied:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Values in array"),": ",(0,r.kt)("em",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Array path"),": ",(0,r.kt)("em",{parentName:"li"},"metrics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Point ID origin"),": ",(0,r.kt)("em",{parentName:"li"},"oibus")," (the name of the item will be taken as point ID reference)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timestamp origin"),": ",(0,r.kt)("em",{parentName:"li"},"payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Value path"),": ",(0,r.kt)("em",{parentName:"li"},"customValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timestamp path"),": ",(0,r.kt)("em",{parentName:"li"},"customTimestamp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": ",(0,r.kt)("em",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timezone"),": ",(0,r.kt)("em",{parentName:"li"},"UTC")," (if the broker is in UTC timezone)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timestamp format"),": ",(0,r.kt)("em",{parentName:"li"},"yyyy-MM-dd HH:mm:ss"))),(0,r.kt)("p",null,"Here, the quality field can be added with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Field name in output"),": ",(0,r.kt)("em",{parentName:"li"},"quality")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path in the retrieved payload"),": ",(0,r.kt)("em",{parentName:"li"},"customQuality"))),(0,r.kt)("p",null,"When the timestamp is retrieved from the payload, it is parsed according to the specified ",(0,r.kt)("strong",{parentName:"p"},"timestamp format"),", and\nconvert to UTC from the specified ",(0,r.kt)("strong",{parentName:"p"},"timestamp timezone"),"."),(0,r.kt)("p",null,"Otherwise, it is possible to retrieve the timestamp from OIBus. The value will take the current timestamp in UTC format."))}u.isMDXComponent=!0}}]);