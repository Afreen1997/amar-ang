import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trainer1profileComponent } from './trainer1profile.component';

describe('Trainer1profileComponent', () => {
  let component: Trainer1profileComponent;
  let fixture: ComponentFixture<Trainer1profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trainer1profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trainer1profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
