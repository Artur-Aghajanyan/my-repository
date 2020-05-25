import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { CountryService } from 'src/app/services/user/country.service';
import { BasketService } from 'src/app/services/user/basket.service';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent implements OnInit {

  constructor(
    private userService: UserService,
    private countryService: CountryService,
    private basketService: BasketService
  ) { }

  countries;
  user;
  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'))

    this.countryService.countryData().subscribe((data)=>{
        this.countries = data
    })
  }

  billingAddress(form:NgForm){

    console.log(form);
    if(!form.valid ) return;
    console.log("form");
    let data = form.value;
    data.password = this.user.password 
    let mail=JSON.parse(window.localStorage.getItem("user")).email;
    this.userService.modify(this.user.id,data).subscribe(()=>{
      window.localStorage.clear();
      this.userService.getData(this.user.id).subscribe((value)=>{
        console.log(value);
        window.localStorage.setItem('user', JSON.stringify(value[0]));
        this.basketService.basketGet(mail).subscribe((data)=>{
          console.log(data);

        })
      })
    })
  }
  
    edit(e){
      if(e.readOnly === true){
        e.readOnly=false
        e.style.border = "2px solid #ebebeb"
    
      }else{
        e.readOnly=true
        e.style.border = "2px solid transparent"
      }
    }
}
