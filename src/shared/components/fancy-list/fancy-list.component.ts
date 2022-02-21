import { OfferItem } from './../../../entities/weekly-offer.entity';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-list',
  templateUrl: './fancy-list.component.html',
  styleUrls: ['./fancy-list.component.scss']
})
export class FancyListComponent implements OnInit {
  @Input() title!: string;
  @Input() backgroundImage!: string;
  @Input() subtitle!: string;
  @Input() offers!: OfferItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
