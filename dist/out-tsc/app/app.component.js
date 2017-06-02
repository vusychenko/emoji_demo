var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { GameService } from './game.service';
export var AppComponent = (function () {
    function AppComponent(gameService) {
        this.gameService = gameService;
        this.title = 'GAME HEADER';
        this.defaultTitle = 'GAME HEADER';
        this.titleFooter = 'GAME FOOTER';
        this.defaultFooter = 'GAME FOOTER';
        this.games = [];
        this.page = 0;
        this.humburgerToggle = false;
        this.changeGumburger = function () {
            this.humburgerToggle = !this.humburgerToggle;
        };
    }
    AppComponent.prototype.curPage = function (x, name) {
        this.page = x;
        this.humburgerToggle = false;
        this.title = name;
        this.titleFooter = 'MENU FOOTER';
    };
    AppComponent.prototype.closePage = function () {
        this.page = 0;
        this.title = this.defaultTitle;
        this.titleFooter = this.defaultFooter;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getImgs().subscribe(function (prod) {
            _this.games = prod["categories"];
            console.log(_this.games);
            console.log(prod);
        });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            template: "\n            <header>\n            <h1>{{title}}</h1>\n            <div class=\"gumburger\" [class.change]=\"humburgerToggle\" (click)=\"changeGumburger()\" >\n                <div class=\"bar1\"></div>\n                <div class=\"bar2\"></div>\n                <div class=\"bar3\"></div>\n            </div>\n            <ul *ngIf=\"humburgerToggle\" class=\"subMenu\">\n            <li *ngFor=\"let prod of games; let i = index;\" (click)=\"curPage(i+1,prod['name'])\">{{prod['name']}}</li>\n            </ul>\n</header>\n\n\n<!--Made using cycles for test work -->\n\n            <div class=\"bgImg\"></div>\n                <div class=\"container-fluid boxes\" *ngFor=\"let prod of games; let i = index;\"  [class.show]=\"i+1==page\">\n                <div class=\"closeX change\" (click)=\"closePage()\">\n                    <div class=\"bar1\"></div>\n                    <div class=\"bar2\"></div>\n                    <div class=\"bar3\"></div>\n                </div>\n                    <div class=\"row\">\n                        <div *ngFor=\"let img of prod['emojis']\" class=\"col-lg-1 col-md-1 col-sm-2 colMob  imgWrapp\">\n                            <img  [src]=\"img\"    alt=\"img\">\n                         </div>\n                     </div>\n                 </div>\n\n<footer>\n<h2>\n{{titleFooter}}\n</h2>\n</footer>\n",
            styles: ["\n\n    .closeX{\n        position: absolute;\n        right: 10px;\n        top: 70px;\n        cursor: pointer;\n    }\n\n    .container-fluid.boxes{\n    display: none;\n    padding: 70px;\n    position: relative;\n    z-index: 10;\n    background: rgba(255,255,255,0.31);\n    }\n\n    .bgImg{\n    position: fixed;\n    background: url(\"../imgs/bg2.jpg\");\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    }\n\n    header{\n    z-index:100;\n    height: 60px;\n    position:fixed;\n    width: 100%;\n    left: 0;\n    top: 0;\n    background: rgba(205,205,205,0.6);\n    }\n     footer{\n    z-index:100;\n    height: 60px;\n        background: rgba(205,205,205,0.6);\n    position:fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    }\n    \n    .wrap{\n    margin:60px auto;\n    }\n    \n    .imgWrapp img{\n    max-width: 100%;\n    vertical-align: middle;\n    }\n    \n    .imgWrapp{\n    height:100px;\n    overflow: hidden;\n    line-height: 100px;\n    -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\n    border: 1px solid transparent;\n    -webkit-transition: all  0.3s;-moz-transition: all  0.3s;-ms-transition: all  0.3s;-o-transition: all  0.3s;transition: all  0.3s;\n    cursor: pointer;\n    border-radius: 5px;\n    }\n    \n    .imgWrapp:hover{\n        border: 1px solid #3e3e3e;\n    }\n    \n   \n    \n    header h1, footer h2{\n    width:100%;\n    text-align: center;\n    margin: 0;\n    padding: 0;\n        line-height: 60px;\n    }\n    \n  \n    .gumburger{\n    position:absolute;\n    top:50%;\n    -webkit-transform: translateY(-50%);-moz-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    }\n    \n    .subMenu{\n    position:absolute;\n    top:100%;\n    right:0;\n    padding: 0 ;\n    z-index:15;\n    \n    background: rgba(205,205,205,0.6);\n    border-top:1px solid #f2f2f2;\n    }\n   \n    \n    .subMenu li{\n    list-style: none;\n    font-size: 16px;\n    padding:10px;\n    cursor:pointer;\n    }\n    \n    .subMenu li:hover{\n        background: rgba(205,205,205,1);\n    }\n    \n    .bar1, .bar2, .bar3 {\n    width: 35px;\n    height: 5px;\n    background-color: #333;\n    margin: 6px 0;\n    transition: 0.4s;\n}\n\n    /* Rotate first bar */\n    .change .bar1 {\n        -webkit-transform: rotate(-45deg) translate(-8px, 6px) ;\n        transform: rotate(-45deg) translate(-8px, 6px) ;\n    }\n    \n    /* Fade out the second bar */\n    .change .bar2 {\n        opacity: 0;\n    }\n    \n    /* Rotate last bar */\n    .change .bar3 {\n        -webkit-transform: rotate(45deg) translate(-9px, -8px) ;\n        transform: rotate(45deg) translate(-9px, -8px) ;\n    }\n    \n    \n    @media screen and (max-width: 425px){    \n        header h1, footer h2{\n        font-size: 24px;\n        }\n        \n        .colMob{\n            width:50%;\n            float: left;\n            height: 130px;\n            line-height: 130px;\n        }\n    }\n    \n    @media screen and (min-width: 426px) and (max-width: 600px){\n        .colMob{\n                width:calc( 100% / 3 );\n                float: left;\n                height: 130px;\n                line-height: 130px;\n            }\n    }\n    \n    @media screen and (min-width: 601px) and (max-width: 767px){\n        .colMob{\n                width:calc( 100% / 4 );\n                float: left;\n                height: 130px;\n                line-height: 130px;\n            }\n    }\n"]
        }), 
        __metadata('design:paramtypes', [GameService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/n1k1t/Desktop/demo/src/app/app.component.js.map