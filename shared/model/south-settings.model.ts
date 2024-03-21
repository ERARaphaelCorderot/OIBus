// DO NOT EDIT THIS BY HAND!
// This file is auto-generated by the script located backend/src/settings-interface.generator.ts
// To update the typescript model run npm run generate-settings-interface on the backend project

import { Timezone } from './types';

const SOUTH_A_D_S_SETTINGS_ENUM_AS_TEXTS = ['Text', 'Integer'] as const
export type SouthADSSettingsEnumAsText = (typeof SOUTH_A_D_S_SETTINGS_ENUM_AS_TEXTS)[number];

const SOUTH_A_D_S_SETTINGS_BOOL_AS_TEXTS = ['Text', 'Integer'] as const
export type SouthADSSettingsBoolAsText = (typeof SOUTH_A_D_S_SETTINGS_BOOL_AS_TEXTS)[number];

const SOUTH_MODBUS_SETTINGS_ADDRESS_OFFSETS = ['Modbus', 'JBus'] as const
export type SouthModbusSettingsAddressOffset = (typeof SOUTH_MODBUS_SETTINGS_ADDRESS_OFFSETS)[number];

const SOUTH_MODBUS_SETTINGS_ENDIANNESSS = ['Big Endian', 'Little Endian'] as const
export type SouthModbusSettingsEndianness = (typeof SOUTH_MODBUS_SETTINGS_ENDIANNESSS)[number];

const SOUTH_MODBUS_ITEM_SETTINGS_MODBUS_TYPES = ['coil', 'discreteInput', 'inputRegister', 'holdingRegister'] as const
export type SouthModbusItemSettingsModbusType = (typeof SOUTH_MODBUS_ITEM_SETTINGS_MODBUS_TYPES)[number];

const SOUTH_MODBUS_ITEM_SETTINGS_DATA_TYPES = ['Bit', 'UInt16', 'Int16', 'UInt32', 'Int32', 'BigUInt64', 'BigInt64', 'Float', 'Double'] as const
export type SouthModbusItemSettingsDataType = (typeof SOUTH_MODBUS_ITEM_SETTINGS_DATA_TYPES)[number];

const SOUTH_M_Q_T_T_SETTINGS_AUTHENTICATION_TYPES = ['none', 'basic', 'cert'] as const
export type SouthMQTTSettingsAuthenticationType = (typeof SOUTH_M_Q_T_T_SETTINGS_AUTHENTICATION_TYPES)[number];

const SOUTH_M_Q_T_T_SETTINGS_QOSS = ['0', '1', '2'] as const
export type SouthMQTTSettingsQos = (typeof SOUTH_M_Q_T_T_SETTINGS_QOSS)[number];

const SOUTH_M_Q_T_T_ITEM_SETTINGS_JSON_PAYLOAD_TIMESTAMP_PAYLOAD_TIMESTAMP_TYPES = ['string', 'iso-string', 'unix-epoch', 'unix-epoch-ms'] as const
export type SouthMQTTItemSettingsJsonPayloadTimestampPayloadTimestampType = (typeof SOUTH_M_Q_T_T_ITEM_SETTINGS_JSON_PAYLOAD_TIMESTAMP_PAYLOAD_TIMESTAMP_TYPES)[number];

const SOUTH_M_Q_T_T_ITEM_SETTINGS_JSON_PAYLOAD_POINT_ID_ORIGINS = ['oibus', 'payload'] as const
export type SouthMQTTItemSettingsJsonPayloadPointIdOrigin = (typeof SOUTH_M_Q_T_T_ITEM_SETTINGS_JSON_PAYLOAD_POINT_ID_ORIGINS)[number];

const SOUTH_M_Q_T_T_ITEM_SETTINGS_JSON_PAYLOAD_TIMESTAMP_ORIGINS = ['oibus', 'payload'] as const
export type SouthMQTTItemSettingsJsonPayloadTimestampOrigin = (typeof SOUTH_M_Q_T_T_ITEM_SETTINGS_JSON_PAYLOAD_TIMESTAMP_ORIGINS)[number];

