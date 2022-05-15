import { PaymentComponent } from 'src/components/payment/payment.component';
import { StripeModule } from 'stripe-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';


@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    StripeModule.forRoot("")
  ]
})
export class PaymentModule { }
