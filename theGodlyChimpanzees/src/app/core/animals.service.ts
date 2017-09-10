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

    animals: Animal[] = [
        {
            name: 'Bear', status: 'Teaching children to swim',
            about: 'Native range lies largely within the Arctic Circle',
            rows: 1, cols: 1,
            zone: 'Z1', type: 'T3'
        },
        {
            name: 'Duck', status: 'Teaching children to swim',
            about: 'Quack',
            rows: 1, cols: 1,
            zone: 'Z2', type: 'T2'
        },
        {
            name: 'Fox', status: 'Hide and seek',
            about: 'What does the fox say?',
            rows: 1, cols: 1,
            zone: 'Z1', type: 'T3'
        },
        {
            name: 'Hedgehog', status: 'Teaching children to swim',
            about: 'Keep rollin\'',
            rows: 1, cols: 1,
            zone: 'Z1', type: 'T1'
        },
        {
            name: 'Mouse', status: 'Hide and seek',
            about: 'Quick hide!',
            rows: 1, cols: 1,
            zone: 'Z3', type: 'T2'
        },
        {
            name: 'Penguin', status: 'Teaching children to swim',
            about: 'Dancing with the stars',
            rows: 1, cols: 1,
            zone: 'Z4', type: 'T1'
        },
        {
            name: 'Panda', status: 'Papa was a rolling stone',
            about: 'Not endangered any more',
            rows: 2, cols: 1,
            zone: 'Z3', type: 'T4'
        },
        {
            name: 'Piglet', status: 'Teaching children to swim',
            about: 'Pretty in pink',
            rows: 1, cols: 1,
            zone: 'Z2', type: 'T2'
        },
        {
            name: 'Turtle', status: 'Fast and furious',
            about: 'Wait for me',
            rows: 1, cols: 2,
            zone: 'Z1', type: 'T3'
        },
        {
            name: 'Yoda', status: 'Teaching children to swim',
            about: 'Fear is the path to the dark side',
            rows: 1, cols: 1,
            zone: 'Z2', type: 'T1'
        },
    ];

    // getAll(): Observable<Animal[]> {
    //     return this.dataBaseService.getItems('animals');
    // }


    getAll(): Animal[] {
        return this.animals;
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
}