const SOUTH_M_Q_T_T_ITEM_SETTINGS_VALUE_TYPES = ['number', 'string', 'json'] as const
export type SouthMQTTItemSettingsValueType = (typeof SOUTH_M_Q_T_T_ITEM_SETTINGS_VALUE_TYPES)[number];

const SOUTH_M_S_S_Q_L_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES = ['string', 'Date', 'DateTime', 'DateTime2', 'DateTimeOffset', 'SmallDateTime', 'iso-string', 'unix-epoch', 'unix-epoch-ms'] as const
export type SouthMSSQLItemSettingsDateTimeFieldsType = (typeof SOUTH_M_S_S_Q_L_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES)[number];

const SOUTH_M_S_S_Q_L_ITEM_SETTINGS_SERIALIZATION_TYPES = ['csv'] as const
export type SouthMSSQLItemSettingsSerializationType = (typeof SOUTH_M_S_S_Q_L_ITEM_SETTINGS_SERIALIZATION_TYPES)[number];

const SOUTH_M_S_S_Q_L_ITEM_SETTINGS_SERIALIZATION_DELIMITERS = ['DOT', 'SEMI_COLON', 'COLON', 'COMMA', 'NON_BREAKING_SPACE', 'SLASH', 'TAB', 'PIPE'] as const
export type SouthMSSQLItemSettingsSerializationDelimiter = (typeof SOUTH_M_S_S_Q_L_ITEM_SETTINGS_SERIALIZATION_DELIMITERS)[number];

const SOUTH_MY_S_Q_L_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES = ['string', 'iso-string', 'unix-epoch', 'unix-epoch-ms'] as const
export type SouthMySQLItemSettingsDateTimeFieldsType = (typeof SOUTH_MY_S_Q_L_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES)[number];

const SOUTH_MY_S_Q_L_ITEM_SETTINGS_SERIALIZATION_TYPES = ['csv'] as const
export type SouthMySQLItemSettingsSerializationType = (typeof SOUTH_MY_S_Q_L_ITEM_SETTINGS_SERIALIZATION_TYPES)[number];

const SOUTH_MY_S_Q_L_ITEM_SETTINGS_SERIALIZATION_DELIMITERS = ['DOT', 'SEMI_COLON', 'COLON', 'COMMA', 'NON_BREAKING_SPACE', 'SLASH', 'TAB', 'PIPE'] as const
export type SouthMySQLItemSettingsSerializationDelimiter = (typeof SOUTH_MY_S_Q_L_ITEM_SETTINGS_SERIALIZATION_DELIMITERS)[number];

const SOUTH_O_D_B_C_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES = ['string', 'iso-string', 'unix-epoch', 'unix-epoch-ms'] as const
export type SouthODBCItemSettingsDateTimeFieldsType = (typeof SOUTH_O_D_B_C_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES)[number];

const SOUTH_O_D_B_C_ITEM_SETTINGS_SERIALIZATION_TYPES = ['csv'] as const
export type SouthODBCItemSettingsSerializationType = (typeof SOUTH_O_D_B_C_ITEM_SETTINGS_SERIALIZATION_TYPES)[number];

const SOUTH_O_D_B_C_ITEM_SETTINGS_SERIALIZATION_DELIMITERS = ['DOT', 'SEMI_COLON', 'COLON', 'COMMA', 'NON_BREAKING_SPACE', 'SLASH', 'TAB', 'PIPE'] as const
export type SouthODBCItemSettingsSerializationDelimiter = (typeof SOUTH_O_D_B_C_ITEM_SETTINGS_SERIALIZATION_DELIMITERS)[number];

const SOUTH_O_I_ANALYTICS_SETTINGS_SPECIFIC_SETTINGS_AUTHENTICATIONS = ['basic', 'aad-client-secret', 'aad-certificate'] as const
export type SouthOIAnalyticsSettingsSpecificSettingsAuthentication = (typeof SOUTH_O_I_ANALYTICS_SETTINGS_SPECIFIC_SETTINGS_AUTHENTICATIONS)[number];

const SOUTH_O_I_ANALYTICS_ITEM_SETTINGS_SERIALIZATION_TYPES = ['csv'] as const
export type SouthOIAnalyticsItemSettingsSerializationType = (typeof SOUTH_O_I_ANALYTICS_ITEM_SETTINGS_SERIALIZATION_TYPES)[number];

