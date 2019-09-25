import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trainer3profileComponent } from './trainer3profile.component';

describe('Trainer3profileComponent', () => {
  let component: Trainer3profileComponent;
  let fixture: ComponentFixture<Trainer3profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trainer3profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trainer3profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
