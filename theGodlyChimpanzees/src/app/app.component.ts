import { Animal } from './models/animal.model';
import { HeaderComponent } from './shared/header/header.component';

import { element } from 'protractor';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig, MdDialogRef, MdInputContainer } from '@angular/material';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public imageSources: string[] = [
    'assets/tours/snakes/snakes_0.jpg',
    'assets/tours/snakes/snakes_1.png',
    'assets/tours/snakes/snakes_2.jpg'
 ];

 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 2000,
   stopAutoplayMinWidth: 768
 };
  @ViewChild('sidenav') sidenav: MdSidenav;

  @ViewChild(HeaderComponent) header: HeaderComponent;
  constructor(private vcr: ViewContainerRef,
    private mdDialog: MdDialog) { }

  ngOnInit(): void {  }
}
