import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, RoutingList } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule} from '@angular/forms';// for reactive forms
import { HttpClientModule} from '@angular/common/http';

import { EmployeeFilter } from './custom-pipe/filter.pipe'; // custom pipe
import { PrefixPipe } from './custom-pipe/prefix.pipe';

import { AngularFireModule} from 'angularfire2';  //firebase modules
import { AngularFireDatabaseModule} from 'angularfire2/database'  //firebase modules

import {environment} from '../environments/environment';
import { MyTableComponent } from './my-table/my-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout'


@NgModule({
  declarations: [
    AppComponent,
    RoutingList,
    EmployeeFilter,
    PrefixPipe,
    MyTableComponent,
    MyDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),  //firebase modules
    AngularFireDatabaseModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule  //firebase modules


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
