import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavToggleDirective } from './directives/my-fav-toggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyFavToggleDirective],
  providers: []
})
export class SharedModule { }
