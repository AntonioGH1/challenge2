import { TestBed } from '@angular/core/testing';

import { LinearRegressionService } from './linear-regression.service';

describe('LinearRegressionService', () => {
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinearRegressionService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});