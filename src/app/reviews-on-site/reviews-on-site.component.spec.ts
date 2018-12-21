import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsOnSiteComponent } from './reviews-on-site.component';

describe('ReviewsOnSiteComponent', () => {
  let component: ReviewsOnSiteComponent;
  let fixture: ComponentFixture<ReviewsOnSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsOnSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsOnSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
