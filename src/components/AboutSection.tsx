import { ArrowRight, Store } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';
import { FoodImage } from './FoodImage';

export function AboutSection() {
  return (
    <section
      id="tentang-kami"
      className="relative bg-[#FAFAFA] py-16 lg:py-24 border-y border-neutral-100 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 relative">
        {/* Dekorasi Dot Matrix di Pojok Kanan Atas seperti Referensi */}
        <div
          aria-hidden="true"
          className="hidden lg:grid grid-cols-4 gap-2.5 absolute top-0 right-8 opacity-30 pointer-events-none"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-red-400" />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Kolom Kiri: Foto Warung dengan Bentuk Asimetris & Aksen Merah */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[440px] pt-6 pb-8">
              {/* Label Tulisan Tangan di Kiri Atas */}
              <div
                aria-hidden="true"
                className="hidden sm:flex flex-col items-start absolute -top-2 left-2 z-20 pointer-events-none select-none"
              >
                <span className="font-script text-xl text-neutral-800 -rotate-6 leading-none">
                  {BUSINESS_CONFIG.about.handwrittenNote}
                </span>
                <svg
                  width="36"
                  height="22"
                  viewBox="0 0 36 22"
                  fill="none"
                  className="text-red-600 mt-1 ml-6"
                >
                  <path
                    d="M3 3C12 4 22 10 28 19M28 19L22 18M28 19L29 12"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Aksen Geometris Merah di Belakang Sisi Kanan */}
              <div
                aria-hidden="true"
                className="absolute right-0 bottom-10 w-3/4 h-3/4 rounded-[2.5rem] bg-red-600 translate-x-3"
              />

              {/* Frame Foto Asimetris */}
              <div className="relative z-10 overflow-hidden rounded-tl-[2.5rem] rounded-tr-[5rem] rounded-br-[2.5rem] rounded-bl-[4.5rem] bg-white p-2 shadow-[0_18px_40px_rgba(17,24,39,0.1)] border border-neutral-100">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-tl-[2rem] rounded-tr-[4.5rem] rounded-br-[2rem] rounded-bl-[4rem]">
                  <FoodImage
                    src={BUSINESS_CONFIG.about.image}
                    alt={BUSINESS_CONFIG.about.imageAlt}
                    fallbackTitle={BUSINESS_CONFIG.brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Info Card di Kiri Bawah */}
              <div className="relative sm:absolute z-20 mt-4 sm:mt-0 sm:bottom-1 sm:-left-4 bg-white rounded-2xl border border-neutral-200/80 shadow-[0_12px_28px_rgba(17,24,39,0.08)] px-4 py-3 flex items-center gap-3.5 max-w-[290px]">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
                  <Store className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-neutral-900 leading-tight">
                    {BUSINESS_CONFIG.about.floatingBadgeTitle}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {BUSINESS_CONFIG.about.floatingBadgeSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Narasi Tentang Usaha */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-red-600">
              {BUSINESS_CONFIG.about.eyebrow}
            </p>

            <h2 className="font-display font-bold text-2xl sm:text-4xl text-neutral-900 tracking-tight leading-[1.18] text-balance">
              {BUSINESS_CONFIG.about.heading}
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
              {BUSINESS_CONFIG.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 3 Informasi Singkat Highlight (Tanpa Angka Statistik Fiktif) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-neutral-200/80">
              {BUSINESS_CONFIG.about.highlights.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="font-display font-bold text-sm text-neutral-900">
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold whitespace-nowrap transition-colors duration-150 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <span>{BUSINESS_CONFIG.about.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
