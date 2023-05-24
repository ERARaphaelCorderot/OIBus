# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.6.0-story-angular.0](https://github.com/OptimistikSAS/OIBus/compare/v2.5.5...v2.6.0-story-angular.0) (2023-05-24)


### Features

* **about:** Create about page ([ed09737](https://github.com/OptimistikSAS/OIBus/commit/ed09737673fecfde7c25f2559ff9d69b23deecfd))
* **about:** Retrieve OIBus info ([3dfbe18](https://github.com/OptimistikSAS/OIBus/commit/3dfbe181b2f31a1fbbc3f546638c5f1d973875eb))
* **api:** manage engine settings by API ([27281b9](https://github.com/OptimistikSAS/OIBus/commit/27281b9d7aaabd08f20e4c4b22619e7943e1c213))
* **azure:** Add Azure Blob North ([a893299](https://github.com/OptimistikSAS/OIBus/commit/a893299a3fde564e5c9667a9df7b99be73225605))
* **config:** create repository service for oibus settings ([9002f98](https://github.com/OptimistikSAS/OIBus/commit/9002f98510f414f201e4982744665c1b25065931))
* **engine:** Add a settings to keep a max instant per item or per scan mode ([30b1cea](https://github.com/OptimistikSAS/OIBus/commit/30b1cea8de6fe7a62c8b0143b7c1a5db33232aac))
* **engine:** Add history settings for South connectors with history capabilities ([eaa90b1](https://github.com/OptimistikSAS/OIBus/commit/eaa90b11badadeafc517defdd7be4aa070fd3dab))
* **engine:** add scan modes, external sources, and ip filters list ([0686869](https://github.com/OptimistikSAS/OIBus/commit/0686869e364a688e23f3d7fae9fe2ae16aef6b67))
* **engine:** Add values, add file and health signal endpoints ([fcf563b](https://github.com/OptimistikSAS/OIBus/commit/fcf563b8aa35566f8f8f35cd7b5dd70c1c34b288))
* **engine:** create reload and health-signal services ([713efe3](https://github.com/OptimistikSAS/OIBus/commit/713efe3d89507525f6aeaf9c5775e541e04f18be))
* **engine:** Do not send secrets to frontend and encrypt secrets properly only when changed ([e0fbd2b](https://github.com/OptimistikSAS/OIBus/commit/e0fbd2b04422ce754e359a43a4acd1491efd43c3))
* **engine:** Improve connectors startup and connection ([acc2bc8](https://github.com/OptimistikSAS/OIBus/commit/acc2bc8e275deedc82f762008728708d48a5851d))
* **engine:** Populate database with scan mode ([494b3c2](https://github.com/OptimistikSAS/OIBus/commit/494b3c27e35e48bf11a5a5fd452928d93686b000))
* **engine:** Reload connectors on settings or items changes ([2e85f15](https://github.com/OptimistikSAS/OIBus/commit/2e85f159bc51548a2ad8d030681e59947eff7a95))
* **engine:** Separate crypto settings from engine settings ([582d6d8](https://github.com/OptimistikSAS/OIBus/commit/582d6d86061a6dd68de90aff7cbbbcf7ee119b23))
* **engine:** Shutdown and restart OIBus ([8d21b7b](https://github.com/OptimistikSAS/OIBus/commit/8d21b7b821c2d0b9344e9d37b9ca4b2a81873510))
* **folder-scanner:** add custom database for south cache in folder scanner ([06c4913](https://github.com/OptimistikSAS/OIBus/commit/06c4913bc285c2feb1526fbd3424383e6c929d6e))
* **frontend:** add all navigable pages ([89744a8](https://github.com/OptimistikSAS/OIBus/commit/89744a8a219d66d9fb3a8588e175fcc64a5af967))
* **frontend:** create angular frontend ([fe739b8](https://github.com/OptimistikSAS/OIBus/commit/fe739b816b85abdf7f147b34283dc517204985d5))
* **frontend:** create form for engine settings ([089d90c](https://github.com/OptimistikSAS/OIBus/commit/089d90c9cbf36cd1ba2b123822a00452370b8bc6))
* **history-query:** add backend endpoint and repository for history queries ([d8d0d94](https://github.com/OptimistikSAS/OIBus/commit/d8d0d94e92051fa7168c3388f9968011d7538409))
* **history-query:** basic skeleton for history query engine ([eb262c0](https://github.com/OptimistikSAS/OIBus/commit/eb262c03ce505cf25956e7ca1d9bfb7b96eb6731))
* **history-query:** create and edit history query (frontend) ([d75980f](https://github.com/OptimistikSAS/OIBus/commit/d75980f1ba7264ddfa3fb626a5acd74538b619f1))
* **history-query:** crud for history queries ([b177bad](https://github.com/OptimistikSAS/OIBus/commit/b177bad414106a2f6a89b36d1470ff213b36b9e6))
* **history-query:** edit and display a history query ([977adf1](https://github.com/OptimistikSAS/OIBus/commit/977adf1c0cb4c52626103827ca629bc2a801a1a8))
* **history-query:** frontend list and service for history queries ([f6d0c9d](https://github.com/OptimistikSAS/OIBus/commit/f6d0c9dafad451dc17df75c407adeb604ee7ce7c))
* **history-query:** Manage items from history query backend ([0c58a55](https://github.com/OptimistikSAS/OIBus/commit/0c58a5539c1d46f2211e72abd654d2e1af1a1429))
* **history-query:** Manage items from history query frontend ([cb43a15](https://github.com/OptimistikSAS/OIBus/commit/cb43a150eff46c5ed9151d29d455fbe50fe67ed5))
* **history-query:** reset cache on history query (item) update ([279287a](https://github.com/OptimistikSAS/OIBus/commit/279287a79fcacf9b47f96f049bc089db778cf450))
* **home:** Create OIBus Home page ([62e10d4](https://github.com/OptimistikSAS/OIBus/commit/62e10d42e22c038caab06c6ff09ce7f6c66118a6))
* **log:** Add OIBus name and OIBus ID in loki logs ([75894e1](https://github.com/OptimistikSAS/OIBus/commit/75894e19f32b03fd898e678e4c53fa89682a64fe))
* **logger:** move to typescript and batch sqlite logs before storing them ([5809eea](https://github.com/OptimistikSAS/OIBus/commit/5809eeafc0b19a173b6d57f9c9080d127e995f6f))
* **logs:** logs backend repository ([944e92a](https://github.com/OptimistikSAS/OIBus/commit/944e92a811a915464faa4303393cc34eda59fa38))
* **logs:** logs user interface ([2c98ffa](https://github.com/OptimistikSAS/OIBus/commit/2c98ffafaf6713b90c2a8ae6872b25213cf83855))
* **metrics:** Add an endpoint to reset connector metrics ([ffc2771](https://github.com/OptimistikSAS/OIBus/commit/ffc277148898f5d6c220f2ea47b29dfd479835cb))
* **metrics:** Add connector metrics for South connectors (backend) ([497a5e8](https://github.com/OptimistikSAS/OIBus/commit/497a5e8656d1f0a002251b0d9987786b4e19bd4d))
* **metrics:** Add reset metrics button for connectors ([3193eb5](https://github.com/OptimistikSAS/OIBus/commit/3193eb5cc3229cbb57e24bc2db4b5a67c5a6b9f3))
* **north:** Add a sendFileImmediately for North connectors ([cbf18d4](https://github.com/OptimistikSAS/OIBus/commit/cbf18d4d61cb823e275adb03536bd8c5476c9d64))
* **north:** Add North FileWriter connector ([f41d4d3](https://github.com/OptimistikSAS/OIBus/commit/f41d4d39839beaab9934e6f1d956d1b650b0b893))
* **north:** Add North OIConnect and accept unauthorized certificates ([6779acf](https://github.com/OptimistikSAS/OIBus/commit/6779acfb7c05049fb6e9328631872ffac54dd541))
* **north:** add tests for north console and north oianalytics ([2950938](https://github.com/OptimistikSAS/OIBus/commit/2950938939a7adef09f9fada4f0526a799e8e157))
* **north:** Amazon S3 North connector ([05b35cf](https://github.com/OptimistikSAS/OIBus/commit/05b35cf69153c3e65087ff867390fecd4d6ec5c6))
* **north:** backend repository and endpoints ([f9aaa7c](https://github.com/OptimistikSAS/OIBus/commit/f9aaa7cf4768d7f5e96d393969e8f0c957d834e8))
* **north:** create and edit north connectors ([bed43e1](https://github.com/OptimistikSAS/OIBus/commit/bed43e198a0bc9d2eef5b425bc32e9ec55d6964a))
* **north:** Display North connector metrics ([baddb3b](https://github.com/OptimistikSAS/OIBus/commit/baddb3bbc93dd2eaeb475b0a8d3fa2289e46fb84))
* **north:** Implement group count and send file immediately ([41ebc9f](https://github.com/OptimistikSAS/OIBus/commit/41ebc9ff5e3b3d29ec942bfa0df1c7fa28d622f4))
* **north:** Manage retries and custom OIBus connector errors ([19ddfad](https://github.com/OptimistikSAS/OIBus/commit/19ddfad8d4060502f7268ad8240855d905bf5469))
* **north:** Manage South subscriptions ([1aa199e](https://github.com/OptimistikSAS/OIBus/commit/1aa199ef8055c9170ac48c9f132480776cf7472f))
* **north:** Retry or remove cache error files (frontend) ([8ecef32](https://github.com/OptimistikSAS/OIBus/commit/8ecef32d62303dfd6517ec30a58d121cfe05569d))
* **opcua:** opcua da connector ([cfb11ae](https://github.com/OptimistikSAS/OIBus/commit/cfb11aeea37387ced64337385ee6fed66f02e0aa))
* **proxy:** add a proxy list component and retrieve created proxy entity at creation ([beb0eb6](https://github.com/OptimistikSAS/OIBus/commit/beb0eb65388843e877461155a9d289d35976ee57))
* **proxy:** CRUD frontend operations for proxy with modal ([e396d49](https://github.com/OptimistikSAS/OIBus/commit/e396d493479eb714ea2e53242b5a9efd6ef20e3c))
* **scheduler:** create scheduler ([681ebb9](https://github.com/OptimistikSAS/OIBus/commit/681ebb920798695b6ef66c95a036bb76c1537f69))
* **setup:** Update OIBus setup for Linux platform ([47ca0c4](https://github.com/OptimistikSAS/OIBus/commit/47ca0c4adf1bebcd62fbab19cd123f71a2fdd4d5))
* **setup:** Update windows install and add bat scripts ([77c0390](https://github.com/OptimistikSAS/OIBus/commit/77c03901445509f9a793b44ce2f7ce3befd247bf))
* **south-mqtt:** Migrate South MQTT connector into typescript connector and fix subscriptions ([9c9aa7f](https://github.com/OptimistikSAS/OIBus/commit/9c9aa7fd37fef7bb8a2a31d169d93d27bbcd05bb))
* **south-sql:** Migrate odbc driver and fix item/connector settings ([bc4ebe3](https://github.com/OptimistikSAS/OIBus/commit/bc4ebe3531c935cb8787265063ae0dccd79c4132))
* **south-sql:** Migrate South SQL connector into typescript connector ([30936d3](https://github.com/OptimistikSAS/OIBus/commit/30936d3ed704b514f94a5c58f0743586efa7974b))
* **south:** add a local south cache for max instant and interval id when querying history in chunk intervals ([2d357fb](https://github.com/OptimistikSAS/OIBus/commit/2d357fbec97507a21fd97d1e874bcacaf2aff985))
* **south:** Add a max instant per item field on south form ([10710a6](https://github.com/OptimistikSAS/OIBus/commit/10710a6ae8bd340f991d81881074431ead53eb45))
* **south:** Add south item duplicate feature ([e135844](https://github.com/OptimistikSAS/OIBus/commit/e13584425e9bd9e1fdcf9f09aca1b9141972106f))
* **south:** create and edit south connectors ([012d0bc](https://github.com/OptimistikSAS/OIBus/commit/012d0bc042cc7e0b7deff11812bb4a95ee4d8145))
* **south:** create backend endpoint and repository for generic south connector ([2f33159](https://github.com/OptimistikSAS/OIBus/commit/2f331599def8b6fe647a75314afe2cf3a8d7dcb5))
* **south:** Delete all south items ([c6e4466](https://github.com/OptimistikSAS/OIBus/commit/c6e44665e1eed4143a15ed717ac4fb89a2d806d6))
* **south:** Display South connector metrics ([c4aaf8c](https://github.com/OptimistikSAS/OIBus/commit/c4aaf8c54075ca2a85ef71198d38e4a2360bf1a7))
* **south:** Import and export south items with CSV ([e3dd8ad](https://github.com/OptimistikSAS/OIBus/commit/e3dd8ad5137e4d37b9fa1fd36c42bb8b5293b8ee))
* **south:** manage south items ([06fa213](https://github.com/OptimistikSAS/OIBus/commit/06fa21329534fcfeb81742bae88d942ed7447662))
* **south:** south items repository ([9973832](https://github.com/OptimistikSAS/OIBus/commit/99738323784ae4819e3a02fb866128cfe098723d))
* **subscription:** South subscription in North ([084f833](https://github.com/OptimistikSAS/OIBus/commit/084f8336b7aa5d9102e14340a5449b23d5490d48))
* **tests:** add typescript tests for backend repositories ([c50d5bd](https://github.com/OptimistikSAS/OIBus/commit/c50d5bd0bdddfc28d78b43630bcf1e73e7aaa1d5))
* **timezone:** Add UTC timezone and format datetime on the frontend according to the user timezone ([5f0ca6b](https://github.com/OptimistikSAS/OIBus/commit/5f0ca6bde9d99c27b56e219516b52fa59b1bb544))
* **ui:** create new oib-auth and oib-proxy components ([6a81f0d](https://github.com/OptimistikSAS/OIBus/commit/6a81f0d55e2a2c1c365d327c0f7d3b03fd66e435))
* **users:** manage user authentication and guards in frontend ([22c8c5c](https://github.com/OptimistikSAS/OIBus/commit/22c8c5c5b294aaec877f6e0c79fcdb3b99fa3e3c))
* **users:** manage user in config database and rework user authentication ([cc6265d](https://github.com/OptimistikSAS/OIBus/commit/cc6265df3d2768f1a93c58300a89441785052993))
* **user:** Update user settings and change password page ([b8888f9](https://github.com/OptimistikSAS/OIBus/commit/b8888f988ab04ddf9d46af94a8cf2bbadc3d1af6))
* **version:** Retrieve version from backend in navbar ([2fb302b](https://github.com/OptimistikSAS/OIBus/commit/2fb302bc5ba3c4e8742ba96c5ccb353b58a2da82))
* **web-server:** Accept 0/1 as boolean ([d7f4688](https://github.com/OptimistikSAS/OIBus/commit/d7f4688609d8f8e52edfeec1eeca350426727d3a))
* **web-server:** Controller tests ([da572c2](https://github.com/OptimistikSAS/OIBus/commit/da572c257cd659bf6f1b267c172be12c0ab7e397))
* **web-server:** external source + proxy validator ([fac3d1b](https://github.com/OptimistikSAS/OIBus/commit/fac3d1b971675a86dbd5405a2a14d111bb6a37d2))
* **web-server:** Inject a ValidatorInterface into the controller's constructor ([2e7d3ab](https://github.com/OptimistikSAS/OIBus/commit/2e7d3abd250858c03fb96b4f3655d80f7e6e8b83))
* **web-server:** Refactor schema import in IpFilterValidator ([3fc5e0d](https://github.com/OptimistikSAS/OIBus/commit/3fc5e0db96e72931296ac272107a8093a9bfb421))
* **web-server:** Refactor using validators ([c0e6b75](https://github.com/OptimistikSAS/OIBus/commit/c0e6b758bd79c3a343ceb143399b0c0f7d3afe34))
* **web-server:** Scan mode validator + small refactor ([4eab7ba](https://github.com/OptimistikSAS/OIBus/commit/4eab7ba6207770c09c1ebdd169565e548d2b5a25))
* **web-server:** Test IpFilterValidator without mocking Joi ([bb950a0](https://github.com/OptimistikSAS/OIBus/commit/bb950a051d83aad1ef3755e69d33b41909c7e5da))
* **web-server:** Unit test for IpFilterValidator ([6542e90](https://github.com/OptimistikSAS/OIBus/commit/6542e9096fc29865e5431c57dfd4bfd4bbf9bc17))
* **web-server:** Unit test for joi validator ([6fdc48d](https://github.com/OptimistikSAS/OIBus/commit/6fdc48d290d5776a375daaf8ea1f0941acf34305))
* **web-server:** Validate engine parameters ([57a9860](https://github.com/OptimistikSAS/OIBus/commit/57a9860b8da51a4dd3d8b269f06b4667929107d6))
* **web-server:** Validate north/south ([b5d853f](https://github.com/OptimistikSAS/OIBus/commit/b5d853f4fec4b0e4b827a711bd127120f0555629))
* **web-server:** Validate north/south based on manifest file settings ([5699414](https://github.com/OptimistikSAS/OIBus/commit/5699414ad9fa2da64e6d96a648f808692816b5ad))
* **web-server:** Validate payload for IP filters ([e6d6066](https://github.com/OptimistikSAS/OIBus/commit/e6d60666b0c7439e0c17632765a87f5add6e6e2d))
* **web-server:** Validation rules for north/south ([cb9cd3d](https://github.com/OptimistikSAS/OIBus/commit/cb9cd3d37904047f0e9d66ca144797ba6e018b85))
* **web-server:** Validator tests ([53badce](https://github.com/OptimistikSAS/OIBus/commit/53badcea4cef66b31996c0578ca31529447e930b))
* **web:** Improve home page design ([5ef6620](https://github.com/OptimistikSAS/OIBus/commit/5ef66207c8de7156b3058e8382067cef86c88413))


### Bug Fixes

* **cache:** Avoid multiple asynchronous call of value flush method ([cbae956](https://github.com/OptimistikSAS/OIBus/commit/cbae956cee201d70ba542f8546d67fdc90eaab77))
* **cache:** fix after rebase and replace timeout by maxSize in cache ([f00664d](https://github.com/OptimistikSAS/OIBus/commit/f00664d25971125f3b80be484a6a467ffb54010b))
* **cache:** fix after rebase and replace timeout by maxSize in cache ([c9f6abc](https://github.com/OptimistikSAS/OIBus/commit/c9f6abc6b37e42f4966ee3b05be3f4ba76db72b2))
* **chore:** create log folder at startup ([1bd6d8d](https://github.com/OptimistikSAS/OIBus/commit/1bd6d8d70476dbee217570931c2882632d0c0f0a))
* **ci:** install shared dependencies ([0d204d1](https://github.com/OptimistikSAS/OIBus/commit/0d204d10a1b011047c20081e6f71949f7a8e24b6))
* **config:** Manage back navigation when canceling edition ([9ef4a18](https://github.com/OptimistikSAS/OIBus/commit/9ef4a187eb16887ccd0294bbce5abe1d938e6d28))
* **deps:** adapt tests with joi schema in manifests ([6070bfe](https://github.com/OptimistikSAS/OIBus/commit/6070bfe413c6b5d4d154fef92b3143d1968625b9))
* **deps:** allowSyntheticDefaultImports to tru for shared models ([38bb60c](https://github.com/OptimistikSAS/OIBus/commit/38bb60cb75ed16aad146bdb88786c4293b4e5aa3))
* **deps:** specific joi deps ([4b01729](https://github.com/OptimistikSAS/OIBus/commit/4b01729f5115c03fe0f14f0cbf19aeec16b4cfbf))
* **doc:** Adapt README.md to OIBus v3 ([3b83ef2](https://github.com/OptimistikSAS/OIBus/commit/3b83ef249718d8b3d58fc286dd7edb197dc879e7))
* **encryption:** switch to AES encryption of secrets and mutualize OIBus cert ; each OPCUA south has its cert folder in its cache ([544e757](https://github.com/OptimistikSAS/OIBus/commit/544e75758ed0dbacf198b05cfd65762087ac26e1))
* **engine:** Stop history engine before web server ([6cd365e](https://github.com/OptimistikSAS/OIBus/commit/6cd365e21062b230ab07ab59802d3dde4d4aeb47))
* **folder-scanner:** fix schema and preserve file ([41af890](https://github.com/OptimistikSAS/OIBus/commit/41af890c9a0f728f04b7cc75a988cbd5337c19c6))
* **forms:** simplify form components and fix validation ([d9341a2](https://github.com/OptimistikSAS/OIBus/commit/d9341a2bf0a6bea3f96ca45e6c13021defb81554))
* **frontend:** Fix datetimepicker format value ([0f93744](https://github.com/OptimistikSAS/OIBus/commit/0f93744f91f487e119ab9d4bce90ff8b88bb5dfd))
* **history-query:** delete all items on connector/history deletion ([1987167](https://github.com/OptimistikSAS/OIBus/commit/1987167a05904b299345d871833562c8de5a6bc6))
* **history-query:** manage encryption of secrets and filtering secrets when sending history queries to frontend ([73df5dc](https://github.com/OptimistikSAS/OIBus/commit/73df5dc4837423a0d1e621b1242b50acf951c637))
* **logger:** Switch to LogController Class and create log schema ([a078324](https://github.com/OptimistikSAS/OIBus/commit/a078324364b2913dafb898a5d0ca21860fe81a55))
* **logger:** Update cache services logger in North connector ([851d3e1](https://github.com/OptimistikSAS/OIBus/commit/851d3e16de31b9ef6779761ef3d955e60eb1eacd))
* **logs:** Remove console log ([2840326](https://github.com/OptimistikSAS/OIBus/commit/2840326bc631f3188d79d56725357e176952158e))
* **logs:** Search logs with scope and message fix ([bd76e7f](https://github.com/OptimistikSAS/OIBus/commit/bd76e7fe5fd4c8834b025d42ec8078b49c955079))
* **north:** Fix Maximum call stack size exceeded error in flush method ([c399ab4](https://github.com/OptimistikSAS/OIBus/commit/c399ab458ca93df7df785673d8828df9b36e4948))
* **north:** Fix North cache congestion when adding several files ([c2fe59b](https://github.com/OptimistikSAS/OIBus/commit/c2fe59b6471736ce919de3421ea68fd7ec4024f8))
* **north:** fix north connector creation ([1bd93e9](https://github.com/OptimistikSAS/OIBus/commit/1bd93e98eec899403c4b88d46ffdc8595dd2433f))
* **north:** Migrate caches file endpoints into typescript ([ce2336f](https://github.com/OptimistikSAS/OIBus/commit/ce2336fc22e500e6f2a1d22eff49a77eeeadde81))
* **opcua:** Properly stop connector ([b34892e](https://github.com/OptimistikSAS/OIBus/commit/b34892e2f9f5f47d628e7c72c49aa7c98fab0b46))
* **setup:** Add windows scripts in zip ([aacfe34](https://github.com/OptimistikSAS/OIBus/commit/aacfe34e60a64b16f00589dcbc5ab6496dfe9716))
* **south-modbus:** Fix Modbus client creation ([234261e](https://github.com/OptimistikSAS/OIBus/commit/234261e8083a406c1867f47e4dff2cd6dde3f4c6))
* **south-sql:** Fix updated max instant ([b901291](https://github.com/OptimistikSAS/OIBus/commit/b901291d4ebe6f93e8fba5cb5a9681c1742aedcc))
* **south:** Fix font loading and fix monaco editor form ([b8e2fd5](https://github.com/OptimistikSAS/OIBus/commit/b8e2fd5768fc6855dd7e230441bb603f78fdf91b))
* **south:** Fix search south items ([a04b25a](https://github.com/OptimistikSAS/OIBus/commit/a04b25aa1354c70c73f57540e1bb8c94531b75d9))
* **sql:** Add connection timeout to Postgre options ([526e729](https://github.com/OptimistikSAS/OIBus/commit/526e729cf73abffc1e087b4b9be6709b185dc4b9))
* **tests:** adapt test after rebase ([aff05b1](https://github.com/OptimistikSAS/OIBus/commit/aff05b147be60fa3ab71f91826779359b9177d3d))
* **user:** change password endpoint and switch to argon2id hash ([10cfede](https://github.com/OptimistikSAS/OIBus/commit/10cfede604aa8f2fe5a57f546a3cdd3fab008f86))
* **user:** Fix user settings update routes ([03b9af4](https://github.com/OptimistikSAS/OIBus/commit/03b9af47613256ea7eea1bf6298f68f8b7576f55))
* **validators:** Adapt validators after typescript and eslint rebase ([143b04f](https://github.com/OptimistikSAS/OIBus/commit/143b04ffaf8779db0d811d23067fe0970e560ea4))
* **web-server:** Reorganize web server middlewares ([7ebf688](https://github.com/OptimistikSAS/OIBus/commit/7ebf688ee919e21046f903db0c20d4edd58909fb))

### [2.5.5](https://github.com/OptimistikSAS/OIBus/compare/v2.5.4...v2.5.5) (2023-05-02)


### Bug Fixes

* **endpoint:** Fix addFile endpoint when receiving from legacy OIbus ([00f9c49](https://github.com/OptimistikSAS/OIBus/commit/00f9c494bfdc6e58630b633162d3edde7557a105))

### [2.5.4](https://github.com/OptimistikSAS/OIBus/compare/v2.5.3...v2.5.4) (2023-04-24)


### Bug Fixes

* **ci:** fix node version ([4de4103](https://github.com/OptimistikSAS/OIBus/commit/4de4103ef86b82431858a4a9e8b3cda1f40be99d))
* **endpoint:** Fix addValues endpoint when receiving from legacy OIbus ([45113fb](https://github.com/OptimistikSAS/OIBus/commit/45113fbecce340e322fabffc0a5658574c480f91))
* **engine:** fix async startup for connectors ([6e3148c](https://github.com/OptimistikSAS/OIBus/commit/6e3148c1e7545e162f241c54e105e6e48ce5351c))
* **migration:** Fix proxies and OPCHDA migration ([ea1888f](https://github.com/OptimistikSAS/OIBus/commit/ea1888f9375cba4a81ee0ca586fe5c8929538368))
* **mysql:** fix mysql package ([cf7391b](https://github.com/OptimistikSAS/OIBus/commit/cf7391bc224fe5bb967b28d4b35e4a231100fc68))
* **north:** add acceptUnauthorized field in OIAnalytics and OIConnect north connectors ([8ec6800](https://github.com/OptimistikSAS/OIBus/commit/8ec68008953927cd419ebb3455e12d82ceb1dd06))

### [2.5.3](https://github.com/OptimistikSAS/OIBus/compare/v2.5.2...v2.5.3) (2023-04-07)


### Bug Fixes

* **points:** fix points change update ([8d715cb](https://github.com/OptimistikSAS/OIBus/commit/8d715cb71380f506bf7e06ee6035a4edcb82df4a))

### [2.5.2](https://github.com/OptimistikSAS/OIBus/compare/v2.5.1...v2.5.2) (2023-04-06)


### Bug Fixes

* **modbus:** fix points creation / changes and modbus client library ([ed663b2](https://github.com/OptimistikSAS/OIBus/commit/ed663b25f89a6fa4f0cbe156f621671be08740f9))

### [2.5.1](https://github.com/OptimistikSAS/OIBus/compare/v2.5.0...v2.5.1) (2023-04-04)


### Bug Fixes

* **config:** fix async call to update config ([40441d1](https://github.com/OptimistikSAS/OIBus/commit/40441d1e8e9c0221954264bc6caa853b34071cfb))
* **migration:** fix migration for S3 authentication and encryption keys migration ([b59517f](https://github.com/OptimistikSAS/OIBus/commit/b59517fa926527a1774037a3f9d7db9c02be39d6))

## [2.5.0](https://github.com/OptimistikSAS/OIBus/compare/v2.4.0...v2.5.0) (2023-04-03)


### Features

* **build:** Generate arm64 build for Mac M1 ([af6e5cb](https://github.com/OptimistikSAS/OIBus/commit/af6e5cb3906788f5feed43d8e2238f3a6a564f26))
* **cache:** add a max size limit ([9622f75](https://github.com/OptimistikSAS/OIBus/commit/9622f75b4d9a07331888ef78567cf88b7ab7f2dc))
* **config:** add nanoid for scan modes, proxies and points and retrieve specific south/north from api call ([e995f28](https://github.com/OptimistikSAS/OIBus/commit/e995f28a073a03fdc31bfc43be1ec48413872be0))
* **connector:** use a manifest for category and modes of south and north connectors ([684ce95](https://github.com/OptimistikSAS/OIBus/commit/684ce95baeaf4318c009ce9956584091799084c2))
* **deps:** remove humanize string dependency ([439fb9a](https://github.com/OptimistikSAS/OIBus/commit/439fb9a57299e6dc1be2f9d8d439f03dea63127c))
* **esm:** adapt frontend bundle with global esm ([235be85](https://github.com/OptimistikSAS/OIBus/commit/235be851befbe0b25fd68fb0bc5f6a8b2dbf7ee4))
* **esm:** move backend code to ECMA script modules ([a192b48](https://github.com/OptimistikSAS/OIBus/commit/a192b48d2cafdd6a390eaaa25b7049cd6ffc2db5))
* **proxy:** use a proxy service to manage proxy in connectors ([bd4925a](https://github.com/OptimistikSAS/OIBus/commit/bd4925a754349ea0f6960118f128ea13a59596b8))
* **sql-odbc:** Fix date binding for MSSQL ([ed14285](https://github.com/OptimistikSAS/OIBus/commit/ed142856417a22188899d40b404c695d2c24e8b0))
* **sql:** Support for ODBC connection ([24bd6ed](https://github.com/OptimistikSAS/OIBus/commit/24bd6edabfe693e4e0d98381c2149ab4eb632fe4))
* **typescript:** adapt tests with esm ([0ee300d](https://github.com/OptimistikSAS/OIBus/commit/0ee300df63e0ad68e2ea10cf0a30f88302b4b388))
* **typescript:** use tsc to transpile into commonJS ([ee0aaa8](https://github.com/OptimistikSAS/OIBus/commit/ee0aaa8944631493408357bc28de902f415155b7))
* **ui:** Adapt tests for logs ([0b012d3](https://github.com/OptimistikSAS/OIBus/commit/0b012d3ffa8f3af8c31bde2b449aa1df54f4cca5))
* **ui:** Logs pagination final design ([bd32014](https://github.com/OptimistikSAS/OIBus/commit/bd32014d32f96bf7675bb7dcf79e186bad7e8c1c))
* **ui:** Logs Pagination fully functional state ([a9b2792](https://github.com/OptimistikSAS/OIBus/commit/a9b2792e71e2c24d8741fab93d2565210ab05dba))
* **ui:** Paginate Logs Initial test version ([169262d](https://github.com/OptimistikSAS/OIBus/commit/169262d902319cfd47d293a471f75180f86e0b85))


### Bug Fixes

* **about:** change oibus site address ([a64e0db](https://github.com/OptimistikSAS/OIBus/commit/a64e0dbac3e3f37345e8ef29b5859566d5e321f7))
* **ci:** do not copy useless file in win/bin and fix config path ([5a56bde](https://github.com/OptimistikSAS/OIBus/commit/5a56bde76bf6b74d4b93c0d07a486345dd757cb5))
* **config:** Fix default oibus.json not created on first start ([b0c547f](https://github.com/OptimistikSAS/OIBus/commit/b0c547f1982a7b2afd7ba32bcd38bcfcb1a1d186))
* **connectors:** add modes in connectors manifest ([307da96](https://github.com/OptimistikSAS/OIBus/commit/307da96893a9a9fea78b03ca4e2fdcca2e2b6b20))
* **doc:** refactor js doc to reflect global logger ([a994998](https://github.com/OptimistikSAS/OIBus/commit/a99499875c6fe706a265d24dcd0801974dc3a13c))
* **esm:** access package version and remove file line in logs ([2235dd5](https://github.com/OptimistikSAS/OIBus/commit/2235dd5c6f6b5e27d468f5ca58a3012f6ff34391))
* **esm:** update some dependencies with tsc compiler ([be959e0](https://github.com/OptimistikSAS/OIBus/commit/be959e09db5aab650024fa07cc239ad4f7512711))
* **logs:** add a button to refresh the logs ([5363a72](https://github.com/OptimistikSAS/OIBus/commit/5363a7204c833fd69d7ee336ac3781e908ad93a8))
* **log:** sort log in descending order (by timestamp) ([688d7e0](https://github.com/OptimistikSAS/OIBus/commit/688d7e0e9f56595d7bd1b8480a869921ac5bd439))
* **mqtt-south:** Fix retrieving timestamp from payload ([26b7cc6](https://github.com/OptimistikSAS/OIBus/commit/26b7cc6e1441a98122f50aa51be5eecf11ffa5ab))
* **odbc:** fix import of odbc library ([951abec](https://github.com/OptimistikSAS/OIBus/commit/951abec6306fd1058ce8a5f0064b9008534b6454))
* **tests:** fix packages mock names ([592e03a](https://github.com/OptimistikSAS/OIBus/commit/592e03adb26081bfe3b361ddbed84602841ddece))

## [2.4.0](https://github.com/OptimistikSAS/OIBus/compare/v2.3.4...v2.4.0) (2022-11-28)


### Features

* **cache:** create specific archive service for north connectors ([069e0f1](https://github.com/OptimistikSAS/OIBus/commit/069e0f1550cdb71977d63f747185e52bea13875f))
* **cache:** improve file cache service ([0618d65](https://github.com/OptimistikSAS/OIBus/commit/0618d656bccdf386e5369de3747f7cc3b2a2995f))
* **file-cache:** Add tests ([8a18c20](https://github.com/OptimistikSAS/OIBus/commit/8a18c20963d2365c5ae67910c05937846e09039b))
* **file-cache:** Endpoints to remove/retry file cache errors ([f023a7e](https://github.com/OptimistikSAS/OIBus/commit/f023a7ec09f1b6075ee028ffa9d78e83d7f440ab))
* **logs:** rotate log file ([f865dec](https://github.com/OptimistikSAS/OIBus/commit/f865dec411c5995864c41995dbce17c8620de3fa))


### Bug Fixes

* **cache:** do not log error when buffer file does not exist ([0542c54](https://github.com/OptimistikSAS/OIBus/commit/0542c5477183a79c7e9a42ecb1c9f0d336f777f9))
* **cache:** file cache fix queue ([e3eec3c](https://github.com/OptimistikSAS/OIBus/commit/e3eec3c850b772a488aac38beecdc0125f910baf))
* **cache:** Fix tests ([e76df96](https://github.com/OptimistikSAS/OIBus/commit/e76df96ca214d1424ed68c33f0ccfef646ada749))
* **cache:** fix time flush reload ([e10a8e2](https://github.com/OptimistikSAS/OIBus/commit/e10a8e2dcd66d0992c71de9101dbc3c0cb5cfd5e))
* **cache:** fix value cache when concurrent access to the buffer file ([0fb6799](https://github.com/OptimistikSAS/OIBus/commit/0fb6799546e95a2dba67530cfe88aad4b1d118d7))
* **cache:** migrate values cache and file errors folder ([99b1792](https://github.com/OptimistikSAS/OIBus/commit/99b17925289b355e2a85a01c73dc018e63ecd752))
* **cache:** refactor values cache ([b5fb0e6](https://github.com/OptimistikSAS/OIBus/commit/b5fb0e6989c5e6574aa4f9c35603475b19aef1bf))
* **cache:** Remove cache folder when removing connector ([9b55546](https://github.com/OptimistikSAS/OIBus/commit/9b555464980c93d99d27822df3422b383d8adbc0))
* **cache:** Use promise syntax instead of for in ([1e8f1b2](https://github.com/OptimistikSAS/OIBus/commit/1e8f1b22a5b52772c473a202d5bd0f16cbb9e4c2))
* **config:** do not throw error when removing orphan cache if data stream folder does not exist ([70e32c5](https://github.com/OptimistikSAS/OIBus/commit/70e32c530fbe68fede8e2f0f8f6fdef7d1194fba))
* **engine:** remove engine circular dependencies in connectors ([57f6389](https://github.com/OptimistikSAS/OIBus/commit/57f6389944ba8167d2508ef9a785dc601cd4135c))
* **http-request:** fix naming issue and create a http request static functions file ([11ad229](https://github.com/OptimistikSAS/OIBus/commit/11ad22922a22272c222609ec5b18b74aa188f8a4))
* **logs:** do not set toDate in log screen ([e5151aa](https://github.com/OptimistikSAS/OIBus/commit/e5151aa7406303afeb8b90749679d1e40feea9b5))
* **logs:** fix log reload when calling logger from log endpoint ([7521e53](https://github.com/OptimistikSAS/OIBus/commit/7521e5368646037b7a551bb626019999671835eb))
* **logs:** fix logs ui test ([b4a84c3](https://github.com/OptimistikSAS/OIBus/commit/b4a84c39ca1d362dc8d2c306f240e26b595b2be6))
* **logs:** fix oibus initialisation with common logger ([d7dd830](https://github.com/OptimistikSAS/OIBus/commit/d7dd83033fa64224660c79dbdd6c4929a0cbb355))
* **logs:** roll files and remove the oldest file periodically ([a0b47d0](https://github.com/OptimistikSAS/OIBus/commit/a0b47d020172479b2e8149bbfadb424b828238ee))
* **logs:** use one global logger for settings and children logger for connectors ([cc720c5](https://github.com/OptimistikSAS/OIBus/commit/cc720c585c85e46914923d388a3b74adfd6c575a))
* **migration:** migrate north settings authentication properly ([584c291](https://github.com/OptimistikSAS/OIBus/commit/584c29107d655b6539298cbf5d90fff754f6b3c6))
* **opcua:** Add tests for internalDisconnect ([2e1fa48](https://github.com/OptimistikSAS/OIBus/commit/2e1fa483074c428d92310ab8f4c81ca94f246665))
* **opcua:** Prevent duplicate session creation ([bd3f140](https://github.com/OptimistikSAS/OIBus/commit/bd3f1408f765d0596c5769c050ecc757e49dcea7))
* **release:** fix release oibus running test path ([be4b3bf](https://github.com/OptimistikSAS/OIBus/commit/be4b3bfea9147d1789776f06cda364d99d5c7070))
* **setup:** change favicon and setup file name ([0ad1a99](https://github.com/OptimistikSAS/OIBus/commit/0ad1a99dc0bbb5d4361c5052cb229bf75a34a99f))
* **south/north:** rename init into start and create stop method ([753cd6b](https://github.com/OptimistikSAS/OIBus/commit/753cd6b3fb9867a77e095ea772df6962526aac56))
* **tests:** add data-folder in repo for tests and oibus start ([0252635](https://github.com/OptimistikSAS/OIBus/commit/02526358e58c16cd2dafc38199f86f7f363c44d2))
* **tests:** fix integration test for sql south connector ([654cc62](https://github.com/OptimistikSAS/OIBus/commit/654cc6258c2bb49ab48850960035d7fda41d1776))
* **ui:** Rework OiDate Picker ([53102ce](https://github.com/OptimistikSAS/OIBus/commit/53102ce897bea3f573f845d743484fac4e96acdf))
* **win-setup:** update setup images ([9a33a9e](https://github.com/OptimistikSAS/OIBus/commit/9a33a9ec1fe248c31ea388d6cd0666e24072fcc1))

### [2.3.4](https://github.com/OptimistikSAS/OIBus/compare/v2.3.3...v2.3.4) (2022-10-28)


### Bug Fixes

* **cache:** improve perf on values query in sqlite cache ([51e8f9a](https://github.com/OptimistikSAS/OIBus/commit/51e8f9aa0f2aa344fcf5202f5b68ecbf3d7fcb5c))
* **setup:** improve setup ([9ad71fe](https://github.com/OptimistikSAS/OIBus/commit/9ad71febb62b726b57411d245faa8d46eac4584d))

### [2.3.3](https://github.com/OptimistikSAS/OIBus/compare/v2.3.2...v2.3.3) (2022-10-25)


### Bug Fixes

* **http-request:** fix readStream close on http error ([821f951](https://github.com/OptimistikSAS/OIBus/commit/821f9518e7dc1d6bbe44617afa22a726c1a3b629))
* **north:** fix file cache stat eperm error ([91ac4fc](https://github.com/OptimistikSAS/OIBus/commit/91ac4fc86ef2934ce1527aa3542301ef3050a004))

### [2.3.2](https://github.com/OptimistikSAS/OIBus/compare/v2.3.1...v2.3.2) (2022-10-21)


### Bug Fixes

* **north:** fix north retrieve file when file being written ([f0c8117](https://github.com/OptimistikSAS/OIBus/commit/f0c81172b627eb7f14f6b46cbe2436c1291b0017))

### [2.3.1](https://github.com/OptimistikSAS/OIBus/compare/v2.3.0...v2.3.1) (2022-10-21)


### Bug Fixes

* **archive:** fix form validation for archive retention duration and http retry count ([3442882](https://github.com/OptimistikSAS/OIBus/commit/344288250fe55f75cda8fd2481eece26fd352d58))

## [2.3.0](https://github.com/OptimistikSAS/OIBus/compare/v2.2.2...v2.3.0) (2022-10-21)


### Features

* **cache:** File cache uses folder scan to get file list instead of DB ([62f3d0b](https://github.com/OptimistikSAS/OIBus/commit/62f3d0bf064fffafcdb215c87d76e008fa29a504))
* **cache:** Remove old file cache DBs ([7fec671](https://github.com/OptimistikSAS/OIBus/commit/7fec671085fb8c2b2b5190f248a808b234b62e14))


### Bug Fixes

* **cache:** Add tests for file and value caches ([5858f26](https://github.com/OptimistikSAS/OIBus/commit/5858f269c6d9ecab52415e99ea6ca20e5a80c56f))
* **cache:** Fix retrieving file from cache ([eb6e3fd](https://github.com/OptimistikSAS/OIBus/commit/eb6e3fd0f7f450237e5db32296eec55e2a3f974a))
* **ui:** History date time input fix ([49320a8](https://github.com/OptimistikSAS/OIBus/commit/49320a80cb5bc119bd0a844f29ce486f38db6d49))

### [2.2.2](https://github.com/OptimistikSAS/OIBus/compare/v2.2.1...v2.2.2) (2022-10-19)


### Bug Fixes

* **north:** switch HTTP request error from Promise reject to Error thrown ([baf9c1a](https://github.com/OptimistikSAS/OIBus/commit/baf9c1a3a689393e1a9aca1b817eac492a8473c3))
* **south:** reinitialize properly south currently on scan after error ([637dcc5](https://github.com/OptimistikSAS/OIBus/commit/637dcc544f9e6f1e7f20f34094211028955827c6))

### [2.2.1](https://github.com/OptimistikSAS/OIBus/compare/v2.2.0...v2.2.1) (2022-10-18)


### Bug Fixes

* **front:** refactor datasource/protocol into south/southType and application/api into north/northType ([74e789f](https://github.com/OptimistikSAS/OIBus/commit/74e789f1eccb5fb334fe918ff20c910cfe035aaf))

## [2.2.0](https://github.com/OptimistikSAS/OIBus/compare/v2.1.2...v2.2.0) (2022-10-18)


### Features

* **cache:** refactor the cache ([fca1ae4](https://github.com/OptimistikSAS/OIBus/commit/fca1ae488a6b59885b3f728ebc0392baf31daedd))
* **installer:** sign Windows installer with sign tool ([481b619](https://github.com/OptimistikSAS/OIBus/commit/481b6199d3e62ad4888611ff43a4a0cfba989525))
* **logs:** create paginated logs database query ([52e46be](https://github.com/OptimistikSAS/OIBus/commit/52e46be2f3a26d60ae0f871a7a8277753d2cb284))
* **logs:** standard log path in oibus folder ([4e24752](https://github.com/OptimistikSAS/OIBus/commit/4e2475242e5ce85a3aa88c999fa9ee8cb026bd41))
* **north:** specific cache folders for each connector ([fb91f83](https://github.com/OptimistikSAS/OIBus/commit/fb91f8355ba8b9e154ff49f32522c88701262c1d))


### Bug Fixes

* **cache:** add group count for values caching ([64deb5f](https://github.com/OptimistikSAS/OIBus/commit/64deb5fb578f386c27e209ab11a5f4f047e35b5c))
* **cache:** clean up and move cache files ([531e752](https://github.com/OptimistikSAS/OIBus/commit/531e75276f06696d05b8928c2754585548c38291))
* **config:** refactor config service ([7233dc4](https://github.com/OptimistikSAS/OIBus/commit/7233dc4735ce95ff6f052b5cbba56a53a0cf1814))
* **encryption:** refactor encryption with fs/promises and improve testing ([940aa39](https://github.com/OptimistikSAS/OIBus/commit/940aa3925ee4867d6a6c00c4b64013515bb12d4b))
* **history:** add an interval to retrieve history queries to run and fix history query initialisation ([fde01d8](https://github.com/OptimistikSAS/OIBus/commit/fde01d85e0b84e9f49bbc938ac033d98c329cf67))
* **logger:** fix logger type and level ([4e6ce76](https://github.com/OptimistikSAS/OIBus/commit/4e6ce76eb42c9bdda0dc0bbf77ca40150d88082c))
* **migration:** fix logger in migration ([edb5b10](https://github.com/OptimistikSAS/OIBus/commit/edb5b106a419f47c278906112286cf863e6b1d9b))
* **north:** archive disabled by default ([5062806](https://github.com/OptimistikSAS/OIBus/commit/5062806e999a736ed245fc432061fa3c91f3f37b))
* **north:** fix North retry error and catch init/connect error ([a8dca57](https://github.com/OptimistikSAS/OIBus/commit/a8dca57e93cb9daa3524c915f0925276331e7677))
* **oibus:** refactor code to harmonize connectors and live status ([2bde86f](https://github.com/OptimistikSAS/OIBus/commit/2bde86f59398a1333b5acf584a5f1c1aa392e063))
* **south:** fix South doc and tests ([b0fe496](https://github.com/OptimistikSAS/OIBus/commit/b0fe496883d25f7f080a034309b367aadde70dae))
* **sql:** fix sql integration test ([d587023](https://github.com/OptimistikSAS/OIBus/commit/d58702319cb1f800757488a12d1bcf2abc0182ea))
* **tests:** improve tests coverage and fix Modbus utils tools ([0580bbe](https://github.com/OptimistikSAS/OIBus/commit/0580bbe2fc4cecd9337a1bfd3c3c730d868f6c64))
* **ui:** 1807 solved button display problem when renaming connector ([369f913](https://github.com/OptimistikSAS/OIBus/commit/369f91338d7c1e3fbd0fe0cbe99c06e54bebed13))
* **ui:** align save button with edit field ([c6ef14b](https://github.com/OptimistikSAS/OIBus/commit/c6ef14b7834a2408e108dc8e434c82e0ab414d9f))
* **ui:** Disable ui connection to disabled north and south nodes ([b396b32](https://github.com/OptimistikSAS/OIBus/commit/b396b32bf66e5e095104789d366c936c608db769))

### [2.1.2](https://github.com/OptimistikSAS/OIBus/compare/v2.1.1...v2.1.2) (2022-09-27)


### Bug Fixes

* **logs:** fix loki addLogs engine method with koa ctx ([94ac8c3](https://github.com/OptimistikSAS/OIBus/commit/94ac8c34e74f6b8b4c5f866f5d1110eb1a5ffd4d))

### [2.1.1](https://github.com/OptimistikSAS/OIBus/compare/v2.1.0...v2.1.1) (2022-09-26)


### Bug Fixes

* **health-signal:** log signal when forwarding with disabled http ([c92bdfd](https://github.com/OptimistikSAS/OIBus/commit/c92bdfdf4bf039d7d79ef0c9fdba392d4be8b99f))

## [2.1.0](https://github.com/OptimistikSAS/OIBus/compare/v2.0.6...v2.1.0) (2022-09-09)


### Features

* **sqlite:** only use better-sqlite3 ([ed7c258](https://github.com/OptimistikSAS/OIBus/commit/ed7c2584d1d8a0b2d5eafeea4ecce5b49cbeac99))
* **tests:** add integration test for MySQL, PostgreSQL and MSSQL ([79d783f](https://github.com/OptimistikSAS/OIBus/commit/79d783fc40bd9e00c626cac65d63d31a6d106bb8))


### Bug Fixes

* **ci:** adapt release ci ([362bd20](https://github.com/OptimistikSAS/OIBus/commit/362bd20157819b4df2cf27eef00bfbccb04ed4ac))
* **installer:** do not skip config settings if new install ([29ccdf5](https://github.com/OptimistikSAS/OIBus/commit/29ccdf5da64897ad5b05c7574e1296d3b4e841ce))
* **oia:** adapt OIAnalytics North connector help with the latest API key gen feature [#1820](https://github.com/OptimistikSAS/OIBus/issues/1820) ([d6593f1](https://github.com/OptimistikSAS/OIBus/commit/d6593f1f8b2a952fbecf199e88df24609581af92))
* **opchda:** fix blocking history read and fix [#1411](https://github.com/OptimistikSAS/OIBus/issues/1411) ([633a49d](https://github.com/OptimistikSAS/OIBus/commit/633a49d2001e95cd6a0a9f9c3f8f7871fd4f1ee2))
* **opcua:** fix certificate management and reconnection ; switch to node-opcua-client (lighter) ([fcfe8e7](https://github.com/OptimistikSAS/OIBus/commit/fcfe8e75d6ba5bcbdb9d493e3e4b1d2aecb9e6db))
* **release:** fix release version and improve npm script names ([8d9728c](https://github.com/OptimistikSAS/OIBus/commit/8d9728c9019fee091dbdc6e6cc3c1ac823c2d31c))
* **south-opchda:** fix opchda reconnection ([3bd8181](https://github.com/OptimistikSAS/OIBus/commit/3bd8181031a25e25eae73e8234726ef88159832c))
* **south-sql:** fix sqlite param query with better-sqlite3 ([783e11d](https://github.com/OptimistikSAS/OIBus/commit/783e11d30a7fa954e2e60bc098435b100e9a4e6f))
* **sqlite:** add tests and remove async ([fcc924f](https://github.com/OptimistikSAS/OIBus/commit/fcc924ff373837c324ce427f08bdf894941658bb))
* **status:** rework statusData for live update ([e569611](https://github.com/OptimistikSAS/OIBus/commit/e56961198bf2167d8ca612e630fff7045ab8b619))
* **tests:** reorganise tests with tests config ([8ab9d80](https://github.com/OptimistikSAS/OIBus/commit/8ab9d80959aa2f0b65ac5a11f1a032d991d79302))
* **ui:** fix switch buttons to show up properly and make them default checkbox type [#1805](https://github.com/OptimistikSAS/OIBus/issues/1805) ([e004a52](https://github.com/OptimistikSAS/OIBus/commit/e004a52a1b194183a58181d93c42eead21ae3532))
* **win-setup:** fix permissions issues on OIBus windows update ([0a9e2a4](https://github.com/OptimistikSAS/OIBus/commit/0a9e2a4f645b726f8d5ef5edd6cf908be00671d7))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.