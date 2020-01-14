import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-external',
  templateUrl: './banner-external.component.html',
  styleUrls: ['./banner-external.component.css']
})
export class BannerExternalComponent implements OnInit {

  title = 'Test Tour of Heroes';
  constructor() { }

  ngOnInit() {
  }

}
