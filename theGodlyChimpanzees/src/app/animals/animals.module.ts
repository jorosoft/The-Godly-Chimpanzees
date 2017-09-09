import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
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
    MyFavToggleDirective
  ]
})
export class AnimalsModule { }
