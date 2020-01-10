import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ValueService {
    constructor() { }
    getValue() { return 'real value' }
    getObservableValue() { return of('observable value') }
    getPromiseValue() {
        return new Promise((resolve, reject) => {
            resolve('promise value')
        })
    }
}
