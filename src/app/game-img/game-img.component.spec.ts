/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameImgComponent } from './game-img.component';

describe('GameImgComponent', () => {
  let component: GameImgComponent;
  let fixture: ComponentFixture<GameImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
