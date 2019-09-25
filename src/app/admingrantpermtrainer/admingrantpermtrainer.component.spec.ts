import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingrantpermtrainerComponent } from './admingrantpermtrainer.component';

describe('AdmingrantpermtrainerComponent', () => {
  let component: AdmingrantpermtrainerComponent;
  let fixture: ComponentFixture<AdmingrantpermtrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingrantpermtrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingrantpermtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
