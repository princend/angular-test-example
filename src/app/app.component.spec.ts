import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Component, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { RouterLinkDirectiveStub } from './testing/router-link-directive-stub';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let routerLinks;
  let linkDes: DebugElement[];
  let fixture;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        RouterLinkDirectiveStub
        //  BannerComponent, 
        //  WelcomeComponent,
        // BannerStubComponent,
        // RouterOutletStubComponent,
        // WelcomeStubComponent
      ],

      //NO_ERRORS_SCHEMA 會要求 Angular 編譯器忽略不認識的那些元素和屬性。
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub))
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub))
  })

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-test-example'`, () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-test-example');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-test-example!');
  // });


  it('can get RouterLinks from template', () => {
    expect(routerLinks.length).toBe(3, 'should have 3 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/dashboard');
    expect(routerLinks[1].linkParams).toBe('/heroes');
    expect(routerLinks[2].linkParams).toBe('/about');
  });

  it('can click heroes link in template', () => {
    const heroesLinkDe = linkDes[1];
    const heroesLink = routerLinks[1];
    expect(heroesLink.navigatedTo).toBeNull('should not have navigated yet');

   
    // heroesLinkDe.triggerEventHandler('click', null);

    // fixture.detectChanges();
   
    // expect(heroesLink.navigatedTo).toBe('/heroes');

  });

});


@Component({ selector: 'app-banner', template: '' })
class BannerStubComponent { }

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent { }

@Component({ selector: 'app-welcome', template: '' })
class WelcomeStubComponent { }