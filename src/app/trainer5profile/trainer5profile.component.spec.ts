import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trainer5profileComponent } from './trainer5profile.component';

describe('Trainer5profileComponent', () => {
  let component: Trainer5profileComponent;
  let fixture: ComponentFixture<Trainer5profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trainer5profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trainer5profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
