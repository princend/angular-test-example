import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TwainComponent } from './twain.component';
import { of, throwError } from 'rxjs';
import { TwainService } from '../service/twain.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


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
});

