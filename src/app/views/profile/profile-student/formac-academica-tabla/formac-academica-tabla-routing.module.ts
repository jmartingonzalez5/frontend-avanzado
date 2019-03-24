import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormacAcademicaTablaComponent } from './formac-academica-tabla.component';
const routes: Routes = [
    {
        path: '',
        component: FormacAcademicaTablaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormacAcademicaTablaRoutingModule { }
