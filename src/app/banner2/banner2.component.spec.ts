import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { Banner2Component } from './banner2.component';

describe('Banner2Component', () => {
  let component: Banner2Component;
  let fixture: ComponentFixture<Banner2Component>;
  let h1: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Banner2Component],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner2Component);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () => {
    // Hooray! No `fixture.detectChanges()` needed
    expect(h1.textContent).toContain(component.title);
  });

  it('should still see original title after comp.title change', () => {
    const oldTitle = component.title;
    component.title = 'Test Title';
    // Displayed title is old because Angular didn't hear the change :(
    expect(h1.textContent).toContain(oldTitle);
  });

  it('should display updated title after detectChanges', () => {
    component.title = 'Test Title';
    fixture.detectChanges(); // detect changes explicitly
    expect(h1.textContent).toContain(component.title);
  });
});
