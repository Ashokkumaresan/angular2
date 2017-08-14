import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filtercom:any): any {
    const result=[];
    if(filtercom===undefined || filtercom ==="")
       return value;
      else{
        for(let n of value){
        if (n%filtercom===0){
          result.push(n);
        }
      }
      }
      return result;
  }

}
