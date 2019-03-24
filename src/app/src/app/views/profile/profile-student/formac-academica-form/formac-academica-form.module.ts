import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormacAcademicaFormRoutingModule } from './formac-academica-form-routing.module';
import { FormacAcademicaFormComponent } from './formac-academica-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [FormacAcademicaFormComponent],
  imports: [
      CommonModule,
      FormacAcademicaFormRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class FormacAcademicaFormModule { }
