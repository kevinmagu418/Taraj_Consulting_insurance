export interface HeroContent {
  title: string;
  subtitle: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}
