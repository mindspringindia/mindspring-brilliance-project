import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartPulse,
  Brain,
  Users,
  Sparkles,
  Check,
  Phone,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Compass,
  Flame,
} from "lucide-react";
import { Nav } from "@/components/mindspring/Nav";
import { Footer } from "@/components/mindspring/Footer";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/counselling")({
  head: () => ({
    meta: [
      {
        title:
          "Adult Counselling & Psychotherapy — Mindspring Ghaziabad",
      },
      {
        name: "description",
        content:
          "Professional, confidential adult counselling and psychotherapy at Mindspring Ghaziabad — anxiety, depression, relationships, trauma, stress and personal growth.",
      },
      {
        property: "og:title",
        content: "Adult Counselling & Psychotherapy — Mindspring",
      },
      {
        property: "og:description",
        content:
          "You don't have to carry it alone. Compassionate, evidence-based therapy for adults.",
      },
    ],
  }),
  component: CounsellingPage,
});

const areas = [
  "Anxiety & panic attacks",
  "Stress, burnout & exhaustion",
  "Depression & low mood",
  "Relationship & couples concerns",
  "Low self-esteem & self-doubt",
  "Anger & emotional regulation",
  "Grief, loss & transitions",
  "Trauma & difficult experiences",
  "Parenting stress",
  "Workplace & career challenges",
  "Loneliness & isolation",
  "Personal growth & wellbeing",
];

const helps = [
  "Feel calmer and more emotionally balanced",
  "Manage anxiety, stress and difficult emotions more effectively",
  "Improve communication and relationships",
  "Build confidence and self-worth",
  "Develop healthier coping strategies",
  "Navigate life transitions with greater resilience",
  "Gain clarity, self-awareness and direction",
  "Create lasting positive change",
];

const services = [
  "Individual Counselling",
  "Adult Psychotherapy",
  "Anxiety & Stress Counselling",
  "Depression Support",
  "Relationship & Couples Counselling",
  "Marital Counselling",
  "Trauma-Informed Therapy",
  "Grief & Loss Counselling",
  "Anger Management Support",
  "Parent Counselling & Guidance",
  "Workplace & Career Counselling",
  "Emotional Wellness & Growth",
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "Confidential & Non-Judgmental",
    text: "A safe, private space where you can speak openly without fear of being judged.",
  },
  {
    icon: Compass,
    title: "Personalised Care",
    text: "Therapy tailored to your specific concerns, experiences, strengths and goals.",
  },
  {
    icon: Brain,
    title: "Evidence-Based Approaches",
    text: "Grounded in established psychological principles that support meaningful change.",
  },
  {
    icon: HeartPulse,
    title: "Compassionate Professionals",
    text: "Genuine empathy, understanding and respect for your personal journey.",
  },
  {
    icon: Leaf,
    title: "Focused on Meaningful Change",
    text: "Not just feeling better in the moment — building a healthier, balanced life.",
  },
];

function CounsellingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Intro />
      <Areas />
      <HowTherapyHelps />
      <Services />
      <WhyChoose />
      <Approach />
      <FirstStep />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden gradient-hero pt-32 pb-28 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="blob"
          style={{
            width: 520,
            height: 520,
            background: "oklch(0.88 0.10 258)",
            top: -160,
            right: -120,
          }}
        />
        <div
          className="blob"
          style={{
            width: 420,
            height: 420,
            background: "oklch(0.65 0.14 258)",
            bottom: -160,
            left: -100,
            animationDelay: "-5s",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur">
          <HeartPulse className="h-3.5 w-3.5" />
          Adult Counselling & Psychotherapy
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
          You don't have to{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-white via-sky to-white bg-clip-text text-transparent animated-gradient">
              carry it alone.
            </span>
            <svg
              className="absolute -bottom-2 left-0 h-3 w-full"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 8 Q 50 2, 100 6 T 198 6"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                className="text-sky"
              />
            </svg>
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Professional, confidential therapy in a safe, non-judgmental space —
          where you can slow down, feel heard, and make meaningful changes in
          your life.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-7 text-primary hover:bg-white/90"
          >
            <a href="#first-step">
              Book a consultation <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 px-7 text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 w-full text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}

function Intro() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="px-4 py-20 sm:px-6">
      <div
        ref={ref}
        className="reveal mx-auto max-w-3xl text-lg leading-relaxed text-foreground/80"
      >
        <p>
          From the outside, you may seem like you're managing. You go to work.
          You meet your responsibilities. You show up for your family.
        </p>
        <p className="mt-5 font-display text-xl font-medium text-foreground">
          But inside, you may feel exhausted.
        </p>
        <p className="mt-5">
          Perhaps your mind never stops racing. Perhaps you're constantly
          overwhelmed, emotionally drained, or carrying burdens that no one
          else can see. Sometimes things get better on their own — and
          sometimes we need support.
        </p>
        <p className="mt-5">
          At Mindspring, we provide professional adult counselling and
          psychotherapy in a safe, confidential environment where you can
          gain clarity and begin making meaningful changes.
        </p>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="relative overflow-hidden gradient-soft px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
            Areas We Commonly Support
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            You don't need to wait until things become unbearable.
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {areas.map((a, i) => (
            <AreaChip key={a} text={a} delay={i * 50} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaChip({ text, delay }: { text: string; delay: number }) {
  const ref = useReveal<HTMLSpanElement>();
  return (
    <span
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal-scale group inline-flex cursor-default items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      <Sparkles className="h-3.5 w-3.5 text-primary transition-colors group-hover:text-primary-foreground" />
      {text}
    </span>
  );
}

function HowTherapyHelps() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Left />
        <Right />
      </div>
    </section>
  );
}

function Left() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal-left">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
        How Therapy Can Help
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
        More than talking about problems.
      </h2>
      <p className="mt-5 text-foreground/75">
        It's an opportunity to pause, reflect, and better understand
        yourself. A space where you can make sense of difficult emotions,
        untangle overwhelming thoughts, and develop healthier ways of coping.
      </p>
      <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary/20 bg-card p-4 shadow-soft">
        <Flame className="h-6 w-6 text-primary drift" />
        <p className="text-sm font-medium text-foreground/80">
          Over time, lasting positive change becomes possible.
        </p>
      </div>
    </div>
  );
}

