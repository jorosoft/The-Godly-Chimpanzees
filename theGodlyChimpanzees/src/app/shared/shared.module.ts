import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { CommentsComponent } from './comments/comments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavToggleDirective } from './directives/my-fav-toggle.directive';
import { NbPipe } from './pipes/nb.pipe';
import { ErrorMsgDirective } from './directives/error-msg.directive';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    MyFavToggleDirective,
    NbPipe,
    ErrorMsgDirective,
    CommentsComponent
  ],
  providers: [],
  exports: [
    MyFavToggleDirective,
    NbPipe,
    ErrorMsgDirective,
    CommentsComponent
  ]
})

export class SharedModule { }
