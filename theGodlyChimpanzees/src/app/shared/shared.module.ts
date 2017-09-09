import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavToggleDirective } from './directives/my-fav-toggle.directive';
import { NbPipe } from './pipes/nb.pipe';
import { ErrorMsgDirective } from './directives/error-msg.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyFavToggleDirective, NbPipe, ErrorMsgDirective],
  providers: []
})
export class SharedModule { }
