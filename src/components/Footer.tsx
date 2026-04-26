import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useApp } from "@/contexts/AppContext";
import { CONTACT_EMAIL, LOCATION, PHONE_LINK, PHONE_NUMBER, SOCIAL_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <footer className="relative mt-24 border-t border-border bg-secondary/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-60" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <Logo />
              <span className="font-display text-lg font-bold">
                X <span className="text-gradient-brand">Tech Agency</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.explore}
            </h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.follow}
            </h4>
            <div className="flex flex-wrap gap-3">
              <Social href={SOCIAL_LINKS.facebook} icon={<Facebook className="h-4 w-4" />} label="Facebook" />
              <Social href={SOCIAL_LINKS.instagram} icon={<Instagram className="h-4 w-4" />} label="Instagram" />
              <Social href={SOCIAL_LINKS.linkedin} icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
              <Social href={SOCIAL_LINKS.tiktok} icon={<TikTokIcon />} label="TikTok" />
              <Social href={SOCIAL_LINKS.threads} icon={<ThreadsIcon />} label="Threads" />
            </div>
            <h4 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.contact}
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" /> {PHONE_NUMBER}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" /> +20 114 522 2991
              </a>
              <p className="inline-flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" /> {LOCATION}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} X Tech Agency. {t.footer.rights}</p>
          <p>Made with precision · Marketing × Technology</p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
    >
      {icon}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M19.6 6.7a5.6 5.6 0 0 1-3.4-1.2 5.6 5.6 0 0 1-2.1-3.5h-3.4v13.4a2.6 2.6 0 1 1-1.8-2.5V9.4a6 6 0 1 0 5.2 5.9V9.5a8.9 8.9 0 0 0 5.5 1.9z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16.5 11.5c-.7-3-2.5-4.5-5-4.5-3 0-5 2-5 5s2 5 5 5c2 0 3.5-1 4-2.5" />
      <path d="M12 8c3 0 5 1.5 5 4 0 2-1.5 3.5-4 3.5-2 0-3-1-3-2.5 0-1.3 1-2 2.5-2 2.5 0 4.5 1.5 4.5 4" />
    </svg>
  );
}
