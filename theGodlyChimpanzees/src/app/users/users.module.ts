import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './register/register.component';

import { UsersService } from './../core/users.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule,
        DatePickerModule
    ],
    entryComponents: [],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ProfileComponent],
    providers: []
})
export class UsersModule { }
