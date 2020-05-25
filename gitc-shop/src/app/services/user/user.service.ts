import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  modify(id,data){
    return this.http.put(`http://localhost:3000/registration/${id}`,data)
  }

  getData(id){
    return this.http.get(`http://localhost:3000/registration?id=${id}`)
  }


}