const SOUTH_O_I_ANALYTICS_ITEM_SETTINGS_SERIALIZATION_DELIMITERS = ['DOT', 'SEMI_COLON', 'COLON', 'COMMA', 'NON_BREAKING_SPACE', 'SLASH', 'TAB', 'PIPE'] as const
export type SouthOIAnalyticsItemSettingsSerializationDelimiter = (typeof SOUTH_O_I_ANALYTICS_ITEM_SETTINGS_SERIALIZATION_DELIMITERS)[number];

const SOUTH_O_L_E_D_B_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES = ['string', 'iso-string', 'unix-epoch', 'unix-epoch-ms'] as const
export type SouthOLEDBItemSettingsDateTimeFieldsType = (typeof SOUTH_O_L_E_D_B_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES)[number];

const SOUTH_O_L_E_D_B_ITEM_SETTINGS_SERIALIZATION_TYPES = ['csv'] as const
export type SouthOLEDBItemSettingsSerializationType = (typeof SOUTH_O_L_E_D_B_ITEM_SETTINGS_SERIALIZATION_TYPES)[number];

const SOUTH_O_L_E_D_B_ITEM_SETTINGS_SERIALIZATION_DELIMITERS = ['DOT', 'SEMI_COLON', 'COLON', 'COMMA', 'NON_BREAKING_SPACE', 'SLASH', 'TAB', 'PIPE'] as const
export type SouthOLEDBItemSettingsSerializationDelimiter = (typeof SOUTH_O_L_E_D_B_ITEM_SETTINGS_SERIALIZATION_DELIMITERS)[number];

const SOUTH_O_P_C_H_D_A_ITEM_SETTINGS_AGGREGATES = ['raw', 'average', 'minimum', 'maximum'] as const
export type SouthOPCHDAItemSettingsAggregate = (typeof SOUTH_O_P_C_H_D_A_ITEM_SETTINGS_AGGREGATES)[number];

const SOUTH_O_P_C_H_D_A_ITEM_SETTINGS_RESAMPLINGS = ['none', 'second', '10Seconds', '30Seconds', 'minute', 'hour', 'day'] as const
export type SouthOPCHDAItemSettingsResampling = (typeof SOUTH_O_P_C_H_D_A_ITEM_SETTINGS_RESAMPLINGS)[number];

const SOUTH_O_P_C_U_A_SETTINGS_AUTHENTICATION_TYPES = ['none', 'basic', 'cert'] as const
export type SouthOPCUASettingsAuthenticationType = (typeof SOUTH_O_P_C_U_A_SETTINGS_AUTHENTICATION_TYPES)[number];

const SOUTH_O_P_C_U_A_SETTINGS_SECURITY_MODES = ['None', 'Sign', 'SignAndEncrypt'] as const
export type SouthOPCUASettingsSecurityMode = (typeof SOUTH_O_P_C_U_A_SETTINGS_SECURITY_MODES)[number];

const SOUTH_O_P_C_U_A_SETTINGS_SECURITY_POLICYS = ['None', 'Basic128', 'Basic192', 'Basic256', 'Basic128Rsa15', 'Basic192Rsa15', 'Basic256Rsa15', 'Basic256Sha256', 'Aes128_Sha256_RsaOaep', 'PubSub_Aes128_CTR', 'PubSub_Aes256_CTR'] as const
export type SouthOPCUASettingsSecurityPolicy = (typeof SOUTH_O_P_C_U_A_SETTINGS_SECURITY_POLICYS)[number];

const SOUTH_O_P_C_U_A_ITEM_SETTINGS_HA_MODE_AGGREGATES = ['raw', 'average', 'minimum', 'maximum', 'count'] as const
export type SouthOPCUAItemSettingsHaModeAggregate = (typeof SOUTH_O_P_C_U_A_ITEM_SETTINGS_HA_MODE_AGGREGATES)[number];

const SOUTH_O_P_C_U_A_ITEM_SETTINGS_HA_MODE_RESAMPLINGS = ['none', 'second', '10Seconds', '30Seconds', 'minute', 'hour', 'day'] as const
export type SouthOPCUAItemSettingsHaModeResampling = (typeof SOUTH_O_P_C_U_A_ITEM_SETTINGS_HA_MODE_RESAMPLINGS)[number];

