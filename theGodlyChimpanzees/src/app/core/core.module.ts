import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomToastsManager } from './app.toastr.settings';
import { ToastsManager } from 'ng2-toastr';

import { UsersGuardService } from './../shared/guards/auth.service';
import { NotAuthGuardService } from './../shared/guards/not-auth-guard.service';

import { UsersService } from './users.service';
import { LoaderService } from './loader.service';
import { DataBaseService } from './data-base.service';
import { CommentsService } from './comments.service';
import { ActivitiesService } from './activities.service';
import { AnimalsService } from './animals.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
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
        }]]
})
export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
