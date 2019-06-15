import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StlyeBindComponent } from './stlye-bind.component';

describe('StlyeBindComponent', () => {
  let component: StlyeBindComponent;
  let fixture: ComponentFixture<StlyeBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StlyeBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StlyeBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
