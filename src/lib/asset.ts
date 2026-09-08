/**
 * Resuelve una ruta de /public contra el `base` real del sitio en producción
 * (GitHub Pages de proyecto sirve la web bajo /nombre-repo/, no en la raíz
 * del dominio). Usar SIEMPRE para imágenes de /public referenciadas en JSX
 * (Hero, Gallery, etc.) — nunca escribir el <img src="/gallery/x.jpg"> a
 * mano, o la ruta se resuelve mal en producción.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
