import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  addToCheckout(data):Observable<any>{
    return this.http.post('http://localhost:3000/orders',data)
  }

  ordersGet(email):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/orders?UserEmail=${email}`)
  }

  odrderDelet(id):Observable<any>{
    return this.http.delete(`http://localhost:3000/orders/${id}`)
  }
}
