import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUnitsComponent } from './car-units.component';

describe('CarUnitsComponent', () => {
  let component: CarUnitsComponent;
  let fixture: ComponentFixture<CarUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarUnitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
