import db from "better-sqlite3";

import EngineRepository from "../repository/engine.repository";
import ExternalSourceRepository from "../repository/external-source.repository";
import IpFilterRepository from "../repository/ip-filter.repository";
import ProxyRepository from "../repository/proxy.repository";
import ScanModeRepository from "../repository/scan-mode.repository";

export default class RepositoryService {
  private readonly _engineRepository: EngineRepository;
  private readonly _externalSourceRepository: ExternalSourceRepository;
  private readonly _ipFilterRepository: IpFilterRepository;
  private readonly _proxyRepository: ProxyRepository;
  private readonly _scanModeRepository: ScanModeRepository;

  constructor(databasePath: string) {
    const database = db(databasePath);
    this._externalSourceRepository = new ExternalSourceRepository(database);
    this._ipFilterRepository = new IpFilterRepository(database);
    this._proxyRepository = new ProxyRepository(database);
    this._scanModeRepository = new ScanModeRepository(database);
    this._engineRepository = new EngineRepository(database);
  }

  get engineRepository(): EngineRepository {
    return this._engineRepository;
  }

  get externalSourceRepository(): ExternalSourceRepository {
    return this._externalSourceRepository;
  }

  get ipFilterRepository(): IpFilterRepository {
    return this._ipFilterRepository;
  }

  get proxyRepository(): ProxyRepository {
    return this._proxyRepository;
  }

  get scanModeRepository(): ScanModeRepository {
    return this._scanModeRepository;
  }
}