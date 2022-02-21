import { preMenuItems } from './../../../entities/menu-pre-face.entity';
import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuPreFaceService } from '../../../services/menu-pre-face.service'
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-pre-face',
  templateUrl: './menu-pre-face.component.html',
  styleUrls: ['./menu-pre-face.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({opacity: 0, transform: 'translateY(-400px)'}),
          stagger(-30, [
            animate('1500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('1300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ]),
  ]
})
export class MenuPreFaceComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  @ViewChild('testDiv') private testDiv!: ElementRef<HTMLDivElement>;
  isTestDivScrolledIntoView: boolean = false
  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.testDiv){
      const rect = this.testDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
    }
  }
  preMenuItems!: preMenuItems[]
  constructor(private MenuPreFaceService: MenuPreFaceService) { }

  ngOnInit(): void {
    this.getPreMenuItems()
  }

  getPreMenuItems() {
    this.MenuPreFaceService.getPreFaceItems().subscribe(items =>
      this.preMenuItems = items)
  }
  onIntersection(event : any){
    console.log(event)
  }
}
