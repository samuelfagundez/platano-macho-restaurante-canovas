import { content } from '../content';

export default function LocationMap() {
  return (
    <section id="ubicacion" className="bg-brand-cream-dark/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-2 font-semibold uppercase tracking-widest text-brand-terracotta">
          Cómo llegar
        </p>
        <h2 className="font-display text-3xl font-bold text-brand-ink sm:text-4xl">
          Nos encontrarás en {content.address.addressLocality}
        </h2>
        <p className="mt-3 max-w-2xl text-brand-ink/80">{content.address.full}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 overflow-hidden rounded-2xl border border-brand-brown/10 shadow-sm">
            <iframe
              title={`Mapa de ubicación de ${content.name}`}
              src={content.mapEmbedSrc}
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href={content.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-terracotta px-6 py-3 text-center font-semibold text-white hover:bg-brand-terracotta-dark transition-colors"
            >
              Ver en Google Maps
            </a>
            <a
              href={`tel:${content.phone}`}
              className="rounded-full border border-brand-brown/30 px-6 py-3 text-center font-semibold text-brand-brown hover:bg-brand-brown/10 transition-colors"
            >
              Llamar · {content.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
