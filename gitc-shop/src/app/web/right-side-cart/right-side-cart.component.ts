import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BasketService } from 'src/app/services/user/basket.service';
import { OrderService } from 'src/app/services/user/order.service';


@Component({
  selector: 'app-right-side-cart',
  templateUrl: './right-side-cart.component.html',
  styleUrls: ['./right-side-cart.component.css']
})
export class RightSideCartComponent implements OnInit {

  constructor(
    private basketServise:BasketService, 
    private orderService : OrderService
  ) { }
  @Input('products') baskets ;
  @Input() basketVisibility: boolean;
  @Output() basketFalse: EventEmitter<boolean> = new EventEmitter()
  @Output() basketCounts:EventEmitter<any>=new EventEmitter()
  subtotal:number=0;
  total:number = 0;
  
  ngOnInit() {
    this.productPrice()
  }

  productPrice(){
    this.basketServise.basketGet(JSON.parse(window.localStorage.getItem('user')).email).subscribe((value)=>{
      this.baskets = value;
      this.baskets.forEach(e => {
        if(e.discount !== "" || e.discount !== null){
          console.log(this.subtotal);
               this.subtotal +=Number(e.price-(e.price*e.discount/100))  
               console.log(e.discount);
        }else{
          this.subtotal +=Number(e.price);
          console.log('ggg',this.subtotal);
        }
      
      });
      this.total = this.subtotal
    })
  }
  basketClosed(){
    this.basketVisibility = false;
    this.basketFalse.emit(this.basketVisibility)

  }

  productDelet(id){
    this.basketServise.basketDelet(id).subscribe(()=>{
      this.baskets = this.baskets.filter(val => val.id !== id);  
      this.productPrice(); 
         this.basketCounts.emit(this.baskets);
        
    }) 
  }
  productCheckout(){
    this.baskets.forEach(e=>{
      let id = e.id
      delete e.id
   
       this.orderService.addToCheckout(e).subscribe(()=>{
        this.basketServise.basketDelet(id).subscribe(()=>{
          this.productPrice();
          this.basketServise.basketGet(JSON.parse(window.localStorage.getItem('user')).email).subscribe((value)=>{
            this.baskets = value;
            this.basketCounts.emit(this.baskets);
            
           }) 
        
       }) 
  
       })
    })
  
  }
}
