import { HeaderCarouselItem } from './../../../entities/header-carousel-item.entity';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() carouselItems!: HeaderCarouselItem[];
  @Input() component!: string;

  constructor() { }

  ngOnInit(): void {
  }

}