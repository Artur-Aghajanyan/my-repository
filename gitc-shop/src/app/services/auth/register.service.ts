import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  getRegistrationByEmail(email: string): Observable<any> {
    return this.http.get(`http://localhost:3000/registration?email=${email}`)
  }

  registration(data: {userName: string, lastName: string, email: string, password: string}): Observable<{username: string, surname: string, email: string, password: string}> {
    return this.http.post<{username: string, surname: string, email: string, password: string}>('http://localhost:3000/registration', data);

  }
}
