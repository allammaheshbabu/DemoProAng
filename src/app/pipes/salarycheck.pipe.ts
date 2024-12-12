import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salarycheck'
})
export class SalarycheckPipe implements PipeTransform {

  transform(value: number): string {
    if(value<25000){
      return "less than 25000";
    }
    else{
      return "greater than 25000";
    }
  }

}
