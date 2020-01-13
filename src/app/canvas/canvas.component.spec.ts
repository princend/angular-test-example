import { TestBed, async, tick, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { CanvasComponent } from './canvas.component';
describe('CanvasComponent', () => {

    let component: CanvasComponent;
    let fixture: ComponentFixture<CanvasComponent>;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [
                CanvasComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        window['__zone_symbol__FakeAsyncTestMacroTask'] = [
            {
                source: 'HTMLCanvasElement.toBlob',
                callbackArgs: [{ size: 200 }]
            }
        ];
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(CanvasComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });


    //   it('should be able to generate blob data from canvas', fakeAsync(() => {
    //     const fixture = TestBed.createComponent(CanvasComponent);
    //     fixture.detectChanges();
    //     tick();
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.blobSize).toBeGreaterThan(0);
    //   }));

    it('toBlob should be able to run in fakeAsync', fakeAsync(() => {
        const canvas=component.sampleCanvas.nativeElement;
        let blob = null;
        canvas.toBlob(function (b) {
            blob = b;
        });
        tick();
        expect(blob.size).toBe(200);
    })
    );


});

