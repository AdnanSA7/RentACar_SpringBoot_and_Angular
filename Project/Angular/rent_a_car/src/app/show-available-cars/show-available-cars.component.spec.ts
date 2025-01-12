import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAvailableCarsComponent } from './show-available-cars.component';

describe('ShowAvailableCarsComponent', () => {
  let component: ShowAvailableCarsComponent;
  let fixture: ComponentFixture<ShowAvailableCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAvailableCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAvailableCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
