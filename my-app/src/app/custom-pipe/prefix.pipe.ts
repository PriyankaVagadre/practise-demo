import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from './employee.model';

@Pipe(
  {
    name : 'prefixfilter'
  }
)

export class PrefixPipe implements PipeTransform{
  transform(value: Employee[] , prefix : string): Employee[] {

    return value.filter(item =>{
      let prefix =item.gender;
      if(prefix ==='Male'){
        return "Mrs." + item.name + " " + item.lastname
        }
        else{
          return "Mr." + item.name + " " + item.lastname
        }
    })
  }
}
