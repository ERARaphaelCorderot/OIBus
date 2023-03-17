import path from 'node:path';

import ProxyService from '../service/proxy.service';
import EncryptionService from '../service/encryption.service';
import pino from 'pino';
import NorthService from '../service/north.service';
import SouthService from '../service/south.service';
import RepositoryService from '../service/repository.service';

/**
 * Abstract class used to manage North and South connectors
 */
export default class BaseEngine {
  /**
   * Constructor for BaseEngine
   */
  constructor(
    protected readonly encryptionService: EncryptionService,
    protected readonly proxyService: ProxyService,
    protected readonly northService: NorthService,
    protected readonly southService: SouthService,
    protected logger: pino.Logger,
    protected readonly cacheFolder: string
  ) {
    this.cacheFolder = path.resolve(cacheFolder);
    this.encryptionService = encryptionService;
    this.northService = northService;
    this.southService = southService;
    this.logger = logger;
    this.proxyService = proxyService;
  }

  /**
   * Add new values from a South connector to the Engine.
   * The Engine will forward the values to the Cache.
   */
  async addValues(southId: string, values: Array<any>): Promise<void> {
    this.logger.warn(`addValues() should be surcharged. Called with South "${southId}" and ${values.length} values.`);
  }

  /**
   * Add a new file from a South connector to the Engine.
   * The Engine will forward the file to the Cache.
   */
  async addFile(southId: string, filePath: string, preserveFiles: boolean): Promise<void> {
    this.logger.warn(`addFile() should be surcharged. Called with South "${southId}", file "${filePath}" and ${preserveFiles}.`);
  }

  /**
   * Creates a new instance for every North and South connectors and initialize them.
   * Creates CronJobs based on the ScanModes and starts them.
   */
  async start(): Promise<void> {
    this.logger.warn(`start() should be surcharged.`);
  }

  /**
   * Gracefully stop every timer, South and North connectors
   */
  async stop(): Promise<void> {
    this.logger.warn('stop() should be surcharged.');
  }

  setLogger(value: pino.Logger) {
    this.logger = value;
  }
}