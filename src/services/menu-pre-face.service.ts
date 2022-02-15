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
      image: 'https://c4.wallpaperflare.com/wallpaper/1/371/728/carne-kabab-koobideh-plato-wallpaper-preview.jpg'
    },
    {
      title: 'kabab special',
      description: `kebab - cubes of meat marinated and cooked on a skewer usually with vegetables kabob , shish kebab dish - a particular item of prepared food; "she prepared a special dish for dinner"`,
      image: 'https://img.freepik.com/free-photo/adana-kebab-served-with-flatbread-grilled-pepper-tomato-caramelized-onion_140725-2466.jpg?size=626&ext=jpg'
    },
    {
      title: 'kabab special',
      description: `kebab - cubes of meat marinated and cooked on a skewer usually with vegetables kabob , shish kebab dish - a particular item of prepared food; "she prepared a special dish for dinner"`,
      image: 'http://lambert.kwst.net/site/images/bg/13.jpg'
    }]

  getPreFaceItems(): Observable<preMenuItems[]> {
    return of(this.preFaceMenuItems)
  }

}
