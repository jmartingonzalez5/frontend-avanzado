import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobOffersStudentDetalleComponent} from './job-offers-student-detalle.component';
const routes: Routes = [
    {
        path: '',
        component: JobOffersStudentDetalleComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOffersStudentDetalleRoutingModule { }
