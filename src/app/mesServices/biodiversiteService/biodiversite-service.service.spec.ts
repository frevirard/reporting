import { TestBed } from '@angular/core/testing';

import { BiodiversiteServiceService } from './biodiversite-service.service';

describe('BiodiversiteServiceService', () => {
  let service: BiodiversiteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiodiversiteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
