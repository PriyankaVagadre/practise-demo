import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validator} from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
         fullname : new FormControl(''),
         emailId :  new FormControl(''),
         skills : new FormGroup({
            skillsName : new FormControl(''),
            exp : new FormControl(''),
            proficiency : new FormControl(''),
         })
    });
  }
  onSubmit(){
    console.log(this.employeeForm.value);
    // console.log(this.employeeForm.controls.emailId.value);
    // console.log(this.employeeForm.controls.emailId.invalid);
    // console.log(this.employeeForm.controls.emailId.dirty);
    // console.log(this.employeeForm.dirty)

  }
  addNewSkills(){

  }
  loadData(){
    this.employeeForm.setValue({
      fullname : 'Priyanka',
      emailId : 'priyanka@gmail.com',
         skills : {
            skillsName : 'Angular',
            exp : '4 Months',
            proficiency : 'beginner',
         }
    })
    // this.employeeForm.patchValue({
    //   fullname : 'Priyanka',
    //   emailId : 'priyanka@gmail.com',
    // })
  }

}
