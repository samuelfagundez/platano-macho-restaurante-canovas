import { Head } from 'vite-react-ssg';
import { content } from '../content';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-cream px-4 text-center">
      <Head>
        <title>Página no encontrada — {content.shortName}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <p className="font-display text-6xl font-bold text-brand-terracotta">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-brand-ink">Esta página no existe</h1>
      <p className="mt-2 text-brand-ink/70">
        Puede que el enlace esté mal escrito o la página se haya movido.
      </p>
      <a
        href="/"
        className="mt-6 rounded-full bg-brand-terracotta px-6 py-3 font-semibold text-white hover:bg-brand-terracotta-dark transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  );
}
