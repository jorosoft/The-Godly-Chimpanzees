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
  MdButtonModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { SharedModule } from '../shared/shared.module';



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
    MdButtonModule,
    SharedModule
  ],
  declarations: [
    AnimalsListComponent,
    AnimalDetailsComponent
]
})
export class AnimalsModule {}
