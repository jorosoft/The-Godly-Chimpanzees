import { Component, OnInit, DoCheck } from '@angular/core';
import { Ticket } from './../../models/ticket.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { ActivitiesService } from './../../core/activities.service';
import { UsersService } from './../../core/users.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit, DoCheck {
    public mouseover = false;
    public user: any;
    public selectedValue: string;
    public selectedNumberOfAdults = 0;
    public selectedNumberOfChildren = 0;
    public ticketForm: FormGroup;
    public ticketPrice = 0;
    public totalPrice = 0;
    // public tickets: Observable<any>;
    public tickets = [];
    public numbers = [];
    public date: DateModel;
    public options: DatePickerOptions;
    public newTicket: Ticket;
    public searched: any;
    public errorMsg: string;

    constructor(public router: Router, public fb: FormBuilder,
        public activitiService: ActivitiesService, public userService: UsersService, public toastr: ToastsManager) {

    }

    ngOnInit() {
        this.user = this.userService.getCurrenUser();
        // this.activitiService.getTickets().subscribe(value => this.tickets.push(value));
        this.activitiService.getItemsPromise('tickets/')
            .then((res) => {
                res.forEach(element => {
                    this.tickets.push(element);
                });
                console.log(this.tickets);
                this.createForm();
                this.options = new DatePickerOptions();
                this.activitiService.getNumbers().subscribe(number => this.numbers.push(number));
                const tempValue = this.activitiService.getSelectedValue();
                if (tempValue) {
                    this.selectedValue = tempValue;
                }
                this.errorMsg = 'Please choose an event type or a date!';

            });
            }

    ngDoCheck() {
        this.searched = this.tickets.find((el) => el.value === this.selectedValue);
        if (this.searched) {
            this.ticketPrice = this.searched.ticketPrice;
        }
        this.totalPrice = this.ticketPrice * (this.selectedNumberOfChildren / 2 + this.selectedNumberOfAdults);

    }

    createForm() {
        this.ticketForm = this.fb.group({
            selectTicket: ['', [Validators.required]],
            selectDate: ['', [Validators.required]],
            price: [{ value: '', disabled: true }],
            adultsCounter: [0, [Validators.required]],
            childrenCounter: [0, [Validators.required]],
            totalCounter: [{ value: 0, disabled: true }, [Validators.min(1)]]
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
            this.toastr.error('You should log in to proceed!');
            this.router.navigate(['/users/login']);
        } else {
            const addTickets = [];
            for (let i = 1; i <= this.adultsCounter.value; i += 1) {
                addTickets.push(new Ticket(this.searched.viewValue, this.searched.viewDate, this.searched.ticketPrice, 'adult'));
            }
            for (let i = 1; i <= this.childrenCounter.value; i += 1) {
                addTickets.push(new Ticket(this.searched.viewValue, this.searched.viewDate, this.searched.ticketPrice / 2, 'child'));
            }
            this.activitiService.addTickets(addTickets, this.user.uid)
                .then((conf) => this.toastr.success('Done! Please check you profile page, where you can see your tickets'))
                .catch((err) => this.toastr.error(err.message));
        }
    }
}
