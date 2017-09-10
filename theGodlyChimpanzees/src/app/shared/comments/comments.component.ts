import { Comment } from './../../models/comment.model';
import { CommentsService } from './../../core/comments.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

    @Input() name: string; // this is animal or tour name
    @Input() collection: string;
    @Input() currentUser;
    comments: Comment[];

    today: number;

    newCommentOpen: boolean;

    constructor(
        private commentsService: CommentsService) { }

    ngOnInit() {
        this.commentsService
            .getComments(this.name, this.collection)
            .subscribe(data => {
                this.comments = data.filter(a => a.name === this.name);
            });
        this.newCommentOpen = false;
        this.today = Date.now();
        this.currentUser = this.currentUser || { displayName: 'guest' };
    }

    toggleNewCommentForm() {
        this.newCommentOpen = !this.newCommentOpen;
    }

    createComment(formData) {
        // TODO are validations needed here? will validate values in model
        // TODO add check for currentUser
        this.today = Date.now();
        const newComment = new Comment(this.name, this.currentUser.displayName, this.today, formData.content);

        this.commentsService.addComment(newComment, this.collection)
            .then(res => {
                this.toggleNewCommentForm();
            });
    }

    checkCurrentUser() {
        if (this.currentUser !== null) {
            console.log(this.currentUser);
            // TODO check if user logged in
        } else {
            // show login in modal;
        }
    }
}
