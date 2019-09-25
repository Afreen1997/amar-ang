import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingrantpermuserComponent } from './admingrantpermuser.component';

describe('AdmingrantpermuserComponent', () => {
  let component: AdmingrantpermuserComponent;
  let fixture: ComponentFixture<AdmingrantpermuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingrantpermuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingrantpermuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
