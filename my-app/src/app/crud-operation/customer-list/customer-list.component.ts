import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customerArray = [];
  deleteMessage : boolean;
  searchFilter;

  constructor(public customerService : CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(list =>{
      this.customerArray = list.map(item =>{
        return {
          $key : item.key,
          ...item.payload.val()
        }
      })
    });

  }
  onDelete($key){
    if(confirm('Do you want to delete')){
      this.customerService.deleteCustomer($key);
      this.deleteMessage = true;
      setTimeout(() =>this.deleteMessage = false , 3000);
    }
    else{

    }
  }

  filterSearch(customer){
     return customer.fullName.toLowerCase().indexOf(this.searchFilter.toLowerCase()) != -1;
  }

}
