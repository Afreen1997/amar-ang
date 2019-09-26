import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompletedtrainingComponent } from './usercompletedtraining.component';

describe('UsercompletedtrainingComponent', () => {
  let component: UsercompletedtrainingComponent;
  let fixture: ComponentFixture<UsercompletedtrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercompletedtrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercompletedtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
