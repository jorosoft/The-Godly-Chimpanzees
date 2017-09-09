import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { MdSelectModule, MdButtonModule, MdCardModule, MdDialogModule, MdGridListModule, MdIconModule, MdInputModule, MdMenuModule, MdSidenavModule, MdToolbarModule, MdTabsModule, MdDatepickerModule, MdTooltipModule, MdAutocompleteModule, MdButtonToggleModule, MdCheckboxModule, MdTableModule, MdNativeDateModule, MdExpansionModule, MdListModule, MdCoreModule, MdPaginatorModule, MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule, MdRippleModule, MdSlideToggleModule, MdSliderModule, MdSnackBarModule, MdSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';
import { TourInfoComponent } from './tour-info/tour-info.component';
import { ToursComponent } from './tours/tours.component';
import { CdkTableModule } from '@angular/cdk';
import { CarouselModule } from 'angular4-carousel';
import { DonateComponent } from './donate/donate.component';
import { NbPipe } from '../shared/pipes/nb.pipe';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    ActivitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdTableModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    DatePickerModule,
    CdkTableModule
  ],
  declarations: [
    TicketsComponent,
    TourInfoComponent,
    ToursComponent,
    DonateComponent,
    NbPipe],
  exports: [TicketsComponent, TourInfoComponent, ToursComponent]
})
export class ActivitiesModule { }
