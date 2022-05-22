import { SharedModule } from './../../shared/modules/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatProgressBarModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class OrderModule { }
