import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../website.service';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {

  websites = [];
  constructor(private _websiteService: WebsiteService) { }

  ngOnInit() {
    this._websiteService.getWebsites()
      .subscribe(
        res => this.websites = res,
        err => console.log(err)
      );
  }

}
