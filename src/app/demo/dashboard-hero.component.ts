import { Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../model/hero';


export class DashboardHeroComponent {
    @Input() hero: Hero;
    @Output() selected = new EventEmitter();
    click() { this.selected.emit(this.hero) };
}