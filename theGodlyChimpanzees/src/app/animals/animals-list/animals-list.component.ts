import { ModelsService } from './../../models.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Model } from '../../model';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

  types;
  zones;
  animals;
  filteredAnimals;
  exampleDatabase;
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  displayedColumns = ['name'];

  constructor(private modelService: ModelsService) { }

  ngOnInit() {
    this.animals = this.modelService.getAll();
    this.filteredAnimals = this.animals.slice(0);
    this.types = this.animals
      .map((animal) => animal.status)
      .filter((value, index, self) => self.indexOf(value) === index);
    this.zones = this.animals
      .map((animal) => animal.about)
      .filter((value, index, self) => self.indexOf(value) === index);
      this.initDB();
  }

 initDB() {
  this.exampleDatabase = new ExampleDatabase(this.filteredAnimals);
  this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
}

  filterAnimals(prop, filter) {
    if (filter.value === 'All') {
      this.filteredAnimals = this.animals.slice(0);
    } else {
      this.filteredAnimals = this.animals.filter(x => x[prop] === filter.value);
    }

    this.initDB();
  }

  search(input) {
    const searchedText = input.value.toLowerCase().trim();
    this.filteredAnimals = this.animals.filter(x => x.name.toLowerCase().includes(searchedText));
    this.initDB();
  }
}

export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Model[]>;

  constructor(animals: Model[]) {
    this.dataChange = new BehaviorSubject<Model[]>(animals);
  }

  get data(): Model[] { return this.dataChange.value; }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Model[]> {
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
