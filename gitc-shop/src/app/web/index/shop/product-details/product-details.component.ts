import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/shop/product.service';
import { LoginService } from 'src/app/services/auth/login.service';
import { BasketService } from 'src/app/services/user/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product=[];

  constructor(
    private route : ActivatedRoute,
    private productService: ProductService,
    private loginService: LoginService,
    private basketService: BasketService,
    private router: Router
    ) 
    { }

  ngOnInit() {
  
     this.route.queryParams.subscribe((params: Params )=> {
       console.log(params.id)
     this.productService.productsIDGet(+params.id).subscribe((data)=>{
     
        data.forEach((val)=>{
          this.product=val
          console.log(val)
        })
        
     })

    })
  }

  cardAdd(form: NgForm,p){
if(!this.loginService.isLeggedIn()){
  this.router.navigate(['/login'], {
      queryParams: {
        accessDenied:true
      }
    });
    return;
}
    const data={
      brend: p.brend,
      color: p.color,
      title: p.title,
      productId: p.id,
      img:p.img[0],
      price: p.price,
      size: p.size,
      gender: p.gender,
      productType: p.productType,
      count: form.value.count,
      description:p.description,
      discount:p.discount,
      time:new Date(),
      UserEmail:JSON.parse(window.localStorage.getItem('user')).email
    }
    
    this.productService.addToProduct(data).subscribe(()=>{

        this.router.navigate(['/shop/']);

    })
 }


}
