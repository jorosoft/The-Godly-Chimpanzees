import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { ActivitiesService } from './../../services/activities.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataBaseService } from './../../services/data-base.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser: any;
  public items: Observable<any>;

  constructor(private usersService: UsersService, private dataBaseService: DataBaseService) { }

  ngOnInit() {
    this.currentUser = this.usersService.getCurrenUser();
    this.items = this.dataBaseService.getItems('users/' + this.currentUser.uid + '/info/tickets/');
  }


}
