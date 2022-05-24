import { Router } from '@angular/router';
import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

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

  @ContentChild(TemplateRef) extras!: TemplateRef<Element>;

  constructor(private router:Router) { }

  ngOnInit(): void { }

  getStyle(){
    return this.styling;
  }
  navigate(){
    this.router.navigate(this.buttonLink)
  }
}
