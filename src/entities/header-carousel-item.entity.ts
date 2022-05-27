export interface HeaderCarouselItem {
  label: string;
  show: boolean;
  description: string;
  image: string;
  buttonLink?: string
  buttonText?: string;
  buttons?: {
    buttonLink?: string;
    buttonText?: string;
    containsImage?:boolean;
    imageLink?:string;
    openInNewTab?:boolean;
  }[]
}
