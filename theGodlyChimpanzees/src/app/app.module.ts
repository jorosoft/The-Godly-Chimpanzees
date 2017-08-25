import { ModelsService } from './models.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTabsModule,
} from '@angular/material';

import { AppComponent, AddMessageComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    AddMessageComponent
  ],
  entryComponents: [
    AppComponent,
    AddMessageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTabsModule,
    FlexLayoutModule
  ],
  providers: [ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
