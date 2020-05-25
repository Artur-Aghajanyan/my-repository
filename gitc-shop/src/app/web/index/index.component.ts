import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/user/basket.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  basketOpen:boolean = false;

  constructor(
    private basketServise:BasketService
  ) { }
  product:[]=[];
  basketsCounter=[]
  ngOnInit() {
  }
  
  basketVisibility(event){
    this.basketOpen = event;
  }

  basketFalse(event){
    this.basketOpen = event;
  }
  products(event){
    this.product=event
    console.log("2222",this.product);
    
  }
 
  onActivate(component) {
    this.basketServise.basketGet(JSON.parse(window.localStorage.getItem('user')).email).subscribe((value)=>{
      this.basketsCounter = value;
      
      
    })
  
  }
  onDeactivate(component) {
    
  }
  basketCounts(e){
    this.basketsCounter=e;
    console.log('aaaa11a',e);
  }
}
