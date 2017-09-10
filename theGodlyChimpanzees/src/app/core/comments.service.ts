import { DataBaseService } from './data-base.service';
import { Injectable } from '@angular/core';
import { Comment } from './../models/comment.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class CommentsService {

    constructor(private dataBaseService: DataBaseService) { }

    getComments(name: string, collection: string) {
        return this.dataBaseService.getItems('comments/' + collection);
    }

    addComment(comment: Comment, collection: string) {
        return this.dataBaseService.pushItems(comment, 'comments/' + collection);
    }
}
