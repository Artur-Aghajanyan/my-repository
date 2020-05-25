import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCatagoresService {
clothing:string[]=[
  'All',
  'Bodysuits',
  'Dresses',
  'Hoodies & Sweats',
  'Jackets & Coats',
  'Jeans',
  'Pants & Leggings',
  'Rompers & Jumpsuits',
  'Shirts & Blouses',
  'Sweaters & Knits',
]
shoses:string[]=[]
accessories:string[]=[]
brands:string[]=[
  'Asos',
  'Mango',
  'River Island',
  'Topshop',
  'Zara',
]
colors:string[]= [
  "white",
  "blue",
  "gray",
  "black",
  "crimson",
  "yellow",
  "darkturquoise",
  "tomato",
  "darkgreen",
  "mediumpurple"
]
  constructor() {}

  getClothing(){
    return this.clothing;
  }
  getBrands(){
    return this.brands;
  }
  getColor(){
    return this.colors
  }
}