const SOUTH_O_P_C_U_A_ITEM_SETTINGS_MODES = ['HA', 'DA'] as const
export type SouthOPCUAItemSettingsMode = (typeof SOUTH_O_P_C_U_A_ITEM_SETTINGS_MODES)[number];

const SOUTH_ORACLE_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES = ['string', 'iso-string', 'unix-epoch', 'unix-epoch-ms'] as const
export type SouthOracleItemSettingsDateTimeFieldsType = (typeof SOUTH_ORACLE_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES)[number];

const SOUTH_ORACLE_ITEM_SETTINGS_SERIALIZATION_TYPES = ['csv'] as const
export type SouthOracleItemSettingsSerializationType = (typeof SOUTH_ORACLE_ITEM_SETTINGS_SERIALIZATION_TYPES)[number];

const SOUTH_ORACLE_ITEM_SETTINGS_SERIALIZATION_DELIMITERS = ['DOT', 'SEMI_COLON', 'COLON', 'COMMA', 'NON_BREAKING_SPACE', 'SLASH', 'TAB', 'PIPE'] as const
export type SouthOracleItemSettingsSerializationDelimiter = (typeof SOUTH_ORACLE_ITEM_SETTINGS_SERIALIZATION_DELIMITERS)[number];

const SOUTH_POSTGRE_S_Q_L_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES = ['string', 'iso-string', 'unix-epoch', 'unix-epoch-ms', 'timestamp', 'timestamptz'] as const
export type SouthPostgreSQLItemSettingsDateTimeFieldsType = (typeof SOUTH_POSTGRE_S_Q_L_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES)[number];

const SOUTH_POSTGRE_S_Q_L_ITEM_SETTINGS_SERIALIZATION_TYPES = ['csv'] as const
export type SouthPostgreSQLItemSettingsSerializationType = (typeof SOUTH_POSTGRE_S_Q_L_ITEM_SETTINGS_SERIALIZATION_TYPES)[number];

const SOUTH_POSTGRE_S_Q_L_ITEM_SETTINGS_SERIALIZATION_DELIMITERS = ['DOT', 'SEMI_COLON', 'COLON', 'COMMA', 'NON_BREAKING_SPACE', 'SLASH', 'TAB', 'PIPE'] as const
export type SouthPostgreSQLItemSettingsSerializationDelimiter = (typeof SOUTH_POSTGRE_S_Q_L_ITEM_SETTINGS_SERIALIZATION_DELIMITERS)[number];

const SOUTH_SLIMS_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES = ['string', 'iso-string', 'unix-epoch', 'unix-epoch-ms'] as const
export type SouthSlimsItemSettingsDateTimeFieldsType = (typeof SOUTH_SLIMS_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES)[number];

const SOUTH_SLIMS_ITEM_SETTINGS_SERIALIZATION_TYPES = ['csv'] as const
export type SouthSlimsItemSettingsSerializationType = (typeof SOUTH_SLIMS_ITEM_SETTINGS_SERIALIZATION_TYPES)[number];

const SOUTH_SLIMS_ITEM_SETTINGS_SERIALIZATION_DELIMITERS = ['DOT', 'SEMI_COLON', 'COLON', 'COMMA', 'NON_BREAKING_SPACE', 'SLASH', 'TAB', 'PIPE'] as const
export type SouthSlimsItemSettingsSerializationDelimiter = (typeof SOUTH_SLIMS_ITEM_SETTINGS_SERIALIZATION_DELIMITERS)[number];

const SOUTH_S_Q_LITE_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES = ['string', 'iso-string', 'unix-epoch', 'unix-epoch-ms'] as const
export type SouthSQLiteItemSettingsDateTimeFieldsType = (typeof SOUTH_S_Q_LITE_ITEM_SETTINGS_DATE_TIME_FIELDS_TYPES)[number];

const SOUTH_S_Q_LITE_ITEM_SETTINGS_SERIALIZATION_TYPES = ['csv'] as const
export type SouthSQLiteItemSettingsSerializationType = (typeof SOUTH_S_Q_LITE_ITEM_SETTINGS_SERIALIZATION_TYPES)[number];

