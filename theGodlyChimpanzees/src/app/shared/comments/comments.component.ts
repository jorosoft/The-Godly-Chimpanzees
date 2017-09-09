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
  today: number;

  newCommentOpen: boolean;

  constructor(
    private commentsService: CommentsService) { }

  ngOnInit() {
    this.comments = this.commentsService.getCommentsForAnimal(this.animal);
    this.today = Date.now();
    this.newCommentOpen = false;
  }


  toggleNewCommentForm() {
    if (this.currentUser !== null) {
      console.log(this.currentUser);
      // check if user logged in
      // toggle form
    } else {
      console.log('No current user');
      // show log in modal;
    }
    this.newCommentOpen = !this.newCommentOpen;
  }

  createComment(content) {
    // TODO are validations needed here? will validate values in model
    // TODO add check for currentUser
    const newComment = new Comment(this.animal, this.currentUser, this.today, content);
    this.commentsService.addCommentToAnimal(newComment);
    console.log(content);
  }

}
