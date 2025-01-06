import { TestBed } from '@angular/core/testing';

import { SensorenService } from './sensoren.service';

describe('SensorenService', () => {
  let service: SensorenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
