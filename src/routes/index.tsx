import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/mindspring/Nav";
import { Hero } from "@/components/mindspring/Hero";
import { GoldenWindow } from "@/components/mindspring/GoldenWindow";
import { EarlyIntervention } from "@/components/mindspring/EarlyIntervention";
import { WhoWeHelp } from "@/components/mindspring/WhoWeHelp";
import { Enrichment } from "@/components/mindspring/Enrichment";
import { ParentsPartners } from "@/components/mindspring/ParentsPartners";
import { Contact } from "@/components/mindspring/Contact";
import { Footer } from "@/components/mindspring/Footer";

const TITLE =
  "Mindspring — Child Development Center in Ghaziabad | Early Intervention Therapy";
const DESCRIPTION =
  "Mindspring is a child development center in Vaishali, Ghaziabad offering speech therapy, occupational therapy, ABA, special education, sensory integration, and cognitive enrichment for children ages 1–6.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "child development center Ghaziabad, early intervention therapy, speech therapy Ghaziabad, occupational therapy, ABA therapy, special education, sensory integration, child therapy Vaishali",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ChildCare",
          name: "Mindspring",
          description: DESCRIPTION,
          url: "https://www.mindspringindia.com",
          telephone: ["+91 9971996493", "+91 9266561109"],
          email: "Mindspringindia@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "G-1, Ground Floor, Plot No. 16, Sector 2A, Vaishali",
            addressLocality: "Ghaziabad",
            addressRegion: "UP",
            postalCode: "201010",
            addressCountry: "IN",
          },
          areaServed: "Ghaziabad",
          slogan: "Nurturing Potential. Empowering Minds.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <GoldenWindow />
        <EarlyIntervention />
        <WhoWeHelp />
        <Enrichment />
        <ParentsPartners />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
