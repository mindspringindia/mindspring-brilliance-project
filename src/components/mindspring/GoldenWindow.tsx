import { Brain, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function GoldenWindow() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="about"
      aria-labelledby="golden-window-title"
      className="gradient-soft py-20 md:py-28"
    >
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
            The First 2,000 Days
          </p>
          <h2
            id="golden-window-title"
            className="mt-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
          >
            The Golden Window
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Between ages 1 and 6, your child's brain forms over{" "}
            <span className="font-semibold text-foreground">
              one million new neural connections every second
            </span>
            . This is the <em>Golden Window</em> — a critical time where
            environment and stimulation build the brain's lifelong
            architecture.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Mindspring, we share your urgency — ensuring no potential is
            left untapped and no parent navigates this journey alone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <StatCard
            icon={<Brain className="h-6 w-6" />}
            value="1 Million+"
            unit="connections / second"
            description="Neural pathways formed in your child's brain during peak development."
          />
          <StatCard
            icon={<Clock className="h-6 w-6" />}
            value="2,000"
            unit="first days"
            description="The window where early experiences shape lifelong learning and behavior."
            accent
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  unit,
  description,
  accent = false,
}: {
  icon: React.ReactNode;
  value: string;
  unit: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`group rounded-2xl border p-6 shadow-card transition-transform hover:-translate-y-1 ${
        accent
          ? "gradient-hero border-transparent text-white"
          : "border-border bg-card text-foreground"
      }`}
    >
      <div
        className={`grid h-12 w-12 place-items-center rounded-xl ${
          accent ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
        }`}
      >
        {icon}
      </div>
      <p className="mt-5 font-display text-4xl font-bold leading-none sm:text-5xl">
        {value}
      </p>
      <p
        className={`mt-1 text-sm font-medium ${
          accent ? "text-white/85" : "text-primary-glow"
        }`}
      >
        {unit}
      </p>
      <p
        className={`mt-4 text-sm leading-relaxed ${
          accent ? "text-white/80" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
