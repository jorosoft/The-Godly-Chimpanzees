import { AnimalsService } from './../core/animals.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: AnimalsListComponent, resolve: { 'animals': AnimalsService } },
    { path: ':name', component: AnimalDetailsComponent, resolve: { 'animals': AnimalsService } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnimalsRoutingModule { }
