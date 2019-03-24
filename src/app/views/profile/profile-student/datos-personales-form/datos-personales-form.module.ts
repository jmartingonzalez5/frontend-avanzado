import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosPersonalesFormRoutingModule } from './datos-personales-form-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatosPersonalesFormComponent} from './datos-personales-form.component';

@NgModule({
  declarations: [DatosPersonalesFormComponent],
  imports: [
      CommonModule,
      DatosPersonalesFormRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class DatosPersonalesFormModule { }
