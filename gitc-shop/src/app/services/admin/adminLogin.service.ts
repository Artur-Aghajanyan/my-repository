export class AdminLoginService {
    private isAdminAuthenticated:boolean = false;
  
    AdminLogin():void{
        this.isAdminAuthenticated = true;
    }
  
    AdminLogout():void{
        this.isAdminAuthenticated = false;
    }
  
    isAdminIN():boolean{
        return this.isAdminAuthenticated;
    }
  }