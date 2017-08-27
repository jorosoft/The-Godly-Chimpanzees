import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isDarkTheme = false;

  constructor() { }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
