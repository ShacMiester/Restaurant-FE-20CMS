import { HeaderService } from './../../services/header.service';
import { HeaderCarouselItem } from './../../entities/header-carousel-item.entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  carouselItems!: HeaderCarouselItem[]
  currentPage: number = 0;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getHeaderCarouselItems()
  }

  getHeaderCarouselItems() {
    this.headerService.getHeaderCarouselItems().subscribe(
      items => this.carouselItems = items
    )
  }

  addSomeMenu() {
    this.headerService.addNewCarouselItem();
  }

  getData() {
    this.headerService.addNewItem();
  }
}
