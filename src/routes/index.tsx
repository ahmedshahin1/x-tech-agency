import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ClientsSlider } from "@/components/ClientsSlider";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyUs } from "@/components/WhyUs";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "X Tech Agency — We Build Brands. We Scale Businesses." },
      {
        name: "description",
        content:
          "Premium marketing, web & app development, design, and AI automation under one roof. Start your project with X Tech Agency.",
      },
      { property: "og:title", content: "X Tech Agency — We Build Brands. We Scale Businesses." },
      {
        property: "og:description",
        content: "Marketing · Technology · Automation · Growth.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ClientsSlider />
      <ServicesGrid />
      <WhyUs />
      <CTASection />
    </>
  );
}
