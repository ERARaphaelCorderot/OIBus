"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[264],{4194:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(5893),s=i(1151);const a={sidebar_position:2},r="OPCHDA",o={id:"guide/oibus-agent/opchda",title:"OPCHDA",description:"The OIBus agent can receive the following HTTP calls. The agent run a local HDA module through an inter-process",source:"@site/docs/guide/oibus-agent/opchda.mdx",sourceDirName:"guide/oibus-agent",slug:"/guide/oibus-agent/opchda",permalink:"/docs/guide/oibus-agent/opchda",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"ODBC",permalink:"/docs/guide/oibus-agent/odbc"}},l={},c=[{value:"HTTP API",id:"http-api",level:2},{value:"Status",id:"status",level:3},{value:"Connection",id:"connection",level:3},{value:"Read",id:"read",level:3},{value:"Disconnection",id:"disconnection",level:3},{value:"COM/DCOM setup",id:"comdcom-setup",level:2},{value:"Background",id:"background",level:3},{value:"COM",id:"com",level:4},{value:"DCOM",id:"dcom",level:4},{value:"OPC",id:"opc",level:4},{value:"Windows settings (client)",id:"windows-settings-client",level:3},{value:"Client machine settings",id:"client-machine-settings",level:4},{value:"Test communication",id:"test-communication",level:4},{value:"Authentication",id:"authentication",level:4},{value:"Firewall configuration",id:"firewall-configuration",level:4},{value:"OPCEnum tool",id:"opcenum-tool",level:4},{value:"RPC unavailable",id:"rpc-unavailable",level:5},{value:"Access denied",id:"access-denied",level:5},{value:"Server settings",id:"server-settings",level:3},{value:"HDA module",id:"hda-module",level:2},{value:"ping",id:"ping",level:3},{value:"Usage",id:"usage",level:4},{value:"catalog",id:"catalog",level:3},{value:"Basic usage",id:"basic-usage",level:4},{value:"Includes all and specific file",id:"includes-all-and-specific-file",level:4},{value:"bulk",id:"bulk",level:3},{value:"Basic usage",id:"basic-usage-1",level:4},{value:"With aggregates",id:"with-aggregates",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"opchda",children:"OPCHDA"}),"\n",(0,t.jsxs)(n.p,{children:["The OIBus agent can receive the following ",(0,t.jsx)(n.a,{href:"#http-api",children:"HTTP calls"}),". The agent run a local HDA module through an inter-process\ncommunication.\nTo run properly, ",(0,t.jsx)(n.a,{href:"#comdcom-setup",children:"COM/DCOM"})," must be enabled. The HDA module can be found in the HdaAgent subfolder of\nthe OIBus Agent and can be run independently though the ",(0,t.jsx)(n.a,{href:"#hda-module",children:"command line"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"OS compatibility",type:"caution",children:(0,t.jsx)(n.p,{children:"This feature is available only on Windows."})}),"\n",(0,t.jsx)(n.h2,{id:"http-api",children:"HTTP API"}),"\n",(0,t.jsx)(n.h3,{id:"status",children:"Status"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl --location 'http://localhost:2224/api/opc/id/status'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"connection",children:"Connection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl --location --request PUT \'http://localhost:2224/api/opc/id/connect\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "host": "localhost",\n    "serverName": "Matrikon.OPC.Simulation"\n}\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"read",children:"Read"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl --location --request PUT \'http://localhost:2224/api/opc/id/read\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "host": "localhost",\n    "serverName": "Matrikon.OPC.Simulation",\n    "startTime": "2023-11-02T15:00:00.000Z",\n    "endTime": "2023-11-02T16:00:00.000Z",\n    "aggregate": "raw",\n    "resampling": "none",\n    "items": [\n        {\n            "name": "Random",\n            "nodeId": "Random.Int1"\n        },\n        {\n            "name": "Triangle Waves",\n            "nodeId": "Triangle Waves.Int1"\n        },\n        {\n            "name": "Saw-toothed Waves",\n            "nodeId": "Saw-toothed Waves.Int1"\n        }\n    ]\n}\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"disconnection",children:"Disconnection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl --location --request DELETE 'http://localhost:2224/api/opc/id/disconnect'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"comdcom-setup",children:"COM/DCOM setup"}),"\n",(0,t.jsx)(n.h3,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.h4,{id:"com",children:"COM"}),"\n",(0,t.jsx)(n.p,{children:"COM is the standard protocol for communication between objects located on the same computer but which are part of\ndifferent programs. The server is the object providing services, such as making data available. The client is an\napplication that uses the services provided by the server."}),"\n",(0,t.jsx)(n.h4,{id:"dcom",children:"DCOM"}),"\n",(0,t.jsx)(n.p,{children:"DCOM represents an expansion of COM functionality to allow access to objects on remote computers. This protocol allows\nstandardized data exchange between applications from industry, administrative offices and manufacturing. Previously, the\napplications that accessed the process data were tied to the access protocols of the communication network. The OPC\nstandard software interface allows devices and applications from different manufacturers to be combined in a uniform way."}),"\n",(0,t.jsx)(n.h4,{id:"opc",children:"OPC"}),"\n",(0,t.jsx)(n.p,{children:"The OPC client is an application that accesses process data, messages, and archives of an OPC server. Access is through\nthe OPC software interface. An OPC server is a program that provides standard software interface to read or write data.\nThe OPC server is the intermediate layer between the applications for handling process data, the various network\nprotocols and the interfaces for accessing these data. Only devices with operating systems based on Windows COM and\nDCOM technology can use the OPC software interface for data exchange."}),"\n",(0,t.jsx)(n.admonition,{title:"DCOM connectivity",type:"info",children:(0,t.jsx)(n.p,{children:"This page gives some hints on how to set up a communication with COM/DCOM to an OPCHDA server. However, in industrial\ncontext, it is often the responsibility of the IT team to correctly set the permissions, firewall and Windows\nconfiguration."})}),"\n",(0,t.jsx)(n.h3,{id:"windows-settings-client",children:"Windows settings (client)"}),"\n",(0,t.jsx)(n.h4,{id:"client-machine-settings",children:"Client machine settings"}),"\n",(0,t.jsxs)(n.p,{children:["Follow these steps to enable COM/DCOM communications from the client. First, open the Component services, and access the\n",(0,t.jsx)(n.em,{children:"Properties"})," of the computer."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Component Services",src:i(9728).Z+"",width:"565",height:"391"})})}),"\n",(0,t.jsxs)(n.p,{children:["Be sure to enable ",(0,t.jsx)(n.em,{children:"Distributed COM"})," on this computer (on the ",(0,t.jsx)(n.em,{children:"Default Properties"})," tab)."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Component Properties",src:i(6054).Z+"",width:"400",height:"558"})})}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.em,{children:"COM Security"})," tab, edit default ",(0,t.jsx)(n.em,{children:"Launch and Activation Permissions"}),"."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"COM Security",src:i(1282).Z+"",width:"400",height:"558"})})}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.em,{children:"Launch and Activation Permissions"})," window, allow the following permissions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Local Launch"}),"\n",(0,t.jsx)(n.li,{children:"Remote Launch"}),"\n",(0,t.jsx)(n.li,{children:"Local Activation"}),"\n",(0,t.jsx)(n.li,{children:"Remote Activation"}),"\n"]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Access Permissions",src:i(5803).Z+"",width:"363",height:"450"})})}),"\n",(0,t.jsx)(n.h4,{id:"test-communication",children:"Test communication"}),"\n",(0,t.jsx)(n.p,{children:"DCOM uses port 135 of the HDA server to exchange with the client. To do so, it is interesting to use the tnc command of\nthe Windows Powershell installed as standard. Below, a test that fails (because of the firewall) then a test that\nsucceeds:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"tnc localhost -port 135"})}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Test DCOM communication",src:i(5146).Z+"",width:"503",height:"299"})})}),"\n",(0,t.jsxs)(n.p,{children:["If you have a communication problem, see the ",(0,t.jsx)(n.a,{href:"#firewall-configuration",children:"firewall configuration section"})," which is probably\nthe source of the problem."]}),"\n",(0,t.jsx)(n.h4,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsx)(n.p,{children:'An OPCHDA client program will communicate with the DA/HDA server with the IP address or hostname of the server followed\nby the "progId" of the server. It will then have to be identified at the Windows level with a name and a password which\nare (by default) those of the user who launches the client program. This user must therefore be known on the HDA\nserver as well. You must therefore either:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a user with the same password on the HDA server (assuming it is accessible)"}),"\n",(0,t.jsx)(n.li,{children:"Be part of the same domain (so the user is accessible from all computers in the domain)"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"info",children:(0,t.jsxs)(n.p,{children:["The user must be a member of the ",(0,t.jsx)(n.em,{children:"Distributed COM Users"})," group"]})}),"\n",(0,t.jsx)(n.admonition,{title:"Service",type:"tip",children:(0,t.jsxs)(n.p,{children:["If the program runs through a service (such as OIBus), go to the Service manager window, and right-click on the service.\nThen click on ",(0,t.jsx)(n.em,{children:"Launch as user"}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"firewall-configuration",children:"Firewall configuration"}),"\n",(0,t.jsx)(n.p,{children:"In case of communication issue, the most likely cause is the configuration of a firewall between the two computers\nand/or at the hosting company in the case of machines on the cloud. On a Windows server, it is possible to configure\nthe firewall by adding a rule on port 135."}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Windows Firewall Configuration",src:i(4675).Z+"",width:"797",height:"728"})})}),"\n",(0,t.jsx)(n.p,{children:"In the case of a server hosted by Lightsail, there is an additional firewall in which a custom rule must be configured\nfor port 135."}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Lightsail Firewall Configuration",src:i(1976).Z+"",width:"908",height:"442"})})}),"\n",(0,t.jsx)(n.h4,{id:"opcenum-tool",children:"OPCEnum tool"}),"\n",(0,t.jsxs)(n.p,{children:["The OPC Foundation has provided a tool to allow OPCHDA clients to locate servers on remote nodes, without having\ninformation about those servers in the local registry. This tool is called ",(0,t.jsx)(n.a,{href:"https://opcfoundation.org/developer-tools/samples-and-tools-classic/core-components/",children:"OPCEnum"}),"\nand is freely distributed by the OPC Foundation. The PI OPCHDA interface installation installs OPCEnum as well. The\nprimary function of OPCEnum is to inform or request information from other instances of OPCEnum about existing OPCHDA\nServers on the local system. When OPCEnum is installed, it grants Launch and Access DCOM permission to ",(0,t.jsx)(n.em,{children:"Everyone"})," and\nsets the ",(0,t.jsx)(n.em,{children:"Authentication level"})," to NONE. This allows access to any user who can log on to the system. The permissions\ncan be changed using ",(0,t.jsx)(n.code,{children:"dcomcnfg.exe"}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"rpc-unavailable",children:"RPC unavailable"}),"\n",(0,t.jsxs)(n.p,{children:["If the RPC server is unavailable, try again testing COM/DCOM communication\n",(0,t.jsx)(n.a,{href:"#test-communication",children:"testing COM/DCOM communication"})," and check your firewall."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"RPC Unavailable",src:i(2962).Z+"",width:"908",height:"214"})})}),"\n",(0,t.jsx)(n.h5,{id:"access-denied",children:"Access denied"}),"\n",(0,t.jsxs)(n.p,{children:["Access rights can be diagnosed using the server security log. If the following error happens, check the user and its\npassword created on the HDA server and that the user is in the ",(0,t.jsx)(n.em,{children:"Distributed COM Users"})," group on the HDA server."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Access denied",src:i(4495).Z+"",width:"1370",height:"732"})})}),"\n",(0,t.jsx)(n.h3,{id:"server-settings",children:"Server settings"}),"\n",(0,t.jsxs)(n.p,{children:["Check on the server machine if DCOM is enabled for the OPC Server application by opening the ",(0,t.jsx)(n.em,{children:"Component Service"})," window.\nHere is an example with MatrikonOPC Server."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Server Machine DCOM Configuration",src:i(3232).Z+"",width:"692",height:"596"})})}),"\n",(0,t.jsx)(n.h2,{id:"hda-module",children:"HDA module"}),"\n",(0,t.jsx)(n.p,{children:"The agent is an executable that requires the following DLLs to run:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CommandLine.dll"}),"\n",(0,t.jsx)(n.li,{children:"Newtonsoft.Json.dll"}),"\n",(0,t.jsx)(n.li,{children:"OpcComRcw.dll"}),"\n",(0,t.jsx)(n.li,{children:"OpcNetApi.Com.dll"}),"\n",(0,t.jsx)(n.li,{children:"OpcNetApi.dll"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Several actions are possible:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ping: to check connection and gives server information"}),"\n",(0,t.jsx)(n.li,{children:"catalog: to list available tags and store them in a CSV file"}),"\n",(0,t.jsx)(n.li,{children:"bulk: to request history and store it in one file per tag"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following options are available for all commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-h --host                   Host name (or IP address).\n-s --server                 HDA Server name (ex: Matrikon.OPC.Simulation.1)\n-l --consoleLevel           Verbosity level for Console (error, warning, info, debug, trace). Default debug\n-x --fileLevel              Verbosity level for File (error, warning, info, debug, trace). Default debug\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ping",children:"ping"}),"\n",(0,t.jsx)(n.p,{children:"The following option is available:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-i --infos              Display supported aggregates and attributes from the server. Default: false\n"})}),"\n",(0,t.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\\HdaAgent.exe ping -h localhost -s Matrikon.OPC.Simulation -i\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ping command with the ",(0,t.jsx)(n.em,{children:"-i"})," option returns three messages from the Matrikon simulation server:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Status infos:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "VendorInfo": "Matrikon Inc +1-780-945-4011 http://www.matrikonopc.com",\n    "ProductVersion": "1.7.7433",\n    "ServerState": 1,\n    "StatusInfo": "",\n    "StartTime": "2022-05-16T14:27:46.3709266+00:00",\n    "CurrentTime": "2022-08-02T09:18:29.5739742+00:00",\n    "MaxReturnValues": 0\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Supported aggregates"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[\n    {\n        "ID": 1,\n        "Name": "INTERPOLATIVE",\n        "Description": "Retrieve interpolated values."\n    },\n    {\n        "ID": 4,\n        "Name": "TIMEAVERAGE",\n        "Description": "Retrieve the time weighted average data over the resample interval."\n    },\n    {\n        "ID": 7,\n        "Name": "MINIMUMACTUALTIME",\n        "Description": "Retrieve the minimum value in the resample interval and the timestamp of the minimum value."\n    },\n    {\n        "ID": 8,\n        "Name": "MINIMUM",\n        "Description": "Retrieve the minimum value in the resample interval."\n    },\n    {\n        "ID": 9,\n        "Name": "MAXIMUMACTUALTIME",\n        "Description": "Retrieve the maximum value in the resample interval and the timestamp of the maximum value."\n    },\n    {\n        "ID": 10,\n        "Name": "MAXIMUM",\n        "Description": "Retrieve the maximum value in the resample interval."\n    }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Supported types:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[\n    {\n        "ID": 1,\n        "Name": "DATA_TYPE",\n        "Description": "Data type",\n        "DataType": "System.Int16, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"\n    },\n    {\n        "ID": 2,\n        "Name": "DESCRIPTION",\n        "Description": "Item Description",\n        "DataType": "System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"\n    },\n    {\n        "ID": 11,\n        "Name": "NORMAL_MAXIMUM",\n        "Description": "High EU",\n        "DataType": "System.Double, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"\n    },\n    {\n        "ID": 12,\n        "Name": "NORMAL_MINIMUM",\n        "Description": "Low EU",\n        "DataType": "System.Double, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"\n    },\n    {\n        "ID": 13,\n        "Name": "ITEMID",\n        "Description": "Item ID",\n        "DataType": "System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"\n    },\n    {\n        "ID": -5,\n        "Name": "TRIANGLE",\n        "Description": "Triangle Wave",\n        "DataType": "Opc.Type, OpcNetApi, Version=2.1.0.0, Culture=neutral, PublicKeyToken=9a40e993cbface53"\n    },\n    {\n        "ID": -4,\n        "Name": "SQUARE",\n        "Description": "Square Wave",\n        "DataType": "Opc.Type, OpcNetApi, Version=2.1.0.0, Culture=neutral, PublicKeyToken=9a40e993cbface53"\n    },\n    {\n        "ID": -3,\n        "Name": "SAWTOOTH",\n        "Description": "Saw-toothed Wave",\n        "DataType": "Opc.Type, OpcNetApi, Version=2.1.0.0, Culture=neutral, PublicKeyToken=9a40e993cbface53"\n    },\n    {\n        "ID": -2,\n        "Name": "RANDOM",\n        "Description": "Random",\n        "DataType": "Opc.Type, OpcNetApi, Version=2.1.0.0, Culture=neutral, PublicKeyToken=9a40e993cbface53"\n    },\n    {\n        "ID": -1,\n        "Name": "BUCKET",\n        "Description": "Bucket Brigade",\n        "DataType": "Opc.Type, OpcNetApi, Version=2.1.0.0, Culture=neutral, PublicKeyToken=9a40e993cbface53"\n    }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"catalog",children:"catalog"}),"\n",(0,t.jsx)(n.p,{children:"HdaAgent Catalog creates a csv file catalog.csv using the browse API."}),"\n",(0,t.jsx)(n.p,{children:"The program displays information about the server (API ServerStatus), Aggregates (getAggregates)\nand Attributes (getAttributes) as JSON string in the console."}),"\n",(0,t.jsx)(n.p,{children:"The following options are available:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-i --includesAll        Includes all Items in the server (i.e. folders). Default: false\n-f --file               Name of the output folder. Default: catalog.csv\n"})}),"\n",(0,t.jsx)(n.h4,{id:"basic-usage",children:"Basic usage"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".\\HDAAgent.exe catalog -h localhost -s Matrikon.OPC.Simulation"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Name,Address\n"ArrayOfReal8","Bucket Brigade.ArrayOfReal8"\n"ArrayOfString","Bucket Brigade.ArrayOfString"\n...\n'})}),"\n",(0,t.jsx)(n.h4,{id:"includes-all-and-specific-file",children:"Includes all and specific file"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:".\\HDAAgent.exe catalog -h localhost -s Matrikon.OPC.Simulation --includesAll --file myFile.csv"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Name,Address,isItem\n"Root","",False\n"Simulation Items,"Simulation Items",False\n"Bucket Brigade","Bucket Brigade",False\n"ArrayOfReal8","Bucket Brigade.ArrayOfReal8",True\n"ArrayOfString","Bucket Brigade.ArrayOfString",True\n...\n'})}),"\n",(0,t.jsx)(n.h3,{id:"bulk",children:"bulk"}),"\n",(0,t.jsx)(n.p,{children:"The following options are available:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-b --startTime          Start Time of the history      \n-e --endTime            End Time of the history\n-d --delay              Throttle: add a delay between requests to minimize load on HDA Servers (in ms)\n-m --max                Maximum number of values returned in a request. Defaut 0 (no maximum)\n-o --output             Name of the output folder. Default current folder\n-c --catalog            Name of the catalog file listing the tags\n-a --aggregate          Aggregate value. RAW=0, TOTAL=2, AVERAGE=3, MINIMUM=8, MAXIMUM=10, START=11, END=12. Default 0\n-i --interval           Interval (in second) if an aggregate is requested\n"})}),"\n",(0,t.jsx)(n.h4,{id:"basic-usage-1",children:"Basic usage"}),"\n",(0,t.jsxs)(n.p,{children:["Request raw values from ",(0,t.jsx)(n.em,{children:"Matrikon.OPC.Simulation"})," server located on ",(0,t.jsx)(n.em,{children:"localhost"}),", for points listed in catalog.csv between\n2022-01-01 00:00:00 and 2022-02-01 00:00:00."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'.\\HdaAgent.exe bulk -h localhost -s Matrikon.OPC.Simulation -c catalog.csv -b "2022-01-01 00:00:00" -e "2022-02-01 00:00:00" -a 0\n'})}),"\n",(0,t.jsx)(n.h4,{id:"with-aggregates",children:"With aggregates"}),"\n",(0,t.jsxs)(n.p,{children:["Request by group intervals of 60s (",(0,t.jsx)(n.em,{children:"-i 60"}),") the last value (",(0,t.jsx)(n.em,{children:"-a 12"}),") of each group for points listed in catalog.csv from\n",(0,t.jsx)(n.em,{children:"Matrikon.OPC.Simulation"})," server located on ",(0,t.jsx)(n.em,{children:"localhost"}),", between  2022-01-01 00:00:00 and 2022-02-01 00:00:00. Display all logs in the console with trace"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'.\\HdaAgent.exe bulk -h localhost -s Matrikon.OPC.Simulation -c catalog.csv -b "2022-01-01 00:00:00" -e "2022-02-01 00:00:00" -a 12 -i 60 -l trace\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1282:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-COM-security-af8091873cb844f8b4170dee7d91a413.png"},4495:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-access-denied-8203f722add5f399a9753da6145f9888.png"},5803:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-access-permissions-e19cde2010f16b0d45ab628cc9e55dcf.png"},9728:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-component-services-05e25952ca374b3aeef941bda4ef3da6.png"},6054:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-computer-properties-5bc31d8ef3b156f9b1cc1454724b7fbe.png"},1976:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-lightsail-firewall-56e27e7a446d930e611762f6acc024e2.png"},2962:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-rpc-unavailable-39f6b46627fd092a7d0199d5eb0578b3.png"},3232:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-server-DCOM-configuration-c41e23873a51d4c0b0841855e0ebd108.png"},5146:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-test-communication-0b33e3bc28c02660c109d333216d5dd9.png"},4675:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/OPCHDA-windows-firewall-1cd04eaa34533956a9f02968f616378c.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);