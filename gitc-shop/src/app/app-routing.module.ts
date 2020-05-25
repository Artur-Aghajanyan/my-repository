import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//service

import { AuthGuardService } from './services/auth/auth-guard.service';
import { AdminGuardService } from './services/admin/admin-guard.service';

//componrts
import { LoginComponent } from './web/auth/login/login.component';
import {IndexComponent} from './web/index/index.component';
import { NotFoundComponent } from './web/404/not-found/not-found.component';
import { RegistrationComponent } from './web/auth/registration/registration.component';
import { UserProfileComponent } from './web/user-profile/user-profile.component';
import { OrdersComponent } from './web/user-profile/orders/orders.component';
import { DeliveryAddressComponent } from './web/user-profile/delivery-address/delivery-address.component';
import { HomeComponent } from './web/index/home/home.component';
import { ShopComponent } from './web/index/shop/shop.component';
import { ProductDetailsComponent } from './web/index/shop/product-details/product-details.component';
import { BasketComponent } from './web/user-profile/basket/basket.component';
import { AdminLoginComponent } from './web/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './web/admin/admin-home/admin-home.component';
import {AdminProductAddComponent} from './web/admin/admin-product-add/admin-product-add.component';


const routes: Routes = [
  { path : '' , component : IndexComponent ,
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path:'home', component:HomeComponent},
      {path:'shop', component: ShopComponent },
      {path:'shop/:id', component:ProductDetailsComponent},
      { path :'userprofile', component : UserProfileComponent,canActivate:[AuthGuardService],
      children:[
        { path: '', redirectTo: 'deliveryAddress', pathMatch: 'full'  },
        {path:'deliveryAddress', component:DeliveryAddressComponent},
        {path:'orders', component: OrdersComponent},
        {path :'basket',component : BasketComponent}
      ]
    },
  
    ]
  },
  { path : 'login' , component : LoginComponent },
  { path :'registration', component : RegistrationComponent},
  {path:'adminLogin',component: AdminLoginComponent},
  {path:'adminHome',component:AdminHomeComponent,canActivate:[AdminGuardService],
    children:[
      {path:'createProduct', component:   AdminProductAddComponent}
      ]
  },
  { path : '**' , component : NotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

