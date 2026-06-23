import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links: { to: string; label: string; external?: boolean }[] = [
  { to: "/#about", label: "About", external: true },
  { to: "/#services", label: "Services", external: true },
  { to: "/schools", label: "Schools" },
  { to: "/counselling", label: "Counselling" },
  { to: "/#contact", label: "Contact", external: true },
];

export function Footer() {
  return (
    <footer className="gradient-hero text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
            Nurturing Potential. Empowering Minds. A child development center
            for early intervention and cognitive enrichment in Ghaziabad.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/70">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/85 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/70">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <a href="tel:+919971996493" className="hover:text-white">
                +91 99719 96493
              </a>
            </li>
            <li>
              <a href="tel:+919266561109" className="hover:text-white">
                +91 92665 61109
              </a>
            </li>
            <li>
              <a
                href="mailto:Mindspringindia@gmail.com"
                className="hover:text-white"
              >
                Mindspringindia@gmail.com
              </a>
            </li>
            <li className="text-white/75">
              G-1, Plot No. 16, Sector 2A, Vaishali,
              <br />
              Ghaziabad, UP – 201010
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:px-6">
          <p>© {new Date().getFullYear()} Mindspring. All rights reserved.</p>
          <p>Ghaziabad, Uttar Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
