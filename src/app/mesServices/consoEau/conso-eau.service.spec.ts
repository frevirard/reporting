import { TestBed } from '@angular/core/testing';

import { ConsoEauService } from './conso-eau.service';

describe('ConsoEauService', () => {
  let service: ConsoEauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoEauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
