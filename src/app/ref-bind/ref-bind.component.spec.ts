import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefBindComponent } from './ref-bind.component';

describe('RefBindComponent', () => {
  let component: RefBindComponent;
  let fixture: ComponentFixture<RefBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
