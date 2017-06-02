import {Component, OnInit} from '@angular/core';
import {GameService} from './game.service'

@Component({
    selector: 'app-root',
    template: `
            <header>
            <h1>{{title}}</h1>
            <div class="gumburger" [class.change]="humburgerToggle" (click)="changeGumburger()" >
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <ul *ngIf="humburgerToggle" class="subMenu">
            <li *ngFor="let prod of games; let i = index;" (click)="curPage(i+1,prod['name'])">{{prod['name']}}</li>
            </ul>
</header>


<!--Made using cycles for test work -->

            <div class="bgImg"></div>
                <div class="container-fluid boxes" *ngFor="let prod of games; let i = index;"  [class.show]="i+1==page">
                <div class="closeX change" (click)="closePage()">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                    <div class="row">
                        <div *ngFor="let img of prod['emojis']" class="col-lg-1 col-md-1 col-sm-2 colMob  imgWrapp">
                            <img  [src]="img"    alt="img">
                         </div>
                     </div>
                 </div>

<footer>
<h2>
{{titleFooter}}
</h2>
</footer>
`,
    styles: [`

    .closeX{
        position: absolute;
        right: 10px;
        top: 70px;
        cursor: pointer;
    }

    .container-fluid.boxes{
    display: none;
    padding: 70px;
    position: relative;
    z-index: 10;
    background: rgba(255,255,255,0.31);
    }

    .bgImg{
    position: fixed;
    background: url("bg2.jpg");
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    }

    header{
    z-index:100;
    height: 60px;
    position:fixed;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(205,205,205,0.6);
    }
     footer{
    z-index:100;
    height: 60px;
        background: rgba(205,205,205,0.6);
    position:fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    }
    
    .wrap{
    margin:60px auto;
    }
    
    .imgWrapp img{
    max-width: 100%;
    vertical-align: middle;
    }
    
    .imgWrapp{
    height:100px;
    overflow: hidden;
    line-height: 100px;
    -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;
    border: 1px solid transparent;
    -webkit-transition: all  0.3s;-moz-transition: all  0.3s;-ms-transition: all  0.3s;-o-transition: all  0.3s;transition: all  0.3s;
    cursor: pointer;
    border-radius: 5px;
    }
    
    .imgWrapp:hover{
        border: 1px solid #3e3e3e;
    }
    
   
    
    header h1, footer h2{
    width:100%;
    text-align: center;
    margin: 0;
    padding: 0;
        line-height: 60px;
    }
    
  
    .gumburger{
    position:absolute;
    top:50%;
    -webkit-transform: translateY(-50%);-moz-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);
    right: 10px;
    display: inline-block;
    cursor: pointer;
    }
    
    .subMenu{
    position:absolute;
    top:100%;
    right:0;
    padding: 0 ;
    z-index:15;
    
    background: rgba(205,205,205,0.6);
    border-top:1px solid #f2f2f2;
    }
   
    
    .subMenu li{
    list-style: none;
    font-size: 16px;
    padding:10px;
    cursor:pointer;
    }
    
    .subMenu li:hover{
        background: rgba(205,205,205,1);
    }
    
    .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

    /* Rotate first bar */
    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-8px, 6px) ;
        transform: rotate(-45deg) translate(-8px, 6px) ;
    }
    
    /* Fade out the second bar */
    .change .bar2 {
        opacity: 0;
    }
    
    /* Rotate last bar */
    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-9px, -8px) ;
        transform: rotate(45deg) translate(-9px, -8px) ;
    }
    
    
    @media screen and (max-width: 425px){    
        header h1, footer h2{
        font-size: 24px;
        }
        
        .colMob{
            width:50%;
            float: left;
            height: 130px;
            line-height: 130px;
        }
    }
    
    @media screen and (min-width: 426px) and (max-width: 600px){
        .colMob{
                width:calc( 100% / 3 );
                float: left;
                height: 130px;
                line-height: 130px;
            }
    }
    
    @media screen and (min-width: 601px) and (max-width: 767px){
        .colMob{
                width:calc( 100% / 4 );
                float: left;
                height: 130px;
                line-height: 130px;
            }
    }
`]
})
export class AppComponent implements OnInit {
    title: string = 'GAME HEADER';
    defaultTitle: string = 'GAME HEADER';

    titleFooter: string = 'GAME FOOTER'
    defaultFooter: string = 'GAME FOOTER'

    games = [];
    page: number = 0;

    humburgerToggle: boolean = false;

    changeGumburger = function () {
        this.humburgerToggle = !this.humburgerToggle;
    }

    curPage(x, name) {
        this.page = x;
        this.humburgerToggle = false;
        this.title = name;
        this.titleFooter = 'MENU FOOTER';
    }

    closePage() {
        this.page = 0;
        this.title = this.defaultTitle;
        this.titleFooter = this.defaultFooter;
    }


    constructor(private gameService: GameService) {
    }

    ngOnInit() {
        this.gameService.getImgs().subscribe(prod => {
            this.games = prod["categories"];


            console.log(this.games);
            console.log(prod);
        })

    }

}
