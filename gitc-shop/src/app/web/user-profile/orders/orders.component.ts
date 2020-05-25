import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/user/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders=[];
  constructor(private orderService : OrderService) { }

  ngOnInit() {
   this.orderService.ordersGet(JSON.parse(window.localStorage.getItem('user')).email).subscribe((value)=>{
     this.orders = value
   })

  }

  cancelOrder(id){
    this.orderService.odrderDelet(id).subscribe(()=>{
      this.orders = this.orders.filter(val => val.id !== id)
    })
  }

}


