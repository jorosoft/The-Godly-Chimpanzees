import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
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
  public animals: Observable<any>;
  public  step = 0;
  public datePickerOptions = {
    format: 'DD.MM.YYYY',
    locale: 'bg',
    minDate: new Date(),
    maxDate: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 50);
        return date;
    })(),
};
  constructor(private usersService: UsersService, private dataBaseService: DataBaseService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.usersService.getCurrenUser();
    this.items = this.dataBaseService.getItems('users/' + this.currentUser.uid + '/info/tickets/');
    this.animals = this.dataBaseService.getItems('users/' + this.currentUser.uid + '/info/favs/');
    // this.animals.subscribe((val) => console.log(val));
  }


    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
    }

  redirectTo(rout: string) {
    // this.router.navigateByUrl('animals/' + animal.$key);
    return this.router.navigateByUrl(rout);
  }
}
