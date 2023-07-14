import { TestBed } from '@angular/core/testing';

import { ResultSearchServiceService } from './result-search-service.service';

describe('ResultSearchServiceService', () => {
  let service: ResultSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
