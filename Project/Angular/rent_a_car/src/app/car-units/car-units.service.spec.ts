import { TestBed } from '@angular/core/testing';

import { CarUnitsService } from './car-units.service';

describe('CarUnitsService', () => {
  let service: CarUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
