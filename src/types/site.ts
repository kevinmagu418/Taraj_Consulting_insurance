export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    facebook: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}
