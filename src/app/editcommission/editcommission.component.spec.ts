import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcommissionComponent } from './editcommission.component';

describe('EditcommissionComponent', () => {
  let component: EditcommissionComponent;
  let fixture: ComponentFixture<EditcommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
