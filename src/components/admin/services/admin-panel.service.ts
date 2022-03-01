import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor() { }

  getAdminPanelSections():Observable<any>{
    return of(
      [
      {
        title: 'Menu',
        children: [
          { title: 'Menu items', link: 'menu-items' },
          { title: 'Menu categories', link: 'menu-categories' }
        ]
      }
    ])
  }
}
