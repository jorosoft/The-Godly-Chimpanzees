import { DataBaseService } from './data-base.service';
import { Injectable } from '@angular/core';
import { Comment } from './../models/comment.model';

@Injectable()
export class CommentsService {

    comments: Comment[] = [
        {
            animalName: 'Bear',
            userName: 'Nadia',
            date: new Date('12.24.2017'),
            subject: 'First comment',
            content: 'Nice bear'
        },
        {
            animalName: 'Bear',
            userName: 'Mimi',
            date: new Date('1/3/2017'),
            subject: 'Second comment',
            content: 'The polar bear (Ursus maritimus) is a carnivorous bear whose native range lies largely within ... Polar bears hunt their preferred food of seals from the edge of sea ice, often living off fat reserves when no sea ice is present'
        }
    ];
    constructor(private dataBaseService: DataBaseService) { }

    getCommentsForAnimal(name: string) {

        return this.comments.filter(a => a.animalName === name);
        // this.dataBaseService.getItemsPromise('comments/' + name)
        //     .then(c => c);
    }

    addCommentToAnimal(comment: Comment) {
        this.comments.push(comment);
    }
}
