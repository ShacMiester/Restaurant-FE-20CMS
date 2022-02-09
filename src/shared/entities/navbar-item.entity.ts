export interface NavBar {
  logo: string;
  name: string;
  items: NavItem[];
}

export interface NavItem {
  name: string;
  link?: string;
  isScrollOnly?: boolean;
  children?: NavItem[];
}
