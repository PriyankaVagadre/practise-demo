import { Component, OnInit } from '@angular/core';
import{ FormGroup , FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public newForm = FormGroup;
  constructor(public myfrombuilder : FormBuilder) { }

  ngOnInit() {
    // this.newForm = new
  }

}
