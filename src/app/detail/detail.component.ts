import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  template: `<input type="text" [(ngModel)]="name"><span>{{name}}</span>`,
  styles: []
})
export class DetailComponent implements OnInit {

  name = '';

  constructor() { }

  ngOnInit() {
  }

}