const SOUTH_S_Q_LITE_ITEM_SETTINGS_SERIALIZATION_DELIMITERS = ['DOT', 'SEMI_COLON', 'COLON', 'COMMA', 'NON_BREAKING_SPACE', 'SLASH', 'TAB', 'PIPE'] as const
export type SouthSQLiteItemSettingsSerializationDelimiter = (typeof SOUTH_S_Q_LITE_ITEM_SETTINGS_SERIALIZATION_DELIMITERS)[number];

export interface SouthADSSettingsStructureFiltering {
  name: string;
  fields: string;
}

export interface SouthMQTTSettingsAuthentication {
  type: SouthMQTTSettingsAuthenticationType;
  username?: string;
  password?: string | null;
  certFilePath?: string;
  keyFilePath?: string | null;
  caFilePath?: string | null;
}

export interface SouthOIAnalyticsSettingsSpecificSettings {
  host: string;
  acceptUnauthorized: boolean;
  authentication: SouthOIAnalyticsSettingsSpecificSettingsAuthentication;
  accessKey?: string;
  secretKey?: string | null;
  tenantId?: string | null;
  clientId?: string;
  clientSecret?: string | null;
  certificateId?: string | null;
  scope?: string | null;
  useProxy: boolean;
  proxyUrl?: string;
  proxyUsername?: string | null;
  proxyPassword?: string | null;
}

export interface SouthOPCUASettingsAuthentication {
  type: SouthOPCUASettingsAuthenticationType;
  username?: string;
  password?: string | null;
  certFilePath?: string;
  keyFilePath?: string | null;
}

interface BaseSouthSettings {}

export interface SouthADSSettings extends BaseSouthSettings {
  netId: string;
  port: number;
  routerAddress: string | null;
  routerTcpPort: number | null;
  clientAmsNetId: string | null;
  clientAdsPort: number | null;
  retryInterval: number;
  plcName: string | null;
  enumAsText: SouthADSSettingsEnumAsText;
  boolAsText: SouthADSSettingsBoolAsText;
  structureFiltering: Array<SouthADSSettingsStructureFiltering> | null;
}

export interface SouthFolderScannerSettings extends BaseSouthSettings {
  inputFolder: string;
  compression: boolean;
}

export interface SouthModbusSettings extends BaseSouthSettings {
  host: string;
  port: number;
  retryInterval: number;
  slaveId: number;
  addressOffset: SouthModbusSettingsAddressOffset;
  endianness: SouthModbusSettingsEndianness;
  swapBytesInWords: boolean;
  swapWordsInDWords: boolean;
}

export interface SouthMQTTSettings extends BaseSouthSettings {
  url: string;
  qos: SouthMQTTSettingsQos;
  persistent?: boolean;
  authentication: SouthMQTTSettingsAuthentication;
  rejectUnauthorized: boolean;
  reconnectPeriod: number;
  connectTimeout: number;
}

export interface SouthMSSQLSettings extends BaseSouthSettings {
  host: string;
  port: number;
  connectionTimeout: number;
  database: string;
  username: string | null;
  password: string | null;
  domain: string | null;
  encryption: boolean;
  trustServerCertificate: boolean;
  requestTimeout: number;
}

export interface SouthMySQLSettings extends BaseSouthSettings {
  host: string;
  port: number;
  connectionTimeout: number;
  database: string;
  username: string | null;
  password: string | null;
}

export interface SouthODBCSettings extends BaseSouthSettings {
  remoteAgent: boolean;
  agentUrl?: string;
  connectionTimeout: number;
  retryInterval: number;
  connectionString: string;
  password: string | null;
  requestTimeout?: number;
}

export interface SouthOIAnalyticsSettings extends BaseSouthSettings {
  useOiaModule: boolean;
  timeout: number;
  specificSettings?: SouthOIAnalyticsSettingsSpecificSettings | null;
}

export interface SouthOLEDBSettings extends BaseSouthSettings {
  agentUrl: string;
  connectionTimeout: number;
  retryInterval: number;
  connectionString: string;
  requestTimeout: number;
}

