import { TestBed } from '@angular/core/testing';

import { AvailableCarBookService } from './available-car-book.service';

describe('AvailableCarBookService', () => {
  let service: AvailableCarBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableCarBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
