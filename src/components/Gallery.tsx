import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { content } from '../content';
import { assetUrl } from '../lib/asset';

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="galeria" className="bg-brand-brown-dark py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-2 font-semibold uppercase tracking-widest text-brand-gold">Galería</p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Así se vive Plátano Macho
        </h2>

        <div className="mt-10 relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {content.gallery.map((photo) => (
                <div key={photo.src} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%] px-2">
                  <img
                    src={assetUrl(photo.src)}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {content.gallery.map((photo, i) => (
                <span
                  key={photo.src}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selectedIndex ? 'w-6 bg-brand-gold' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Foto anterior"
                className="rounded-full border border-white/30 p-2 text-white hover:bg-white/10 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Foto siguiente"
                className="rounded-full border border-white/30 p-2 text-white hover:bg-white/10 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
