import { ReservationTableComponent } from './reservation-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationTableRoutingModule } from './reservation-table-routing.module';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [ReservationTableComponent],
  imports: [
    CommonModule,
    ReservationTableRoutingModule,
    MatDialogModule,
    MatMenuModule,
    MatRippleModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class ReservationTableModule { }
