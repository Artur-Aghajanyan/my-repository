import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuBoolean:boolean = false;
  menuProduvtBoolean:boolean = false;
  products;
  constructor() { }

  ngOnInit() {
    
  }
  menuOpen(menu){
    if(!this.menuBoolean ){
    menu.style.left ="0"
    this.menuBoolean=!this.menuBoolean
    }else{
      menu.style.left ="-310px"
      this.menuBoolean=!this.menuBoolean
    } 
  }

  menuProduct(arg){
    console.log(arg.style.display)  
    if(arg.style.display==="block"){
      arg.style.display = "none"
    }else{
    arg.style.display="block"}
   
  }
}
