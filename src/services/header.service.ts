import { environment } from './../environments/environment.prod';
import { AuthInterceptorService } from 'src/shared/services/auth-interceptor.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HeaderCarouselItem } from '../entities/header-carousel-item.entity';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  controller: string = 'products'
  someMenu: HeaderCarouselItem[] = [
    { label: 'Healthy Salad', show: true, description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', image: 'https://images.unsplash.com/photo-1550807014-1236e91b92d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80' },
    { label: 'Mix Cheese', show: false, description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', image: 'https://hkliving.nl/media/38792/servies-2-05.jpg' },
    { label: 'Second Mix Cheese', show: true, description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', image: 'https://images7.alphacoders.com/110/1103153.jpg' }
  ]
  constructor(private HttpClient: HttpClient, private auth: AuthInterceptorService) { }
  nextPage: number = 0
  getHeaderCarouselItems(): Observable<HeaderCarouselItem[]> {
    return of(this.someMenu)
  }

  addNewCarouselItem() {
    this.someMenu.push({ label: 'Mix Cheese', show: false, description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', image: 'https://hkliving.nl/media/38792/servies-2-05.jpg' })
  }
  addNewItem() {

    this.HttpClient.get(`${environment.storeApi}${this.controller}?limit=${this.nextPage}&starting_after=prod_L75IlP3jDDacm1`,).subscribe((items: any) => {
      if (items && items.has_more)
        this.nextPage += 1;
    })
  }
}
