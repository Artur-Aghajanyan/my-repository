import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user;
  imageUrl:string = '/assets/img/core-img/matthew.png';
  fileToUpload:File =null;  

  constructor(
    private loginService: LoginService, 
    private router: Router) { }
    

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'))
  }

  // img upload
  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl = event.target.result;
    
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  

  

  
}
