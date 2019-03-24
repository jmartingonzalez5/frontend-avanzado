import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperLaboralFormComponent } from './exper-laboral-form.component';
const routes: Routes = [
    {
        path: '',
        component: ExperLaboralFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperLaboralFormRoutingModule { }
