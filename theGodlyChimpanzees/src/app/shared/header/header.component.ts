import { Component, Output, EventEmitter, DoCheck} from '@angular/core';
import { UsersService } from './../../users/users.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

  isDarkTheme = false;
  displayName: string;
  constructor( private router: Router, private userService: UsersService) {

   }

   ngDoCheck() {
    this.displayName = this.userService.getCurrenUser() ? this.userService.getCurrenUser().displayName : null;
    }


   logOut() {
    return this.userService.logOut()
              .then(() => {
                this.router.navigate(['']);
              }).catch(function (err) {
                  throw err;
              });
   }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
