import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TwainComponent } from './twain.component';
import { of, throwError, interval } from 'rxjs';
import { TwainService } from '../service/twain.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { delay, take } from 'rxjs/operators';


describe('TwainComponent', () => {
  let component: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
  let getQuoteSpy: jasmine.Spy;
  let quoteEl: HTMLElement;
  let testQuote: string;

  const errorMessage = () => {
    const el = fixture.nativeElement.querySelector('.error');
    return el ? el.textContent : null;
  };


  beforeEach(() => {
    testQuote = 'Test Quote';
    const twainService = jasmine.createSpyObj('TwainService', ['getQuote']);
    getQuoteSpy = twainService.getQuote.and.returnValue(of(testQuote));

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TwainComponent],
      providers: [{ provide: TwainService, useValue: twainService }]

    })
      .compileComponents();

    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;
    quoteEl = fixture.nativeElement.querySelector('.twain');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should show quote after component initialized', () => {
  //   expect(quoteEl.textContent).toBe(testQuote);
  //   expect(getQuoteSpy.calls.any()).toBe(true, 'getQuote called');
  // });

  // it('should display error when TwainService fails', fakeAsync(() => {
  //   // tell spy to return an error observable
  //   getQuoteSpy.and.returnValue(
  //     throwError('TwainService test failure'));

  //   fixture.detectChanges(); // onInit()
  //   // sync spy errors immediately after init

  //   tick(); // flush the component's setTimeout()

  //   fixture.detectChanges(); // update errorMessage within setTimeout()

  //   expect(errorMessage()).toMatch(/test failure/, 'should display error');
  //   expect(quoteEl.textContent).toBe('...', 'should show placeholder');
  // }));


  it('should run timeout callback with delay after call tick with millis', fakeAsync(() => {
    let called = false;
    setTimeout(() => { called = true; }, 100);
    tick(100)
    expect(called).toBe(true)
  }));

  it('should get Date fidd correctly in fakeAsync', fakeAsync(() => {
    const start = Date.now();
    tick(100)
    const end = Date.now()
    expect(end - start).toBe(100)
  }));


});


describe('use jasmine clock()', () => {
  beforeEach(() => { jasmine.clock().install() })
  afterEach(() => { jasmine.clock().uninstall() })
  it('should auto enter fakeAsync', () => {
    let called = false;
    setTimeout(() => {
      called = true;
    }, 100);
    jasmine.clock().tick(100);
    expect(called).toBe(true);
  });


  it('should get Date diff correctly in fakeAsync with rxjs scheduler', fakeAsync(() => {
    let result = null;
    of('hello').pipe(delay(1000)).subscribe((v) => { result = v })
    expect(result).toBeNull();
    tick(1000);
    expect(result).toBe('hello');

    const start = new Date().getTime();
    let dateDiff = 0;
    interval(1000).pipe(take(2)).subscribe(() => { dateDiff = new Date().getTime() - start });
    tick(1000);
    expect(dateDiff).toBe(1000);
    tick(1000);
    expect(dateDiff).toBe(2000);

  }));
});



