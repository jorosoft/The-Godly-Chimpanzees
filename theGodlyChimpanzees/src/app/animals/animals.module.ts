import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CdkTableModule } from '@angular/cdk';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CdkTableModule,
    FormsModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    AnimalsListComponent,
    AnimalDetailsComponent
    // MyFavToggleDirective
  ]
})
export class AnimalsModule { }
