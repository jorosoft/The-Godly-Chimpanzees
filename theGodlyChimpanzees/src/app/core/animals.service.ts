import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { User } from './../models/user.model';
import { Animal } from './../models/animal.model';
import { Injectable } from '@angular/core';
import { DataBaseService } from './data-base.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Injectable()
export class AnimalsService {
    public condition: boolean;
    constructor(public dataBaseService: DataBaseService, public toastr: ToastsManager) {
        this.condition = false;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.getItemsObservable('animals/')
            .map((x) => x).first();
    }


    getAll(): Observable<Animal[]> {
        return this.dataBaseService.getItems('animals');
    }


    // getAll(): Animal[] {
    //     return this.animals;
    // }

    getItemsObservable(path: string) {
        return this.dataBaseService.getItems(path);
    }

    // getAnimalByName(name: string): Animal {
    //     return this.animals.filter(x => x.name === name)[0];
    // }

    getAnimalByName(name: string) {
        console.log(name);

        let animal;
        const q = {
            key: 'name',
            value: name
        };

        this.dataBaseService.getItem(q, 'animals')
            .then(res => {
                console.log(res);
                animal = res;
                console.log(animal);
            });
        console.log('RETURN RETURN');
        console.log(animal);
        // return animal as Animal;

        return {
            name: 'Bear', status: 'Teaching children to swim',
            about: 'Native range lies largely within the Arctic Circle',
            rows: 1, cols: 1,
            zone: 'Z1', type: 'T3'
        } as Animal;
    }

    checkStatus(animal: string, user: string) {
        const collectionPath = 'users/' + user + '/info/favs/';
        return this.dataBaseService.getItemsPromise(collectionPath + animal);
    }

    addFavAnimal(animal: string, user: string) {
        // let arr = [animal];
        const collectionPath = 'users/' + user + '/info/favs/';
        return this.dataBaseService.getItemsPromise(collectionPath + animal)
            .then((item) => {
                if (item.val()) {
                    return this.dataBaseService.removeItem(collectionPath, animal);
                } else {
                    return this.dataBaseService.addItemsObjects(animal, collectionPath);
                }
            })
            .then(() => {
                return this.dataBaseService.getItemsPromise(collectionPath + animal);
            })
            .catch((err) => this.toastr.error(err.message));

    }

    uploadToDb(tempToursURL, tempTours) {
        return this.dataBaseService.addJSONToDB(tempToursURL, tempTours);
    }
    adoptAnimal(animal: string, user: string) {
        this.getAnimalByName(animal).owner = user;

        const collectionPath = 'users/' + user + '/adoptedAnimals/';
        return this.dataBaseService.getItemsPromise(collectionPath + animal)
            .then(() => {
                return this.dataBaseService.addItemsObjects(animal, collectionPath);
            })
            .then(() => {
                return this.dataBaseService.getItemsPromise(collectionPath + animal);
            })
            .catch((err) => this.toastr.error(err.message));
    }
}
