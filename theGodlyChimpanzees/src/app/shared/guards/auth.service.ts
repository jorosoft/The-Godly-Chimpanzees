import { Injectable  } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsersService } from './../../users/users.service';

@Injectable()
export class UsersGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const currentUser = !!this.usersService.getCurrenUser();

    console.log(currentUser + ' currentUser');
    let check = true;

    if (currentUser) {
      check = true;
    } else {
      this.router.navigate(['/users/login']);
      check = false;
    }


    return check;
  }

  constructor(private usersService: UsersService,
  private router: Router) { }

}
