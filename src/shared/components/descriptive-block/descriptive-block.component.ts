import { Router } from '@angular/router';
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

  @Input() buttonLink!: any[]

  @Input() containsButton: boolean = false

  @Input() backGroundImage!: string

  @Input() styling!: any

  @Input() buttonAction!: Function

  constructor(private router:Router) { }

  ngOnInit(): void { }

  getStyle(){
    return this.styling;
  }
  navigate(){
    this.router.navigate(this.buttonLink)
  }
}
