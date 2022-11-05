import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  
  {
    path:'inscriptions/:id',
    component:InscriptionsComponent
  },
  {
    path:'Reports/:variable',
    component:ReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
