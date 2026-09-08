import { content } from '../content';

export default function About() {
  return (
    <section id="sobre-nosotros" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-2 font-semibold uppercase tracking-widest text-brand-terracotta">
            Sobre nosotros
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-ink sm:text-4xl">
            Un pedacito de Colombia en {content.address.addressLocality}
          </h2>
          <p className="mt-4 text-brand-ink/80 leading-relaxed">{content.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xl font-bold text-brand-gold-dark">★ {content.rating.value}</span>
            <span className="text-sm text-brand-ink/70">
              {content.rating.countDisplay} en Google · {content.cuisine}
            </span>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {content.highlights.map((item) => (
            <li
              key={item}
              className="rounded-2xl bg-brand-cream-dark/60 border border-brand-brown/10 p-5 text-sm font-medium text-brand-ink"
            >
              <span className="mb-2 block text-2xl">🌿</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
