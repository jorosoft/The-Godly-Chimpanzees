import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { DataBaseService } from './../services/data-base.service';

@Injectable()
export class ActivitiesService {
  items: FirebaseListObservable<any[]>;
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


  constructor(public db: AngularFireDatabase, public dataBaseService: DataBaseService) { }

  getTickets() {
    return new Observable( observer => {
      this.tickets.forEach( ticket => observer.next(ticket));
      observer.complete();
      }
    );
  }
  getNumbers() {
    return new Observable( observer => {
      this.numbers.forEach( number => observer.next(number));
      observer.complete();
      }
    );
  }

  addTickets(arr, user) {
    // this.dataBaseService.getItems('users/' + user + '/info/tickets/').subscribe(value => arr.push(value));

   return this.dataBaseService.getItemsPromise('users/' + user + '/info/tickets/')
        .then((lists) => {
          arr = arr.concat(lists.val());
          return this.dataBaseService.addItems(arr, 'users/' + user + '/info/tickets/');
        })
        .catch((err) => alert(err));
  }

}

