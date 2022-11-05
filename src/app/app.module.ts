import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { ReportsComponent } from './reports/reports.component';
import { RegisterSolicitudCarComponent } from './inscriptions/register-solicitud-car/register-solicitud-car.component';
import { ReportSolicitudCarComponent } from './reports/report-solicitud-car/report-solicitud-car.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionsComponent,
    ReportsComponent,
    RegisterSolicitudCarComponent,
    ReportSolicitudCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
