import { TestBed } from '@angular/core/testing';

import { CustomerBookingsService } from './customer-bookings.service';

describe('CustomerBookingsService', () => {
  let service: CustomerBookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerBookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
