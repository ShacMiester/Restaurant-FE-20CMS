import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DynamicFormComponent } from './dynamic-form-component/dynamic-form-component.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
@NgModule({
  declarations: [DynamicFormFieldComponent, DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports:[DynamicFormComponent, DynamicFormFieldComponent]
})
export class DynamicFormsAppModule { }
