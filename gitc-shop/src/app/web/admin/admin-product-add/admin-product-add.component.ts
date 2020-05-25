import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {
 colors =[
"white",
"blue",
"gray",
"black",
 "crimson",
"yellow",
"darkturquoise",
  "tomato",
  "darkgreen",
  "mediumpurple"
 ]

 sizes=[
  "s",
"m",
 "l",
    "xl",
   "xxl"
 ]
 genders = [
  'male',
  'female'
 ]
 imageUrl=[];
 imgAddDB=[];
 fileToUpload:File =null; 
  constructor(private adminService: AdminService) { }
 
  ngOnInit() {
  }
  
  
  // img upload
  imgUpload(file: FileList){
    this.fileToUpload = file.item(0);

    this.imgAddDB.push(this.fileToUpload.name)

    var reader = new FileReader();
    reader.onload = (event:any)=>{   
      this.imageUrl.push(event.target.result)
      
    }

    reader.readAsDataURL(this.fileToUpload);
  }

  productAdd(form: NgForm){
    if(!form.valid) return;

  form.value['img'] = this.imgAddDB;
  console.log(form)
   this.adminService.adminProductAdd(form.value).subscribe(()=>{})
  this.imgAddDB=[];
  this.imageUrl=[];

  form.reset();
    
  }


 
}
