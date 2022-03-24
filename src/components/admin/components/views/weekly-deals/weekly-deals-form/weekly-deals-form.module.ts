import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeeklyDealsFormRoutingModule } from './weekly-deals-form-routing.module';
import { WeeklyDealsFormComponent } from './weekly-deals-form.component';
import { SharedModule } from 'src/shared/modules/shared.module';


@NgModule({
  declarations: [WeeklyDealsFormComponent],
  imports: [
    CommonModule,
    WeeklyDealsFormRoutingModule,
    SharedModule
  ]
})
export class WeeklyDealsFormModule { }
