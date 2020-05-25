import { Component, OnInit, Output} from '@angular/core';
import { BasketService } from 'src/app/services/user/basket.service';
import { OrderService } from 'src/app/services/user/order.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(
    private basketServise:BasketService, 
    private orderService : OrderService
    ) { }

  baskets = [];

  ngOnInit() { 
    this.basketServise.basketGet(JSON.parse(window.localStorage.getItem('user')).email).subscribe((value)=>{
      this.baskets = value;
   
    })

  }

  deletBasket(id){
    this.basketServise.basketDelet(id).subscribe(()=>{
      this.baskets = this.baskets.filter(val => val.id !== id)
    }) 
  }

  checkout(basket){
    console.log(basket);
    let id = basket.id
    delete basket.id
console.log(typeof id);

    this.orderService.addToCheckout(basket).subscribe(()=>{
      this.basketServise.basketDelet(id).subscribe(()=>{
        this.baskets = this.baskets.filter(val => val.id !== undefined)
      }) 

    })
  }

 
}
