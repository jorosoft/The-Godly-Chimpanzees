import { UsersService } from './../../core/users.service';
import { LoginDialogComponent } from './../../users/login-dialog/login-dialog.component';
import { Comment } from './../../models/comment.model';
import { CommentsService } from './../../core/comments.service';
import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, DoCheck {

    @Input() name: string; // this is animal or tour name
    @Input() collection: string;
    @Input() currentUser;
    comments: Comment[];
    today: number;

    newCommentOpen: boolean;

    constructor(
        public loginDialog: MdDialog,

        public usersService: UsersService,
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

    ngDoCheck() {
        this.currentUser = this.usersService.getCurrenUser() ? this.usersService.getCurrenUser() : { displayName: 'guest' };
    }

    toggleNewCommentForm() {
        if (this.newCommentOpen === false) {
            this.checkCurrentUser();
        }
        this.newCommentOpen = !this.newCommentOpen;
    }

    createComment(formData) {
        this.today = Date.now();
        const newComment = new Comment(this.name, this.currentUser.displayName, this.today, formData.content);

        this.commentsService.addComment(newComment, this.collection)
            .then(res => {
                this.toggleNewCommentForm();
            });
    }

    checkCurrentUser() {
        if (this.currentUser.displayName === 'guest') {
            // open login modal
            this.loginDialog.open(LoginDialogComponent);
        }
    }
}
