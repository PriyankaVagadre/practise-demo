import { PipeTransform, Pipe } from '@angular/core';
import {Employee} from './employee.model'

@Pipe( {
  name : "filterPipe"
})
export class EmployeeFilter implements PipeTransform{

  // transform (employeeList : Employee[] , searchtext : string ) : Employee []{
  //   if (!employeeList || !searchtext){
  //     return employeeList;
  //   }

  //     return employeeList.filter(employee =>{
  //       employee.name.toLowerCase().includes(searchtext.toLowerCase());
  //       console.log( employee.name);

  //     })

  // }

  transform(employeeList : Employee[] , searchtext : string){
     if(!employeeList) return [];
     if(!searchtext) return employeeList;

     searchtext = searchtext.toLowerCase();

     if (searchtext ==='all'){
       return employeeList;
     }
     else{
       return employeeList.filter (ite =>{
         return ( ite.name.toLowerCase().includes(searchtext) ||
                  ite.gender.toLowerCase().includes(searchtext) ||
                  ite.lastname.toLowerCase().includes(searchtext)
                  // ite.addresses.forEach (it =>{
                  //   it.city.toLowerCase().includes(searchtext)
                  // })
                  )
       })
     }
  }
}
