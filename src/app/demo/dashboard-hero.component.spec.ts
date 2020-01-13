import { DashboardHeroComponent } from "./dashboard-hero.component";
import { Hero } from '../model/hero';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';




describe('DashboardHeroComponent', () => {
    let comp = new DashboardHeroComponent();
    let fixture
    let heroDe
    let heroEl
    let expectedHero

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [DashboardHeroComponent]
        })
        fixture = TestBed.createComponent(DashboardHeroComponent);
        comp = fixture.componentInstance;

        // find the hero's DebugElement and element
        heroDe = fixture.debugElement.query(By.css('.hero'));
        heroEl = heroDe.nativeElement;

        // mock the hero supplied by the parent component
        expectedHero = { id: 42, name: 'Test Name' };

        // simulate the parent setting the input property with that hero
        comp.hero = expectedHero;

        // trigger initial data binding
        fixture.detectChanges();
    }))
    it('raises the selected event when clicked', () => {
        let selectedHeros;
        // const hero: Hero = { id: 42, name: 'Test' };
        // comp.hero = hero;
        comp.selected.subscribe(selectedHero => {
            // expect(selectedHero).toBe(hero)
            selectedHeros = selectedHero;
        });
        comp.click();
        expect(selectedHeros).toBe(expectedHero)
    });

})



