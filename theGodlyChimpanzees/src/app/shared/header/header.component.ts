import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() themeEmitter;

  constructor() {
    this.themeEmitter = new EventEmitter();
  }

  onToggleTheme() {
    this.themeEmitter.emit('switch theme');
  }
}
