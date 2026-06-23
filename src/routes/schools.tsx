import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Users,
  Eye,
  ClipboardList,
  HeartHandshake,
  School,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Nav } from "@/components/mindspring/Nav";
import { Footer } from "@/components/mindspring/Footer";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      { title: "School Partnerships — Mindspring Ghaziabad" },
      {
        name: "description",
        content:
          "Mindspring partners with schools in Ghaziabad to support early identification, teacher training, parent guidance and student wellbeing.",
      },
      { property: "og:title", content: "Mindspring School Partnerships" },
      {
        property: "og:description",
        content:
          "Supporting student success through early identification, parent collaboration and professional school-based support.",
      },
    ],
  }),
  component: SchoolsPage,
});

const supports = [
  {
    icon: Users,
    title: "Parent Awareness & Support",
    text: "Workshops, awareness sessions, consultations and support clinics that help families understand and address developmental, behavioural and emotional concerns.",
  },
  {
    icon: GraduationCap,
    title: "Teacher Training & Development",
    text: "Practical training programs on behaviour management, inclusive education, autism, ADHD, emotional regulation and supporting diverse learners.",
  },
  {
    icon: Eye,
    title: "Student Observation & Early Identification",
    text: "Professional observations and consultation support to identify developmental, behavioural, communication and learning concerns early.",
  },
  {
    icon: ClipboardList,
    title: "Classroom Support & Planning",
    text: "Recommendations, support strategies and collaborative planning between teachers, parents and professionals for meaningful progress.",
  },
  {
    icon: HeartHandshake,
    title: "Student Wellbeing & Mental Health",
    text: "Age-appropriate workshops promoting emotional regulation, resilience, self-awareness, social skills and positive relationships.",
  },
  {
    icon: School,
    title: "On-Campus Consultation Services",
    text: "Regular opportunities for parents, teachers and school teams to seek guidance directly from our multidisciplinary professionals.",
  },
  {
    icon: Stethoscope,
    title: "Access to Specialised Services",
    text: "Guidance on assessments, counselling, therapy and special education — ensuring families access the right support at the right time.",
  },
  {
    icon: ShieldCheck,
    title: "A Trusted Professional Partner",
    text: "An experienced team of psychologists, counsellors, special educators and therapists available throughout the academic year.",
  },
];

function SchoolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Intro />
      <Philosophy />
      <Supports />
      <WhyPartner />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden gradient-hero pt-32 pb-24 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="blob"
          style={{
            width: 460,
            height: 460,
            background: "oklch(0.85 0.12 235)",
            top: -120,
            left: -100,
          }}
        />
        <div
          className="blob"
          style={{
            width: 520,
            height: 520,
            background: "oklch(0.72 0.14 250)",
            bottom: -180,
            right: -120,
            animationDelay: "-6s",
          }}
        />
        <div
          className="blob"
          style={{
            width: 280,
            height: 280,
            background: "oklch(0.95 0.05 230)",
            top: "30%",
            right: "25%",
            animationDelay: "-3s",
            opacity: 0.35,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          For Schools & Educators
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
          Mindspring{" "}
          <span className="bg-gradient-to-r from-white via-sky to-white bg-clip-text text-transparent animated-gradient">
            School Partnerships
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
          Supporting student success through early identification, parent
          collaboration and professional school-based support.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-7 text-primary hover:bg-white/90"
          >
            <a href="#partner">
              Partner with us <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 bg-white/0 px-7 text-white hover:bg-white/10 hover:text-white"
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
    <section className="relative px-4 py-20 sm:px-6">
      <div
        ref={ref}
        className="reveal mx-auto max-w-3xl text-center text-lg leading-relaxed text-foreground/80"
      >
        <p>
          Today's educators are expected to do more than ever before. Teachers
          are often the first to notice when a child is struggling — yet
          schools may not always have immediate access to the specialised
          support these children and families need.
        </p>
        <p className="mt-6 text-xl font-medium text-foreground">
          This is where Mindspring partners with schools.
        </p>
        <p className="mt-6">
          We work alongside educators to identify concerns early, support
          parents, strengthen teacher confidence, and ensure children receive
          timely guidance before challenges become barriers to learning and
          wellbeing.
        </p>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative px-4 py-16 sm:px-6">
      <div
        ref={ref}
        className="reveal-scale relative mx-auto max-w-5xl overflow-hidden rounded-3xl gradient-hero p-10 text-white shadow-card md:p-14"
      >
        <div className="shimmer-overlay" />
        <p className="font-display text-xs uppercase tracking-[0.3em] text-white/70">
          Our Philosophy
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
          When parents, teachers and professionals work together,{" "}
          <span className="text-sky">children thrive.</span>
        </h2>
        <p className="relative mt-6 max-w-3xl text-white/85">
          We believe early identification, proactive support, and meaningful
          collaboration can transform a child's developmental, academic,
          emotional and social journey. Our goal is to become a trusted
          partner that helps schools build nurturing, inclusive and
          developmentally responsive learning environments.
        </p>
      </div>
    </section>
  );
}

