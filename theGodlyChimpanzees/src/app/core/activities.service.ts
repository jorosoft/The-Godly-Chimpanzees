import { Tour } from './../models/tour.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { DataBaseService } from './data-base.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ActivitiesService {
    items: FirebaseListObservable<any[]>;
    public toastr: ToastsManager;

    public numbers = [
        { value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 },
        { value: 11 },
        { value: 12 },
        { value: 13 },
        { value: 14 },
        { value: 15 }
    ];

    public donate = [
        { value: 'charging', viewValue: 'Charging the account' },
        { value: 'check', viewValue: 'Check current amount' },
        { value: 'donate', viewValue: 'Donate' }
    ];
    public selectedValue: string;


    constructor(public db: AngularFireDatabase, public dataBaseService: DataBaseService) { }

    uploadToDb(tempToursURL, tempTours) {
        return this.dataBaseService.addJSONToDB(tempToursURL, tempTours);
    }

    setSelectedValue(selectedValue: string) {
        this.selectedValue = selectedValue;
    }

    getSelectedValue() {
        return this.selectedValue;
    }

    getNumbers() {
        return new Observable(observer => {
            this.numbers.forEach(number => observer.next(number));
            observer.complete();
        }
        );
    }


    getItems(path: string) {
        if (path === 'donate') {
            return new Observable(observer => {
                this.donate.forEach(tour => observer.next(tour));
                observer.complete();
            });
        }
    }

    getItemsObservable(path: string) {
        return this.dataBaseService.getItems(path);
    }

    getItemsPromise(path: string) {
        return this.dataBaseService.getItemsPromise(path);
    }

    addTickets(arr: string[], user: string) {
        return this.dataBaseService.getItemsPromise('users/' + user + '/info/tickets/')
            .then((lists) => {
                arr = arr.concat(lists.val());
                return this.dataBaseService.addItems(arr, 'users/' + user + '/info/tickets/');
            })
            .catch((err) => this.toastr.error(err.message));
    }

    getCurrentAmount(user: string) {
        return this.dataBaseService.getItemsPromise('users/' + user + '/info/amount/');
    }

    updateCurrentAmount(currentBalance: number, user: string) {
        return this.dataBaseService.addItems(currentBalance, 'users/' + user + '/info/amount/');
    }

    updateAllDonations(allDonations: number) {
        return this.dataBaseService.addItems(allDonations, 'donations/');
    }
    getAllDonations() {
        return this.dataBaseService.getItemsPromise('donations/');
    }

    getAll(): Observable<Tour[]> {
        return this.dataBaseService.getItems('tours');
    }
}

