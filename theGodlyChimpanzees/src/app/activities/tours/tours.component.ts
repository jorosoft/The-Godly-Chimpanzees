import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ActivitiesService } from './../../services/activities.service';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Tour } from '../../models/tour.model';



@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit, DoCheck {
  public tours = [];
  public types;
  public zones;
  public filteredTours;
  public exampleDatabase;
  public dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

    displayedColumns = ['name'];

  constructor(public activitiService: ActivitiesService, public router: Router) { }

  ngOnInit() {
    this.activitiService.getTours().subscribe(value => this.tours.push(value));
    this.filteredTours = this.tours.slice(0);
    this.types = this.tours
      .map((tour) => tour.viewDate)
      .filter((value, index, self) => self.indexOf(value) === index);
    this.zones = this.tours
      .map((tours) => tours.ticketPrice)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  ngDoCheck() {
    this.exampleDatabase = new ExampleDatabase(this.filteredTours);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
  }

    filterTours(prop, filter) {
      if (filter.value === 'All') {
        this.filteredTours = this.tours.slice(0);
      } else {
        this.filteredTours = this.tours.filter(x => x[prop] === filter.value);
      }
    }

    search(input) {
      const text = input.value;
      const searchedText = text.toLowerCase().trim();
      this.filteredTours = this.tours.filter(x => x.viewValue.toLowerCase().indexOf(searchedText) > -1);
    }
  }

  export class ExampleDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<Tour[]>;

    constructor(public tours: Tour[]) {
      this.dataChange = new BehaviorSubject<Tour[]>(tours);
    }

    get data(): Tour[] { return this.dataChange.value; }
  }

  export class ExampleDataSource extends DataSource<any> {
    constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
      super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Tour[]> {
      const displayDataChanges = [
        this._exampleDatabase.dataChange,
        this._paginator.page,
      ];

      return Observable.merge(...displayDataChanges).map(() => {
        const data = this._exampleDatabase.data.slice();

        // Grab the page's slice of data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        return data.splice(startIndex, this._paginator.pageSize);
      });
    }

    disconnect() {}
  }
