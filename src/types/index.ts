export type JerseyDesign = {
  slug: string;
  code: string;
  name: string;
  category: "Sepak bola" | "Futsal" | "Basket" | "Badminton";
  description: string;
  color: string;
  accent: string;
  popular: boolean;
  previousOrder: boolean;
  images: string[];
};
export type Testimonial = {
  name: string;
  team: string;
  quote: string;
  initials: string;
  isExample: boolean;
};
export type SiteConfig = { name: string; whatsapp: string; tagline: string };
