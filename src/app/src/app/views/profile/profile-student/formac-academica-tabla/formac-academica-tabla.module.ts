import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormacAcademicaTablaRoutingModule } from './formac-academica-tabla-routing.module';
import { FormacAcademicaTablaComponent } from './formac-academica-tabla.component';

@NgModule({
  declarations: [FormacAcademicaTablaComponent],
  imports: [
      CommonModule,
      FormacAcademicaTablaRoutingModule
  ]
})
export class FormacAcademicaTablaModule { }
