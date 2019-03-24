import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiomasFormComponent } from './idiomas-form.component';
const routes: Routes = [
    {
        path: '',
        component: IdiomasFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdiomasFormRoutingModule { }
