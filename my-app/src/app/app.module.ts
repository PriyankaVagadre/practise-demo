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

import {environment} from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    RoutingList,
    EmployeeFilter,
    PrefixPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),  //firebase modules
    AngularFireDatabaseModule  //firebase modules


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
