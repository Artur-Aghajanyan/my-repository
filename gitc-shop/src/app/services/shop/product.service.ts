import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface  Product{
  color:Array<{}> ,
  description: String,
  discount: number,
  gender: string,
  id: number
  img:Array<{}>
  price: number
  productType: string
  size: Array<{}>
  title: string
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productsData():Observable<any>{
    return this.http.get('http://localhost:3000/products')
  }

  productsIDGet(id):Observable<any>{
    return this.http.get(`http://localhost:3000/products?id=${id}`)
  }

  addToProduct(data):Observable<any>{
    return this.http.post('http://localhost:3000/basket',data)
  }
}
