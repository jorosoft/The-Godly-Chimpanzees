import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UsersService } from './../users.service';
// import { usernameRegEx, passwordRegEx } from './../../helpers/patterns';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private registerForm: FormGroup;
  user: User

  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  // submitted = false;

  // form submit
  onSubmit() {
      this.user = {username: this.username.value+'', email: this.email.value+'', password: this.password.value+''};
      this.userService.register(this.user)
         .then((confirmation) => console.log('User Registered'))
         .catch((err) => {
          console.log(err);
          throw err;
         });
  }

}
