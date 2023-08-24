"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[6732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?s.createElement(h,o(o({ref:t},d),{},{components:n})):s.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<a;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var s=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},o="Linux",r={unversionedId:"guide/installation/linux",id:"guide/installation/linux",title:"Linux",description:"Download command",source:"@site/docs/guide/installation/linux.mdx",sourceDirName:"guide/installation",slug:"/guide/installation/linux",permalink:"/docs/next/guide/installation/linux",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guideSidebar",previous:{title:"Windows",permalink:"/docs/next/guide/installation/windows"},next:{title:"First access",permalink:"/docs/next/guide/installation/first-access"}},l={},u=[{value:"Download command",id:"download-command",level:2},{value:"Installation of OIBus as a Linux service",id:"installation-of-oibus-as-a-linux-service",level:2},{value:"Update",id:"update",level:2},{value:"Uninstall OIBus",id:"uninstall-oibus",level:2},{value:"Run OIBus in standalone",id:"run-oibus-in-standalone",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linux"},"Linux"),(0,i.kt)("h2",{id:"download-command"},"Download command"),(0,i.kt)("p",null,"Instead of the download link, you can also retrieve the files with the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -o- -L https://github.com/OptimistikSAS/OIBus/releases/latest/download/oibus-linux_x64.tar.gz | tar -xzv\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget -c https://github.com/OptimistikSAS/OIBus/releases/latest/download/oibus-linux.tar_64.gz -O - | tar -xzv\n")),(0,i.kt)("p",null,"The following files have been extracted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"oibus                   // OIBus binary\noibus-setup.sh          // installation script\noibus-uninstall.sh      // uninstallation script that will be updated during the installation process\n")),(0,i.kt)("p",null,"Bash scripts have been tested on Ubuntu. They are used to set OIBus as a service. Alternatively, it is possible\nto ",(0,i.kt)("a",{parentName:"p",href:"#run-oibus-in-standalone"},"run OIBus binary only"),"."),(0,i.kt)("h2",{id:"installation-of-oibus-as-a-linux-service"},"Installation of OIBus as a Linux service"),(0,i.kt)("p",null,"The installation script can be run with the following command. The admin rights will que required during the script execution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./oibus-setup.sh\n")),(0,i.kt)("p",null,"The following questions will be asked during the installation (default answers have been kept in this example):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Administrative permissions are required to proceed. Do you wish to continue? (Y/n)\nAdministrative permissions granted.\nEnter the directory in which you want to install the OIBus binary (default: ./OIBus/):\nEnter the directory in which you want to save all your OIBus related data, caches, and logs (default: ./OIBusData/):\nEnter a username for your session. It will be used every time you log into OIBus (default: admin):\nEnter a name for your OIBus. It will help to identify your OIBus, and assist in potential troubleshooting (default: OIBus):\nEnter the port on which you want OIBus to run (default 2223):\nInstalling oibus service...\nService file successfully created. Enabling oibus service startup on system boot...\nCreated symlink /etc/systemd/system/default.target.wants/oibus.service \u2192 /etc/systemd/system/oibus.service.\nStarting OIBus service...\nSetting oibus-uninstall.sh...\nInstallation procedure completed !\n\nUseful commands:\n        Check service status:   sudo systemctl status oibus\n        Check service-logs:     sudo journalctl -u oibus -f\n\nAccess OIBus: http://localhost:2223/\n")),(0,i.kt)("h2",{id:"update"},"Update"),(0,i.kt)("p",null,"To update OIBus, download the latest version, unzip the archive and run the setup install:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./oibus-setup.sh\n")),(0,i.kt)("p",null,"At start, OIBus will automatically update the configuration (oibus.db) and the cache structure if needed. Here is\nan output example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Administrative permissions are required to proceed. Do you wish to continue? (Y/n)\nAdministrative permissions granted.\nEnter the directory in which you want to install the OIBus binary (default: ./OIBus/):\nEnter the directory in which you want to save all your OIBus related data, caches, and logs (default: ./OIBusData/):\nAn oibus.json file was found. Do you want to use it for this OIBus? (Y/n)\nStopping oibus service...\nRemoved /etc/systemd/system/default.target.wants/oibus.service.\nThe oibus service has been stopped and disabled!\nInstalling oibus service...\nService file successfully created. Enabling oibus service startup on system boot...\nCreated symlink /etc/systemd/system/default.target.wants/oibus.service \u2192 /etc/systemd/system/oibus.service.\nStarting OIBus service...\nSetting oibus-uninstall.sh...\nInstallation procedure completed !\n\nUseful commands:\n        Check service status:   sudo systemctl status oibus\n        Check service-logs:     sudo journalctl -u oibus -f\n")),(0,i.kt)("h2",{id:"uninstall-oibus"},"Uninstall OIBus"),(0,i.kt)("p",null,"An uninstallation script has been created in the OIBus binary folder. Once in this folder, enter the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./oibus-uninstall.sh\n")),(0,i.kt)("p",null,"Here is an output example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Administrative permissions are required to proceed with uninstall. Do you wish to continue ? (Y/n)\nAdministrative permissions granted.\nDo you wish to remove all OIBus data (cache, logs...)? All data, credentials and logs about your current OIBus will be permanently erased. (y/N) y\nRemoved /etc/systemd/system/default.target.wants/oibus.service.\nOIBus service was successfully removed.\n")),(0,i.kt)("p",null,"By default, the configuration is kept if you want to reinstall OIBus later. You can remove it, but you will lose all credentials\nand the whole OIBus configuration."),(0,i.kt)("h2",{id:"run-oibus-in-standalone"},"Run OIBus in standalone"),(0,i.kt)("p",null,"If you want to run OIBus without installing it as a service, once the archive downloaded and unzipped, you can run\nthe following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./oibus --config ./OIBusData\n")),(0,i.kt)("p",null,"Make sure the OIBusData folder already exists. The cache, logs and configuration files are stored in this folder (in the\nexample ",(0,i.kt)("inlineCode",{parentName:"p"},"OIBusData"),")."))}c.isMDXComponent=!0}}]);