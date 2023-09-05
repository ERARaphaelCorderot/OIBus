"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[8658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={displayed_sidebar:"developerSidebar",sidebar_position:2},o="The manifest",l={unversionedId:"developer/create-connector/manifest",id:"developer/create-connector/manifest",title:"The manifest",description:"With this JSON, you can specify what fields are required to configure your connector, what type of fields, etc...",source:"@site/docs/developer/create-connector/manifest.md",sourceDirName:"developer/create-connector",slug:"/developer/create-connector/manifest",permalink:"/docs/developer/create-connector/manifest",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{displayed_sidebar:"developerSidebar",sidebar_position:2},sidebar:"developerSidebar",previous:{title:"Create a new OIBus connector",permalink:"/docs/developer/create-connector/presentation"},next:{title:"Connector class",permalink:"/docs/developer/create-connector/class"}},p={},s=[{value:"Settings",id:"settings",level:2},{value:"OibText",id:"oibtext",level:3},{value:"OibTextArea",id:"oibtextarea",level:3},{value:"OibCodeBlock",id:"oibcodeblock",level:3},{value:"OibNumber",id:"oibnumber",level:3},{value:"OibSelect",id:"oibselect",level:3},{value:"OibSecret",id:"oibsecret",level:3},{value:"OibCheckbox",id:"oibcheckbox",level:3},{value:"OibTimezone",id:"oibtimezone",level:3},{value:"Group settings",id:"group-settings",level:3},{value:"OibArray",id:"oibarray",level:4},{value:"OibFormGroup",id:"oibformgroup",level:4},{value:"Items",id:"items",level:2},{value:"Create or update your data types",id:"create-or-update-your-data-types",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-manifest"},"The manifest"),(0,a.kt)("p",null,"With this JSON, you can specify what fields are required to configure your connector, what type of fields, etc..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id"),": The id of your manifest (must not be used by another manifest)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),": The name used for display"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"category"),": The type of manifest. Existing categories are: ",(0,a.kt)("inlineCode",{parentName:"li"},"iot"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"api"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"database"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"file"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),": What your connector does, briefly summarized."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"modes"),": How your connector will integrate with OIBus.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For South",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"subscription: Can your connector subscribe ? If so, it must implements ",(0,a.kt)("inlineCode",{parentName:"li"},"QueriesSubscription")," class. "),(0,a.kt)("li",{parentName:"ul"},"lastPoint: Can your connector request a point ? If so the value will be retrieved as JSON payload and the connector must implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"QueriesLastPoint")," interface."),(0,a.kt)("li",{parentName:"ul"},"lastFile: Can your connector request a file ? If so, the connector must implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"QueriesFile")," interface."),(0,a.kt)("li",{parentName:"ul"},"history: Can your connector request a history ? If so, the connector must implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"QueriesHistory")," interface. "),(0,a.kt)("li",{parentName:"ul"},"If true, it will be possible to create history queries from your connector type."))),(0,a.kt)("li",{parentName:"ul"},"For North",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"files: Can manage files. If so, the connector must implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"HandlesFile")," interface."),(0,a.kt)("li",{parentName:"ul"},"points: Can manage JSON payload. If so, the connector must implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"HandlesValues")," interface."))))),(0,a.kt)("li",{parentName:"ul"},"settings: An array of settings which represents the inputs to configure your connector. See the ",(0,a.kt)("a",{parentName:"li",href:"#settings"},"settings section")),(0,a.kt)("li",{parentName:"ul"},"items (South only): A section to describe how to configure the items to query",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"scanMode:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"acceptSubscription: Is it possible to use subscription for an item? Example: OPCUA"),(0,a.kt)("li",{parentName:"ul"},"subscriptionOnly: Is subscription the only choice for each item? Example: MQTT "))),(0,a.kt)("li",{parentName:"ul"},"settings: An array of settings which represents the inputs to configure your item. See the ",(0,a.kt)("a",{parentName:"li",href:"#settings"},"settings section"))))),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("p",null,"All settings have common fields, used for display or validation. These common fields are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Main fields"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"key"),": The field, written in ",(0,a.kt)("inlineCode",{parentName:"li"},"camelCase")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type"),": One of the type described below, starting with the ",(0,a.kt)("inlineCode",{parentName:"li"},"Oib")," prefix"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," (optional): must match the type (string, number, boolean...)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Display settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"label"),": What to display in the form "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pipe")," (optional): A pipe to translate the options"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"unitLabel")," (optional): The unit of the value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"newRow"),": Should this input start a new row?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"class"),": Bootstrap compatible CSS classes, mainly used to display each input in the row with ",(0,a.kt)("inlineCode",{parentName:"li"},"col-4"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"col"),", etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displayInViewMode"),": Should this input be shown on the display page of a connector "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Validation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"conditionalDisplay: The other field to monitor according to which the current field is displayed or not. The validators apply only\nif the current field is displayed. See example below."),(0,a.kt)("li",{parentName:"ul"},"validators: An array of ",(0,a.kt)("a",{parentName:"li",href:"https://angular.io/api/forms/Validators"},"Angular validators"),". See example below")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Conditional display example"',title:'"Conditional',display:!0,'example"':!0},'{\n  "field": "authentication", "values": ["basic"]\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Validator example"',title:'"Validator','example"':!0},'[{\n  "key": "required"\n},\n{\n  "key": "maxLength",\n  "params": {\n    "maxLength": 50\n  }\n}]\n')),(0,a.kt)("p",null,"Then, each type of fields comes with its frontend logic and backend type safety. Some types add more fields."),(0,a.kt)("h3",{id:"oibtext"},"OibText"),(0,a.kt)("p",null,"Create an input of type text in the frontend, and a field of type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," in the TypeScript model."),(0,a.kt)("h3",{id:"oibtextarea"},"OibTextArea"),(0,a.kt)("p",null,"Create a textarea input in the frontend, and a field of type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," in the TypeScript model."),(0,a.kt)("h3",{id:"oibcodeblock"},"OibCodeBlock"),(0,a.kt)("p",null,"Create a code block with ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/monaco-editor/"},"monaco editor")," in the frontend, and a field of type\n",(0,a.kt)("inlineCode",{parentName:"p"},"string")," in the TypeScript model.\nAdditional field:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"contentType: The language to set up the editor on the frontend (example: ",(0,a.kt)("inlineCode",{parentName:"li"},"sql"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"json"),").")),(0,a.kt)("h3",{id:"oibnumber"},"OibNumber"),(0,a.kt)("p",null,"Create an input of type number in the frontend, and a field of type ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," in the TypeScript model."),(0,a.kt)("h3",{id:"oibselect"},"OibSelect"),(0,a.kt)("p",null,"Create an input of type select in the frontend, and a field of type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," in the TypeScript model.\nAdditional field:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"options: The options to display in the select")),(0,a.kt)("h3",{id:"oibsecret"},"OibSecret"),(0,a.kt)("p",null,"Create an input of type password in the frontend, and a field of type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," in the TypeScript model.\nThis field does not show what is typed in the frontend, and indicate OIBus ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/advanced/oibus-security#oibus-security"},"to encrypt the\ninput")),(0,a.kt)("h3",{id:"oibcheckbox"},"OibCheckbox"),(0,a.kt)("p",null,"Create an input of type checkbox in the frontend (customized in a toggle), and a field of type ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," in the TypeScript\nmodel."),(0,a.kt)("h3",{id:"oibtimezone"},"OibTimezone"),(0,a.kt)("p",null,"Create an input of type select in the frontend, and a field of type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," in the TypeScript model. The options are the\navailable timezones."),(0,a.kt)("h3",{id:"group-settings"},"Group settings"),(0,a.kt)("p",null,"It is possible to group settings together, inside a structure or inside an array. "),(0,a.kt)("h4",{id:"oibarray"},"OibArray"),(0,a.kt)("p",null,"OibArray will be displayed... as an array where you can add or delete rows: each row will have the fields described in\nthe ",(0,a.kt)("strong",{parentName:"p"},"content")," fields. See the ",(0,a.kt)("inlineCode",{parentName:"p"},"dateTimeFields")," builder as an example."),(0,a.kt)("h4",{id:"oibformgroup"},"OibFormGroup"),(0,a.kt)("p",null,"Group settings in another structure. Specially useful to apply a ",(0,a.kt)("inlineCode",{parentName:"p"},"conditonalDisplay")," to a group of settings, and add other\n",(0,a.kt)("inlineCode",{parentName:"p"},"conditionalDisplays")," inside the structure"),(0,a.kt)("h2",{id:"items"},"Items"),(0,a.kt)("p",null,"The items form (create, or update) can be called from the Item array of the display or edit page of a South connector.\nAll items must have a name, a scanMode (that can be hidden if it only accepts subscription) and ",(0,a.kt)("a",{parentName:"p",href:"#settings"},"specific settings described\nin the manifest"),"."),(0,a.kt)("h2",{id:"create-or-update-your-data-types"},"Create or update your data types"),(0,a.kt)("p",null,"If you create a new connector, add it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"buildSouthInterfaceName")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"buildNorthInterfaceName")," method of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"settings-interface.generator.ts")," file."),(0,a.kt)("p",null,"Once your manifest is ready, you can generate the appropriate types by running in the ",(0,a.kt)("inlineCode",{parentName:"p"},"backend")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run generate-settings-interface\n")),(0,a.kt)("p",null,"This command will parse all the manifest files found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"backend")," folder and create the TypeScript types according\nto each field description."),(0,a.kt)("p",null,"You will be able to call them with the customized name ",(0,a.kt)("inlineCode",{parentName:"p"},"South<ConnectorType>Settings")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"South<ConnectorType>ItemSettings"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Once the command has run, if the types have changed, the next run will fail. You will have to update your code to adapt\nit to the new types first.")))}u.isMDXComponent=!0}}]);