import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MerchantListComponent} from "./merchant-list/merchant-list.component";
import {SingUpComponent} from "./sing-up/sing-up.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-up', component: SingUpComponent},
  {path: 'merchants', component: MerchantListComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
