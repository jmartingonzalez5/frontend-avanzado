import { NgModule } from '@angular/core';




/*
import { FlexLayoutModule } from '@angular/flex-layout';
 import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule
} from '@angular/material'; */

import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatOptionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatRippleModule
} from '@angular/material';

@NgModule({
    imports: [
            FlexLayoutModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatCardModule,
            MatSelectModule,
            MatCheckboxModule,
            MatTableModule,
            MatListModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatMenuModule,
            MatToolbarModule,
            MatIconModule
        ],
    exports: [
            FlexLayoutModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatCardModule,
            MatSelectModule,
            MatCheckboxModule,
            MatTableModule,
            MatListModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatMenuModule,
            MatToolbarModule,
            MatIconModule
        ],
})
export class MaterialModule { }
