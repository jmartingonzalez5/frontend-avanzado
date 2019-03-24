import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiomasTablaComponent } from './idiomas-tabla.component';
const routes: Routes = [
    {
        path: '',
        component: IdiomasTablaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdiomasTablaRoutingModule { }
