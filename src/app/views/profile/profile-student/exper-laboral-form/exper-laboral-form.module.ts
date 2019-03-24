import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperLaboralFormRoutingModule } from './exper-laboral-form-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExperLaboralFormComponent} from './exper-laboral-form.component';

@NgModule({
  declarations: [ExperLaboralFormComponent],
  imports: [
      CommonModule,
      ExperLaboralFormRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class ExperLaboralFormModule { }
