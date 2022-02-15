import { Service } from './../../entities/service.entity';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = []
  constructor(private serviceServices: ServicesService) { }

  ngOnInit(): void {
    this.getServices()
  }

  getServices() {
    this.serviceServices.getServices().subscribe(services => {
      this.services = services
    })
  }
  getImage(i: number) {
    const style = {
      'background-image': `url(${this.services[i].image})`
    }
    return style
  }
}
