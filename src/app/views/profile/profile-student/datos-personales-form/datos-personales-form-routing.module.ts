import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosPersonalesFormComponent } from './datos-personales-form.component';
const routes: Routes = [
    {
        path: '',
        component: DatosPersonalesFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosPersonalesFormRoutingModule { }
