import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialExpenseComponent } from './financial-expense.component';

describe('FinancialExpenseComponent', () => {
  let component: FinancialExpenseComponent;
  let fixture: ComponentFixture<FinancialExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
