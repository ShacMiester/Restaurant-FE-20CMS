import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingHoursFormRoutingModule } from './working-hours-form-routing.module';
import { DynamicFormsAppModule } from '../../../../../../shared/dynamic-forms-app/dynamic-forms-app.module';
import { SharedModule } from 'src/shared/modules/shared.module';
import { WorkingHoursFormComponent } from './working-hours-form.component';


@NgModule({
  declarations: [WorkingHoursFormComponent],
  imports: [
    CommonModule,
    WorkingHoursFormRoutingModule,
    DynamicFormsAppModule,
    SharedModule
  ]
})
export class WorkingHoursFormModule { }
