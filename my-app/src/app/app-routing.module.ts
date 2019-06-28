import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

// practise ---------------------------------------
import { ReactiveFormTestComponent } from './practise/reactive-form-test/reactive-form-test.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

import { CustomerComponent } from './crud-operation/customer/customer.component';
import { CustomerListComponent } from './crud-operation/customer-list/customer-list.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path: 'list',
    component : ListEmployeeComponent
  },
  {
    path : 'create',
    component : CreateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingList = [HomeComponent, ListEmployeeComponent, CreateEmployeeComponent , ReactiveFormTestComponent ,
                            CustomPipeComponent ,
                            CustomerComponent,
                            CustomerListComponent,];
