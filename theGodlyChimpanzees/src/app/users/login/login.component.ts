import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[_a-zA-Z0-9]{4,6}/)]]
    });
  }

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  // submitted = false;

  // form submit
  onSubmit() {
      this.userService.logIn(this.email.value, this.password.value)
         .then((confirmation) => console.log('User Registered'))
         .catch((err) => {
          console.log(err);
          throw err;
         });
  }

}
