import { WorkingHoursComponent } from './working-hours.component';
import { UnifiedTableModule } from './../../../../../shared/components/unified-table/unified-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkingHoursRoutingModule } from './working-hours-routing.module';


@NgModule({
  declarations: [WorkingHoursComponent],
  imports: [
    CommonModule,
    WorkingHoursRoutingModule,
    UnifiedTableModule
  ]
})
export class WorkingHoursModule { }
