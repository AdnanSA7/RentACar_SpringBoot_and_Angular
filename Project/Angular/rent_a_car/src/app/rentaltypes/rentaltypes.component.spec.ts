import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaltypesComponent } from './rentaltypes.component';

describe('RentaltypesComponent', () => {
  let component: RentaltypesComponent;
  let fixture: ComponentFixture<RentaltypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentaltypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentaltypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
