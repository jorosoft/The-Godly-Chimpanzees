import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CommentsComponent } from './../shared/comments/comments.component';
import {
  MdPaginatorModule,
  MdTableModule,
  MdGridListModule,
  MdSidenavModule,
  MdListModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdSelectModule,
  MdTooltipModule,
  MdButtonModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { MyFavToggleDirective } from './../shared/directives/my-fav-toggle.directive';



@NgModule({
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CdkTableModule,
    FormsModule,
    MdTableModule,
    MdPaginatorModule,
    MdGridListModule,
    MdSidenavModule,
    MdListModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdTooltipModule,
    MdButtonModule
  ],
  declarations: [
    AnimalsListComponent,
    AnimalDetailsComponent,
    CommentsComponent,
    MyFavToggleDirective
  ]
})
export class AnimalsModule { }
