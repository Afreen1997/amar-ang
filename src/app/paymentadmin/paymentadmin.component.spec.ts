import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentadminComponent } from './paymentadmin.component';

describe('PaymentadminComponent', () => {
  let component: PaymentadminComponent;
  let fixture: ComponentFixture<PaymentadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
