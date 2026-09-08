import { content } from '../content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown-dark py-12 text-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-white">{content.shortName}</p>
            <p className="mt-2 text-sm">{content.address.full}</p>
          </div>

          <div>
            <p className="font-semibold text-white">Contacto</p>
            <p className="mt-2 text-sm">
              <a href={`tel:${content.phone}`} className="hover:text-brand-gold">
                {content.phoneDisplay}
              </a>
            </p>
            {content.email && (
              <p className="text-sm">
                <a href={`mailto:${content.email}`} className="hover:text-brand-gold">
                  {content.email}
                </a>
              </p>
            )}
          </div>

          <div>
            <p className="font-semibold text-white">Síguenos</p>
            <div className="mt-2 flex gap-4">
              {content.social.instagram && (
                <a
                  href={content.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold text-sm"
                >
                  Instagram
                </a>
              )}
              {content.social.facebook && (
                <a
                  href={content.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold text-sm"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {year} {content.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
