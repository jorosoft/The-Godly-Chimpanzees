import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';

@NgModule({
  imports: [
    CommonModule,
    AnimalsRoutingModule
  ],
  declarations: [
    AnimalsListComponent,
    AnimalDetailsComponent
]
})
export class AnimalsModule {}