function Right() {
  return (
    <ul className="space-y-3">
      {helps.map((h, i) => (
        <HelpItem key={h} text={h} delay={i * 70} />
      ))}
    </ul>
  );
}

function HelpItem({ text, delay }: { text: string; delay: number }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal-right group flex items-start gap-4 rounded-xl border border-border/70 bg-card p-4 transition-all hover:border-primary/40 hover:shadow-soft"
    >
      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
      <span className="text-foreground/85">{text}</span>
    </li>
  );
}

function Services() {
  return (
    <section className="relative overflow-hidden bg-card px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Specialised support, tailored to you.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceTile key={s} text={s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceTile({ text, delay }: { text: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group relative overflow-hidden rounded-xl border border-border/70 bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero text-white shadow-soft">
          <Users className="h-4 w-4" />
        </span>
        <p className="font-display font-medium text-foreground">{text}</p>
      </div>
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full"
      />
    </div>
  );
}

function WhyChoose() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
            Why Choose Mindspring
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Care that feels human, grounded in expertise.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((c, i) => (
            <WhyCard key={c.title} {...c} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({
  icon: Icon,
  title,
  text,
  delay,
}: {
  icon: typeof HeartPulse;
  title: string;
  text: string;
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal-scale group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card"
    >
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky/40 opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100"
      />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-hero text-white shadow-soft">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          {text}
        </p>
      </div>
    </div>
  );
}

function Approach() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative gradient-soft px-4 py-24 sm:px-6">
      <div
        ref={ref}
        className="reveal mx-auto max-w-4xl text-center"
      >
        <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
          Our Approach
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
          Healing is not about becoming someone new.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
          It is about rediscovering the strength, clarity and confidence that
          have been there all along. We take time to understand not just the
          challenges you're facing — but the person behind them.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {[
            { n: "01", t: "Understand", d: "We listen deeply to your story, experiences and goals." },
            { n: "02", t: "Reflect", d: "Together we untangle thoughts and emotions for clarity." },
            { n: "03", t: "Grow", d: "We build resilience, healthier patterns and lasting change." },
          ].map((step) => (
            <div
              key={step.n}
              className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="font-display text-5xl font-bold text-primary/15 transition-colors group-hover:text-primary/30">
                {step.n}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">
                {step.t}
              </h3>
              <p className="mt-1 text-sm text-foreground/70">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FirstStep() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="first-step" className="px-4 py-24 sm:px-6">
      <div
        ref={ref}
        className="reveal-scale relative mx-auto max-w-5xl overflow-hidden rounded-3xl gradient-hero p-10 text-center text-white shadow-card md:p-16"
      >
        <div className="shimmer-overlay" />
        <p className="font-display text-xs uppercase tracking-[0.3em] text-white/70">
          Take the First Step
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
          Seeking support is not a sign of weakness.
          <br className="hidden md:block" />
          It is an act of <span className="text-sky">courage.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/85">
          You do not need to have all the answers before reaching out. You
          only need to take the first step. Sometimes that first conversation
          is where healing begins.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-7 text-primary hover:bg-white/90"
          >
            <a href="/#contact">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 px-7 text-white hover:bg-white/10 hover:text-white"
          >
            <a href="tel:+919971996493">
              <Phone className="mr-2 h-4 w-4" /> +91 99719 96493
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
