import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './../environments/firebase.config';


import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTooltipModule,
  MdTabsModule,
  MdDatepickerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { AppRoutingModule } from './app-routing.module';
import { ActivitiesModule } from './activities/activities.module';

import { ActivitiesService } from './services/activities.service';
import { AnimalsService } from './services/animals.service';
import { CommentsService } from './services/comments.service';
import { DataBaseService } from './services/data-base.service';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    // AddMessageComponent
  ],
  entryComponents: [
    AppComponent,
    // AddMessageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
    MdTabsModule,
    MdDatepickerModule,
    FlexLayoutModule,
    ActivitiesModule
  ],
  exports: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    // AddMessageComponent
  ],
  providers: [
    AnimalsService,
    ActivitiesService,
    CommentsService,
    DataBaseService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
