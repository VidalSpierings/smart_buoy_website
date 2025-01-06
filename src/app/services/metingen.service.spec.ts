import { TestBed } from '@angular/core/testing';

import { MetingenService } from './metingen.service';

describe('MetingenService', () => {
  let service: MetingenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetingenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
