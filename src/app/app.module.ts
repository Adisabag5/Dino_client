import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { TextLineEditorComponent } from './components/text-line-editor/text-line-editor.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './components/content/content.component';
import { CookieService } from 'ngx-cookie-service';
import { RichTextEditorModule, ToolbarService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostComponent,
    CommentComponent,
    TextLineEditorComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RichTextEditorModule,
    QuillModule.forRoot()
  ],
  providers: [
    CookieService,
    ToolbarService, 
    HtmlEditorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
