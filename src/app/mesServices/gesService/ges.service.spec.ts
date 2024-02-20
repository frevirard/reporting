import { TestBed } from '@angular/core/testing';

import { GesService } from './ges.service';

describe('GesService', () => {
  let service: GesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
