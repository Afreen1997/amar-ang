import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercurrenttrainingComponent } from './usercurrenttraining.component';

describe('UsercurrenttrainingComponent', () => {
  let component: UsercurrenttrainingComponent;
  let fixture: ComponentFixture<UsercurrenttrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercurrenttrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercurrenttrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
