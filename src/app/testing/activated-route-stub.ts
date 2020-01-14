import { ReplaySubject } from 'rxjs';
import { ParamMap, Params, convertToParamMap } from '@angular/router';


export class ActivatedRouteStub {
    private subject = new ReplaySubject<ParamMap>();
    readonly paramMap = this.subject.asObservable();
    
    constructor(initialParams?: Params) {
        this.setParamMap(initialParams);
    }

    setParamMap(params?: Params) {
        this.subject.next(convertToParamMap(params))
    }

}