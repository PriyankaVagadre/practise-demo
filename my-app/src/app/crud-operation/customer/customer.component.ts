import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public newForm;
  submitted : boolean;


  constructor( public myserv : CustomerService) { }

  ngOnInit() {
   this.newForm = this.myserv.newForm;

  }

  onSubmit(){
    this.submitted = true;



      if(this.newForm.get('$key').value == null){
        //insert
        console.log(this.newForm.value);
      }
      else {
        //update
        console.log("sdfl");
      }


  }

}
