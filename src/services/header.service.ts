import { environment } from './../environments/environment.prod';
import { AuthInterceptorService } from 'src/shared/services/auth-interceptor.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HeaderCarouselItem } from '../entities/header-carousel-item.entity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  controller: string = 'products';
  someMenu: HeaderCarouselItem[] = [
    {
      label: 'Lorem ipsum dolor sit',
      show: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est gege.',
      image: '../assets/images/gallery/flafelHummus.png',
      buttonText: 'DoorDash',
      buttonLink: 'https://www.doordash.com/',
      buttons: [
        { buttonLink: 'https://www.doordash.com/', buttonText: 'DoorDash' },
        { buttonLink: 'menu', buttonText: 'Order Pickup' },
      ],
    },
    {
      label: 'Lorem ipsum dolor sit',
      show: false,
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      image: '../assets/images/original-_2_.png',
      buttons: [{ buttonText: 'Catering', buttonLink: 'catering' }],
    },
    {
      label: 'Lorem ipsum dolor sit',
      show: true,
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      image: '../assets/images/original_1.png',
      buttons: [{ buttonText: 'Lorem Ipsum', buttonLink: 'LoremIpsum' }],
    },
  ];
  constructor(
    private HttpClient: HttpClient,
    private auth: AuthInterceptorService
  ) {}
  nextPage: number = 0;
  getHeaderCarouselItems(): Observable<HeaderCarouselItem[]> {
    return of(this.someMenu);
  }

  addNewCarouselItem() {
    this.someMenu.push({
      label: 'Mix Cheese',
      show: false,
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      image: 'https://hkliving.nl/media/38792/servies-2-05.jpg',
    });
  }
  addNewItem() {
    this.HttpClient.get(
      `${environment.storeApi}${this.controller}?limit=${this.nextPage}&starting_after=prod_L75IlP3jDDacm1`
    ).subscribe((items: any) => {
      if (items && items.has_more) this.nextPage += 1;
    });
  }
}
