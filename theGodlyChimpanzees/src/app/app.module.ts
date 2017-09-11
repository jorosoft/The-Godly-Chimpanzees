import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './../environments/firebase.config';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginDialogComponent } from './users/login-dialog/login-dialog.component';
import { NavComponent } from './shared/nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CustomToastsManager } from './core/app.toastr.settings';



@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        HeaderComponent,
        HomeComponent,
        NavComponent,
        NotFoundComponent,
        LoginDialogComponent
    ],
    entryComponents: [
        AppComponent,
        LoginDialogComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        CoreModule,
        ToastModule.forRoot(),
        MaterialModule,
    ],
    exports: [
        AboutComponent,
        AppComponent,
        HeaderComponent,
        HomeComponent,
        NavComponent,
        NotFoundComponent,
    ],
    providers: [[{
        provide: ToastsManager, useClass: CustomToastsManager
    }]],
    bootstrap: [AppComponent]
})
export class AppModule { }
