import { DataBaseService } from './data-base.service';
import { Injectable } from '@angular/core';
import { Comment } from './../models/comment.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class CommentsService {

    comments = {
        animals: [
            new Comment('Bear',
                'Nadia',
                new Date('12.24.2017'),
                'Nice bear'),
            new Comment('Bear',
                'Mimi',
                new Date('1/3/2017'),
                'The polar bear (Ursus maritimus) is a carnivorous bear whose native range lies largely within ... Polar bears hunt their preferred food of seals from the edge of sea ice, often living off fat reserves when no sea ice is present')
        ],
        tours: [],
    };
    constructor(private dataBaseService: DataBaseService) { }

    getCommentsForCollection(collection: string, name: string): Observable<Comment[]> {
        this.validateCollection(collection);

        const obsv = Observable.create((observer: Observer<Comment[]>) => {
            observer.next(this.comments[collection].filter(a => a.name === name));
        });
        return obsv;
        // this.dataBaseService.getItemsPromise('comments/' + name)
        //     .then(c => c);
    }

    addCommentToCollection(collection: string, comment: Comment) {
        this.validateCollection(collection);
        this.comments[collection].push(comment);
        console.log('Comment added');
        console.log(this.comments);
    }

    validateCollection(collection: string) {
        if (!this.comments.hasOwnProperty(collection)) {
            throw new Error('Collection not found');
        }
    }
}
