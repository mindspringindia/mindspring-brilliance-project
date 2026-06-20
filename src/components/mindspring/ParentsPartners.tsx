import { Heart, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

export function ParentsPartners() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      aria-labelledby="parents-partners-title"
      className="gradient-soft py-20 md:py-28"
    >
      <div
        ref={ref}
        className="reveal mx-auto max-w-7xl px-4 sm:px-6"
      >
        <h2
          id="parents-partners-title"
          className="mx-auto max-w-3xl text-center text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
        >
          For Parents & Partners
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <Card
            icon={<Heart className="h-6 w-6" />}
            eyebrow="For Parents"
            title="Trust your instincts."
            body="If you want to give your child a cognitive edge, or if your gut tells you they need a little extra help, don't wait. We are here to listen, support, and guide you."
            ctaLabel="Book a Consultation"
          />
          <Card
            icon={<School className="h-6 w-6" />}
            eyebrow="For Preschool Partners"
            title="You're on the front lines of child development."
            body="Mindspring partners with educators to create inclusive, thriving classrooms through teacher training, observation, and direct referral support. Together, we can ensure no child falls through the cracks."
            ctaLabel="Partner with Us"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  eyebrow,
  title,
  body,
  ctaLabel,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
}) {
  return (
    <article className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card md:p-10">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary-glow">
        {eyebrow}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        {body}
      </p>
      <Button asChild className="mt-6 rounded-full px-5">
        <a href="#contact">{ctaLabel}</a>
      </Button>
    </article>
  );
}
