import { Observable, of } from 'rxjs';
import { Service } from './../entities/service.entity';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services: Service[] = [
    { title: 'Lorem Ipsum', image: "https://static.toiimg.com/photo/74254234/Pune.jpg?width=748&resize=4" },
    { title: 'Lorem Ipsum', image: "https://image.freepik.com/free-photo/raw-beef-kebab-with-herbs-dark-board-close-up_93675-81435.jpg" },
    { title: 'Lorem Ipsum', image: "https://thumbs.dreamstime.com/b/lula-kebab-black-background-lula-kebab-vegetables-black-background-173225710.jpg" },
    { title: 'Lorem Ipsum', image: "https://hkliving.nl/media/38792/servies-2-05.jpg" }]
  constructor() { }

  getServices(): Observable<Service[]> {
    return of(this.services)
  }
}
