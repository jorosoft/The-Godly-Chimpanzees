import { Animal } from './../../models/animal.model';
import { AnimalsService } from '../../core/animals.service';
import { LoaderService } from './../../core/loader.service';
import { UsersService } from './../../core/users.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-animal-details',
    templateUrl: './animal-details.component.html',
    styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
    currentUser;
    animal: Animal;

    public condition: boolean;

    constructor(public usersService: UsersService,
        private animalService: AnimalsService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private loaderService: LoaderService, public toastr: ToastsManager) { }

    ngOnInit() {
        // show loader
        this.loaderService.display(true);

        this.activatedRoute.params.subscribe(params => {
            const name = params['name'];
            this.animal = this.animalService.getAnimalByName(name);
            this.currentUser = this.usersService.getCurrenUser();
        });
        if (this.currentUser) {
            this.animalService.checkStatus(this.animal.name, this.currentUser.uid)
                .then((item) => {
                    console.log('ngOnInIT');
                    console.log(item.val());
                    console.log(this.condition);
                    this.condition = item.val();
                })
                .catch((err) => this.toastr.error(err.message));
        }
        // hide loader
        this.loaderService.display(false);
    }

    backToList() {
        this.router.navigateByUrl('animals/all');
    }

    adoptAnimal() {
        this.animalService.adoptAnimal(this.animal.name, this.currentUser.uid)
            .then(() => this.toastr.success('Success adopt!'))
            .catch((err) => this.toastr.error(err.message));
    }

    favAnimal() {
        this.animalService.addFavAnimal(this.animal.name, this.currentUser.uid)
            .then((item) => this.condition = item.val())
            .catch((err) => this.toastr.error(err.message));
    }
}
