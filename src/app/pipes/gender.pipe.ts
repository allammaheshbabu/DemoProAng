import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string,GenderVal:string): string {
    if(GenderVal.toLowerCase()=="male"){
      return "mr."+value;
    }
    else{
      return "miss."+value;
    }
  }

}
