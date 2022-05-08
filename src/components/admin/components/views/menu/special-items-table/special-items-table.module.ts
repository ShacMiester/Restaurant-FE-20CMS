import { SpecialItemsTableComponent } from './special-items-table.component';
import { UnifiedTableModule } from './../../../../../../shared/components/unified-table/unified-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialItemsTableRoutingModule } from './special-items-table-routing.module';


@NgModule({
  declarations: [SpecialItemsTableComponent],
  imports: [
    CommonModule,
    SpecialItemsTableRoutingModule,
    UnifiedTableModule
  ]
})
export class SpecialItemsTableModule { }
