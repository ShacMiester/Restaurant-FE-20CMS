import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UnifiedTableModule } from './../../../../../../shared/components/unified-table/unified-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemStandAloneTableRoutingModule } from './menu-item-stand-alone-table-module-routing.module';
import { MenuStandALoneTableComponent } from './menu-stand-alone-table.component';


@NgModule({
  declarations: [MenuStandALoneTableComponent],
  imports: [
    CommonModule,
    MenuItemStandAloneTableRoutingModule,
    UnifiedTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class MenuItemStandAloneTableModule { }
