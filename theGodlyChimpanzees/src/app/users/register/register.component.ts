import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UsersService } from './../users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  user: User;
  array: [any];
  firstPassword: string;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }


  takePassword(ev) {
    this.firstPassword = ev.target.value;
    console.log(this.firstPassword);
  }
  createForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/\S[_a-zA-Z0-9]{4,6}/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[_a-zA-Z0-9]{4,6}/)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(this.firstPassword)]]
    });
  }

  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  // submitted = false;

  // form submit
  onSubmit() {
      this.user = {username: this.username.value + '', email: this.email.value + '', password: this.password.value + '', array: ['test']};
      this.userService.register(this.user)
         .then((confirmation) => {
          console.log(this.userService.getCurrenUser());
          console.log('User Registered');
          this.router.navigate(['/home']);
         })
         .catch((err) => {
          console.log(err);
          throw err;
         });
  }

}
