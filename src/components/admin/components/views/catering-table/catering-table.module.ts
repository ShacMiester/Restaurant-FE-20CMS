import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CateringTableRoutingModule } from './catering-table-routing.module';
import { UnifiedTableModule } from 'src/shared/components/unified-table/unified-table.module';
import { MatIconModule } from '@angular/material/icon';
import { CateringTableComponent } from './catering-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
CateringTableComponent
  ],
  imports: [
    CommonModule,
    CateringTableRoutingModule,
    UnifiedTableModule,
    MatIconModule,
    MatDialogModule,
    MatRippleModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,

  ],


})
export class CateringTableModule { }
