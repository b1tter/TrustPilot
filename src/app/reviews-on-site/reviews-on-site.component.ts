import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Review, ReviewsService, ReviewParams} from '../reviews.service';
import { Website, WebsiteParmas, WebsiteService } from '../website.service';

@Component({
  selector: 'app-reviews-on-site',
  templateUrl: './reviews-on-site.component.html',
  styleUrls: ['./reviews-on-site.component.css']
})
export class ReviewsOnSiteComponent implements OnInit {
  website: Website;
  websiteName: string;
  websiteReviews: string;

  review: Review;

  constructor( private _route: ActivatedRoute,
               private _websiteService: WebsiteService) { }

  ngOnInit() {
    const websiteId = this.getWebsiteId();
    this._websiteService.getWebsitesId(websiteId).subscribe(website => {
      this.websiteName = website.websiteName;
      this.websiteReviews = website.websiteReviews;
    });
  }

  private getWebsiteId() {
    const route = this._route.snapshot;
    const websiteId = route.paramMap.get('websiteId');
    return websiteId;
  }
}

