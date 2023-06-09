import { SouthConnectorManifest } from '../../../../shared/model/south-connector.model';

const manifest: SouthConnectorManifest = {
  id: 'odbc',
  name: 'ODBC',
  category: 'database',
  description: 'Request SQL databases with an ODBC driver and SQL queries',
  modes: {
    subscription: false,
    lastPoint: false,
    lastFile: false,
    history: true
  },
  settings: [
    {
      key: 'driverPath',
      type: 'OibText',
      label: 'ODBC Driver Path',
      newRow: true,
      validators: [{ key: 'required' }],
      readDisplay: true
    },
    {
      key: 'host',
      type: 'OibText',
      label: 'Host',
      defaultValue: 'localhost',
      newRow: true,
      validators: [{ key: 'required' }],
      readDisplay: true
    },
    {
      key: 'port',
      type: 'OibNumber',
      label: 'Port',
      defaultValue: 1433,
      newRow: false,
      class: 'col-2',
      validators: [{ key: 'required' }, { key: 'min', params: { min: 1 } }, { key: 'max', params: { max: 65535 } }],
      readDisplay: true
    },
    {
      key: 'database',
      type: 'OibText',
      label: 'Database',
      defaultValue: 'db',
      newRow: true,
      validators: [{ key: 'required' }],
      readDisplay: true
    },
    {
      key: 'username',
      type: 'OibText',
      label: 'Username',
      readDisplay: true
    },
    {
      key: 'password',
      type: 'OibSecret',
      label: 'Password',
      newRow: false,
      readDisplay: false
    },
    {
      key: 'connectionTimeout',
      type: 'OibNumber',
      label: 'Connection timeout (ms)',
      defaultValue: 1000,
      newRow: true,
      class: 'col-4',
      validators: [{ key: 'required' }, { key: 'min', params: { min: 100 } }, { key: 'max', params: { max: 30000 } }],
      readDisplay: false
    },
    {
      key: 'trustServerCertificate',
      type: 'OibCheckbox',
      label: 'Accept self-signed certificate',
      defaultValue: false,
      validators: [{ key: 'required' }],
      readDisplay: false
    },
    {
      key: 'compression',
      type: 'OibCheckbox',
      label: 'Compress File',
      defaultValue: false,
      validators: [{ key: 'required' }],
      readDisplay: false,
      newRow: true
    }
  ],
  items: {
    scanMode: {
      acceptSubscription: false,
      subscriptionOnly: false
    },
    settings: [
      {
        key: 'query',
        type: 'OibCodeBlock',
        label: 'Query',
        contentType: 'sql',
        defaultValue: 'SELECT * FROM Table WHERE timestamp > @StartTime',
        class: 'col-12 text-nowrap',
        validators: [{ key: 'required' }],
        readDisplay: true
      },
      {
        key: 'datetimeType',
        newRow: true,
        class: 'col-3',
        type: 'OibSelect',
        options: ['number', 'isostring'],
        defaultValue: 'isostring',
        label: 'Datetime type',
        readDisplay: false
      },
      {
        key: 'timeField',
        class: 'col-3',
        type: 'OibText',
        label: 'Time field',
        defaultValue: 'timestamp',
        readDisplay: true
      },
      {
        key: 'timezone',
        class: 'col-3',
        type: 'OibTimezone',
        label: 'Timezone',
        readDisplay: false
      },
      {
        key: 'requestTimeout',
        type: 'OibNumber',
        class: 'col-3',
        label: 'Request timeout (ms)',
        defaultValue: 1000,
        validators: [{ key: 'required' }, { key: 'min', params: { min: 100 } }, { key: 'max', params: { max: 60000 } }],
        readDisplay: false
      },
      {
        key: 'filename',
        class: 'col-4',
        newRow: true,
        type: 'OibText',
        label: 'Filename',
        defaultValue: 'sql-@CurrentDate.csv',
        readDisplay: true
      },
      {
        key: 'delimiter',
        class: 'col-4',
        type: 'OibSelect',
        options: [',', ';', '|'],
        label: 'Delimiter',
        defaultValue: ',',
        readDisplay: false
      },
      {
        key: 'dateFormat',
        class: 'col-4',
        type: 'OibText',
        label: 'Date format',
        defaultValue: 'yyyy-MM-dd HH:mm:ss.SSS',
        readDisplay: false
      }
    ]
  }
};

export default manifest;