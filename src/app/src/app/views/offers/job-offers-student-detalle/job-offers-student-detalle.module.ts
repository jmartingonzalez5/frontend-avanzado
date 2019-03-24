import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JobOffersStudentDetalleComponent} from './job-offers-student-detalle.component';
import {JobOffersStudentDetalleRoutingModule} from './job-offers-student-detalle-routing.module';

@NgModule({
  declarations: [JobOffersStudentDetalleComponent],
  imports: [
      CommonModule,
      JobOffersStudentDetalleRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class JobOffersStudentDetalleModule { }