import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightdetailsComponent } from './components/flightdetails/flight.details.component';
import { FlightlistComponent } from './components/flightlist/flight.list.component';
import { FlihgtsComponent } from './components/flights/flights.component';

const routes: Routes = [{
  path : "flights",
  component : FlihgtsComponent,
  children : [{
    path : "",
    component : FlightlistComponent
  },{
    path : "m/details/:id",
    component : FlightdetailsComponent
  }]
},{
  path : "details/:id",
  outlet : "rcontent",
  component : FlightdetailsComponent
},{
  path : "**",
  redirectTo : "flights",
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
