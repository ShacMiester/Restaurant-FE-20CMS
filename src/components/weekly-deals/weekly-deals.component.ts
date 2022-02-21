import { OfferItem } from './../../entities/weekly-offer.entity';
import { WeeklyDealsService } from './../../services/weekly-deals.service';
import { animateText } from './../../animations/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-deals',
  templateUrl: './weekly-deals.component.html',
  styleUrls: ['./weekly-deals.component.scss'],
  animations:[animateText]
})
export class WeeklyDealsComponent implements OnInit {
  deals!: OfferItem[];
  constructor(private weeklyDealsService:WeeklyDealsService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(){
    this.weeklyDealsService.getOfferItems().subscribe(deals =>{
      this.deals = deals
    })
  }

}
