import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Basket{
  brand:string,
  color: string,
  description: string,
  productId: string,
  img: string,
  price: string,
  size: string,
  status: string,
  title: string,
  type: string,
  count: number,
  UserEmail: string,
}

@Injectable({
  providedIn: 'root'
})

export class BasketService {
product;
  constructor(private http : HttpClient) { }

  basketGet(email):Observable<Basket[]>{
    return this.http.get<Basket[]>(`http://localhost:3000/basket?UserEmail=${email}`)
  }

  basketDelet(id):Observable<Basket[]>{
    return this.http.delete<Basket[]>(`http://localhost:3000/basket/${id}`)
  }

  basketCounter(email):Observable<Basket[]>{
    return this.http.get<Basket[]>(`http://localhost:3000/basket?UserEmail=${email}`)
  }

  
}
