import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UsersService } from './../../services/users.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public mouseover = false;
    public registerForm: FormGroup;
    user: User;
    firstPassword: string;
    constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
    }

    ngOnInit() {
        this.createForm();
    }


    takePassword(ev) {
        this.firstPassword = ev.target.value;
        console.log(this.firstPassword);
    }
    createForm() {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required, Validators.pattern(/\S[_a-zA-Z0-9]{4,6}/)]],
            emailR: ['', [Validators.required, Validators.email]],
            passwordR: ['', [Validators.required, Validators.pattern(/[_a-zA-Z0-9]{4,6}/)]]
        });
    }

    get username() { return this.registerForm.get('username'); }
    get emailR() { return this.registerForm.get('emailR'); }
    get passwordR() { return this.registerForm.get('passwordR'); }

    // submitted = false;

    // form submit
    onSubmit() {
        this.user = new User(this.username.value + '', this.emailR.value + '', this.passwordR.value + '', 'tiger');
        this.userService.register(this.user)
            .then((confirmation) => {
                console.log(this.userService.getCurrenUser());
                console.log('User Registered');
                this.router.navigate(['/home']);
            })
            .catch((err) => {
                alert(err);
                throw err;
            });
    }

}
