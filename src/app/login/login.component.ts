import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { StoreService } from '../services/store.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  isRegister: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackbar: MatSnackBar,
    private storeService: StoreService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(userRequestType: string){
    //validate user input
    console.log(this.username.value)
    if(this.username.value == ''){
      this.snackbar.open('Username is requierd!','Dismiss', {duration: 2500});
    }
    let functionType = this.loginService.onLogin(this.username.value);

    if(userRequestType == 'register'){
      functionType = this.loginService.onRegister(this.username.value);
    }

    functionType.subscribe(
      rest => { 
        console.log(rest)
        localStorage.setItem('id', rest[0].id)
        localStorage.setItem('username', rest[0].username)
        this.cookieService.set('username', rest[0].username)
        this.storeService.setUserData(rest[0]);
        this.router.navigateByUrl('home')
      },
      error => { console.log(error) }
    );
  }


}
