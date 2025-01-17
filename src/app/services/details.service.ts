import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }


  getDetails(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/product/${id}`);
  }
}