import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookingsComponent } from './customer-bookings.component';

describe('CustomerBookingsComponent', () => {
  let component: CustomerBookingsComponent;
  let fixture: ComponentFixture<CustomerBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerBookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
