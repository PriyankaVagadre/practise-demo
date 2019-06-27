import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Employee} from './employee.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  url : string = "../assets/employeedata.json";

  constructor(public http : HttpClient) { }

  getData():Observable<Employee[]> {
   return this.http.get<Employee[]>(this.url);
  }
}
