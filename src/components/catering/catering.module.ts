import { SharedModule } from './../../shared/modules/shared.module';
import { DynamicFormsAppModule } from './../../shared/dynamic-forms-app/dynamic-forms-app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CateringRoutingModule } from './catering-routing.module';
import { CateringComponent } from "../catering/catering.component";


@NgModule({
  declarations: [CateringComponent],
  imports: [
    CommonModule,
    CateringRoutingModule,
    DynamicFormsAppModule,
    SharedModule
  ]
})
export class CateringModule { }