export interface SouthOPCHDASettings extends BaseSouthSettings {
  agentUrl: string;
  retryInterval: number;
  host: string;
  serverName: string;
}

export interface SouthOPCUASettings extends BaseSouthSettings {
  url: string;
  keepSessionAlive: boolean;
  retryInterval: number;
  securityMode: SouthOPCUASettingsSecurityMode;
  securityPolicy?: SouthOPCUASettingsSecurityPolicy | null;
  authentication: SouthOPCUASettingsAuthentication;
}

export interface SouthOracleSettings extends BaseSouthSettings {
  host: string;
  port: number;
  connectionTimeout: number;
  database: string;
  username: string | null;
  password: string | null;
}

export interface SouthPostgreSQLSettings extends BaseSouthSettings {
  host: string;
  port: number;
  connectionTimeout: number;
  database: string;
  username: string | null;
  password: string | null;
  requestTimeout: number;
}

export interface SouthSlimsSettings extends BaseSouthSettings {
  url: string;
  port: number;
  acceptUnauthorized: boolean;
  timeout: number;
  username: string;
  password: string | null;
  useProxy: boolean;
  proxyUrl?: string;
  proxyUsername?: string | null;
  proxyPassword?: string | null;
}

export interface SouthSQLiteSettings extends BaseSouthSettings {
  databasePath: string;
}

export type SouthSettings =
  | SouthADSSettings
  | SouthFolderScannerSettings
  | SouthModbusSettings
  | SouthMQTTSettings
  | SouthMSSQLSettings
  | SouthMySQLSettings
  | SouthODBCSettings
  | SouthOIAnalyticsSettings
  | SouthOLEDBSettings
  | SouthOPCHDASettings
  | SouthOPCUASettings
  | SouthOracleSettings
  | SouthPostgreSQLSettings
  | SouthSlimsSettings
  | SouthSQLiteSettings

export interface SouthMQTTItemSettingsJsonPayloadTimestampPayload {
  timestampPath: string;
  timestampType: SouthMQTTItemSettingsJsonPayloadTimestampPayloadTimestampType;
  timezone?: Timezone;
  timestampFormat?: string;
}

export interface SouthMQTTItemSettingsJsonPayloadOtherFields {
  name: string;
  path: string;
}

export interface SouthMQTTItemSettingsJsonPayload {
  useArray: boolean;
  dataArrayPath?: string | null;
  pointIdOrigin: SouthMQTTItemSettingsJsonPayloadPointIdOrigin;
  timestampOrigin: SouthMQTTItemSettingsJsonPayloadTimestampOrigin;
  valuePath: string;
  pointIdPath?: string | null;
  timestampPayload?: SouthMQTTItemSettingsJsonPayloadTimestampPayload | null;
  otherFields: Array<SouthMQTTItemSettingsJsonPayloadOtherFields> | null;
}

export interface SouthMSSQLItemSettingsDateTimeFields {
  fieldName: string;
  useAsReference: boolean;
  type: SouthMSSQLItemSettingsDateTimeFieldsType;
  timezone?: Timezone;
  format?: string;
  locale?: string;
}

export interface SouthMSSQLItemSettingsSerialization {
  type: SouthMSSQLItemSettingsSerializationType;
  filename: string;
  delimiter: SouthMSSQLItemSettingsSerializationDelimiter;
  compression: boolean;
  outputTimestampFormat: string;
  outputTimezone: Timezone;
}

export interface SouthMySQLItemSettingsDateTimeFields {
  fieldName: string;
  useAsReference: boolean;
  type: SouthMySQLItemSettingsDateTimeFieldsType;
  timezone?: Timezone;
  format?: string;
  locale?: string;
}

export interface SouthMySQLItemSettingsSerialization {
  type: SouthMySQLItemSettingsSerializationType;
  filename: string;
  delimiter: SouthMySQLItemSettingsSerializationDelimiter;
  compression: boolean;
  outputTimestampFormat: string;
  outputTimezone: Timezone;
}

export interface SouthODBCItemSettingsDateTimeFields {
  fieldName: string;
  useAsReference: boolean;
  type: SouthODBCItemSettingsDateTimeFieldsType;
  timezone?: Timezone;
  format?: string;
  locale?: string;
}

