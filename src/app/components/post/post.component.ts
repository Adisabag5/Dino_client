import { Component, Input, OnInit } from '@angular/core';
import { UserComment } from 'src/app/models/comment';
import { InteractionsBaseContent } from 'src/app/models/models';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  comments: UserComment[] = [];
  contentData: InteractionsBaseContent | any = {};

  constructor(

  ) { }

  @Input() postData: Post = new Post();

  ngOnInit(): void {
    console.log(this.postData)
    this.setVariables();
  }

  setVariables(){
    this.contentData = {
        id: this.postData.id,
        user_id: this.postData.user_id,
        username: this.postData.username,
        content: this.postData.content,
        date: this.postData.date
      }
    this.comments = this.postData.comments
  }


}
