import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';
import { TourInfoComponent } from './tour-info/tour-info.component';
import { ToursComponent } from './tours/tours.component';
import { CdkTableModule } from '@angular/cdk';
import { CarouselModule } from 'angular4-carousel';
import { DonateComponent } from './donate/donate.component';
import { SharedModule } from '../shared/shared.module';
import { TicketResolve } from './ticket-resolve';
import { ToursResolve } from './tours-resolve';


@NgModule({
    imports: [
        CommonModule,
        CarouselModule,
        ActivitiesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DatePickerModule,
        CdkTableModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [
        TicketsComponent,
        TourInfoComponent,
        ToursComponent,
        DonateComponent
        // ErrorMsgDirective
    ],
    exports: [TicketsComponent, TourInfoComponent, ToursComponent],
    providers: [TicketResolve, ToursResolve]
})
export class ActivitiesModule { }
