import { Animal } from './models/animal.model';
import { HeaderComponent } from './shared/header/header.component';

import { element } from 'protractor';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig, MdDialogRef, MdInputContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;

  @ViewChild(HeaderComponent) header: HeaderComponent;
  constructor(private vcr: ViewContainerRef,
    private mdDialog: MdDialog) { }

  ngOnInit(): void {  }
}
