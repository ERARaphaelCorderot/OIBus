"use strict";(self.webpackChunkdoc_oibus=self.webpackChunkdoc_oibus||[]).push([[9966],{4151:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"2.5","label":"2.5","banner":null,"badge":true,"noIndex":false,"className":"docs-version-2.5","isLast":true,"docsSidebars":{"guideSidebar":[{"type":"link","label":"Main concepts","href":"/docs/guide/","docId":"guide/index"},{"type":"link","label":"Installation","href":"/docs/guide/installation","docId":"guide/installation"},{"type":"category","label":"Engine","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"OIBus access","href":"/docs/guide/engine/access","docId":"guide/engine/access"},{"type":"link","label":"Logging parameters","href":"/docs/guide/engine/logging-parameters","docId":"guide/engine/logging-parameters"},{"type":"link","label":"Scan modes","href":"/docs/guide/engine/scan-modes","docId":"guide/engine/scan-modes"},{"type":"link","label":"Cache and archive","href":"/docs/guide/engine/cache-and-archive","docId":"guide/engine/cache-and-archive"},{"type":"link","label":"Proxy","href":"/docs/guide/engine/proxy","docId":"guide/engine/proxy"},{"type":"link","label":"Health signal","href":"/docs/guide/engine/health-signal","docId":"guide/engine/health-signal"},{"type":"link","label":"External sources","href":"/docs/guide/engine/external-sources","docId":"guide/engine/external-sources"}],"href":"/docs/category/engine"},{"type":"category","label":"South connectors","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Common South settings","href":"/docs/guide/south-connectors/common-settings","docId":"guide/south-connectors/common-settings"},{"type":"link","label":"SQL","href":"/docs/guide/south-connectors/sql","docId":"guide/south-connectors/sql"},{"type":"link","label":"Folder Scanner","href":"/docs/guide/south-connectors/folder-scanner","docId":"guide/south-connectors/folder-scanner"},{"type":"link","label":"OPCUA","href":"/docs/guide/south-connectors/opcua","docId":"guide/south-connectors/opcua"},{"type":"link","label":"OPCHDA (Windows only)","href":"/docs/guide/south-connectors/opchda","docId":"guide/south-connectors/opchda"},{"type":"link","label":"Modbus","href":"/docs/guide/south-connectors/modbus","docId":"guide/south-connectors/modbus"},{"type":"link","label":"ADS - TwinCAT","href":"/docs/guide/south-connectors/ads","docId":"guide/south-connectors/ads"},{"type":"link","label":"MQTT","href":"/docs/guide/south-connectors/mqtt","docId":"guide/south-connectors/mqtt"}],"href":"/docs/category/south-connectors"},{"type":"category","label":"North connectors","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Common North settings","href":"/docs/guide/north-connectors/common-settings","docId":"guide/north-connectors/common-settings"},{"type":"link","label":"OIAnalytics","href":"/docs/guide/north-connectors/oianalytics","docId":"guide/north-connectors/oianalytics"},{"type":"link","label":"OIConnect","href":"/docs/guide/north-connectors/oiconnect","docId":"guide/north-connectors/oiconnect"},{"type":"link","label":"File Writer","href":"/docs/guide/north-connectors/file-writer","docId":"guide/north-connectors/file-writer"},{"type":"link","label":"AWS S3","href":"/docs/guide/north-connectors/aws-s3","docId":"guide/north-connectors/aws-s3"},{"type":"link","label":"Console","href":"/docs/guide/north-connectors/console","docId":"guide/north-connectors/console"}],"href":"/docs/category/north-connectors"},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"OIBus security","href":"/docs/guide/advanced/oibus-security","docId":"guide/advanced/oibus-security"},{"type":"link","label":"OIBus to OIBus communication","href":"/docs/guide/advanced/oibus-to-oibus","docId":"guide/advanced/oibus-to-oibus"},{"type":"link","label":"Data rate estimation and cache sizing","href":"/docs/guide/advanced/oibus-data-rate","docId":"guide/advanced/oibus-data-rate"},{"type":"link","label":"OPCHDA COM/DCOM setup","href":"/docs/guide/advanced/opchda-dcom","docId":"guide/advanced/opchda-dcom"},{"type":"link","label":"OPCHDA agent","href":"/docs/guide/advanced/opchda-agent","docId":"guide/advanced/opchda-agent"},{"type":"link","label":"SQL with ODBC","href":"/docs/guide/advanced/sql-with-odbc","docId":"guide/advanced/sql-with-odbc"}],"href":"/docs/category/advanced"}],"developerSidebar":[{"type":"link","label":"OIBus developer handbook","href":"/docs/developer/","docId":"developer/index"},{"type":"link","label":"Certificates","href":"/docs/developer/certificates","docId":"developer/certificates"}]},"docs":{"developer/certificates":{"id":"developer/certificates","title":"Certificates","description":"Some protocols and tools use certificates for authentication or signing purposes. If you need to create self-signed","sidebar":"developerSidebar"},"developer/index":{"id":"developer/index","title":"OIBus developer handbook","description":"Steps to try out the application","sidebar":"developerSidebar"},"guide/advanced/oibus-data-rate":{"id":"guide/advanced/oibus-data-rate","title":"Data rate estimation and cache sizing","description":"OIBus sends values to a target application via North connectors (OIConnect, OIAnalytics...). There are two sending","sidebar":"guideSidebar"},"guide/advanced/oibus-security":{"id":"guide/advanced/oibus-security","title":"OIBus security","description":"OIBus is usually installed on a dedicated machine (which can be a virtual machine) located at the customer site. The","sidebar":"guideSidebar"},"guide/advanced/oibus-to-oibus":{"id":"guide/advanced/oibus-to-oibus","title":"OIBus to OIBus communication","description":"Context","sidebar":"guideSidebar"},"guide/advanced/opchda-agent":{"id":"guide/advanced/opchda-agent","title":"OPCHDA agent","description":"OIBus embeds an agent used by OIBus to interact with OPC Servers. As a standalone agent, it can also be run through a","sidebar":"guideSidebar"},"guide/advanced/opchda-dcom":{"id":"guide/advanced/opchda-dcom","title":"OPCHDA COM/DCOM setup","description":"Background","sidebar":"guideSidebar"},"guide/advanced/sql-with-odbc":{"id":"guide/advanced/sql-with-odbc","title":"SQL with ODBC","description":"What is ODBC","sidebar":"guideSidebar"},"guide/engine/access":{"id":"guide/engine/access","title":"OIBus access","description":"OIBus port","sidebar":"guideSidebar"},"guide/engine/cache-and-archive":{"id":"guide/engine/cache-and-archive","title":"Cache and archive","description":"All files and values are stored in local caches (one for each North connector). In case communication errors prevent","sidebar":"guideSidebar"},"guide/engine/external-sources":{"id":"guide/engine/external-sources","title":"External sources","description":"Declaring an external source is useful when values and files are sent directly to OIBus endpoints /engine/addValues","sidebar":"guideSidebar"},"guide/engine/health-signal":{"id":"guide/engine/health-signal","title":"Health signal","description":"A message can be sent regularly to the logs or to an HTTP endpoint to give information about OIBus status.","sidebar":"guideSidebar"},"guide/engine/logging-parameters":{"id":"guide/engine/logging-parameters","title":"Logging parameters","description":"OIBus logs have five levels (from the most to the less critical):","sidebar":"guideSidebar"},"guide/engine/proxy":{"id":"guide/engine/proxy","title":"Proxy","description":"Some connectors need to send information through a proxy. Each proxy must be defined in the engine settings and can be","sidebar":"guideSidebar"},"guide/engine/scan-modes":{"id":"guide/engine/scan-modes","title":"Scan modes","description":"Scan modes are Cron defined and used in OIBus to retrieve data at specific dates and interval from","sidebar":"guideSidebar"},"guide/index":{"id":"guide/index","title":"Main concepts","description":"Open-source, scalable and flexible","sidebar":"guideSidebar"},"guide/installation":{"id":"guide/installation","title":"Installation","description":"Let\'s install OIBus in less than 2 minutes.","sidebar":"guideSidebar"},"guide/north-connectors/aws-s3":{"id":"guide/north-connectors/aws-s3","title":"AWS S3","description":"The AWS S3 connector simply writes files received from South connectors to the specified S3 bucket:","sidebar":"guideSidebar"},"guide/north-connectors/common-settings":{"id":"guide/north-connectors/common-settings","title":"Common North settings","description":"Add a connector","sidebar":"guideSidebar"},"guide/north-connectors/console":{"id":"guide/north-connectors/console","title":"Console","description":"The console is mainly used for development or troubleshooting purposes.","sidebar":"guideSidebar"},"guide/north-connectors/file-writer":{"id":"guide/north-connectors/file-writer","title":"File Writer","description":"The File Writer connector simply writes what is received from the South on the specified folder:","sidebar":"guideSidebar"},"guide/north-connectors/oianalytics":{"id":"guide/north-connectors/oianalytics","title":"OIAnalytics","description":"OIAnalytics SaaS application manages both JSON and file payloads. JSON payloads are formatted points retrieved from a","sidebar":"guideSidebar"},"guide/north-connectors/oiconnect":{"id":"guide/north-connectors/oiconnect","title":"OIConnect","description":"OIConnect is a North connector used to send both files and JSON payloads to a REST API endpoint (one for JSON, one for","sidebar":"guideSidebar"},"guide/south-connectors/ads":{"id":"guide/south-connectors/ads","title":"ADS - TwinCAT","description":"The ADS protocol (Automation Device Specification) is a transport layer within TwinCAT systems, developed by","sidebar":"guideSidebar"},"guide/south-connectors/common-settings":{"id":"guide/south-connectors/common-settings","title":"Common South settings","description":"Add a connector","sidebar":"guideSidebar"},"guide/south-connectors/folder-scanner":{"id":"guide/south-connectors/folder-scanner","title":"Folder Scanner","description":"The Folder Scanner connector periodically checks the input folder for new files at an interval specified by the scan","sidebar":"guideSidebar"},"guide/south-connectors/modbus":{"id":"guide/south-connectors/modbus","title":"Modbus","description":"Modbus is a communication protocol used for PLC networks. Historically, it was designed for communication on a serial","sidebar":"guideSidebar"},"guide/south-connectors/mqtt":{"id":"guide/south-connectors/mqtt","title":"MQTT","description":"MQTT (Message Queuing Telemetry Transport) is a real-time messaging protocol for exchanging data by topic with a","sidebar":"guideSidebar"},"guide/south-connectors/opchda":{"id":"guide/south-connectors/opchda","title":"OPCHDA (Windows only)","description":"OPCDA and OPCHDA are communication protocols used in the industrial world and developed by the","sidebar":"guideSidebar"},"guide/south-connectors/opcua":{"id":"guide/south-connectors/opcua","title":"OPCUA","description":"OPCUA technology is a protocol for accessing data in read or write mode. The data are organized in a tree-like address","sidebar":"guideSidebar"},"guide/south-connectors/sql":{"id":"guide/south-connectors/sql","title":"SQL","description":"The SQL connector allows you to run an SQL query at regular intervals and retrieve the results as CSV files.","sidebar":"guideSidebar"}}}')}}]);