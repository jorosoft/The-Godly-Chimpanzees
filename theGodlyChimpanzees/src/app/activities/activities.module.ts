import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { MdButtonModule, MdCardModule, MdDialogModule, MdGridListModule, MdIconModule, MdInputModule, MdMenuModule, MdSidenavModule, MdToolbarModule, MdTabsModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule, MdCardModule, MdDialogModule, MdGridListModule, MdIconModule, MdInputModule, MdMenuModule, MdSidenavModule, MdToolbarModule, MdTabsModule
  ],
  declarations: [TicketsComponent]
})
export class ActivitiesModule { }
