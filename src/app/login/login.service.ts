import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  onLogin(username: string){
    return this.http.post<any>('http://localhost:8080/login', {username: username});
  }

  onLogout(){

  }

  onRegister(username: string){
    return this.http.post<any>('http://localhost:8080/register', {username: username});
  }
}
