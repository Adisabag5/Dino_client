import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiMethods, ApiResponse } from '../models/constants'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  methods: ApiMethods | undefined;

  constructor(
    private http: HttpClient
  ) { }

  requestCall(api: string, method: ApiMethods, data?: any){
    let response: Observable<any> = new Observable;
    switch (method) {
      case ApiMethods.GET:
        response = this.http.get<any>(`${environment.endpoint}${api}`, {withCredentials: true});
        break;
      case ApiMethods.POST:
        response = this.http.post<any>(`${environment.endpoint}${api}`,data, {withCredentials: true});
        break;
      case ApiMethods.PUT:
        response = this.http.put<any>(`${environment.endpoint}${api}`,data, {withCredentials: true});
        break;
      case ApiMethods.DELETE:
        response = this.http.get<any>(`${environment.endpoint}${api}`, {withCredentials: true});
        break;
      default:
        break;
    }
    return response;
  }
}