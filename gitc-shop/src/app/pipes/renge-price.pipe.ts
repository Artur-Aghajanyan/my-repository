import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rengePrice'
})
export class RengePricePipe implements PipeTransform {

  transform(value: any, rangeActiv:boolean, minValue:number,maxValue:number): any {
    if(rangeActiv){
      return value.filter(val=>val.price > minValue && val.price < maxValue)
        
      }
      else{
        return value
      }
  }

}
