import { ActivatedRoute } from '@angular/router';
import { MdSidenav } from '@angular/material';
import { Animal } from './../models/animal.model';
import { AnimalsService } from './../core/animals.service';
import { LoaderService } from './../core/loader.service';
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

        private activatedRoute: ActivatedRoute,
        private loaderService: LoaderService) { }

    ngOnInit() {
        // show loader
        this.loaderService.display(true);
        this.animals = this.activatedRoute.snapshot.data['animals'];
        // this.animals = this.animalsService.getAll();
        // this.animalsService.getAll().subscribe(data => this.animals = data);
        // hide loader
        this.loaderService.display(false);
    }

}
