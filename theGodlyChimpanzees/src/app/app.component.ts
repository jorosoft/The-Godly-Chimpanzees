import { ModelsService } from './models.service';
import { Model } from './model';

import { element } from 'protractor';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig, MdDialogRef, MdInputContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  models: Model[] = [];
  selectedModel: Model;

  isDarkTheme = false;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private modelsService: ModelsService,
    private vcr: ViewContainerRef,
    private mdDialog: MdDialog) { }

  ngOnInit(): void {
    this.models = this.modelsService.getAll();
  }

  showDetails(model: Model) {
    // 1. set selected models
    this.selectedModel = model;
    // 2. open sidenav
    // this.sidenav.open();
  }

  addMessage() {
    // Open dialog to add message
    // 1. create dialog config
    const dialogConfig = new MdDialogConfig();
    dialogConfig.viewContainerRef = this.vcr;
    // 2. open dialog
    const dialog = this.mdDialog.open(AddMessageComponent, dialogConfig);
    // 3. pass selected model to dialog - CHECK??
    (<any>dialog.componentInstance).selectedModel = this.selectedModel;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}

@Component({
  selector: 'add-message',
  template: `
  <form (submit)="addMessage()">
    <md-input-container>
      <input mdInput name="message" [(ngModel)]="message" placeholder="Message">
      </md-input-container>
    <button md-raised-button color="accent">Add Message</button>
  </form>
  `
})

export class AddMessageComponent {
  message = '';

  constructor(private mdDialogRef: MdDialogRef<AddMessageComponent>) { }
  addMessage() {
    // 1. create message
    const newMessage = { who: 'Jon Doe', content: this.message };
    // 2. add message to selected model
    const selectedModel: Model = (<any>this.mdDialogRef.componentInstance).selectedModel;
    selectedModel.messages.push(newMessage);
    // 3. close dialog
    this.mdDialogRef.close();
  }
}
