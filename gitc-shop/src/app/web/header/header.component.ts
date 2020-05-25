import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/services/user/basket.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  basketOpen:boolean = false;
  //products=[];
  count = window.localStorage.getItem('count');
  constructor(
    private loginService: LoginService,
    private router: Router,
    private basketService:BasketService
     ) { }
  @Output() basketVisibility:EventEmitter<boolean> = new EventEmitter();
  @Output() product:EventEmitter<any> =new EventEmitter();
  @Input('basketsCounters') products;
  productLength = this.loginService.isLeggedIn();
  ngOnInit() {
    if(this.loginService.isLeggedIn()){
      // this.basketService.basketGet(JSON.parse(window.localStorage.getItem('user')).email).subscribe((data)=>{
      //   this.products = data
      // })
    }
  }

 

  openPege(){
    if(this.loginService.isLeggedIn()){
      this.router.navigate(['/userprofile'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }
  onLogout(){
    this.loginService.logout();
    this.router.navigate(['/login']);

  }

  openBasket(){ 
    if(this.loginService.isLeggedIn()){
     this.basketService.basketGet(JSON.parse(window.localStorage.getItem('user')).email).subscribe((value)=>{
     this.product.emit(value)
     
     })
      this.basketOpen = true;
      this.basketVisibility.emit(this.basketOpen)   
    }
    else{
        this.router.navigate(['/login'],{
          queryParams:{
            accessDenied:true
          }
      })
    }
  }
}
