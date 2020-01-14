import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeroComponent } from './dashboard-hero.component';
import { TestHostComponent } from './test-host.component';
import { click } from './dashboard-hero.component.spec';


describe('', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let heroEl;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardHeroComponent, TestHostComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        heroEl = fixture.nativeElement.querySelector('.hero')
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display hero name', () => {
        const expectedPipeName = component.hero.name.toUpperCase();
        expect(heroEl.textContent).toContain(expectedPipeName)
    });

    it('shoild raise selected event when clicked', () => {
        click(heroEl);
        expect(component.selectedHero).toBe(component.hero);
    });

});