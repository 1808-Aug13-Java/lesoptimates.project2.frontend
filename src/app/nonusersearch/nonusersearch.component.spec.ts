import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonusersearchComponent } from './nonusersearch.component';

describe('NonusersearchComponent', () => {
  let component: NonusersearchComponent;
  let fixture: ComponentFixture<NonusersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonusersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonusersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
