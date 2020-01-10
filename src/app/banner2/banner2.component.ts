import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner2',
  template: `<h1>{{title}}</h1>`,
  styles: ['h1 { color:green; font-size:350%}']
})
export class Banner2Component implements OnInit {
  title = 'Test Tour of Heros';
  constructor() { }

  ngOnInit() {
  }

}
