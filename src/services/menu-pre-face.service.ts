import { preMenuItems } from './../entities/menu-pre-face.entity';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuPreFaceService {

  constructor() { }
  preFaceMenuItems: preMenuItems[] = [
    {
      title: 'kabab special',
      description: `kebab - cubes of meat marinated and cooked on a skewer usually with vegetables kabob , shish kebab dish - a particular item of prepared food; "she prepared a special dish for dinner"`,
      image: 'https://static.toiimg.com/photo/74254234/Pune.jpg?width=748&resize=4'
    },
    {
      title: 'kabab special',
      description: `kebab - cubes of meat marinated and cooked on a skewer usually with vegetables kabob , shish kebab dish - a particular item of prepared food; "she prepared a special dish for dinner"`,
      image: 'https://static.toiimg.com/photo/74254234/Pune.jpg?width=748&resize=4'
    },
    {
      title: 'kabab special',
      description: `kebab - cubes of meat marinated and cooked on a skewer usually with vegetables kabob , shish kebab dish - a particular item of prepared food; "she prepared a special dish for dinner"`,
      image: 'https://static.toiimg.com/photo/74254234/Pune.jpg?width=748&resize=4'
    }]

  getPreFaceItems(): Observable<preMenuItems[]> {
    return of(this.preFaceMenuItems)
  }

}
