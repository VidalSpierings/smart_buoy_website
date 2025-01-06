import { TestBed } from '@angular/core/testing';

import { QueriesUitvoerenService } from './queries-uitvoeren.service';

describe('QueriesUitvoerenService', () => {
  let service: QueriesUitvoerenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueriesUitvoerenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