export interface SouthODBCItemSettingsSerialization {
  type: SouthODBCItemSettingsSerializationType;
  filename: string;
  delimiter: SouthODBCItemSettingsSerializationDelimiter;
  compression: boolean;
  outputTimestampFormat: string;
  outputTimezone: Timezone;
}

export interface SouthOIAnalyticsItemSettingsQueryParams {
  key: string;
  value: string;
}

export interface SouthOIAnalyticsItemSettingsSerialization {
  type: SouthOIAnalyticsItemSettingsSerializationType;
  filename: string;
  delimiter: SouthOIAnalyticsItemSettingsSerializationDelimiter;
  compression: boolean;
  outputTimestampFormat: string;
  outputTimezone: Timezone;
}

export interface SouthOLEDBItemSettingsDateTimeFields {
  fieldName: string;
  useAsReference: boolean;
  type: SouthOLEDBItemSettingsDateTimeFieldsType;
  timezone?: Timezone;
  format?: string;
  locale?: string;
}

export interface SouthOLEDBItemSettingsSerialization {
  type: SouthOLEDBItemSettingsSerializationType;
  filename: string;
  delimiter: SouthOLEDBItemSettingsSerializationDelimiter;
  compression: boolean;
  outputTimestampFormat: string;
  outputTimezone: Timezone;
}

export interface SouthOPCUAItemSettingsHaMode {
  aggregate: SouthOPCUAItemSettingsHaModeAggregate;
  resampling?: SouthOPCUAItemSettingsHaModeResampling;
}

export interface SouthOracleItemSettingsDateTimeFields {
  fieldName: string;
  useAsReference: boolean;
  type: SouthOracleItemSettingsDateTimeFieldsType;
  timezone?: Timezone;
  format?: string;
  locale?: string;
}

export interface SouthOracleItemSettingsSerialization {
  type: SouthOracleItemSettingsSerializationType;
  filename: string;
  delimiter: SouthOracleItemSettingsSerializationDelimiter;
  compression: boolean;
  outputTimestampFormat: string;
  outputTimezone: Timezone;
}

export interface SouthPostgreSQLItemSettingsDateTimeFields {
  fieldName: string;
  useAsReference: boolean;
  type: SouthPostgreSQLItemSettingsDateTimeFieldsType;
  timezone?: Timezone;
  format?: string;
  locale?: string;
}

export interface SouthPostgreSQLItemSettingsSerialization {
  type: SouthPostgreSQLItemSettingsSerializationType;
  filename: string;
  delimiter: SouthPostgreSQLItemSettingsSerializationDelimiter;
  compression: boolean;
  outputTimestampFormat: string;
  outputTimezone: Timezone;
}

export interface SouthSlimsItemSettingsQueryParams {
  key: string;
  value: string;
}

export interface SouthSlimsItemSettingsDateTimeFields {
  fieldName: string;
  useAsReference: boolean;
  type: SouthSlimsItemSettingsDateTimeFieldsType;
  timezone?: Timezone;
  format?: string;
  locale?: string;
}

export interface SouthSlimsItemSettingsSerialization {
  type: SouthSlimsItemSettingsSerializationType;
  filename: string;
  delimiter: SouthSlimsItemSettingsSerializationDelimiter;
  compression: boolean;
  outputTimestampFormat: string;
  outputTimezone: Timezone;
}

export interface SouthSQLiteItemSettingsDateTimeFields {
  fieldName: string;
  useAsReference: boolean;
  type: SouthSQLiteItemSettingsDateTimeFieldsType;
  timezone?: Timezone;
  format?: string;
  locale?: string;
}

export interface SouthSQLiteItemSettingsSerialization {
  type: SouthSQLiteItemSettingsSerializationType;
  filename: string;
  delimiter: SouthSQLiteItemSettingsSerializationDelimiter;
  compression: boolean;
  outputTimestampFormat: string;
  outputTimezone: Timezone;
}

interface BaseSouthItemSettings {}

export interface SouthADSItemSettings extends BaseSouthItemSettings {
  address: string;
}

