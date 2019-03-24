import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, ProfileStudentComponent, ProfileCompanyComponent],
  imports: [
      CommonModule,
      ProfileRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class ProfileModule { }
