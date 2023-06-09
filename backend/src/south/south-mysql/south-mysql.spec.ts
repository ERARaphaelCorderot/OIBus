import path from 'node:path';

import SouthMySQL from './south-mysql';
import * as utils from '../../service/utils';
import { generateReplacementParameters } from '../../service/utils';
import DatabaseMock from '../../tests/__mocks__/database.mock';
import pino from 'pino';

import PinoLogger from '../../tests/__mocks__/logger.mock';
import EncryptionService from '../../service/encryption.service';
import EncryptionServiceMock from '../../tests/__mocks__/encryption-service.mock';
import RepositoryService from '../../service/repository.service';
import RepositoryServiceMock from '../../tests/__mocks__/repository-service.mock';
import ProxyService from '../../service/proxy.service';
import { OibusItemDTO, SouthConnectorDTO } from '../../../../shared/model/south-connector.model';
import mysql from 'mysql2/promise';

jest.mock('mysql2/promise');
jest.mock('../../service/utils');

const database = new DatabaseMock();
jest.mock(
  '../../service/cache.service',
  () =>
    function () {
      return {
        createCacheHistoryTable: jest.fn(),
        southCacheRepository: {
          database
        },
        updateMetrics: jest.fn()
      };
    }
);

const addValues = jest.fn();
const addFile = jest.fn();

const logger: pino.Logger = new PinoLogger();
const encryptionService: EncryptionService = new EncryptionServiceMock('', '');
const repositoryService: RepositoryService = new RepositoryServiceMock();
const proxyService: ProxyService = new ProxyService(repositoryService.proxyRepository, encryptionService);
const items: Array<OibusItemDTO> = [
  {
    id: 'id1',
    name: 'item1',
    connectorId: 'southId',
    settings: {
      query: 'SELECT * FROM table',
      datetimeType: 'number',
      timeField: 'timestamp',
      timezone: 'Europe/Paris',
      filename: 'sql-@CurrentDate.csv',
      delimiter: ';',
      dateFormat: 'yyyy-MM-dd HH:mm:ss.SSS'
    },
    scanModeId: 'scanModeId1'
  },
  {
    id: 'id2',
    name: 'item2',
    connectorId: 'southId',
    settings: {
      query: 'SELECT * FROM table',
      datetimeType: 'number',
      timeField: 'timestamp',
      timezone: 'Europe/Paris',
      filename: 'sql-@CurrentDate.csv',
      delimiter: ';',
      dateFormat: 'yyyy-MM-dd HH:mm:ss.SSS'
    },
    scanModeId: 'scanModeId1'
  },
  {
    id: 'id3',
    name: 'item3',
    connectorId: 'southId',
    settings: {
      query: 'SELECT * FROM table',
      datetimeType: 'number',
      timeField: 'timestamp',
      timezone: 'Europe/Paris',
      filename: 'sql-@CurrentDate.csv',
      delimiter: ';',
      dateFormat: 'yyyy-MM-dd HH:mm:ss.SSS'
    },
    scanModeId: 'scanModeId2'
  }
];

const nowDateString = '2020-02-02T02:02:02.222Z';
let south: SouthMySQL;