export interface SouthFolderScannerItemSettings extends BaseSouthItemSettings {
  regex: string;
  minAge: number;
  preserveFiles: boolean;
  ignoreModifiedDate?: boolean;
}

export interface SouthModbusItemSettings extends BaseSouthItemSettings {
  address: string;
  modbusType: SouthModbusItemSettingsModbusType;
  dataType?: SouthModbusItemSettingsDataType;
  bitIndex?: number;
  multiplierCoefficient?: number;
}

export interface SouthMQTTItemSettings extends BaseSouthItemSettings {
  topic: string;
  valueType: SouthMQTTItemSettingsValueType;
  jsonPayload?: SouthMQTTItemSettingsJsonPayload | null;
}

export interface SouthMSSQLItemSettings extends BaseSouthItemSettings {
  query: string;
  dateTimeFields: Array<SouthMSSQLItemSettingsDateTimeFields> | null;
  serialization: SouthMSSQLItemSettingsSerialization;
}

export interface SouthMySQLItemSettings extends BaseSouthItemSettings {
  query: string;
  requestTimeout: number;
  dateTimeFields: Array<SouthMySQLItemSettingsDateTimeFields> | null;
  serialization: SouthMySQLItemSettingsSerialization;
}

export interface SouthODBCItemSettings extends BaseSouthItemSettings {
  query: string;
  dateTimeFields: Array<SouthODBCItemSettingsDateTimeFields> | null;
  serialization: SouthODBCItemSettingsSerialization;
}

export interface SouthOIAnalyticsItemSettings extends BaseSouthItemSettings {
  endpoint: string;
  queryParams: Array<SouthOIAnalyticsItemSettingsQueryParams> | null;
  serialization: SouthOIAnalyticsItemSettingsSerialization;
}

export interface SouthOLEDBItemSettings extends BaseSouthItemSettings {
  query: string;
  dateTimeFields: Array<SouthOLEDBItemSettingsDateTimeFields> | null;
  serialization: SouthOLEDBItemSettingsSerialization;
}

export interface SouthOPCHDAItemSettings extends BaseSouthItemSettings {
  nodeId: string;
  aggregate: SouthOPCHDAItemSettingsAggregate;
  resampling?: SouthOPCHDAItemSettingsResampling;
}

export interface SouthOPCUAItemSettings extends BaseSouthItemSettings {
  nodeId: string;
  mode: SouthOPCUAItemSettingsMode;
  haMode?: SouthOPCUAItemSettingsHaMode | null;
}

export interface SouthOracleItemSettings extends BaseSouthItemSettings {
  query: string;
  requestTimeout: number;
  dateTimeFields: Array<SouthOracleItemSettingsDateTimeFields> | null;
  serialization: SouthOracleItemSettingsSerialization;
}

export interface SouthPostgreSQLItemSettings extends BaseSouthItemSettings {
  query: string;
  dateTimeFields: Array<SouthPostgreSQLItemSettingsDateTimeFields> | null;
  serialization: SouthPostgreSQLItemSettingsSerialization;
}

export interface SouthSlimsItemSettings extends BaseSouthItemSettings {
  endpoint: string;
  body: string | null;
  queryParams: Array<SouthSlimsItemSettingsQueryParams> | null;
  dateTimeFields: Array<SouthSlimsItemSettingsDateTimeFields> | null;
  serialization: SouthSlimsItemSettingsSerialization;
}

export interface SouthSQLiteItemSettings extends BaseSouthItemSettings {
  query: string;
  dateTimeFields: Array<SouthSQLiteItemSettingsDateTimeFields> | null;
  serialization: SouthSQLiteItemSettingsSerialization;
}

export type SouthItemSettings =
  | SouthADSItemSettings
  | SouthFolderScannerItemSettings
  | SouthModbusItemSettings
  | SouthMQTTItemSettings
  | SouthMSSQLItemSettings
  | SouthMySQLItemSettings
  | SouthODBCItemSettings
  | SouthOIAnalyticsItemSettings
  | SouthOLEDBItemSettings
  | SouthOPCHDAItemSettings
  | SouthOPCUAItemSettings
  | SouthOracleItemSettings
  | SouthPostgreSQLItemSettings
  | SouthSlimsItemSettings
  | SouthSQLiteItemSettings