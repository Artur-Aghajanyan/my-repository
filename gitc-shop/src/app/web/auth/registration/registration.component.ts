import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../services/auth/register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ RegisterService]
})
export class RegistrationComponent implements OnInit {

  constructor(private service: RegisterService, private router: Router) { }
  register(data: NgForm) {
 console.log(data);
  if (data.valid === false) return; 
 
  this.service.registration(data.value).subscribe(() => {
    this.router.navigate(['/login'], {
      queryParams: {
        nowCanLogin: true
      }
    });
  });

  }

  ngOnInit() {
  }

}
