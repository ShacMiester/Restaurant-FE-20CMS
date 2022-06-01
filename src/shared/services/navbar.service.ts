import { NavBar } from './../entities/navbar-item.entity';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  getNavBarConfigs(): Observable<NavBar> {
    return of({
      logo: 'assets/images/gallery/JASMINE_GRILL_KABAB2.png', name: 'LoaziTech Restaurant', items: [{
        name: 'Home',
        isScrollOnly: true,
        link: '/'
      }, {
        name: 'Our Story',
        isScrollOnly: true,
        link: '/',
        scrollTo: 'story'
      },
      {
        name: 'Menu',
        link: 'menu-page'
      },
      {
        name: 'Order Now',
        isScrollOnly: true,
        link: 'menu',
      },
      {
        name: 'Online catering',
        link: 'catering'
      },
      {
        name: 'Reservation',
        link: '/',
        isScrollOnly: true,
        scrollTo: "reservation"
      }
      ],
    })
  }

}
