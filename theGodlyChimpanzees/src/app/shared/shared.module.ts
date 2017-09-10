import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommentsComponent } from './comments/comments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMsgDirective } from './directives/error-msg.directive';
import { MyFavToggleDirective } from './directives/my-fav-toggle.directive';

import { ExistingValuePipe } from './pipes/existing-value.pipe';
import { NbPipe } from './pipes/nb.pipe';

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
        CommentsComponent,
        ExistingValuePipe
    ],
    providers: [],
    exports: [
        MyFavToggleDirective,
        NbPipe,
        ErrorMsgDirective,
        CommentsComponent,
        ExistingValuePipe
    ]
})

export class SharedModule { }
