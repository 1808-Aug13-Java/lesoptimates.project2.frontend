import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedDetailsComponent } from './recommended-details.component';

describe('RecommendedDetailsComponent', () => {
  let component: RecommendedDetailsComponent;
  let fixture: ComponentFixture<RecommendedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
