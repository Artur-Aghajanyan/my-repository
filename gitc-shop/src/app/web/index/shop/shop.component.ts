import { Component, OnInit }        from '@angular/core';
import { ProductService }           from 'src/app/services/shop/product.service';
import { ActivatedRoute, Router }   from '@angular/router';
import { map }                      from 'rxjs/operators';
import { ProductCatagoresService }  from 'src/app/services/shop/product-catagores.service';
import { Options, LabelType  } from 'ng5-slider';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:string[]=[];
  clothes:string[]=[];
  brands:string[]=[];
  colors:string[]=[]
  config: any; 
  filterName:string;
  catagoriesName:string;
  dbName:string;
  minValue: number = 0;
  maxValue: number = 500;
  rangeActiv:boolean=false;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number): string => {
    
      return '$' + value;
    }
    
  };

  constructor(
    private productsService:ProductService,
    private productCategoresService: ProductCatagoresService,
    private route: ActivatedRoute, 
    private router: Router
    ) {
      this.config = {
        currentPage: 1,
        itemsPerPage: 9
      };
     }

  ngOnInit() {
     this.productsService.productsData().subscribe(data => this.products = data)
     this.brands      = this.productCategoresService.getBrands();
     this.clothes     = this.productCategoresService.getClothing();
     this.colors      = this.productCategoresService.getColor();
     this.rangeActiv  = true;
     
  this.route.queryParamMap.pipe(
  map(params => params.get('page')))
  .subscribe(page => this.config.currentPage = page);
  }


  pageChange(newPage: number):void {
		this.router.navigate(['/shop'], { queryParams: { page: newPage } });
  }
  
  onRangeValueChange(event){
      console.log(event);
      
  }

  productsFilter(e,name:string,dbName:string):void{
    let str;

   switch (name) {
     case 'clothing':
      str = e
    break;
    case 'color':
      str = e.target.style.backgroundColor;
    break;
    case 'brends':
      console.log(e);
      
      str = e;
    break;
    
   }


    this.filterName = str;
    this.catagoriesName = name;
    this.dbName = dbName;
    
  }
}
