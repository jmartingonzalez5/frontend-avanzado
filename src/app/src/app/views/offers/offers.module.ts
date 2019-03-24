import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { JobOffersStudentComponent } from './job-offers-student/job-offers-student.component';
import { JobOffersCompanyComponent } from './job-offers-company/job-offers-company.component';

@NgModule({
  declarations: [OffersComponent, JobOffersStudentComponent, JobOffersCompanyComponent],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
