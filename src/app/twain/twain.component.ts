import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TwainService } from '../service/twain.service';
import { startWith, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-twain',
  template: `<p class="twain"><i>{{quote | async}}</i></p>
  <button (click)="getQuote()">Next quote</button>
  <p class="error" *ngIf="errorMessage">{{ errorMessage }}</p>`,
  styles: [],
  providers: [TwainService]
})
export class TwainComponent implements OnInit {


  quote: Observable<any> | Promise<any>;
  errorMessage: string;

  constructor(private twainService: TwainService) { }

  ngOnInit() {
  }

  getQuote() {
    this.errorMessage = '';
    this.quote = this.twainService.getQuote().pipe(
      startWith('...')),
      catchError((err: any) => {
        setTimeout(() => { this.errorMessage = err.message || err.toString() });
        return of('...')
      })
  }


}
