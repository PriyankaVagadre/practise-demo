import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'; //firebase setup
import{ FormGroup , FormBuilder, Validators} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(public myfrombuilder : FormBuilder , private firebase : AngularFireDatabase) { }
  customerList : AngularFireList<any>;

    newForm = this.myfrombuilder.group({
        $key : [null],
        fullName : ['' , Validators.required],
        email : ['' , Validators.email],
        mobile : ['' , [Validators.minLength(10) , Validators.required]],
        location : [''],
    })

    getCustomers(){
      this.customerList = this.firebase.list('test');
      return this.customerList.snapshotChanges();
    }

    insertCustomer(customer){
      this.customerList.push({
         fullName: customer.fullName,
         email : customer.email,
         mobile : customer.mobile,
         location : customer.location
      })
    }
    populatedForm(customer){
      this.newForm.setValue(customer);
    }

    updateCustomer(customer){
      this.customerList.update( customer.$key ,{
        fullName: customer.fullName,
         email : customer.email,
         mobile : customer.mobile,
         location : customer.location
      })
    }

    deleteCustomer($key : string){
     this.customerList.remove($key)
    }


}
