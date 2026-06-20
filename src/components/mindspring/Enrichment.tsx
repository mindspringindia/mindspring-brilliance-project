import { Target, Brain, Zap, Trophy, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import enrichmentImg from "@/assets/mindspring-enrichment.jpg";

const enhancements = [
  { icon: Target, label: "Focus & attention span" },
  { icon: Brain, label: "Memory & cognitive ability" },
  { icon: Trophy, label: "Physical coordination & balance" },
  { icon: Zap, label: "Quick thinking & problem-solving" },
];

export function Enrichment() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="enrichment"
      aria-labelledby="enrichment-title"
      className="py-20 md:py-28"
    >
      <div
        ref={ref}
        className="reveal mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
            Unlocking Peak Potential
          </p>
          <h2
            id="enrichment-title"
            className="mt-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
          >
            Soaring past milestones, not just meeting them.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            For children who are already thriving, we offer enrichment
            programs designed to sharpen young minds and unlock their ultimate
            potential.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={enrichmentImg}
              alt="Children doing coordinated brain-gym exercises in a bright airy classroom"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              ABGs
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Advanced Brain Gym Sessions
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              High-performance training for your child's developing brain.
              Using engaging, evidence-based cognitive and physical exercises,
              we strengthen neural pathways for a distinct advantage in
              academics, sports, and life.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {enhancements.map((e) => (
                <li
                  key={e.label}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" />
                  <span className="text-sm font-medium text-foreground">
                    {e.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
