import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertrainersearchComponent } from './usertrainersearch.component';

describe('UsertrainersearchComponent', () => {
  let component: UsertrainersearchComponent;
  let fixture: ComponentFixture<UsertrainersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertrainersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertrainersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
