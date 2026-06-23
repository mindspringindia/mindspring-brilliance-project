import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";

type NavLink = { to: string; label: string };

const links: NavLink[] = [
  { to: "/#about", label: "About" },
  { to: "/#services", label: "Services" },
  { to: "/schools", label: "Schools" },
  { to: "/counselling", label: "Counselling" },
  { to: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (l: NavLink, onClick?: () => void, className?: string) => {
    if (l.to.startsWith("/#")) {
      return (
        <a key={l.to} href={l.to} onClick={onClick} className={className}>
          {l.label}
        </a>
      );
    }
    return (
      <Link key={l.to} to={l.to} onClick={onClick} className={className}>
        {l.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 md:py-4">
        <Link to="/" className="min-w-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) =>
            renderLink(
              l,
              undefined,
              "text-sm font-medium text-foreground/75 transition-colors hover:text-primary",
            ),
          )}
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="/#contact">Get in Touch</a>
          </Button>
        </nav>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-6 flex flex-col gap-1">
                <div className="mb-4 px-2">
                  <Logo />
                </div>
                {links.map((l) =>
                  renderLink(
                    l,
                    () => setOpen(false),
                    "rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary",
                  ),
                )}
                <Button
                  asChild
                  className="mt-4 rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <a href="/#contact">Get in Touch</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
