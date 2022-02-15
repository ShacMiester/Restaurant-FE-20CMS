import { Observable, of } from 'rxjs';
import { Service } from './../entities/service.entity';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services: Service[] = [
    { title: 'Lorem Ipsum', image: "https://image.freepik.com/free-photo/raw-beef-kebab-with-herbs-dark-board-close-up_93675-81435.jpg",description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',icon:'local_dining'},
    { title: 'Lorem Ipsum', image: "https://thumbs.dreamstime.com/b/lula-kebab-black-background-lula-kebab-vegetables-black-background-173225710.jpg",description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',icon:'restaurant' },
    { title: 'Lorem Ipsum', image: "https://hkliving.nl/media/38792/servies-2-05.jpg",description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',icon:'fastfood'}]
  constructor() { }

  getServices(): Observable<Service[]> {
    return of(this.services)
  }
}
