import { content, contactHref, reservationHref } from '../content';
import { assetUrl } from '../lib/asset';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={assetUrl(content.gallery[0].src)}
          alt={content.gallery[0].alt}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/90 via-brand-brown-dark/60 to-brand-brown-dark/30" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <p className="mb-3 font-semibold uppercase tracking-widest text-brand-gold">
          Latin Street Food · Valencia
        </p>
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl max-w-2xl">
          {content.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/90 sm:text-xl">{content.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur">
            <span className="text-brand-gold">★ {content.rating.value}</span>
            <span className="text-sm text-white/80">({content.rating.countDisplay})</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={reservationHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-terracotta px-6 py-3 font-semibold text-white shadow-lg hover:bg-brand-terracotta-dark transition-colors"
          >
            Reservar mesa
          </a>
          <a
            href={contactHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
