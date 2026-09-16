import {
  Hero,
  FeaturedDesigns,
  CustomSection,
  PreviousOrders,
  OrderingSteps,
  Reviews,
  ClosingCta,
} from "@/components/home/home-sections";
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <FeaturedDesigns />
      <CustomSection />
      <PreviousOrders />
      <OrderingSteps />
      <Reviews />
      <ClosingCta />
    </main>
  );
}
