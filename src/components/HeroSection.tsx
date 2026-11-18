import { ArrowDown, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';
import { FoodImage } from './FoodImage';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-[#FAFAFA] border-b border-neutral-100"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Kolom Kiri: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-red-600">
              {BUSINESS_CONFIG.hero.eyebrow}
            </p>

            <h1 className="font-display font-extrabold text-neutral-900 tracking-tight leading-[1.12] text-[clamp(2.15rem,4vw,3.45rem)] text-balance">
              {BUSINESS_CONFIG.hero.headlineLead}{' '}
              <span className="text-red-600">{BUSINESS_CONFIG.hero.headlineAccent}</span>{' '}
              {BUSINESS_CONFIG.hero.headlineTail}
            </h1>

            <p className="text-base sm:text-[17px] text-neutral-600 leading-relaxed max-w-xl">
              {BUSINESS_CONFIG.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('menu');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 shadow-sm hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <span>{BUSINESS_CONFIG.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-50 active:bg-neutral-100 text-neutral-900 border border-neutral-200 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <MessageCircle className="w-4 h-4 text-red-600" aria-hidden="true" />
                <span>{BUSINESS_CONFIG.hero.secondaryCta}</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-neutral-500">
              <span className="font-medium text-neutral-800">
                {BUSINESS_CONFIG.brand.name}
              </span>
              <span aria-hidden="true">·</span>
              <span>{BUSINESS_CONFIG.contact.operatingDays}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{BUSINESS_CONFIG.contact.whatsappDisplay}</span>
            </div>
          </motion.div>

          {/* Kolom Kanan: Visual Utama dengan Bentuk Geometris Merah */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] pt-6 sm:pt-8 pr-2 sm:pr-5 pb-4">
              {/* Bentuk Geometris Merah Asimetris di Belakang Foto */}
              <div
                aria-hidden="true"
                className="absolute top-2 right-0 sm:right-1 w-[82%] h-[88%] rounded-[2rem] bg-red-600 -rotate-3 shadow-lg"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-2 left-4 w-28 h-28 rounded-full border-2 border-red-200/80"
              />

              {/* Catatan Tulisan Tangan Dekoratif seperti Referensi */}
              <div
                aria-hidden="true"
                className="hidden sm:flex flex-col items-end absolute -top-2 right-4 lg:-right-2 z-20 pointer-events-none select-none"
              >
                <span className="font-script text-xl text-neutral-800 -rotate-6 leading-none">
                  {BUSINESS_CONFIG.hero.handwrittenNote}
                </span>
                <svg
                  width="44"
                  height="26"
                  viewBox="0 0 44 26"
                  fill="none"
                  className="text-red-600 mt-1 mr-4"
                >
                  <path
                    d="M38 3C28 6 16 12 8 22M8 22L15 21M8 22L9 15"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Frame Foto Utama */}
              <div className="relative z-10 rounded-[1.75rem] overflow-hidden bg-white p-2.5 shadow-[0_20px_50px_rgba(17,24,39,0.12)] border border-neutral-100">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.25rem]">
                  <FoodImage
                    src={BUSINESS_CONFIG.hero.image}
                    alt={BUSINESS_CONFIG.hero.imageAlt}
                    loading="eager"
                    fallbackTitle={BUSINESS_CONFIG.brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indikator Scroll Down di Sisi Kanan pada Layar Lebar */}
        <a
          href="#keunggulan"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('keunggulan');
          }}
          aria-label="Gulir ke bagian keunggulan"
          className="hidden xl:flex flex-col items-center gap-2 absolute right-2 bottom-8 text-[11px] font-medium tracking-wider text-neutral-400 hover:text-red-600 transition-colors"
        >
          <span className="[writing-mode:vertical-rl]">Scroll Down</span>
          <span className="w-px h-7 bg-neutral-300" aria-hidden="true" />
          <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
