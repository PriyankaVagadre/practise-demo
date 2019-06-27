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
  searchtext : string;

  constructor(public myservice : FetchDataService) { }

  ngOnInit() {
    this.myservice.getData().subscribe( response =>{
      this.MyEmployeeList = response;
      this.MyEmployeeList.forEach (item =>{
        this.address = item.addresses;
        if ( this.address = item.addresses){
          console.log("matched");
        }
        console.log(this.address );
      })
    })
  }

}
