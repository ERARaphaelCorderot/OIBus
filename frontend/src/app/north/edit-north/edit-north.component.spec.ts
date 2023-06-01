import { TestBed } from '@angular/core/testing';

import { EditNorthComponent } from './edit-north.component';
import { ComponentTester, createMock, stubRoute } from 'ngx-speculoos';
import { of } from 'rxjs';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { provideTestingI18n } from '../../../i18n/mock-i18n';
import { FormComponent } from '../../shared/form/form.component';
import { ProxyService } from '../../services/proxy.service';
import { ScanModeService } from '../../services/scan-mode.service';
import { provideHttpClient } from '@angular/common/http';
import { NorthConnectorService } from '../../services/north-connector.service';
import { NorthConnectorDTO, NorthConnectorManifest } from '../../../../../shared/model/north-connector.model';

class EditNorthComponentTester extends ComponentTester<EditNorthComponent> {
  constructor() {
    super(EditNorthComponent);
  }

  get title() {
    return this.element('h1');
  }

  get name() {
    return this.input('#north-name');
  }

  get enabled() {
    return this.input('#north-enabled');
  }

  get description() {
    return this.input('#north-description');
  }

  get specificTitle() {
    return this.element('#specific-settings-title');
  }

  get specificForm() {
    return this.element(FormComponent);
  }
}
describe('EditNorthComponent', () => {
  let tester: EditNorthComponentTester;
  let northConnectorService: jasmine.SpyObj<NorthConnectorService>;
  let scanModeService: jasmine.SpyObj<ScanModeService>;
  let proxyService: jasmine.SpyObj<ProxyService>;

  beforeEach(() => {
    northConnectorService = createMock(NorthConnectorService);
    scanModeService = createMock(ScanModeService);
    proxyService = createMock(ProxyService);

    TestBed.configureTestingModule({
      imports: [EditNorthComponent],
      providers: [
        provideTestingI18n(),
        provideRouter([]),
        provideHttpClient(),
        { provide: NorthConnectorService, useValue: northConnectorService },
        { provide: ScanModeService, useValue: scanModeService },
        { provide: ProxyService, useValue: proxyService }
      ]
    });

    scanModeService.list.and.returnValue(of([]));
    proxyService.list.and.returnValue(of([]));
  });

  describe('create mode', () => {
    beforeEach(() => {
      TestBed.overrideProvider(ActivatedRoute, { useValue: stubRoute({ queryParams: { type: 'OIAnalytics' } }) });

      tester = new EditNorthComponentTester();
      tester.detectChanges();
    });

    it('should display general settings', () => {
      expect(tester.title).toContainText('Create OIAnalytics north connector');
      expect(tester.enabled).toBeChecked();
      expect(tester.description).toHaveValue('');
      expect(tester.specificForm).toBeDefined();

      expect(scanModeService.list).toHaveBeenCalledTimes(1);
      expect(proxyService.list).toHaveBeenCalledTimes(1);
    });
  });

  describe('edit mode', () => {
    const northConnector: NorthConnectorDTO = {
      id: 'id1',
      type: 'Console',
      name: 'North Connector',
      description: 'My North connector description',
      enabled: true,
      settings: {},
      caching: {
        scanModeId: 'scanModeId1',
        retryInterval: 1000,
        retryCount: 3,
        groupCount: 1000,
        maxSendCount: 10000,
        sendFileImmediately: true,
        maxSize: 0
      },
      archive: {
        enabled: false,
        retentionDuration: 0
      }
    };

    beforeEach(() => {
      TestBed.overrideProvider(ActivatedRoute, { useValue: stubRoute({ params: { northId: 'id1' } }) });

      northConnectorService.getNorthConnector.and.returnValue(of(northConnector));
      northConnectorService.getNorthConnectorTypeManifest.and.returnValue(
        of({
          category: 'debug',
          name: 'Console',
          description: 'Console description',
          modes: {
            files: true,
            points: true
          },
          settings: [],
          schema: {} as unknown
        } as NorthConnectorManifest)
      );
      tester = new EditNorthComponentTester();
      tester.detectChanges();
    });
    it('should display general settings', () => {
      expect(northConnectorService.getNorthConnector).toHaveBeenCalledWith('id1');
      expect(tester.title).toContainText('Edit Console north connector');
      expect(tester.enabled).toBeChecked();
      expect(tester.description).toHaveValue('My North connector description');
      expect(tester.specificForm).toBeDefined();
      expect(tester.specificTitle).toContainText('Console settings');
    });
  });
});
