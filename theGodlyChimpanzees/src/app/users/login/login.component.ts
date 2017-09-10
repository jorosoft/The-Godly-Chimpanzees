import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public mouseover = false;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
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
         .then((confirmation) => this.router.navigate(['/home']))
         .catch((err) => {
          console.log(err);
          throw err;
         });
  }

}
