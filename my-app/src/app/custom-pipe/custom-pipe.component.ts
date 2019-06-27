import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './fetch-data.service';
import { Employee } from './employee.model';
import {Addresses} from "./address.model";

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {
  MyEmployeeList : Employee[] =[];
   address : Addresses[] = [];

  constructor(public myservice : FetchDataService) { }

  ngOnInit() {
    this.myservice.getData().subscribe( response =>{
      this.MyEmployeeList = response;
    })
  }

}
