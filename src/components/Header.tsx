import { useState } from 'react';
import { content, contactHref, reservationHref } from '../content';

const NAV_LINKS = [
  { href: '#sobre-nosotros', label: 'Nosotros' },
  { href: '#galeria', label: 'Galería' },
  { href: '#horario', label: 'Horario' },
  { href: '#ubicacion', label: 'Cómo llegar' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur border-b border-brand-brown/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-display text-xl font-bold text-brand-terracotta">
            {content.shortName}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-ink hover:text-brand-terracotta transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={contactHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-brown/30 px-4 py-2 text-sm font-semibold text-brand-brown hover:bg-brand-brown/10 transition-colors"
            >
              Contáctanos
            </a>
            <a
              href={reservationHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-terracotta px-4 py-2 text-sm font-semibold text-white hover:bg-brand-terracotta-dark transition-colors"
            >
              Reservar mesa
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-brand-ink hover:text-brand-terracotta"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href={contactHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center rounded-full border border-brand-brown/30 px-4 py-2 text-sm font-semibold text-brand-brown"
              >
                Contáctanos
              </a>
              <a
                href={reservationHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center rounded-full bg-brand-terracotta px-4 py-2 text-sm font-semibold text-white"
              >
                Reservar mesa
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
