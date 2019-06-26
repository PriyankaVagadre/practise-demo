import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.scss']
})
export class ReactiveFormTestComponent implements OnInit {
  myform : FormGroup;

  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl(),
      email : new FormControl(),
    })
  }
  onSave(){
    console.log(this.myform.value);

  }

}
