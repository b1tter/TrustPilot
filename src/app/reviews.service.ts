import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private url_prefix: string = environment.express_url;
  review: BehaviorSubject<Review[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  createReview(review: ReviewParams): Observable<Review> {
    return this.http.post<Review>('api/reviews', review);
  }

  getReviewsByWebsiteId(id: string): Observable<Review[]> {
    return this.http.get<Review[]>(`api/reviews?websiteId=${id}`);
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>('api/reviews/');
  }

  getReviewById(_id: string): Observable<Review[]> {
    return this.http.get<Review[]>(`api/reviews/${_id}`);
  }
}

export interface ReviewParams {
  websiteId: string;
  OwnerEmail: string;
  reviewComment: string;
}

export interface Review extends ReviewParams {
  _id: string;
}


