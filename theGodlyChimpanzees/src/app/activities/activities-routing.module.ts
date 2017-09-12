
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';
import { ToursComponent } from './tours/tours.component';
import { TourInfoComponent } from './tour-info/tour-info.component';
import { DonateComponent } from './donate/donate.component';
import { UsersGuardService } from './../shared/guards/auth.service';
import { TicketResolve } from './ticket-resolve';
import { ToursResolve } from './tours-resolve';

const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketsComponent, resolve: { 'tickets': TicketResolve}},
  { path: 'tours', component: ToursComponent, resolve: { 'tours': ToursResolve}},
  { path: 'donate', component: DonateComponent, canActivate: [UsersGuardService]},
  { path: ':name', component: TourInfoComponent, resolve: { 'tours': ToursResolve}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
