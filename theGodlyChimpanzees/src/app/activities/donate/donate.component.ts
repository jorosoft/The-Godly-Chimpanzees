import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { ActivitiesService } from './../../services/activities.service';
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  public donateForm: FormGroup;
  public selectedValue: string;
  public user: any;
  public options = [];
  public amount: Observable<any>;
  public inputValue = 0;
  public currentBalance: number;
  public donationsValue: number;

  constructor(public router: Router, public fb: FormBuilder,
    public activitiService: ActivitiesService, public userService: UsersService, public toastr: ToastsManager) {

}

ngOnInit() {
  this.createForm();
  this.user = this.userService.getCurrenUser();
  this.activitiService.getItems('donate').subscribe(value => this.options.push(value));
  this.activitiService.getCurrentAmount(this.user.uid)
            .then((val) => this.currentBalance = +val.val() || 0);
  this.activitiService.getAllDonations()
            .then((val) => this.donationsValue = +val.val() || 0)

  }

  createForm() {
    this.donateForm = this.fb.group({
      selectOption: ['', [Validators.required]],
      count: [0, [Validators.required, Validators.min(1)]],
      allDonations: [{value: 0, disabled: true}]
    });
  }

  get selectOption() { return this.donateForm.get('selectOption'); }
  get count() { return this.donateForm.get('count'); }
  get allDonations() {return this.donateForm.get('allDonations');}

  fillTheInput(selectedValue: string) {
    if (selectedValue === 'donate') {
      this.inputValue = 0;
    } else if ( selectedValue === 'check' ) {
      this.inputValue = this.currentBalance;
    } else if ( selectedValue === 'charging' ) {
      this.inputValue = 0;
    }
  }

  onSubmit() {
    const forAmountUpdate = this.count.value;
    if (this.selectOption.value === 'donate') {
      if (forAmountUpdate > this.currentBalance) {
        this.toastr.error('Not enought money in the bank account!');
        return;
      } else {
        this.currentBalance -= forAmountUpdate;
        this.donationsValue += forAmountUpdate;
      }
    } else if ( this.selectOption.value === 'charging' ) {
      this.currentBalance += forAmountUpdate;
    }
    return this.activitiService.updateCurrentAmount(this.currentBalance, this.user.uid)
            .then((conf) => {
              if (this.selectOption.value === 'donate') {
                this.toastr.success('Thank you for your help!');
              } else if ( this.selectOption.value === 'charging' ) {
                this.toastr.success('Done!');
              }
              return this.activitiService.updateAllDonations(this.donationsValue);
            })
            .catch((err) => {
              this.toastr.error(err.message);
              throw (err);
            });
  }


}



