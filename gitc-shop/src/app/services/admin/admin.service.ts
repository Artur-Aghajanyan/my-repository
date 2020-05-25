import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  adminValidName(name: string): Observable<any> {

    return this.http.get(`http://localhost:3000/admin?adminName=${name}`);
  }
  adminProductAdd(data):Observable<any>{
    return this.http.post('http://localhost:3000/products',data);
  }
}
