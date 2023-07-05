import PinoLogger from '../tests/__mocks__/logger.mock';
import SouthServiceMock from '../tests/__mocks__/south-service.mock';
import NorthServiceMock from '../tests/__mocks__/north-service.mock';

import { SouthConnectorItemDTO, SouthConnectorCommandDTO, SouthConnectorDTO } from '../../../shared/model/south-connector.model';
import { NorthConnectorDTO } from '../../../shared/model/north-connector.model';

import SouthService from '../service/south.service';
import NorthService from '../service/north.service';

import pino from 'pino';
import EncryptionService from '../service/encryption.service';
import EncryptionServiceMock from '../tests/__mocks__/encryption-service.mock';
import RepositoryService from '../service/repository.service';
import RepositoryServiceMock from '../tests/__mocks__/repository-service.mock';
import ProxyService from '../service/proxy.service';
import OIBusEngine from './oibus-engine';
import SouthMQTT from '../south/south-mqtt/south-mqtt';

jest.mock('../south/south-mqtt/south-mqtt');
jest.mock('../service/south.service');
jest.mock('../service/north.service');
jest.mock('../service/repository.service');
jest.mock('../service/encryption.service');
jest.mock('../service/proxy.service');
jest.mock('../service/utils');

const logger: pino.Logger = new PinoLogger();
const anotherLogger: pino.Logger = new PinoLogger();

const southService: SouthService = new SouthServiceMock();
const northService: NorthService = new NorthServiceMock();
const encryptionService: EncryptionService = new EncryptionServiceMock('', '');
const repositoryService: RepositoryService = new RepositoryServiceMock();
const proxyService: ProxyService = new ProxyService(repositoryService.proxyRepository, encryptionService);

const nowDateString = '2020-02-02T02:02:02.222Z';

let engine: OIBusEngine;

const items: Array<SouthConnectorItemDTO> = [
  {
    id: 'id1',
    name: 'item1',
    connectorId: 'southId',
    settings: {},
    scanModeId: 'scanModeId1'
  },
  {
    id: 'id2',
    name: 'item2',
    connectorId: 'southId',
    settings: {},
    scanModeId: 'scanModeId2'
  }
];

