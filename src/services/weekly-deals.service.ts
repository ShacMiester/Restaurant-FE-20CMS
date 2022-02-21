import { OfferItem } from './../entities/weekly-offer.entity';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeeklyDealsService {

  constructor() { }
  someOffers: OfferItem[] = [
    { day: 'Monday', dayDescription:'Monday Description',item:'kebab',newPrice:10,oldPrice:71 },
    { day: 'Tuesday', dayDescription:'Tuesday Description',item:'kebab special',newPrice:10,oldPrice:37 },
    { day: 'Wednesday', dayDescription:'Wednesday Description',item:'kebab Mashawi',newPrice:10,oldPrice:17  }
  ]
  getOfferItems(): Observable<any[]> {
    return of(this.someOffers)
  }
}
