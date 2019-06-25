import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QRCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { ReadQRCodesComponent } from './read-qr-codes/read-qr-codes.component';
const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingList = [HomeComponent ,QRCodeGeneratorComponent, ReadQRCodesComponent];