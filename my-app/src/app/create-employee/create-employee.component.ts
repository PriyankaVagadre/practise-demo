import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validator, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm : FormGroup;
  validationMessages ={
    'fullName': {
      'required' : 'Full Name is Required',
      'minlength' : 'Min length should be 5',
      'maxlength' : 'Max length should be 10'
    },
    'email':{
      'required' : 'email is Required',
    },
    'phone':{
      'required' : 'phone is Required',
    }
  };
  formErrors = {
    'fullName': '',
    'email': '',
    'phone' : ''
  }

  constructor(public formBuild : FormBuilder) { }

  ngOnInit() {
    // this.employeeForm = new FormGroup({
    //      fullname : new FormControl(''),
    //      emailId :  new FormControl(''),
    //      skills : new FormGroup({
    //         skillsName : new FormControl(''),
    //         exp : new FormControl(''),
    //         proficiency : new FormControl(''),
    //      })
    // });

    this.employeeForm = this.formBuild.group({
      fullname : ['' , [Validators.required , Validators.minLength(5) , Validators.maxLength(10)]],
      emailId :  ['', Validators.required],
      phone : [''],
      contactPreference : [''],
           skills : this.formBuild.group({
              skillsName : [''],
              exp :[''],
              proficiency : [''],
           })
    })
    this.employeeForm.get('fullname').valueChanges.subscribe(
      value =>{
        console.log(value);
      }
    )
    this.employeeForm.get('emailId').valueChanges.subscribe(
      value =>{
       console.log(value);

      }
    )

    this.employeeForm.valueChanges.subscribe(
      (values) =>{
        console.log(values);
        console.log(JSON.stringify(values));

      }
    )


  }
  onCheckedValue(selectedValue : string){
    const phoneControl  = this.employeeForm.get('phone');
    if(selectedValue === 'phone'){
      phoneControl.setValidators(Validators.required)
    }
    else{
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();

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
      phone : '567567567567',
      contactPreference : 'phone',
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
