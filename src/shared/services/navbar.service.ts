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
      logo: 'https://s.tmimgcdn.com/scr/1200x627/212900/spoon-and-fork-restaurant-logo_212966-original.png', name: 'LoaziTech Restaurant', items: [{
        name: 'Home',
        isScrollOnly: true,
        link:'/home'
      }, {
        name: 'Our Story',
        isScrollOnly: false,
        link:'/ourStory'
      }, {
        name: 'Services',
        isScrollOnly: false,
        link:'/services'
      },
      {
        name:'logo',
        type:'logo',
        image:'someImage'
      },
       {
        name: 'Menu',
        isScrollOnly: true
      }, {
        name: 'Contact',
        isScrollOnly: true
      },
      {
        name: 'Order Now',
        isScrollOnly: true
      }],
    })
  }

}
