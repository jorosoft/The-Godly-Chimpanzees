import { AnimalsService } from './core/animals.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, resolve: { 'animals': AnimalsService } },
    { path: 'users', loadChildren: './users/users.module#UsersModule' },
    { path: 'animals', loadChildren: './animals/animals.module#AnimalsModule' },
    { path: 'activities', loadChildren: './activities/activities.module#ActivitiesModule' },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

