import { User } from './../models/user.model';
import { Animal } from './../models/animal.model';
import { Injectable } from '@angular/core';
import { DataBaseService } from './data-base.service';

@Injectable()
export class AnimalsService {
public condition: boolean;
  constructor(public dataBaseService: DataBaseService) {
    this.condition = false;
  }

  animals: Animal[] = [
    {
      name: 'Bear', status: 'Teaching children to swim',
      about: 'Native range lies largely within the Arctic Circle',
      rows: 1, cols: 1
    },
    {
      name: 'Duck', status: 'Teaching children to swim',
      about: 'Quack',
      rows: 1, cols: 1
    },
    {
      name: 'Fox', status: 'Hide and seek',
      about: 'What does the fox say?',
      rows: 1, cols: 1
    },
    {
      name: 'Hedgehog', status: 'Teaching children to swim',
      about: 'Keep rollin\'',
      rows: 1, cols: 1
    },
    {
      name: 'Mouse', status: 'Hide and seek',
      about: 'Quick hide!',
      rows: 1, cols: 1
    },
    {
      name: 'Penguin', status: 'Teaching children to swim',
      about: 'Dancing with the stars',
      rows: 1, cols: 1
    },
    {
      name: 'Panda', status: 'Papa was a rolling stone',
      about: 'Not endangered any more',
      rows: 2, cols: 1
    },
    {
      name: 'Piglet', status: 'Teaching children to swim',
      about: 'Pretty in pink',
      rows: 1, cols: 1
    },
    {
      name: 'Turtle', status: 'Fast and furious',
      about: 'Wait for me',
      rows: 1, cols: 2
    },
    {
      name: 'Yoda', status: 'Teaching children to swim',
      about: 'Fear is the path to the dark side',
      rows: 1, cols: 1
    },
  ];

  getAll(): Animal[] {
    return this.animals;
  }

  getAnimalByName(name: string): Animal {
    return this.animals.filter(x => x.name === name)[0];
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
        .catch((err) => alert(err));

  }
}
