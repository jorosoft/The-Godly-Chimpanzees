import { Component, OnInit, DoCheck } from '@angular/core';
import { Ticket } from './../../models/ticket.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { ActivitiesService } from './../../services/activities.service';
import { UsersService } from './../../users/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit, DoCheck {
  public user: any;
  public selectedValue: string;
  public selectedNumberOfAdults = 0;
  public selectedNumberOfChildren = 0;
  public ticketForm: FormGroup;
  public ticketPrice = 0;
  public totalPrice = 0;
  public tickets = [
    {value: 'tour-0', viewValue: 'General', viewDate: '10.09.2017', ticketPrice: 10},
    {value: 'tour-1', viewValue: 'Snakes', viewDate: '11.09.2017', ticketPrice: 15},
    {value: 'tour-2', viewValue: 'Big cats', viewDate: '12.09.2017', ticketPrice: 20}
  ];

  public numbers = [
    {value: 0},
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 7},
    {value: 8},
    {value: 9},
    {value: 10},
    {value: 11},
    {value: 12},
    {value: 13},
    {value: 14},
    {value: 15}
  ];
  public date: DateModel;
  public options: DatePickerOptions;

   constructor(public router: Router, public fb: FormBuilder, public activitiService: ActivitiesService, public userService: UsersService) {
     this.options = new DatePickerOptions();
    }

   ngOnInit() {
     this.createForm();
     this.user = this.userService.getCurrenUser();
     console.log(this.router.url);
   }

   ngDoCheck() {
    const searched = this.tickets.find((el) => el.value === this.selectedValue);
    if (searched) {
      this.ticketPrice = searched.ticketPrice;
    }
    this.totalPrice = this.ticketPrice * ( this.selectedNumberOfChildren / 2 + this.selectedNumberOfAdults);

  }

   createForm() {
    this.ticketForm = this.fb.group({
      selectTicket: ['', [Validators.required]],
      selectDate: ['', [Validators.required]],
      price:  [{value: '', disabled: true}],
      adultsCounter: [0, [Validators.required]],
      childrenCounter: [0, [Validators.required]],
      totalCounter:  [{value: 0, disabled: true}, [Validators.min(1)]]
    });
  }

  get selectTicket() { return this.ticketForm.get('selectTicket'); }
  get selectDate() { return this.ticketForm.get('selectDate'); }
  get price() { return this.ticketForm.get('price'); }
  get adultsCounter() { return this.ticketForm.get('adultsCounter'); }
  get childrenCounter() { return this.ticketForm.get('childrenCounter'); }
  get totalCounter() { return this.ticketForm.get('totalCounter'); }

  onSubmit() {
    if (!this.user) {
      alert('You should log in to proceed!');
      this.router.navigate(['/users/login']);
    } else {
      console.log('Bravo!');
    }
  }
}
