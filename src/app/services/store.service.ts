import { Injectable } from '@angular/core';
import { ApiMethods } from 'src/app/models/constants';
import { HttpService } from 'src/app/services/http.service';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserComment } from '../models/comment';
import { Post } from '../models/post';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  loggeUser: User = new User(0,'');

  posts_list = new BehaviorSubject<Post[]>([]);
  postsListObserver = this.posts_list.asObservable();

  constructor(    
    private httpService: HttpService,
    private snackbar: MatSnackBar
    ) { 
      if(localStorage.getItem('username') && localStorage.getItem('username') !== null){
        this.loggeUser = new User(Number(localStorage.getItem('id')), String(localStorage.getItem('username')))
      }
    }

  setUserData(user: User){
    this.loggeUser.id = user.id;
    this.loggeUser.username = user.username;
  }

  getLoggedUser(){
    return this.loggeUser;
  }

  setPostsList(updatedList: Post[]){
    this.posts_list.next(updatedList);
  }

  setCommentsForSelectedPost(post_id:number, updatedCommentList: UserComment[]){
    this.posts_list.getValue().forEach(
        item => { 
          if(item.id == post_id){
            item.comments = updatedCommentList;
            this.setPostsList(this.posts_list.getValue());
          }
        }
    )
  }

  fetchPosts(){
    this.httpService.requestCall('getPosts', ApiMethods.GET)
          .subscribe((rest: Post[]) => {
                        console.log(rest)
                        this.setPostsList(rest);
                        this.snackbar.open('Success, post list refreshed', 'Dismiss', {duration: 2500})
                      },
                      error => {
                        this.snackbar.open('Error!', 'Dismiss', {duration: 2500})
                      }
                    )
  }

  fetchComments(post_id: number){
    return this.httpService.requestCall('getComments', ApiMethods.POST, { post_id: post_id}).subscribe(
      result => {
        this.setCommentsForSelectedPost(post_id, result);
      }
    );            
  }
}
