import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UnifiedTableComponent } from './unified-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [UnifiedTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [UnifiedTableComponent]
})
export class UnifiedTableModule { }
