
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersGuardService } from './../shared/guards/auth.service';
import { NotAuthGuardService } from './../shared/guards/not-auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuardService]},
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuardService]},
  { path: 'profile', component: ProfileComponent, canActivate: [UsersGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
