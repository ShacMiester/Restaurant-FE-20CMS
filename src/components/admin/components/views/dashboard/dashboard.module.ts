import { MatIconModule } from '@angular/material/icon';
import { CateringTableComponent } from './../catering-table/catering-table.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsComponent } from "../../charts/charts.component";
import { ChartModule } from 'angular-highcharts';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    ChartsComponent,
    DashboardComponent,
    CateringTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule,
    NgxChartsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatRippleModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class DashboardModule { }