describe('SouthMySQL with authentication', () => {
  const configuration: SouthConnectorDTO = {
    id: 'southId',
    name: 'south',
    type: 'mysql',
    description: 'my test connector',
    enabled: true,
    history: {
      maxInstantPerItem: true,
      maxReadInterval: 3600,
      readDelay: 0
    },
    settings: {
      host: 'localhost',
      port: 3306,
      database: 'db',
      username: 'username',
      password: 'password',
      connectionTimeout: 1000,
      requestTimeout: 1000,
      compression: false
    }
  };
  beforeEach(async () => {
    jest.clearAllMocks();
    jest.useFakeTimers().setSystemTime(new Date(nowDateString));

    (utils.getMostRecentDate as jest.Mock).mockReturnValue(new Date(nowDateString));
    (utils.generateReplacementParameters as jest.Mock).mockReturnValue([new Date(nowDateString), new Date(nowDateString)]);
    (utils.replaceFilenameWithVariable as jest.Mock).mockReturnValue('myFile');

    south = new SouthMySQL(
      configuration,
      items,
      addValues,
      addFile,
      encryptionService,
      proxyService,
      repositoryService,
      logger,
      'baseFolder',
      true
    );
  });

  it('should create temp folder', async () => {
    await south.start();
    expect(utils.createFolder).toHaveBeenCalledWith(path.resolve('baseFolder', 'tmp'));
  });

  it('should test connection with oracle', async () => {
    // TODO
    const result = await south.testConnection({});
    expect(logger.trace).toHaveBeenCalledWith(`Testing connection`);
    expect(result).toBeFalsy();
  });

  it('should properly run historyQuery', async () => {
    const startTime = '2020-01-01T00:00:00.000Z';
    south.getDataFromMySQL = jest
      .fn()
      .mockReturnValueOnce([{ timestamp: '2020-02-01T00:00:00.000Z' }, { timestamp: '2020-03-01T00:00:00.000Z' }])
      .mockReturnValue([]);

    (utils.getMostRecentDate as jest.Mock).mockReturnValue('2020-03-01T00:00:00.000Z');

    await south.historyQuery(items, startTime, nowDateString);
    expect(utils.writeResults).toHaveBeenCalledTimes(1);
    expect(utils.getMostRecentDate).toHaveBeenCalledTimes(1);
    expect(utils.logQuery).toHaveBeenCalledTimes(3);
    expect(utils.logQuery).toHaveBeenCalledWith(items[0].settings.query, startTime, nowDateString, logger);
    expect(south.getDataFromMySQL).toHaveBeenCalledTimes(3);
    expect(south.getDataFromMySQL).toHaveBeenCalledWith(items[0], startTime, nowDateString);
    expect(south.getDataFromMySQL).toHaveBeenCalledWith(items[1], '2020-03-01T00:00:00.000Z', nowDateString);
    expect(south.getDataFromMySQL).toHaveBeenCalledWith(items[2], '2020-03-01T00:00:00.000Z', nowDateString);

    expect(logger.info).toHaveBeenCalledWith(`Found 2 results for item ${items[0].name} in 0 ms`);
    expect(logger.debug).toHaveBeenCalledWith(`No result found for item ${items[1].name}. Request done in 0 ms`);
    expect(logger.debug).toHaveBeenCalledWith(`No result found for item ${items[2].name}. Request done in 0 ms`);
  });

  it('should get data from Oracle', async () => {
    const startTime = '2020-01-01T00:00:00.000Z';
    const endTime = '2022-01-01T00:00:00.000Z';

    (generateReplacementParameters as jest.Mock).mockReturnValue({ startTime, endTime });
    const mysqlConnection = {
      end: jest.fn(),
      execute: jest.fn().mockReturnValue([[{ timestamp: '2020-02-01T00:00:00.000Z' }, { timestamp: '2020-03-01T00:00:00.000Z' }]])
    };
    (mysql.createConnection as jest.Mock).mockReturnValue(mysqlConnection);

    const result = await south.getDataFromMySQL(items[0], startTime, endTime);

    expect(mysql.createConnection).toHaveBeenCalledWith({
      host: configuration.settings.host,
      port: configuration.settings.port,
      user: configuration.settings.username,
      password: configuration.settings.password,
      database: configuration.settings.database,
      connectTimeout: configuration.settings.connectionTimeout,
      timezone: 'Z'
    });
    expect(generateReplacementParameters).toHaveBeenCalledWith(items[0].settings.query, startTime, endTime);
    expect(mysqlConnection.execute).toHaveBeenCalledWith(
      {
        sql: items[0].settings.query.replace(/@StartTime/g, '?').replace(/@EndTime/g, '?'),
        timeout: configuration.settings.requestTimeout
      },
      {
        startTime,
        endTime
      }
    );
    expect(mysqlConnection.end).toHaveBeenCalledTimes(1);

    expect(result).toEqual([{ timestamp: '2020-02-01T00:00:00.000Z' }, { timestamp: '2020-03-01T00:00:00.000Z' }]);
  });

  it('should manage query error', async () => {
    const startTime = '2020-01-01T00:00:00.000Z';
    const endTime = '2022-01-01T00:00:00.000Z';

    (generateReplacementParameters as jest.Mock).mockReturnValue({ startTime, endTime });
    const mysqlConnection = {
      end: jest.fn(),
      execute: jest.fn().mockImplementation(() => {
        throw new Error('query error');
      })
    };
    (mysql.createConnection as jest.Mock).mockReturnValue(mysqlConnection);

    let error;
    try {
      await south.getDataFromMySQL(items[0], startTime, endTime);
    } catch (err) {
      error = err;
    }

    expect(mysqlConnection.execute).toHaveBeenCalledWith(
      {
        sql: items[0].settings.query.replace(/@StartTime/g, '?').replace(/@EndTime/g, '?'),
        timeout: configuration.settings.requestTimeout
      },
      {
        startTime,
        endTime
      }
    );
    expect(error).toEqual(new Error('query error'));
    expect(mysqlConnection.end).toHaveBeenCalledTimes(1);
  });
});

describe('SouthMySQL without authentication', () => {
  const configuration: SouthConnectorDTO = {
    id: 'southId',
    name: 'south',
    type: 'mysql',
    description: 'my test connector',
    enabled: true,
    history: {
      maxInstantPerItem: true,
      maxReadInterval: 3600,
      readDelay: 0
    },
    settings: {
      host: 'localhost',
      port: 3306,
      database: 'db',
      username: '',
      password: '',
      connectionTimeout: 1000,
      requestTimeout: 1000,
      compression: false
    }
  };
  beforeEach(async () => {
    jest.clearAllMocks();
    jest.useFakeTimers().setSystemTime(new Date(nowDateString));

    south = new SouthMySQL(
      configuration,
      items,
      addValues,
      addFile,
      encryptionService,
      proxyService,
      repositoryService,
      logger,
      'baseFolder',
      true
    );
  });

  it('should manage connection error', async () => {
    const startTime = '2020-01-01T00:00:00.000Z';
    const endTime = '2022-01-01T00:00:00.000Z';

    (mysql.createConnection as jest.Mock).mockImplementation(() => {
      throw new Error('connection error');
    });

    let error;
    try {
      await south.getDataFromMySQL(items[0], startTime, endTime);
    } catch (err) {
      error = err;
    }

    expect(mysql.createConnection).toHaveBeenCalledWith({
      host: configuration.settings.host,
      port: configuration.settings.port,
      user: configuration.settings.username,
      password: '',
      database: configuration.settings.database,
      connectTimeout: configuration.settings.connectionTimeout,
      timezone: 'Z'
    });
    expect(error).toEqual(new Error('connection error'));
  });
});