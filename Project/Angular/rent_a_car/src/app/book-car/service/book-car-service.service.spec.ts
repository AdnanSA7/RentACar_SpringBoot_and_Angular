import { TestBed } from '@angular/core/testing';

import { BookCarServiceService } from './book-car-service.service';

describe('BookCarServiceService', () => {
  let service: BookCarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
