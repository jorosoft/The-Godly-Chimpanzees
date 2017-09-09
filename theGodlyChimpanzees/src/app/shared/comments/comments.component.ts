import { Comment } from './../../models/comment.model';
import { CommentsService } from './../../services/comments.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() animal: string;
  @Input() currentUser;
  comments: Comment[];

  today: Date;

  newCommentOpen: boolean;

  constructor(
    private commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService
      .getCommentsForCollection('animals', this.animal)
      .subscribe(data => this.comments = data);
    this.newCommentOpen = false;
    this.today = new Date(Date.now());
    this.currentUser = this.currentUser || { displayName: 'guest' };
  }


  toggleNewCommentForm() {
    // toggle form
    this.newCommentOpen = !this.newCommentOpen;
  }

  createComment(formData) {
    // TODO are validations needed here? will validate values in model
    // TODO add check for currentUser
    const user = this.currentUser || { displayName: 'guest' };
    this.today = new Date(Date.now());
    const newComment = new Comment(this.animal, user.displayName, this.today, formData.content);
    console.log(newComment);
    this.commentsService.addCommentToCollection('animals', newComment);
    this.toggleNewCommentForm();
    console.log(user);
  }

  checkCurrentUser() {
    if (this.currentUser !== null) {
      console.log(this.currentUser);
      // TODO check if user logged in
    } else {
      // show login in modal;
      console.log('No current user, setting to guest');
      this.currentUser = { displayName: 'guest' };
    }
  }
}
