import { content } from '../content';

export default function Hours() {
  return (
    <section id="horario" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="mb-2 font-semibold uppercase tracking-widest text-brand-terracotta">Horario</p>
          <h2 className="font-display text-3xl font-bold text-brand-ink sm:text-4xl">
            Cuándo puedes visitarnos
          </h2>

          <dl className="mt-8 divide-y divide-brand-brown/10 rounded-2xl border border-brand-brown/10 bg-brand-cream-dark/40 overflow-hidden">
            {content.hours.map((row) => (
              <div key={row.day} className="flex items-center justify-between px-5 py-3">
                <dt className="font-medium text-brand-ink">{row.day}</dt>
                <dd
                  className={
                    row.hours === 'Cerrado' ? 'text-brand-ink/50' : 'font-semibold text-brand-brown'
                  }
                >
                  {row.hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col justify-center">
          <div className="rounded-2xl bg-brand-terracotta/10 border border-brand-terracotta/20 p-8">
            <p className="font-semibold uppercase tracking-widest text-brand-terracotta text-sm">
              Precio medio
            </p>
            <p className="mt-2 font-display text-4xl font-bold text-brand-ink">
              {content.priceRange}
            </p>
            <p className="mt-1 text-sm text-brand-ink/70">por persona</p>

            <p className="mt-6 text-sm text-brand-ink/80">
              Admitimos reservas, tenemos terraza y espacio apto para grupos, niños y personas con
              movilidad reducida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
