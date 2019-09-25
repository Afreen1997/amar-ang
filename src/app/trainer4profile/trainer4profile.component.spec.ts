import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trainer4profileComponent } from './trainer4profile.component';

describe('Trainer4profileComponent', () => {
  let component: Trainer4profileComponent;
  let fixture: ComponentFixture<Trainer4profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trainer4profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trainer4profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
