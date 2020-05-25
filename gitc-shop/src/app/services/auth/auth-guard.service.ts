import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  
  constructor (private router: Router,private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.loginService.isLeggedIn()){
      return true;
    }else{
      this.router.navigate(['/login'],{
        queryParams:{
          accessDenied:true
        }
      });
      return false;
    }

  }


}
