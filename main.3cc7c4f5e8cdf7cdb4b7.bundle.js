webpackJsonp([1,4],{303:function(n,t,e){"use strict";var r=e(0),o=e(285),i=e(36),a=(e.n(i),e(613)),s=(e.n(a),e(614));e.n(s);e.d(t,"a",function(){return d});var c=this&&this.__decorate||function(n,t,e,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,r);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(a=(i<3?o(a):i>3?o(t,e,a):o(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a},l=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},d=function(){function n(n){this.http=n,this.ImgsUrl="img.json"}return n.prototype.getImgs=function(){return this.http.get(this.ImgsUrl).map(this.extractData).catch(this.handleError)},n.prototype.extractData=function(n){return n.json()||{}},n.prototype.handleError=function(n){var t;if(n instanceof o.b){var e=n.json()||"",r=e.error||JSON.stringify(e);t=n.status+" - "+(n.statusText||"")+" "+r}else t=n.message?n.message:n.toString();return console.error(t),i.Observable.throw(t)},n=c([e.i(r.c)(),l("design:paramtypes",["function"==typeof(t=void 0!==o.c&&o.c)&&t||Object])],n);var t}()},345:function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=345},346:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(433),o=e(0),i=e(456),a=e(454);i.a.production&&e.i(o.a)(),e.i(r.a)().bootstrapModule(a.a)},453:function(n,t,e){"use strict";var r=e(0),o=e(303);e.d(t,"a",function(){return s});var i=this&&this.__decorate||function(n,t,e,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,r);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(a=(i<3?o(a):i>3?o(t,e,a):o(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a},a=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},s=function(){function n(n){this.gameService=n,this.title="GAME HEADER",this.defaultTitle="GAME HEADER",this.titleFooter="GAME FOOTER",this.defaultFooter="GAME FOOTER",this.games=[],this.page=0,this.humburgerToggle=!1,this.changeGumburger=function(){this.humburgerToggle=!this.humburgerToggle}}return n.prototype.curPage=function(n,t){this.page=n,this.humburgerToggle=!1,this.title=t,this.titleFooter="MENU FOOTER"},n.prototype.closePage=function(){this.page=0,this.title=this.defaultTitle,this.titleFooter=this.defaultFooter},n.prototype.ngOnInit=function(){var n=this;this.gameService.getImgs().subscribe(function(t){n.games=t.categories,console.log(n.games),console.log(t)})},n=i([e.i(r.U)({selector:"app-root",template:'\n            <header>\n            <h1>{{title}}</h1>\n            <div class="gumburger" [class.change]="humburgerToggle" (click)="changeGumburger()" >\n                <div class="bar1"></div>\n                <div class="bar2"></div>\n                <div class="bar3"></div>\n            </div>\n            <ul *ngIf="humburgerToggle" class="subMenu">\n            <li *ngFor="let prod of games; let i = index;" (click)="curPage(i+1,prod[\'name\'])">{{prod[\'name\']}}</li>\n            </ul>\n</header>\n\n\n\x3c!--Made using cycles for test work --\x3e\n\n            <div class="bgImg"></div>\n                <div class="container-fluid boxes" *ngFor="let prod of games; let i = index;"  [class.show]="i+1==page">\n                <div class="closeX change" (click)="closePage()">\n                    <div class="bar1"></div>\n                    <div class="bar2"></div>\n                    <div class="bar3"></div>\n                </div>\n                    <div class="row">\n                        <div *ngFor="let img of prod[\'emojis\']" class="col-lg-1 col-md-1 col-sm-2 colMob  imgWrapp">\n                            <img  [src]="img"    alt="img">\n                         </div>\n                     </div>\n                 </div>\n\n<footer>\n<h2>\n{{titleFooter}}\n</h2>\n</footer>\n',styles:['\n\n    .closeX{\n        position: absolute;\n        right: 10px;\n        top: 70px;\n        cursor: pointer;\n    }\n\n    .container-fluid.boxes{\n    display: none;\n    padding: 70px;\n    position: relative;\n    z-index: 10;\n    background: rgba(255,255,255,0.31);\n    }\n\n    .bgImg{\n    position: fixed;\n    background: url("bg2.jpg");\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    }\n\n    header{\n    z-index:100;\n    height: 60px;\n    position:fixed;\n    width: 100%;\n    left: 0;\n    top: 0;\n    background: rgba(205,205,205,0.6);\n    }\n     footer{\n    z-index:100;\n    height: 60px;\n        background: rgba(205,205,205,0.6);\n    position:fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    }\n    \n    .wrap{\n    margin:60px auto;\n    }\n    \n    .imgWrapp img{\n    max-width: 100%;\n    vertical-align: middle;\n    }\n    \n    .imgWrapp{\n    height:120px;\n    overflow: hidden;\n    line-height: 120px;\n    -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;\n    border: 1px solid transparent;\n    -webkit-transition: all  0.3s;-moz-transition: all  0.3s;-ms-transition: all  0.3s;-o-transition: all  0.3s;transition: all  0.3s;\n    cursor: pointer;\n    border-radius: 5px;\n    }\n    \n    .imgWrapp:hover{\n        border: 1px solid #3e3e3e;\n    }\n    \n   \n    \n    header h1, footer h2{\n    width:100%;\n    text-align: center;\n    margin: 0;\n    padding: 0;\n        line-height: 60px;\n    }\n    \n  \n    .gumburger{\n    position:absolute;\n    top:50%;\n    -webkit-transform: translateY(-50%);-moz-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    }\n    \n    .subMenu{\n    position:absolute;\n    top:100%;\n    right:0;\n    padding: 0 ;\n    z-index:15;\n    \n    background: rgba(205,205,205,0.6);\n    border-top:1px solid #f2f2f2;\n    }\n   \n    \n    .subMenu li{\n    list-style: none;\n    font-size: 16px;\n    padding:10px;\n    cursor:pointer;\n    }\n    \n    .subMenu li:hover{\n        background: rgba(205,205,205,1);\n    }\n    \n    .bar1, .bar2, .bar3 {\n    width: 35px;\n    height: 5px;\n    background-color: #333;\n    margin: 6px 0;\n    transition: 0.4s;\n}\n\n    /* Rotate first bar */\n    .change .bar1 {\n        -webkit-transform: rotate(-45deg) translate(-8px, 6px) ;\n        transform: rotate(-45deg) translate(-8px, 6px) ;\n    }\n    \n    /* Fade out the second bar */\n    .change .bar2 {\n        opacity: 0;\n    }\n    \n    /* Rotate last bar */\n    .change .bar3 {\n        -webkit-transform: rotate(45deg) translate(-9px, -8px) ;\n        transform: rotate(45deg) translate(-9px, -8px) ;\n    }\n    \n    \n    @media screen and (max-width: 425px){    \n        header h1, footer h2{\n        font-size: 24px;\n        }\n        \n        .colMob{\n            width:50%;\n            float: left;\n            height: 130px;\n            line-height: 130px;\n        }\n    }\n    \n    @media screen and (min-width: 426px) and (max-width: 600px){\n        .colMob{\n                width:calc( 100% / 3 );\n                float: left;\n                height: 130px;\n                line-height: 130px;\n            }\n    }\n    \n    @media screen and (min-width: 601px) and (max-width: 767px){\n        .colMob{\n                width:calc( 100% / 4 );\n                float: left;\n                height: 130px;\n                line-height: 130px;\n            }\n    }\n']}),a("design:paramtypes",["function"==typeof(t=void 0!==o.a&&o.a)&&t||Object])],n);var t}()},454:function(n,t,e){"use strict";var r=e(192),o=e(0),i=e(424),a=e(285),s=e(453),c=e(455),l=e(303);e.d(t,"a",function(){return p});var d=this&&this.__decorate||function(n,t,e,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,r);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(a=(i<3?o(a):i>3?o(t,e,a):o(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a},f=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},p=function(){function n(){}return n=d([e.i(o.b)({declarations:[s.a,c.a],imports:[r.a,i.a,a.a],providers:[l.a],bootstrap:[s.a]}),f("design:paramtypes",[])],n)}()},455:function(n,t,e){"use strict";var r=e(0);e.d(t,"a",function(){return a});var o=this&&this.__decorate||function(n,t,e,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,r);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(a=(i<3?o(a):i>3?o(t,e,a):o(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a},i=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},a=function(){function n(){}return n.prototype.ngOnInit=function(){},n=o([e.i(r.U)({selector:"app-game-img",template:e(609),styles:[e(608)]}),i("design:paramtypes",[])],n)}()},456:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r={production:!0}},608:function(n,t){n.exports=""},609:function(n,t){n.exports="<p>\n  game-img works!\n</p>\n"},630:function(n,t,e){n.exports=e(346)}},[630]);