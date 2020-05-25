import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any, filterName, catagoriesName:string, dbName:string): any {
    
    if(!filterName || filterName==="All") return value;

  if(catagoriesName === 'clothing' || catagoriesName === 'brends' || catagoriesName === 'color'){

      return value.filter(val=>val[dbName] === filterName) 
    
  }

  
}
}