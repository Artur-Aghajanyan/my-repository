import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../../../services/auth/register.service';
import { Message } from './message';
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ RegisterService]
})

export class LoginComponent implements OnInit {
 message: Message;

  constructor(
    private service: RegisterService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {

    this.message = new Message('danger', '');

    this.route.queryParams
    .subscribe((params: Params) => {

      if (params.nowCanLogin) {

        this.message.showMessage(
           'Now You can log in',
            'success'
        );

      }else if(params.accessDenied){

        this.message.showMessage(
         'You must login to continue',
         'warning'
        );

      }
    });
  }

  // private showMessage(message: Message) {
  //   this.message = message;
  //   window.setTimeout(() => {
  //     this.message.text = '';
  //   }, 5000);
  // }


  login(form: NgForm) {

    if (form.valid === false)  return; 

    const formData = form.value ;

    this.service.getRegistrationByEmail(formData.email)
    .subscribe(user => {

      if (user[0]) {

        if (user[0].password === formData.password) {

          this.message.text = '';
          window.localStorage.setItem('user', JSON.stringify(user[0]));
          this.loginService.login();
          this.router.navigate(['/userprofile'])

        } else {

          this.message.showMessage(
             'Your Password is incorrect.',
            'danger'
          );

        }
      } else {

        this.message.showMessage(
           'Your Email is incorrect.',
           'danger'
        );
        
      }
    });
  }

}
