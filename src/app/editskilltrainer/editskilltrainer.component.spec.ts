import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditskilltrainerComponent } from './editskilltrainer.component';

describe('EditskilltrainerComponent', () => {
  let component: EditskilltrainerComponent;
  let fixture: ComponentFixture<EditskilltrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditskilltrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditskilltrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
