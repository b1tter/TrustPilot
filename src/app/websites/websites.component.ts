import { Component, OnInit } from '@angular/core';
import {Website, WebsiteParmas, WebsiteService} from '../website.service';
import { BehaviorSubject } from 'rxjs';
import { Review, ReviewParams, ReviewsService} from '../reviews.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
  reviews: BehaviorSubject<Review[]> = new BehaviorSubject([]);
  website: Website;
  websiteName: string;
  websiteReviews: string;
  review: Review;

  reviewForm: FormGroup;
  public email: string;
  public reviewByUser: string;
  public websiteId: string;

  websites: BehaviorSubject<Website[]> = new BehaviorSubject([]);
  constructor(private _websiteService: WebsiteService,
              private _route: ActivatedRoute,
              private _form: FormBuilder,
              private _review: ReviewsService) {
    this.generateForm();
  }

  generateForm() {
    this.reviewForm = this._form.group({
      email: [''],
      reviewByUser: ['']
    });
  }
  ngOnInit() {
    const websiteId = this.getWebsiteId();

    this._review.getReviewById(websiteId).subscribe(reviews => {
      this.reviews.next(reviews);
    });

    this._websiteService.getWebsitesId(websiteId).subscribe(website => {
      this.websiteName = website.websiteName;
      this.websiteReviews = website.websiteReviews;
    });
  }

  addReview() {
    const websiteId = this.getWebsiteId();
    this._review.createReview(this.review)
      .pipe(mergeMap(() => this._review.getReviewsByWebsiteId(websiteId)))
      .subscribe(reviews => {
        this.reviews.next(reviews);
        this.reviewForm.reset();
      });
  }


  private getWebsiteId() {
    const route = this._route.snapshot;
    const websiteId = route.paramMap.get('websiteId');
    return websiteId;
  }
}
