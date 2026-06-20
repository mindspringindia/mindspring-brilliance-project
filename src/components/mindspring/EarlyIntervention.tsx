import {
  MessageCircle,
  Hand,
  Sparkles,
  BookOpen,
  Waves,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: MessageCircle,
    title: "Speech Therapy",
    body: "Helping children overcome communication barriers, improve articulation, develop expressive language, and enhance social communication.",
  },
  {
    icon: Hand,
    title: "Occupational Therapy (OT)",
    body: "Fostering independence in daily living, improving fine and gross motor skills, hand-eye coordination, and play skills.",
  },
  {
    icon: Sparkles,
    title: "ABA Therapy",
    body: "Using positive reinforcement to teach communication, social interaction, and self-care while reducing challenging behaviors.",
  },
  {
    icon: BookOpen,
    title: "Special Education",
    body: "Individualized learning programs that bridge academic gaps, tailored to each child's unique learning style.",
  },
  {
    icon: Waves,
    title: "Sensory Integration",
    body: "Helping children who are over- or under-sensitive process sensory input — touch, movement, sight, sound — effectively.",
  },
];

export function EarlyIntervention() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-20 md:py-28"
    >
      <div
        ref={ref}
        className="reveal mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
            Targeted Support · Early Intervention
          </p>
          <h2
            id="services-title"
            className="mt-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
          >
            Expert intervention over <em>"waiting and watching."</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            When a child struggles to speak, play, or regulate emotions, Early
            Intervention is the fastest path to progress.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
