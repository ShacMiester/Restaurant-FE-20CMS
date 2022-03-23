import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor() { }

  getAdminPanelSections(): Observable<any> {
    return of(
      [
        {
          title: 'Dashboard',
          children: [{ title: 'Dashboard page', link: 'dashboard' }]
        },
        {
          title: 'Menu',
          children: [
            { title: 'Menu items', link: 'menu-items' },
            { title: 'Menu categories', link: 'menu-categories' }
          ]
        },
        {
          title: 'Reservations',
          children: [
            { title: 'Requests', link: 'reservations' }
          ]
        },
        {
          title: 'Caterings',
          children: [
            { title: 'Table', link: 'catering-table' }
          ]
        },
        {
          title: 'Weekly offers',
          children: [{ title: 'Table', link: 'weekly-deals-table' }]
        },
        {
          title: 'Main page slider',
          children: [{ title: 'Table', link: 'carousel-items-table' }]
        }
      ])
  }
}
