import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DomManipulationHelper {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  addClass(selector: string | HTMLElement, classes: string[] | string): void {
    const element = this.getElement(selector);

    if (!element || !classes?.length) return;

    if (typeof classes === 'string') {
      this.renderer.addClass(element, classes);
      return;
    }

    classes.forEach((className) => this.renderer.addClass(element, className));
  }

  removeClass(selector: string | HTMLElement, className: string): void {
    const element = this.getElement(selector);

    if (!element || !className) return;

    if (element?.classList.contains(className)) this.renderer.removeClass(element, className);
  }

  toggleClass(selector: string | HTMLElement, classes: string[]): void {
    const element = this.getElement(selector);

    if (!element || !classes?.length) return;

    classes.forEach((className) => this.toggleDomClass(element, className));
  }

  setAttribute(selector: string, attributeName: string, attributeValue: string) {
    const element = this.getElement(selector);

    if (!element) return;

    this.renderer.setAttribute(element, attributeName, attributeValue);
  }

  removeAttribute(selector: string, attributeName: string) {
    const element = this.getElement(selector);

    if (!element) return;

    this.renderer.removeAttribute(element, attributeName);
  }

  changeHtmlDirAttribute(lang: string) {
    if (lang === 'ar') {
      this.setAttribute('html', 'dir', 'rtl');
    } else {
      this.removeAttribute('html', 'dir');
    }
    this.setAttribute('html', 'lang', lang);
  }

  changeBodyLanguageClass(lang: string) {
    if (lang === 'ar') {
      this.addClass('body', 'rtlClass');
      this.removeClass('body', 'ltrClass');
    } else {
      this.addClass('body', 'ltrClass');
      this.removeClass('body', 'rtlClass');
    }
  }

  setStyle(selector: string | HTMLElement, propName: string, propValue: string) {
    const element = this.getElement(selector);
    if (!element) return;

    this.renderer.setStyle(element, propName, propValue);
  }

  listener(elem: HTMLElement | string, eventName: string, callback: (event: any) => void): () => void {
    const element = this.getElement(elem);
    return this.renderer.listen(element, eventName, callback);
  }

  private getElement(selector: string | HTMLElement): HTMLElement | null {
    return selector instanceof HTMLElement ? selector : this.document.querySelector(selector);
  }

  private toggleDomClass(element: HTMLElement, className: string): void {
    if (element.classList.contains(className)) this.removeClass(element, className);
    else this.addClass(element, className);
  }
}
