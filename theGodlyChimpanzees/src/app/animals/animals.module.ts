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
  MdSelectModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

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
    MdSelectModule
  ],
  declarations: [
    AnimalsListComponent,
    AnimalDetailsComponent
]
})
export class AnimalsModule {}
