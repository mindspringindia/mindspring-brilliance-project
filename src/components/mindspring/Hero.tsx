import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/mindspring-hero.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden gradient-hero pt-28 pb-16 text-white md:pt-36 md:pb-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_60%)]"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur">
            Child Development Center · Ghaziabad
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Nurturing Potential.
            <br />
            <span className="bg-gradient-to-r from-white to-sky bg-clip-text text-transparent">
              Empowering Minds.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            You see your child's boundless potential; our mission is to help the
            rest of the world see it, too. With Expert Therapies, Cognitive
            Enrichment, and Compassionate Guidance, we break down barriers and
            help your child's true capabilities shine.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-6 text-primary hover:bg-white/90"
            >
              <a href="#contact">
                Book a Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="tel:+919971996493">
                <Phone className="mr-1 h-4 w-4" />
                +91 99719 96493
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-white/10 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/20 shadow-card">
            <img
              src={heroImg}
              alt="A joyful child playing with wooden blocks alongside a kind therapist at Mindspring"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
