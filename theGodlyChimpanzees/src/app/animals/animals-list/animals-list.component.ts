import { LoaderService } from './../../services/loader.service';
import { AnimalsService } from './../../services/animals.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Animal } from '../../models/animal.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-animals-list',
    templateUrl: './animals-list.component.html',
    styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

    types;
    zones;
    selectedType: string;
    selectedZone: string;
    animals;
    filteredAnimals;
    exampleDatabase;
    dataSource: ExampleDataSource | null;

    @ViewChild(MdPaginator) paginator: MdPaginator;

    displayedColumns = ['name'];

    constructor(private animalService: AnimalsService,
        public router: Router,
        private loaderService: LoaderService) { }

    ngOnInit() {
        // show loader
        this.loaderService.display(true);
        this.animals = this.animalService.getAll();
        this.filteredAnimals = this.animals.slice(0);
        this.types = this.animals
            .map((animal) => animal.type)
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort();
        this.zones = this.animals
            .map((animal) => animal.zone)
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort();
        this.initDB();
        // hide loader
        this.loaderService.display(false);
    //     const tempToursURL = 'animals/';
    //   const tempTours = this.animals;
    //   this.animalService.uploadToDb(tempToursURL, tempTours);
    }

    initDB() {
        this.exampleDatabase = new ExampleDatabase(this.filteredAnimals);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }

    filterAnimals(prop, filter) {
        if (filter.value === 'All') {
            this.filteredAnimals = this.animals.slice(0);
            this.selectedType = null;
            this.selectedZone = null;
        } else {
            if (prop === 'type') {
                this.selectedType = filter.value;
            }

            if (prop === 'zone') {
                this.selectedZone = filter.value;
            }

            if (this.selectedType && this.selectedZone) {
                this.filteredAnimals = this.animals
                    .filter(x => x.type === this.selectedType && x.zone === this.selectedZone);
            } else if (this.selectedType) {
                this.filteredAnimals = this.animals.filter(x => x.type === this.selectedType);
            } else if (this.selectedZone) {
                this.filteredAnimals = this.animals.filter(x => x.zone === this.selectedZone);
            }
        }

        this.initDB();
    }

    search(input) {
        const searchedText = input.value.toLowerCase().trim();
        this.filteredAnimals = this.animals.filter(x => x.name.toLowerCase().includes(searchedText));
        this.initDB();
    }

    redirectToUrl(toUrl) {
        this.router.navigateByUrl('animals/' + toUrl);
    }

}

export class ExampleDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<Animal[]>;

    constructor(animals: Animal[]) {
        this.dataChange = new BehaviorSubject<Animal[]>(animals);
    }

    get data(): Animal[] { return this.dataChange.value; }
}

export class ExampleDataSource extends DataSource<any> {
    constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Animal[]> {
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

    disconnect() { }
}
