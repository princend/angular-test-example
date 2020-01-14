import { Component } from "@angular/core";
import { Hero } from '../model/hero';

@Component({
    template: `
      <dashboard-hero
        [hero]="hero" (selected)="onSelected($event)">
      </dashboard-hero>`
  })
  export class TestHostComponent {
    hero: Hero = {id: 42, name: 'Test Name' };
    selectedHero: Hero;
    onSelected(hero: Hero) { this.selectedHero = hero; }
  }