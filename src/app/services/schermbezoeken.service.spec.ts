import { TestBed } from '@angular/core/testing';

import { SchermbezoekenService } from './schermbezoeken.service';

describe('SchermbezoekenService', () => {
  let service: SchermbezoekenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchermbezoekenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
