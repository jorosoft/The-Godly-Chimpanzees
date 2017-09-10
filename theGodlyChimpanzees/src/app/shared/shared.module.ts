import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommentsComponent } from './comments/comments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavToggleDirective } from './directives/my-fav-toggle.directive';
import { NbPipe } from './pipes/nb.pipe';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { ExistingValuePipe } from './pipes/existing-value.pipe';
import { FilterPipe } from './pipes/filter.pipe';

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
        ExistingValuePipe,
        FilterPipe
    ],
    providers: [],
    exports: [
        MyFavToggleDirective,
        NbPipe,
        ErrorMsgDirective,
        CommentsComponent,
        ExistingValuePipe,
        FilterPipe
    ]
})

export class SharedModule { }
