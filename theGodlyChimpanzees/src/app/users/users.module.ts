import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './register/register.component';

import { UsersService } from './users.service';
import { MdButtonModule, MdCardModule, MdDialogModule, MdGridListModule, MdIconModule, MdInputModule, MdMenuModule, MdSidenavModule, MdToolbarModule, MdTabsModule,} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { UsersGuardService } from './guards/users-guard.service';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
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
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  providers: [
    // UsersService,
    UsersGuardService
]
})
export class UsersModule { }
