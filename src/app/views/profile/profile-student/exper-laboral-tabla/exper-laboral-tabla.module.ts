import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperLaboralTablaRoutingModule } from './exper-laboral-tabla-routing.module';
import {ExperLaboralTablaComponent} from './exper-laboral-tabla.component';

@NgModule({
  declarations: [ExperLaboralTablaComponent],
  imports: [
      CommonModule,
      ExperLaboralTablaRoutingModule
  ]
})
export class ExperLaboralTablaModule { }
