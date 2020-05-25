import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AdminLoginService } from './adminLogin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private router: Router,private adminLoginService: AdminLoginService,) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.adminLoginService.isAdminIN()){
      return true;
    }else{
      this.router.navigate(['/adminLogin'],{
        queryParams:{
          admunAccessDenied:true
        }
      });
      
      return false;
    }

  }

}
