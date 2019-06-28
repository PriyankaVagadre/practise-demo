import { Component, OnInit } from '@angular/core';
import{ FormGroup , FormBuilder, Validators} from '@angular/forms'
import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public newForm;
  submitted : boolean;


  constructor(public myfrombuilder : FormBuilder , public myserv : CustomerService) { }

  ngOnInit() {
    this.newForm = this.myfrombuilder.group({
      $key : [null],
      fullName : ['' , Validators.required],
      email : ['' , Validators.email],
      mobile : ['' , [Validators.minLength(10) , Validators.required]],
      location : [''],
    })

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
