import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { UsersService } from './../../core/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
    loginForm: FormGroup;
    public mouseover = false;

    constructor(private fb: FormBuilder,
        private userService: UsersService,
        public dialogRef: MdDialogRef<LoginDialogComponent>) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/[_a-zA-Z0-9]{4,6}/)]]
        });
    }

    get email() { return this.loginForm.get('email'); }
    get password() { return this.loginForm.get('password'); }

    // submitted = false;

    // form submit
    onSubmit() {
        this.userService.logIn(this.email.value, this.password.value)
            .then((confirmation) => this.dialogRef.close('Pizza!'))
            .catch((err) => {
                console.log(err);
                throw err;
            });
    }
}
