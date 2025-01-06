import { TestBed } from '@angular/core/testing';

import { GrenswaardenService } from './grenswaarden.service';

describe('GrenswaardenService', () => {
  let service: GrenswaardenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrenswaardenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
