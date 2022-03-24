import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WeeklyDealsTableComponent } from './weekly-deals-table.component';
import { SharedModule } from './../../../../../../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeeklyDealsTableRoutingModule } from './weekly-deals-table-routing.module';


@NgModule({
  declarations: [WeeklyDealsTableComponent],
  imports: [
    CommonModule,
    WeeklyDealsTableRoutingModule,
    SharedModule,
    MatProgressBarModule
  ]
})
export class WeeklyDealsTableModule { }
