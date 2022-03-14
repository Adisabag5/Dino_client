import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiMethods, Entity } from 'src/app/models/constants';
import { UploadContent } from 'src/app/models/models';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-text-line-editor',
  templateUrl: './text-line-editor.component.html',
  styleUrls: ['./text-line-editor.component.scss']
})
export class TextLineEditorComponent implements OnInit {

  user_id = 2;
  userInput = new FormControl('', [Validators.required]);
  state: Entity = Entity.post;

  QuillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  }

  constructor(
    private httpService: HttpService,
    private snackbar: MatSnackBar,
    private storeService: StoreService
  ) { }

  @Input() post_id: number = 0;

  ngOnInit(): void {
    this.user_id = this.storeService.loggeUser.id;
    if(this.post_id > 0){
      this.state = Entity.comment;
    }
    console.log(this.post_id)
  }

  onSubmit(){
    if(this.userInput.value == ''){
      return;
    }//'EEEEEE dd/MM/YY'
    let route: string = 'addPost';
    const uploadContent: UploadContent = this.setUploadContentVariables();

    if(this.state == Entity.comment){
      route = 'addComment';
      uploadContent.post_id = this.post_id; 
    }
    console.log(uploadContent)
    this.httpService.requestCall(route,ApiMethods.POST,uploadContent).subscribe(
        rest => { 
          this.snackbar.open('Success!', 'Dismiss', {duration: 3000})
        },
        error => {
          this.snackbar.open('Error! try again', 'Dismiss', {duration: 3000})
          console.log(error)
        },
        () => {
          this.afterPosting();
        }
    );
  }

  afterPosting(){
    
    this.storeService.fetchPosts();
    this.userInput.setValue('');
  }

  setUploadContentVariables(): UploadContent{
    let date = new Date();
    let uploadContent: UploadContent = {content: this.userInput.value, 
                                        date: date.toLocaleString(), 
                                        user_id: this.user_id}
    
    return uploadContent;
  }





}
