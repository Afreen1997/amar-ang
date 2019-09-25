import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trainer2profileComponent } from './trainer2profile.component';

describe('Trainer2profileComponent', () => {
  let component: Trainer2profileComponent;
  let fixture: ComponentFixture<Trainer2profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trainer2profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trainer2profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
