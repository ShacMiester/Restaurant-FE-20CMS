import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminPanelService {
  constructor() { }

  getAdminPanelSections(): Observable<any> {
    return of([
      {
        title: 'Dashboard',
        children: [{ title: 'Dashboard page', link: 'dashboard' }],
      },
      {
        title: 'Menu',
        children: [
          { title: 'Menu categories', link: 'menu-categories' },
          { title: 'Menu items', link: 'menu-standAlone-table' },
          { title: 'Menu items specials', link: 'menu-items-special-table' },
        ],
      },
      {
        title: 'Reservations',
        children: [{ title: 'Requests', link: 'reservations' }],
      },
      {
        title: 'Caterings',
        children: [{ title: 'Table', link: 'catering-table' }],
      },
      {
        title: 'Branches',
        children: [{ title: 'Manage Branches', link: 'branches' }],
      },
      {
        title: 'Kitchen',
        children: [{ title: 'Kitchen Orders', link: 'kitchen' }],
      },
    ]);
  }
}
