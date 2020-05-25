import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng5SliderModule } from 'ng5-slider';

// directives
import { UniqueEmailDirective } from './directive/auth/unique-email.directive';

// services
import { LoginService } from './services/auth/login.service';

//roting
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { IndexComponent } from './web/index/index.component';
import { SearchComponent } from './web/header/search/search.component';
import { MenuComponent } from './web/header/menu/menu.component';
import { HeaderComponent } from './web/header/header.component';
import { BannerComponent } from './web/banner/banner.component';
import { CaterogiesComponent } from './web/caterogies/caterogies.component';
import { GlobarSaleComponent } from './web/globar-sale/globar-sale.component';
import { PopularProductsComponent } from './web/popular-products/popular-products.component';
import { BrandsComponent } from './web/brands/brands.component';
import { FooterComponent } from './web/footer/footer.component';
import { LoginComponent } from './web/auth/login/login.component';
import { NotFoundComponent } from './web/404/not-found/not-found.component';
import { RegistrationComponent } from './web/auth/registration/registration.component';
import { UserProfileComponent } from './web/user-profile/user-profile.component';
import { OrdersComponent } from './web/user-profile/orders/orders.component';
import { DeliveryAddressComponent } from './web/user-profile/delivery-address/delivery-address.component';
import { HomeComponent } from './web/index/home/home.component';
import { ShopComponent } from './web/index/shop/shop.component';
import { ProductDetailsComponent } from './web/index/shop/product-details/product-details.component';
import { BasketComponent } from './web/user-profile/basket/basket.component';
import { RightSideCartComponent } from './web/right-side-cart/right-side-cart.component';
import { AdminLoginComponent } from './web/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './web/admin/admin-home/admin-home.component';
import { AdminProductAddComponent } from './web/admin/admin-product-add/admin-product-add.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { RengePricePipe } from './pipes/renge-price.pipe';
import { AdminLoginService } from './services/admin/adminLogin.service';







@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    MenuComponent,
    HeaderComponent,
    BannerComponent,
    CaterogiesComponent,
    GlobarSaleComponent,
    PopularProductsComponent,
    BrandsComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    RegistrationComponent,
    UniqueEmailDirective,
    UserProfileComponent,
    OrdersComponent,
    DeliveryAddressComponent,
    HomeComponent,
    ShopComponent,
    ProductDetailsComponent,
    BasketComponent,
    RightSideCartComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminProductAddComponent,
    FilterProductPipe,
    RengePricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng5SliderModule
  ],
  providers: [LoginService,AdminLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
