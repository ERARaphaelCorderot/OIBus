"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[9028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={displayed_sidebar:"developerSidebar",sidebar_position:3},a="Connector class",s={unversionedId:"developer/create-connector/class",id:"developer/create-connector/class",title:"Connector class",description:"OIBus connectors must implements specific methods that wll be called by the engine. Some methods are common for South and",source:"@site/docs/developer/create-connector/class.md",sourceDirName:"developer/create-connector",slug:"/developer/create-connector/class",permalink:"/docs/developer/create-connector/class",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{displayed_sidebar:"developerSidebar",sidebar_position:3},sidebar:"developerSidebar",previous:{title:"The manifest",permalink:"/docs/developer/create-connector/manifest"}},l={},c=[{value:"Common methods",id:"common-methods",level:2},{value:"Start",id:"start",level:3},{value:"Connect (optional)",id:"connect-optional",level:3},{value:"Stop (optional)",id:"stop-optional",level:3},{value:"Disconnect",id:"disconnect",level:3},{value:"Test connection",id:"test-connection",level:3},{value:"North methods",id:"north-methods",level:2},{value:"Handles File",id:"handles-file",level:3},{value:"Handles Values",id:"handles-values",level:3},{value:"South methods",id:"south-methods",level:2},{value:"Queries File",id:"queries-file",level:3},{value:"Queries Last Point",id:"queries-last-point",level:3},{value:"Queries Subscription",id:"queries-subscription",level:3},{value:"Queries History",id:"queries-history",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connector-class"},"Connector class"),(0,r.kt)("p",null,"OIBus connectors must implements specific methods that wll be called by the engine. Some methods are common for South and\nNorth connectors, some are specific, depending on the connector capabilities"),(0,r.kt)("h2",{id:"common-methods"},"Common methods"),(0,r.kt)("h3",{id:"start"},"Start"),(0,r.kt)("p",null,"Method called at connector startup. When overriding this method, call the parent method at the end.\nYou can use this method to create temp folders, locale cache database, etc..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Start method example"',title:'"Start',method:!0,'example"':!0},"override async start(): Promise<void> {\n  await createFolder(this.tmpFolder); // imported from '../../service/utils'\n  await super.start();\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"super.start()")," line calls the connect method. If ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," is not implemented, only the parent method will be called."),(0,r.kt)("h3",{id:"connect-optional"},"Connect (optional)"),(0,r.kt)("p",null,"This method connect, if necessary, the connector to its target. When overriding this method, call the parent method\nonce the connection is established."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="MQTT connect example"',title:'"MQTT',connect:!0,'example"':!0},"override async connect(): Promise<void> {\n  this.logger.info(`Connecting to \"${this.connector.settings.url}\"`);\n  const options = await this.createConnectionOptions();\n\n  this.client = mqtt.connect(this.connector.settings.url, options);\n  this.client.on('connect', async () => {\n    this.logger.info(`Connected to ${this.connector.settings.url}`);\n    await super.connect();\n  });\n  this.client.on('error', error => {\n    this.logger.error(`MQTT connection error ${error}`);\n  });\n}\n")),(0,r.kt)("p",null,"If not implemented, only the parent method will be called."),(0,r.kt)("h3",{id:"stop-optional"},"Stop (optional)"),(0,r.kt)("p",null,"When changing configuration, or restarting OIBus, the connector must be stopped. This method allows you to clean cache at\nconnector stop.\nIf not implemented, only the parent method will be called. The parent method call the disconnect method."),(0,r.kt)("h3",{id:"disconnect"},"Disconnect"),(0,r.kt)("p",null,"This method closes all active connection. You must implement it if you use a ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="MQTT disconnect example"',title:'"MQTT',disconnect:!0,'example"':!0},"  override async disconnect(): Promise<void> {\n    if (this.client) {\n      this.client.end(true);\n      this.logger.info(`Disconnected from ${this.connector.settings.url}...`);\n    }\n    await super.disconnect();\n  }\n")),(0,r.kt)("h3",{id:"test-connection"},"Test connection"),(0,r.kt)("p",null,"Implement this method to test connection settings from the frontend form. The settings will be passed in the connector\nconstructor. You then have access to all the object context with ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Test connection example"',title:'"Test',connection:!0,'example"':!0},"override async testConnection(): Promise<void> {\n    // Your tests here\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be sure to close your connection at the end of the test.")),(0,r.kt)("h2",{id:"north-methods"},"North methods"),(0,r.kt)("p",null,"North connectors can implement two interfaces: ",(0,r.kt)("inlineCode",{parentName:"p"},"HandlesFile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HandlesValues")),(0,r.kt)("h3",{id:"handles-file"},"Handles File"),(0,r.kt)("p",null,"Files are retrieved from its ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," cache folder and its path are pass as method argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="handleFile method"',title:'"handleFile','method"':!0},"async handleFile(filePath: string): Promise<void> {\n    // manage file here\n}\n")),(0,r.kt)("h3",{id:"handles-values"},"Handles Values"),(0,r.kt)("p",null,"Values are retrieved from its ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," cache folder and the method receives them as an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="handleValues method"',title:'"handleValues','method"':!0},"async handleValues(values: Array<any>): Promise<void> {\n    // manage values here\n}\n")),(0,r.kt)("h2",{id:"south-methods"},"South methods"),(0,r.kt)("p",null,"South connectors can implement four interfaces: ",(0,r.kt)("inlineCode",{parentName:"p"},"QueriesFile"),",",(0,r.kt)("inlineCode",{parentName:"p"},"QueriesLastPoint"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"QueriesSubscription"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"QueriesHistory"),"."),(0,r.kt)("p",null,"Each South connector has access to the method ",(0,r.kt)("inlineCode",{parentName:"p"},"addFile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"addValue"),". With these two methods, you can send file and values\nto the OIBus engine, that will send it to North caches."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="addValues usage"',title:'"addValues','usage"':!0},"await this.addValues(values); // values variable is an array of JSON\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="addFile usage"',title:'"addFile','usage"':!0},"await this.addFile(filePath); // filePath variable is the full path of a file\n")),(0,r.kt)("p",null,"These methods can be called from the methods which implement to following interfaces. All these methods receive an array\nof SouthConnectorItemDTO that will be used in the method to query their associated data."),(0,r.kt)("h3",{id:"queries-file"},"Queries File"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="fileQuery prototype"',title:'"fileQuery','prototype"':!0},"fileQuery(items: Array<SouthConnectorItemDTO>): Promise<void>;\n")),(0,r.kt)("h3",{id:"queries-last-point"},"Queries Last Point"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="lastPointQuery prototype"',title:'"lastPointQuery','prototype"':!0},"lastPointQuery(items: Array<SouthConnectorItemDTO>): Promise<void>;\n")),(0,r.kt)("h3",{id:"queries-subscription"},"Queries Subscription"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="subscribe and unsubscribe prototype"',title:'"subscribe',and:!0,unsubscribe:!0,'prototype"':!0},"subscribe(items: Array<SouthConnectorItemDTO>): Promise<void>;\nunsubscribe(items: Array<SouthConnectorItemDTO>): Promise<void>;\n")),(0,r.kt)("h3",{id:"queries-history"},"Queries History"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="historyQuery prototype"',title:'"historyQuery','prototype"':!0},"historyQuery(items: Array<SouthConnectorItemDTO>, startTime: Instant, endTime: Instant): Promise<Instant>;\n")))}u.isMDXComponent=!0}}]);