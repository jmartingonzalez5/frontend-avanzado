import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdiomasFormRoutingModule } from './idiomas-form-routing.module';
import { IdiomasFormComponent } from './idiomas-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [IdiomasFormComponent],
  imports: [
      CommonModule,
      IdiomasFormRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class IdiomasFormModule { }
