import {
  Brain,
  MessageSquare,
  GraduationCap,
  Activity,
  Heart,
  Baby,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/hooks/use-reveal";

const groups = [
  {
    icon: Brain,
    title: "Neurodivergence",
    tags: ["ADHD", "Autism Spectrum Disorder (ASD)"],
  },
  {
    icon: MessageSquare,
    title: "Communication",
    tags: ["Speech delays", "Stuttering", "Non-verbal hurdles"],
  },
  {
    icon: GraduationCap,
    title: "Learning",
    tags: ["Dyslexia", "Dysgraphia", "Dyscalculia"],
  },
  {
    icon: Activity,
    title: "Sensory & Motor",
    tags: ["Processing disorders", "Coordination issues"],
  },
  {
    icon: Heart,
    title: "Emotional",
    tags: ["Meltdowns", "Anxiety", "Defiance"],
  },
  {
    icon: Baby,
    title: "Development",
    tags: ["Global delays", "Down Syndrome", "Premature births"],
  },
];

export function WhoWeHelp() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="who-we-help"
      aria-labelledby="who-we-help-title"
      className="gradient-soft py-20 md:py-28"
    >
      <div
        ref={ref}
        className="reveal mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
            Who We Help
          </p>
          <h2
            id="who-we-help-title"
            className="mt-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
          >
            A wide range of developmental journeys — supported with care.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We work with children and families facing developmental,
            behavioral, and emotional challenges, including but not limited to:
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {g.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/15"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
