import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Message } from '../../auth/login/message';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdminLoginService } from '../../../services/admin/adminLogin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  message: Message;

  constructor(
    private adminServise: AdminService,
    private adminLoginService: AdminLoginService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = new Message('danger', '');

    this.route.queryParams
    .subscribe((params: Params) => {

     if(params.admunAccessDenied){

        this.message.showMessage(
         'You must login to continue',
         'warning'
        );

      }
    });
  }

  adminLogin(form) {
    this.adminServise.adminValidName(form.value.name).subscribe((name) => {
      if (name[0]) {
        if (name[0].adminPassword === form.value.password) {
          this.adminLoginService.AdminLogin();
          this.router.navigate(['/adminHome']);
        } else {
          this.message.showMessage(
            'Your Password is incorrect.',
            'danger'
          );
        }
      } else {
        this.message.showMessage(
          'Your Name is incorrect.',
          'danger'
        );
      }
      

    });
  }
}
