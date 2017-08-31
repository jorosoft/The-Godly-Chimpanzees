
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersGuardService } from './guards/users-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [UsersGuardService]}
  // { path: ':id', component: UsersListComponent, canActivate: [UsersGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
