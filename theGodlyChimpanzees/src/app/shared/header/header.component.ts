import { MdDialog } from '@angular/material';
import { LoginDialogComponent } from './../../users/login-dialog/login-dialog.component';
import { Component, Output, EventEmitter, DoCheck } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

    isDarkTheme = false;
    displayName: string;
    constructor(
        private router: Router,

        private loginDialog: MdDialog,
        private userService: UsersService) {

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

    openLoginDialog() {
        this.loginDialog.open(LoginDialogComponent);
    }

}
