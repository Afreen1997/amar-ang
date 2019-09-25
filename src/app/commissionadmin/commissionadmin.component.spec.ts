import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionadminComponent } from './commissionadmin.component';

describe('CommissionadminComponent', () => {
  let component: CommissionadminComponent;
  let fixture: ComponentFixture<CommissionadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