function Supports() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
            How We Support Schools
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            A multidisciplinary team. One trusted partner.
          </h2>
          <p className="mt-4 text-foreground/70">
            Psychologists, counsellors, special educators, speech and
            occupational therapists, and child development professionals —
            working with your school throughout the academic year.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supports.map((s, i) => (
            <SupportCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportCard({
  icon: Icon,
  title,
  text,
  delay,
}: {
  icon: typeof Users;
  title: string;
  text: string;
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card"
    >
      <div
        aria-hidden
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 transition-transform duration-700 group-hover:scale-150"
      />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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

function WhyPartner() {
  const lines = [
    "Behind every behaviour is a child trying to communicate a need.",
    "Behind every struggling student is a family searching for answers.",
    "Behind every concern raised by a teacher is an opportunity to change a child's future.",
  ];
  return (
    <section className="relative gradient-soft px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <p className="text-center font-display text-xs uppercase tracking-[0.3em] text-primary">
          Why Schools Partner With Mindspring
        </p>
        <div className="mt-10 space-y-5">
          {lines.map((l, i) => (
            <WhyLine key={i} text={l} delay={i * 120} />
          ))}
        </div>
        <FadeP>
          Schools play a powerful role in a child's life. The support a child
          receives during these moments can shape not only their educational
          journey, but their confidence, relationships and long-term
          wellbeing.
        </FadeP>
        <FadeP>
          At Mindspring, no teacher should navigate these concerns alone, no
          parent should feel unsupported, and no child should miss the
          opportunity to receive help simply because the right guidance was
          unavailable at the right time.
        </FadeP>
      </div>
    </section>
  );
}

function WhyLine({ text, delay }: { text: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal-left flex items-start gap-4 rounded-2xl border-l-4 border-primary bg-card p-5 shadow-soft"
    >
      <Sparkles className="mt-1 h-5 w-5 flex-shrink-0 text-primary drift" />
      <p className="font-display text-lg font-medium text-foreground/90 md:text-xl">
        {text}
      </p>
    </div>
  );
}

function FadeP({ children }: { children: React.ReactNode }) {
  const ref = useReveal<HTMLParagraphElement>();
  return (
    <p
      ref={ref}
      className="reveal mt-8 text-center text-base leading-relaxed text-foreground/75"
    >
      {children}
    </p>
  );
}

function CTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="partner" className="relative px-4 py-24 sm:px-6">
      <div
        ref={ref}
        className="reveal-scale relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/15 bg-card p-10 text-center shadow-card md:p-16"
      >
        <div
          aria-hidden
          className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-sky/40 blur-3xl"
        />
        <div className="relative">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
            Let's Work Together
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
            Behind every thriving child is a community of adults who choose
            to understand, support, and believe in them.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
            If your school shares that commitment, we would be honoured to
            partner with you. Connect with us to explore how Mindspring can
            become a trusted extension of your school's support system.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <a href="/#contact">
                Start the conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7"
            >
              <a href="tel:+919971996493">Call +91 99719 96493</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
