import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RefundsComponent } from './refunds.component';
import { UnifiedTableModule } from 'src/shared/components/unified-table/unified-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundsRoutingModule } from './refunds-routing.module';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [RefundsComponent],
  imports: [
    CommonModule,
    RefundsRoutingModule,
    UnifiedTableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class RefundsModule { }
