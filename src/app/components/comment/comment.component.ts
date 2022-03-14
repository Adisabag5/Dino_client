import { Component, Input, OnInit } from '@angular/core';
import { UserComment } from 'src/app/models/comment';
import { InteractionsBaseContent } from 'src/app/models/models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  post_id: number = 0;
  contentData: InteractionsBaseContent | null = null;

  constructor() { }

  @Input() commentData: UserComment = new UserComment();

  ngOnInit(): void {
    this.setVariables();
  }

  setVariables(){
    this.post_id = this.commentData.post_id;
    this.contentData = { 
        id: this.commentData.id,
        user_id: this.commentData.user_id,
        username: this.commentData.username,
        content: this.commentData.content,
        date: this.commentData.date
      }
  }

}
