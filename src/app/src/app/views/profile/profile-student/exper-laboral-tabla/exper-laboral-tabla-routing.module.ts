import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperLaboralTablaComponent } from './exper-laboral-tabla.component';
const routes: Routes = [
    {
        path: '',
        component: ExperLaboralTablaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperLaboralTablaRoutingModule { }
