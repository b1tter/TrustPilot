import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews = [];
  constructor(private _reviewsService: ReviewsService) { }

  ngOnInit() {
    this._reviewsService.getReviews()
      .subscribe(
        res => this.reviews = res,
        err => console.log(err)
      );
  }

}
