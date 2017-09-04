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
    {value: 'tour-2', viewValue: 'Big cats', viewDate: '12.09.2017', ticketPrice: 20},
    {value: 'tour-3', viewValue: 'Birds', viewDate: '13.09.2017', ticketPrice: 10},
    {value: 'tour-4', viewValue: 'Jungle', viewDate: '14.09.2017', ticketPrice: 30},
    {value: 'tour-5', viewValue: 'Monkeys', viewDate: '15.09.2017', ticketPrice: 2}
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

public snakes = 'Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes.[2] Like all squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales. Many species of snakes have skulls with several more joints than their lizard ancestors, enabling them to swallow prey much larger than their heads with their highly mobile jaws. To accommodate their narrow bodies, snakes paired organs (such as kidneys) appear one in front of the other instead of side by side, and most have only one functional lung. ';
public big_cats = 'The informal term "big cat" is typically used to refer to any of the four largest (living) members of the entire Panthera genus. Among the five total species within the Panthera genus, these four are the only cats that are able to roar.';
public birds = 'Birds (Aves) are a group of endothermic vertebrates, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.';
public monkeys = 'Monkeys are haplorhine primates, a group generally possessing tails and consisting of about 260 known living species. There are two distinct lineages of monkeys: New World Monkeys and catarrhines. ';

public tours = [
  {value: 'tour-1', name: 'snakes', viewValue: 'Snakes', viewDate: '11.09.2017',
  ticketPrice: 15, info: this.snakes, imgs: ['snakes_0', 'snakes_1', 'snakes_2']},
  {value: 'tour-2', name: 'big_cats', viewValue: 'Big cats', viewDate: '12.09.2017',
  ticketPrice: 20, info: this.big_cats, imgs: ['big_cats_0', 'big_cats_1', 'big_cats_2']},
  {value: 'tour-3', name: 'birds', viewValue: 'Birds', viewDate: '13.09.2017',
  ticketPrice: 10, info: this.birds, imgs: ['birds_0', 'birds_1', 'birds_2']},
  {value: 'tour-4', name: 'jungle', viewValue: 'Jungle', viewDate: '14.09.2017',
  ticketPrice: 30, info: this.big_cats, imgs: ['jungle_0', 'jungle_1', 'jungle_2']},
  {value: 'tour-5', name: 'monkeys', viewValue: 'Monkeys', viewDate: '15.09.2017',
  ticketPrice: 25, info: this.monkeys, imgs: ['monkeys_0', 'monkeys_1', 'monkeys_2']}
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

  getTours() {
    return new Observable( observer => {
      this.tours.forEach( tour => observer.next(tour));
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

