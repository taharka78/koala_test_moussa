import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { LoaderService } from './components/shared/loader/loader.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './components/shared/loader/loader.interceptor';
import { FlihgtsComponent } from './components/flights/flights.component';
import { CardComponent } from './components/card/card.component';
import { FlightdetailsComponent } from './components/flightdetails/flight.details.component';
import { FlightlistComponent } from './components/flightlist/flight.list.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlihgtsComponent,
    CardComponent,
    FlightdetailsComponent,
    LoaderComponent,
    FlightlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoaderService,{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
