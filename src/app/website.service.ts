import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  private _websitesUrl = 'http://localhost:3000/api/websites';

  constructor(private http: HttpClient) { }

  getWebsites() {
    return this.http.get<any>(this._websitesUrl);
  }
}
