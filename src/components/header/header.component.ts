import { HeaderService } from './../../services/header.service';
import { HeaderCarouselItem } from './../../entities/header-carousel-item.entity';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  carouselItems!: HeaderCarouselItem[]
  currentPage: number = 0;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event : any) {
      if ($event.path[1].pageYOffset> 1) {
        this.height = $event.path[1].pageYOffset+'px'
      }
  }
  constructor(private headerService: HeaderService) { }
  height: string = ''
  ngOnInit(): void {
    this.getHeaderCarouselItems()
  }

  getHeight(){
    return `transform: translateX(${this.height})`
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
