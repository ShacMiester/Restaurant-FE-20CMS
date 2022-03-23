import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeeklyDealsFormRoutingModule } from './weekly-deals-form-routing.module';
import { WeeklyDealsFormComponent } from './weekly-deals-form.component';


@NgModule({
  declarations: [WeeklyDealsFormComponent],
  imports: [
    CommonModule,
    WeeklyDealsFormRoutingModule
  ]
})
export class WeeklyDealsFormModule { }
