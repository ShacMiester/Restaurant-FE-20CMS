import { CarouselTableComponent } from './carousel-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselTableRoutingModule } from './carousel-table-routing.module';


@NgModule({
  declarations: [CarouselTableComponent],
  imports: [
    CommonModule,
    CarouselTableRoutingModule
  ]
})
export class CarouselTableModule { }
