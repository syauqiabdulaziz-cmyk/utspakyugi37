import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { FoodImage } from './FoodImage';

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const items = BUSINESS_CONFIG.gallery.items;

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        showPrevious();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, closeLightbox, showPrevious, showNext]);

  const activeItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <section
      id="galeri"
      className="bg-[#FAFAFA] py-16 lg:py-24 border-y border-neutral-100"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-10">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-red-600">
            {BUSINESS_CONFIG.gallery.eyebrow}
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-neutral-900 tracking-tight text-balance">
            {BUSINESS_CONFIG.gallery.heading}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            {BUSINESS_CONFIG.gallery.subheading}
          </p>
        </div>

        {/* Editorial Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:auto-rows-[210px]">
          {items.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedIndex(idx)}
              aria-label={`Lihat foto lebih besar: ${item.title}`}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${item.layoutClass} min-h-[220px] md:min-h-0`}
            >
              <FoodImage
                src={item.image}
                alt={item.imageAlt}
                fallbackTitle={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />

              {/* Scrim Halus untuk Legibilitas Teks */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-200"
              />

              {/* Ikon Zoom */}
              <span
                aria-hidden="true"
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm"
              >
                <Expand className="w-4 h-4" />
              </span>

              {/* Keterangan Tanpa Pill */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[11px] font-medium text-red-300 tracking-wide">
                  {item.category}
                </p>
                <p className="font-display font-semibold text-sm sm:text-base text-white mt-0.5 leading-snug">
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            {/* Header Lightbox */}
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-white/10">
              <div className="min-w-0">
                <p className="text-xs text-red-400 font-medium">
                  {activeItem.category}
                </p>
                <h3 className="font-display font-semibold text-sm sm:text-base text-white truncate">
                  {activeItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Tutup tampilan foto"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Gambar Utama Lightbox */}
            <div className="relative bg-black flex items-center justify-center max-h-[72vh]">
              <FoodImage
                src={activeItem.image}
                alt={activeItem.imageAlt}
                loading="eager"
                fallbackTitle={activeItem.title}
                className="w-full max-h-[72vh] object-contain"
              />

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Foto sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Foto berikutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Footer Counter */}
            <div className="px-5 py-3 flex items-center justify-between text-xs text-neutral-400 border-t border-white/10">
              <span>Tekan Escape atau klik area luar untuk menutup</span>
              <span className="tabular-nums font-medium text-neutral-200">
                {(selectedIndex ?? 0) + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
