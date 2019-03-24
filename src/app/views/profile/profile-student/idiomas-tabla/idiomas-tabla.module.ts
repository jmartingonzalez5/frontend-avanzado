import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdiomasTablaRoutingModule } from './idiomas-tabla-routing.module';
import { IdiomasTablaComponent } from './idiomas-tabla.component';

@NgModule({
  declarations: [IdiomasTablaComponent],
  imports: [
      CommonModule,
      IdiomasTablaRoutingModule
  ]
})
export class IdiomasTablaModule { }
