import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsersService } from './../../core/users.service';

@Injectable()
export class NotAuthGuardService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const currentUser = this.usersService.getCurrenUser();

        console.log(currentUser + ' currentUser');
        let check = true;

        if (currentUser) {
            check = false;
            this.router.navigate(['/home']);
        } else {
            check = true;
        }


        return check;
    }

    constructor(private usersService: UsersService,
        private router: Router) { }

}
