import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  private url_prefix: string = environment.express_url;

  constructor(private http: HttpClient) {
  }

  getWebsites(): Observable<Website[]> {
    return this.http.get<Website[]>('api/websites/');
  }

  getWebsitesId(_id: string): Observable<Website> {
    return this.http.get<Website>(`/api/websites/${_id}`);
  }
}

export interface WebsiteParmas {
  websiteName: string;
  websiteReviews: string;
}

export interface Website extends WebsiteParmas {
  _id: string;
}
