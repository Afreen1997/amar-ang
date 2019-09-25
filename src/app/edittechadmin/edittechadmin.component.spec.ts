import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittechadminComponent } from './edittechadmin.component';

describe('EdittechadminComponent', () => {
  let component: EdittechadminComponent;
  let fixture: ComponentFixture<EdittechadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittechadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittechadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