describe('OIBusEngine', () => {
  const northConnectors: Array<NorthConnectorDTO> = [
    {
      id: 'id1',
      name: 'myNorthConnector1',
      description: 'a test north connector',
      enabled: true,
      type: 'oianalytics'
    } as NorthConnectorDTO,
    {
      id: 'id2',
      name: 'myNorthConnector2',
      description: 'a test north connector',
      enabled: false,
      type: 'oiconnect'
    } as NorthConnectorDTO
  ];
  const southConnectors: Array<SouthConnectorDTO> = [
    {
      id: 'id1',
      type: 'sqlite',
      name: 'South Connector1 ',
      description: 'My first South connector description',
      enabled: true,
      history: {
        maxInstantPerItem: true,
        maxReadInterval: 3600,
        readDelay: 0
      },
      settings: {}
    },
    {
      id: 'id2',
      type: 'opcua-ha',
      name: 'South Connector 2',
      description: 'My second South connector description',
      enabled: false,
      history: {
        maxInstantPerItem: true,
        maxReadInterval: 3600,
        readDelay: 0
      },
      settings: {}
    }
  ];
  const createdSouth = {
    start: jest.fn(),
    stop: jest.fn(),
    connect: jest.fn(),
    historyQueryHandler: jest.fn(),
    isEnabled: jest.fn(),
    addItem: jest.fn(),
    deleteItem: jest.fn(),
    deleteAllItems: jest.fn(),
    updateItem: jest.fn(),
    setLogger: jest.fn(),
    getMetricsDataStream: jest.fn(),
    resetMetrics: jest.fn()
  };
  const createdNorth = {
    start: jest.fn(),
    stop: jest.fn(),
    connect: jest.fn(),
    isEnabled: jest.fn(),
    cacheValues: jest.fn(),
    cacheFile: jest.fn(),
    isSubscribed: jest.fn(),
    setLogger: jest.fn(),
    getErrorFiles: jest.fn(),
    removeErrorFiles: jest.fn(),
    retryErrorFiles: jest.fn(),
    removeAllErrorFiles: jest.fn(),
    retryAllErrorFiles: jest.fn(),
    getMetricsDataStream: jest.fn(),
    resetMetrics: jest.fn()
  };

  beforeEach(async () => {
    jest.resetAllMocks();
    jest.useFakeTimers().setSystemTime(new Date(nowDateString));

    (southService.createSouth as jest.Mock).mockReturnValue(createdSouth);
    (northService.createNorth as jest.Mock).mockReturnValue(createdNorth);

    engine = new OIBusEngine(encryptionService, proxyService, northService, southService, logger);
  });

  it('it should start', async () => {
    (northService.getNorthList as jest.Mock).mockReturnValue(northConnectors);
    (southService.getSouthList as jest.Mock).mockReturnValue(southConnectors);

    engine.startNorth = jest
      .fn()
      .mockImplementationOnce(() => null)
      .mockImplementationOnce(() => {
        throw new Error('error');
      });
    engine.startSouth = jest
      .fn()
      .mockImplementationOnce(() => null)
      .mockImplementationOnce(() => {
        throw new Error('error');
      });
    await engine.start();
    expect(logger.info).toHaveBeenCalledWith(`OIBus engine started`);
    expect(logger.error).toHaveBeenCalledTimes(2);
    expect(logger.error).toHaveBeenCalledWith(
      `Error while creating North connector "${northConnectors[1].name}" of type "${northConnectors[1].type}" (${
        northConnectors[1].id
      }): ${new Error('error')}`
    );
    expect(logger.error).toHaveBeenCalledWith(
      `Error while creating South connector "${southConnectors[1].name}" of type "${southConnectors[1].type}" (${
        southConnectors[1].id
      }): ${new Error('error')}`
    );
  });

  it('it should start connectors and stop all', async () => {
    createdSouth.start.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        reject('error');
      });
    });

    createdNorth.start.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        reject('error');
      });
    });

    createdNorth.isEnabled.mockReturnValueOnce(true).mockReturnValueOnce(false);
    createdNorth.isSubscribed.mockReturnValue(true);
    createdSouth.isEnabled.mockReturnValueOnce(true).mockReturnValueOnce(false);
    (southService.getSouthItems as jest.Mock).mockReturnValue(items);

    await engine.startSouth(southConnectors[0].id, southConnectors[0]);
    expect(southService.getSouthItems).toHaveBeenCalledWith(southConnectors[0].id);
    expect(southService.createSouth).toHaveBeenCalledTimes(1);
    expect(createdSouth.isEnabled).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(
      `Error while starting South connector "${southConnectors[0].name}" of type "${southConnectors[0].type}" (${southConnectors[0].id}): error`
    );

    await engine.startNorth(northConnectors[0].id, northConnectors[0]);
    expect(northService.createNorth).toHaveBeenCalledTimes(1);
    expect(createdNorth.isEnabled).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(
      `Error while starting North connector "${northConnectors[0].name}" of type "${northConnectors[0].type}" (${northConnectors[0].id}): error`
    );

    await engine.startSouth(southConnectors[1].id, southConnectors[1]);
    expect(logger.trace).toHaveBeenCalledWith(`South connector ${southConnectors[1].name} not enabled`);
    await engine.startNorth(northConnectors[1].id, northConnectors[1]);
    expect(logger.trace).toHaveBeenCalledWith(`North connector "${northConnectors[1].name}" not enabled`);

    createdNorth.isEnabled.mockReturnValueOnce(true).mockReturnValueOnce(false);
    await engine.addValues('southId', ['', '']);
    expect(createdNorth.cacheValues).toHaveBeenCalledTimes(1);
    expect(createdNorth.cacheValues).toHaveBeenCalledWith(['', '']);

    createdNorth.isEnabled.mockReturnValueOnce(true).mockReturnValueOnce(false);
    await engine.addFile('southId', 'filePath');
    expect(createdNorth.cacheFile).toHaveBeenCalledTimes(1);
    expect(createdNorth.cacheFile).toHaveBeenCalledWith('filePath');

    await engine.getErrorFiles('northId', '2020-02-02T02:02:02.222Z', '2022-02-02T02:02:02.222Z', '');
    expect(createdNorth.getErrorFiles).not.toHaveBeenCalled();
    await engine.getErrorFiles(northConnectors[1].id, '2020-02-02T02:02:02.222Z', '2022-02-02T02:02:02.222Z', '');
    expect(createdNorth.getErrorFiles).toHaveBeenCalledWith('2020-02-02T02:02:02.222Z', '2022-02-02T02:02:02.222Z', '');

    await engine.retryErrorFiles('northId', ['file1']);
    expect(createdNorth.retryErrorFiles).not.toHaveBeenCalled();
    await engine.retryErrorFiles(northConnectors[1].id, ['file1']);
    expect(createdNorth.retryErrorFiles).toHaveBeenCalledWith(['file1']);

    await engine.removeErrorFiles('northId', ['file1']);
    expect(createdNorth.removeErrorFiles).not.toHaveBeenCalled();
    await engine.removeErrorFiles(northConnectors[1].id, ['file1']);
    expect(createdNorth.removeErrorFiles).toHaveBeenCalledWith(['file1']);

    await engine.removeAllErrorFiles('northId');
    expect(createdNorth.removeAllErrorFiles).not.toHaveBeenCalled();
    await engine.removeAllErrorFiles(northConnectors[1].id);
    expect(createdNorth.removeAllErrorFiles).toHaveBeenCalled();

    await engine.retryAllErrorFiles('northId');
    expect(createdNorth.retryAllErrorFiles).not.toHaveBeenCalled();
    await engine.retryAllErrorFiles(northConnectors[1].id);
    expect(createdNorth.retryAllErrorFiles).toHaveBeenCalled();

    createdNorth.getMetricsDataStream.mockReturnValue({ status: 'myStatus' });
    expect(engine.getNorthDataStream('northId')).toEqual(null);
    expect(engine.getNorthDataStream(northConnectors[1].id)).toEqual({ status: 'myStatus' });

    createdNorth.resetMetrics.mockReturnValue({ status: 'myStatus' });
    expect(engine.resetNorthMetrics('northId')).toEqual(null);
    expect(engine.resetNorthMetrics(northConnectors[1].id)).toEqual({ status: 'myStatus' });

    engine.addItemToSouth('southId', items[0]);
    expect(createdSouth.addItem).not.toHaveBeenCalled();
    engine.deleteItemFromSouth('southId', items[0]);
    expect(createdSouth.deleteItem).not.toHaveBeenCalled();
    engine.deleteAllItemsFromSouth('southId');
    expect(createdSouth.deleteAllItems).not.toHaveBeenCalled();
    engine.updateItemInSouth('southId', items[0], { id: 'itemId', connectorId: 'id', name: 'new name', settings: {}, scanModeId: null });
    expect(createdSouth.updateItem).not.toHaveBeenCalled();

    engine.addItemToSouth(southConnectors[1].id, items[0]);
    expect(createdSouth.addItem).toHaveBeenCalledWith(items[0]);
    engine.deleteItemFromSouth(southConnectors[1].id, items[0]);
    expect(createdSouth.deleteItem).toHaveBeenCalledWith(items[0]);
    engine.deleteAllItemsFromSouth(southConnectors[1].id);
    expect(createdSouth.deleteAllItems).toHaveBeenCalled();
    engine.updateItemInSouth(southConnectors[1].id, items[0], {
      id: 'itemId',
      connectorId: 'id',
      name: 'new name',
      settings: {},
      scanModeId: null
    });
    expect(createdSouth.updateItem).toHaveBeenCalledWith(items[0], {
      connectorId: 'id',
      id: 'itemId',
      name: 'new name',
      settings: {},
      scanModeId: null
    });

    createdSouth.getMetricsDataStream.mockReturnValue({ status: 'myStatus' });
    expect(engine.getSouthDataStream('southId')).toEqual(null);
    expect(engine.getSouthDataStream(southConnectors[1].id)).toEqual({ status: 'myStatus' });

    createdSouth.resetMetrics.mockReturnValue({ status: 'myStatus' });
    expect(engine.resetSouthMetrics('southId')).toEqual(null);
    expect(engine.resetSouthMetrics(southConnectors[1].id)).toEqual({ status: 'myStatus' });

    (southService.getSouth as jest.Mock).mockReturnValueOnce(southConnectors[0]).mockReturnValueOnce(southConnectors[1]);
    (northService.getNorth as jest.Mock).mockReturnValueOnce(northConnectors[0]).mockReturnValueOnce(northConnectors[1]);

    engine.setLogger(anotherLogger);
    expect(createdNorth.setLogger).toHaveBeenCalledTimes(2);
    expect(createdSouth.setLogger).toHaveBeenCalledTimes(2);
    expect(anotherLogger.child).toHaveBeenCalledWith({ scope: `south:${southConnectors[0].name}` });
    expect(anotherLogger.child).toHaveBeenCalledWith({ scope: `south:${southConnectors[1].name}` });
    expect(anotherLogger.child).toHaveBeenCalledWith({ scope: `north:${northConnectors[0].name}` });
    expect(anotherLogger.child).toHaveBeenCalledWith({ scope: `north:${northConnectors[1].name}` });

    await engine.stopSouth('southId');
    expect(createdSouth.stop).not.toHaveBeenCalled();
    await engine.stopNorth('northId');
    expect(createdNorth.stop).not.toHaveBeenCalled();

    await engine.stop();
    expect(createdSouth.stop).toHaveBeenCalledTimes(2);
    expect(createdNorth.stop).toHaveBeenCalledTimes(2);
  });

  it('should properly test south connector', async () => {
    const southConnectorCommand: SouthConnectorCommandDTO = {
      name: 'name',
      type: 'mqtt',
      description: 'description',
      enabled: true,
      settings: {
        field: 'value'
      },
      history: {
        maxInstantPerItem: false,
        maxReadInterval: 1000,
        readDelay: 100
      }
    };
    (southService.getSouthClass as jest.Mock).mockReturnValue(SouthMQTT);

    (logger.child as jest.Mock).mockReturnValue(logger);

    await engine.testSouth(southConnectorCommand);
    expect(logger.child).toHaveBeenCalledWith({ scope: `south:name` });
    expect(SouthMQTT.testConnection).toHaveBeenCalledWith(southConnectorCommand.settings, logger, encryptionService);
  });

  it('should throw error when test south connector of unknown type', async () => {
    const southConnectorCommand: SouthConnectorCommandDTO = {
      name: 'name',
      type: 'bad type',
      description: 'description',
      enabled: true,
      settings: {
        field: 'value'
      },
      history: {
        maxInstantPerItem: false,
        maxReadInterval: 1000,
        readDelay: 100
      }
    };
    (southService.getSouthClass as jest.Mock).mockReturnValue(null);

    await expect(engine.testSouth(southConnectorCommand)).rejects.toThrowError('Unknown South connector type bad type');
    expect(logger.child).not.toHaveBeenCalled();
    expect(SouthMQTT.testConnection).not.toHaveBeenCalled();
  });

  it('should throw error when test south connector does not have test method', async () => {
    const southConnectorCommand: SouthConnectorCommandDTO = {
      name: 'name',
      type: 'bad connector',
      description: 'description',
      enabled: true,
      settings: {
        field: 'value'
      },
      history: {
        maxInstantPerItem: false,
        maxReadInterval: 1000,
        readDelay: 100
      }
    };
    (southService.getSouthClass as jest.Mock).mockReturnValue({});

    await expect(engine.testSouth(southConnectorCommand)).rejects.toThrowError(
      'South connector of type bad connector does not have testConnection method'
    );
    expect(logger.child).not.toHaveBeenCalled();
    expect(SouthMQTT.testConnection).not.toHaveBeenCalled();
  });
});
