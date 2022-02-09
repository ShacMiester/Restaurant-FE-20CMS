export interface NavBar {
  logo: string;
  name: string;
  items: NavItem[];
}

export interface NavItem {
  name: string;
  link?: string;
  type?: 'logo' | 'link';
  isScrollOnly?: boolean;
  children?: NavItem[];
}
