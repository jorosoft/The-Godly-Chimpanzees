
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';
import { ToursComponent } from './tours/tours.component';
import { TourInfoComponent } from './tour-info/tour-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketsComponent},
  { path: 'tours', component: ToursComponent},
  { path: ':name', component: TourInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
