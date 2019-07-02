import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public newForm;
  submitted: boolean;
  showSuccessMessage: boolean;


  constructor(public myserv: CustomerService) { }

  ngOnInit() {
    this.newForm = this.myserv.newForm;

  }

  onSubmit() {
    this.submitted = true;
    if (this.myserv.newForm.valid){
      if (this.newForm.get('$key').value == null) {
        console.log(this.newForm.value); //insert
        this.myserv.insertCustomer(this.myserv.newForm.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false , 3000)
        this.submitted = false;
        console.log(this.myserv.newForm.value);

      }
      else {
        this.myserv.updateCustomer(this.myserv.newForm.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false , 3000)
        this.submitted = false;
        console.log("sdfl");//update
      }
    }
  }

}
