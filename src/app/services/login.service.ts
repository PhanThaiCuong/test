import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
  }
    login(username:string,password:string){
      return this.http.post('http://localhost:3000/users/login',{username,password});
    }
}