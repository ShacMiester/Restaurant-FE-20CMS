import { OptionsFormToBeRenamedComponent } from './options-form-to-be-renamed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsFormToBeRenamedRoutingModule } from './options-form-to-be-renamed-routing.module';
import { SharedModule } from 'src/shared/modules/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';


@NgModule({
  declarations: [OptionsFormToBeRenamedComponent],
  imports: [
    CommonModule,
    OptionsFormToBeRenamedRoutingModule,
    SharedModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    MatSnackBarModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
  ]
})
export class OptionsFormToBeRenamedModule { }
