"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[2436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),d=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return s.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=d(n),h=r,m=l["".concat(c,".").concat(h)]||l[h]||p[h]||a;return n?s.createElement(m,i(i({ref:t},u),{},{components:n})):s.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="OIBus security",o={unversionedId:"guide/advanced/oibus-security",id:"guide/advanced/oibus-security",title:"OIBus security",description:"OIBus is usually installed on a dedicated machine (which can be a virtual machine) located at the customer site. The",source:"@site/docs/guide/advanced/oibus-security.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/oibus-security",permalink:"/docs/guide/advanced/oibus-security",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guideSidebar",previous:{title:"Advanced",permalink:"/docs/category/advanced"},next:{title:"OIBus to OIBus communication",permalink:"/docs/guide/advanced/oibus-to-oibus"}},c={},d=[{value:"Access to the OIBus machine",id:"access-to-the-oibus-machine",level:2},{value:"Access to the OIBus administration interface",id:"access-to-the-oibus-administration-interface",level:2},{value:"HTTP protocol and Basic Auth",id:"http-protocol-and-basic-auth",level:2},{value:"Protection of passwords and secrets",id:"protection-of-passwords-and-secrets",level:2}],u={toc:d},l="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oibus-security"},"OIBus security"),(0,r.kt)("p",null,"OIBus is usually installed on a dedicated machine (which can be a virtual machine) located at the customer site. The\nOIBus behavior is fully managed by the OIBus configuration SQLite database (oibus.db). It is important to consider several\naspects to protect OIBus:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access to the machine"),(0,r.kt)("li",{parentName:"ul"},"Access to the OIBus administration interface"),(0,r.kt)("li",{parentName:"ul"},"Protection of passwords, secret keys, etc\u2026")),(0,r.kt)("h2",{id:"access-to-the-oibus-machine"},"Access to the OIBus machine"),(0,r.kt)("p",null,"Of course, local or remote access (using RDP - Remote Desktop Protocol - or disk sharing for example) to the machine\nwhere OIBus is installed is a risk to consider. Indeed, a local user could delete OIBus files or directly modify the\nconfiguration file."),(0,r.kt)("p",null,"It is important to limit access to the OIBus machine so that no one can access it except the OIBus administrator."),(0,r.kt)("h2",{id:"access-to-the-oibus-administration-interface"},"Access to the OIBus administration interface"),(0,r.kt)("p",null,"The OIBus administration interface is web-based and can be launched locally or from any remote PC with a\nweb browser. We recommend to use the interface using the local URL ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:2223"),"."),(0,r.kt)("p",null,"To use it from a remote PC, you must configure the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/engine/ip-filters"},"IP Filters")," section of the OIBus\nEngine. "),(0,r.kt)("p",null,"Access to the administration interface requires a user/password. The default username is ",(0,r.kt)("strong",{parentName:"p"},"admin"),". The default\npassword is ",(0,r.kt)("strong",{parentName:"p"},"pass"),"."),(0,r.kt)("p",null,"Changing the default password is strongly recommended."),(0,r.kt)("h2",{id:"http-protocol-and-basic-auth"},"HTTP protocol and Basic Auth"),(0,r.kt)("p",null,"OIBus uses the Basic Auth method in addition to the HTTP protocol supported by most web browsers. This method\n",(0,r.kt)("strong",{parentName:"p"},"does not provide any privacy protection")," for the transmitted credentials sent in the header at each HTTP request. "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"filters")," in the OIBus Engine can mitigate this risk by limiting the IP addresses allowed, but this is not a 100%\nguaranteed protection as impersonating another computer system with a fake IP address is not difficult for hackers.\nIn addition, the privacy of the network over which the HTTP request is passing through must be respected to be sure\nthat the credentials will not leak."),(0,r.kt)("p",null,"Therefore, remote access to the OIBus administration interface should be limited to within the customer\u2019s LAN and\nshould not be accessible over the Internet. The use of a VPN is strongly advised."),(0,r.kt)("p",null,"OIBus does not store the user passwords. Instead, it hashes the password with the argon2 algorithm, and only the hash\nis stored. When logging into OIBus, the hash of the password is compared with the stored hash."),(0,r.kt)("h2",{id:"protection-of-passwords-and-secrets"},"Protection of passwords and secrets"),(0,r.kt)("p",null,"OIBus needs to access multiple sources of information (Histories, DCS, LIMS, MES, Databases, etc.). Many of these\nsources require a username/password pair or a secret key to grant access."),(0,r.kt)("p",null,"This information is also stored in the OIBus database configuration (",(0,r.kt)("inlineCode",{parentName:"p"},"oibus.db"),"), but it is all encrypted with the AES-256\n(CBC mode) algorithm. This adds a level of protection that prevents anyone from reading this information unencrypted."),(0,r.kt)("p",null,"The AES symmetric key is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"crypto.db")," SQLite database. We choose to use a separate database in case the\n",(0,r.kt)("inlineCode",{parentName:"p"},"oibus.db")," database file is sent for debugging or replicating a configuration. Since the secrets are encrypted with a\nkey stored in a separate database, it won't be possible to access the encrypted secrets. Of course, it implies to never\nsend both files together."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"crypto.db")," SQLite database is deleted, it will be impossible for OIBus to decrypt the encrypted secrets. A new\nAES key will be generated when OIBus is restarted. In this case it will be necessary to use the administration interface\nand re-enter all secrets."))}p.isMDXComponent=!0}}]);