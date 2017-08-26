import { AnimalsService } from './services/animals.service';
import { Animal } from './models/animal.model';

import { element } from 'protractor';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig, MdDialogRef, MdInputContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  animals: Animal[] = [];
  selectedAnimal: Animal;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private animalsService: AnimalsService,
    private vcr: ViewContainerRef,
    private mdDialog: MdDialog) { }

  ngOnInit(): void {
    this.animals = this.animalsService.getAll();
  }

  showDetails(animal: Animal) {
    // 1. set selected models
    this.selectedAnimal = animal;
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
    (<any>dialog.componentInstance).selectedAnimal = this.selectedAnimal;
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
    const selectedAnimal: Animal = (<any>this.mdDialogRef.componentInstance).selectedAnimal;
    selectedAnimal.messages.push(newMessage);
    // 3. close dialog
    this.mdDialogRef.close();
  }
}
