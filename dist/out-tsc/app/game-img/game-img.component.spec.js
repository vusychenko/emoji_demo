import { async, TestBed } from '@angular/core/testing';
import { GameImgComponent } from './game-img.component';
describe('GameImgComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GameImgComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GameImgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/n1k1t/Desktop/demo/src/app/game-img/game-img.component.spec.js.map