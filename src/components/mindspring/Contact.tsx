import { useState } from "react";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useReveal } from "@/hooks/use-reveal";

const ADDRESS =
  "G-1, Ground Floor, Plot No. 16, Sector 2A, Vaishali, Ghaziabad, UP – 201010";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS,
)}&output=embed`;

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll reach out within one working day.");
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 md:py-28"
    >
      <div
        ref={ref}
        className="reveal mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
            Let's Connect
          </p>
          <h2
            id="contact-title"
            className="mt-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
          >
            Let's Build Their Future, Together.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The window is open. Make every moment count.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id="name" label="Your name" required>
                <Input id="name" name="name" required placeholder="Full name" />
              </Field>
              <Field id="phone" label="Phone" required>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field id="email" label="Email">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field id="message" label="How can we help?" required>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about your child and what you're looking for."
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                type="submit"
                size="lg"
                className="rounded-full px-6"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send Message"}
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 px-5 text-primary hover:bg-primary/5"
              >
                <a
                  href="https://wa.me/919971996493"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-1 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-5 text-primary hover:bg-primary/5"
              >
                <a href="tel:+919971996493">
                  <Phone className="mr-1 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </form>

          {/* Details + map */}
          <div className="space-y-4 lg:col-span-2">
            <ContactRow icon={<Phone className="h-5 w-5" />} title="Phone">
              <a href="tel:+919971996493" className="block hover:text-primary">
                +91 99719 96493
              </a>
              <a href="tel:+919266561109" className="block hover:text-primary">
                +91 92665 61109
              </a>
            </ContactRow>
            <ContactRow icon={<Mail className="h-5 w-5" />} title="Email">
              <a
                href="mailto:Mindspringindia@gmail.com"
                className="break-all hover:text-primary"
              >
                Mindspringindia@gmail.com
              </a>
            </ContactRow>
            <ContactRow icon={<Globe className="h-5 w-5" />} title="Website">
              <a
                href="https://www.mindspringindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                www.mindspringindia.com
              </a>
            </ContactRow>
            <ContactRow icon={<MapPin className="h-5 w-5" />} title="Visit us">
              <span className="text-sm leading-relaxed">{ADDRESS}</span>
            </ContactRow>

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Mindspring location on Google Maps"
                src={MAP_SRC}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 text-sm font-medium">
        {label}
        {required && <span className="ml-0.5 text-primary-glow">*</span>}
      </Label>
      {children}
    </div>
  );
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
          {title}
        </p>
        <div className="mt-1 text-sm text-foreground">{children}</div>
      </div>
    </div>
  );
}
