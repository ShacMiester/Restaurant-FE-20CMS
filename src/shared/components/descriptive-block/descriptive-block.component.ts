import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-descriptive-block',
  templateUrl: './descriptive-block.component.html',
  styleUrls: ['./descriptive-block.component.scss']
})
export class DescriptiveBlockComponent implements OnInit {

  @Input() title!: string;

  @Input() subtitle!: string;

  @Input() content!: string;

  @Input() buttonText!: string;

  @Input() buttonLink!: string

  @Input() containsButton: boolean = false

  @Input() backGroundImage!: string
  constructor() { }

  ngOnInit(): void {
  }

  getBackground(){
    return this.backGroundImage ? {'background-image':`url(${this.backGroundImage})`} : {'background-color' :'#C59D5F'}
  }
}
