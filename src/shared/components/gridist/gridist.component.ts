import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridist',
  templateUrl: './gridist.component.html',
  styleUrls: ['./gridist.component.scss']
})
export class GridistComponent implements OnInit {

  @Input() list!: any[]
  constructor() { }

  ngOnInit(): void {
    this.list =  [
      {text: 'One', cols: 1, rows: 1, image: '../../../assets/images/gallery/baklawabox.png'},
      {text: 'Two', cols: 2, rows: 1, image: '../../../assets/images/gallery/chikenkabseh.png'},
      {text: 'Three', cols: 2, rows: 1, image: '../../../assets/images/gallery/falafelWrap.png'},
      {text: 'Four', cols: 1, rows: 1, image: '../../../assets/images/gallery/flafelHummus.png'},
      {text: 'One', cols: 2, rows: 1, image: '../../../assets/images/gallery/full (1).png'},
      {text: 'Two', cols: 1, rows: 1, image: '../../../assets/images/gallery/full (2).png'},
      {text: 'Three', cols: 1, rows: 1, image: '../../../assets/images/gallery/kebabRice.png'},
      {text: 'Four', cols: 2, rows: 1, image: '../../../assets/images/gallery/kobbeh.png'},
      {text: 'One', cols: 2, rows: 1, image: '../../../assets/images/gallery/mainDishes.png'},
      {text: 'Two', cols: 3, rows: 1, image: '../../../assets/images/gallery/meatRice.png'},
      {text: 'Three', cols: 1, rows: 1, image: '../../../assets/images/gallery/moqabelat.png'},
    ];

  }

}
