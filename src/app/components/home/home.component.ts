import { Component, OnInit } from '@angular/core';
import { ApiMethods } from 'src/app/models/constants';
import { Post } from 'src/app/models/post';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postList: Post[] = [];

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    
    this.storeService.fetchPosts();
    this.storeService.postsListObserver.subscribe(
       rest => {
         this.postList = rest
         console.log(this.postList)
        }
     );
  }

}
