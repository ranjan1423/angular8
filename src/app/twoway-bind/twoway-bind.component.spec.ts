import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayBindComponent } from './twoway-bind.component';

describe('TwowayBindComponent', () => {
  let component: TwowayBindComponent;
  let fixture: ComponentFixture<TwowayBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowayBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
