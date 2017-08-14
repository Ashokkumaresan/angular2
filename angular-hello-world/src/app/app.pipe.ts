import { Pipe,PipeTransform } from '@angular/core';
@Pipe({
  name:'arealen'
})
export class Arealength implements PipeTransform {
  transform(value:any,limit:number,start:number){
    return value.substring(start,limit);
  }
}
