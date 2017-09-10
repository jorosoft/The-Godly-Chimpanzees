import { LoginDialogComponent } from './users/login-dialog/login-dialog.component';
import { LoaderService } from './services/loader.service';
import { MaterialModule } from './shared/material/material.module';
import { CustomToastsManager } from './app.toastr.settings';
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
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AnimalsModule } from './animals/animals.module';
import { AppRoutingModule } from './app-routing.module';
import { ActivitiesModule } from './activities/activities.module';

import { ActivitiesService } from './services/activities.service';
import { AnimalsService } from './services/animals.service';
import { CommentsService } from './services/comments.service';
import { DataBaseService } from './services/data-base.service';
import { NotAuthGuardService } from './shared/guards/not-auth-guard.service';
import { UsersGuardService } from './shared/guards/auth.service';
import { UsersService } from './services/users.service';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';


@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        FooterComponent,
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
        MaterialModule,
        FlexLayoutModule,
        ActivitiesModule,
        ToastModule.forRoot()
    ],
    exports: [
        AboutComponent,
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        NavComponent,
        NotFoundComponent,
        // AddMessageComponent
    ],
    providers: [
        AnimalsService,
        ActivitiesService,
        CommentsService,
        DataBaseService,
        LoaderService,
        NotAuthGuardService,
        UsersGuardService,
        UsersService,
        [{
            provide: ToastsManager, useClass: CustomToastsManager
        }]],
    bootstrap: [AppComponent]
})
export class AppModule { }
