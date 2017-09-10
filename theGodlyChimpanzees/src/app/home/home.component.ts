import { LoaderService } from './../services/loader.service';
import { MdSidenav } from '@angular/material';
import { Animal } from './../models/animal.model';
import { AnimalsService } from './../services/animals.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MdSidenav;

    animals: Animal[] = [];
    constructor(private animalsService: AnimalsService,
        private loaderService: LoaderService) { }

    ngOnInit() {
        // show loader
        this.loaderService.display(true);

        this.animals = this.animalsService.getAll();
        // hide loader
        this.loaderService.display(false);
    }

}
