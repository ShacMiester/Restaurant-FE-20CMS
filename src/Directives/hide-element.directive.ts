import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Directive({
  selector: '[appHideElement]'
})
export class HideElementDirective {
  @Input('router') routerString!: string
  constructor(private router: Router, private el: ElementRef) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes(this.routerString))
          this.removeElement()
      }
    });
  }

  removeElement() {
    let el2: HTMLElement = this.el.nativeElement
    el2.parentElement?.removeChild(el2)
  }
}
