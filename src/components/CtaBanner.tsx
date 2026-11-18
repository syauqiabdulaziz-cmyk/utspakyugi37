import { ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';

export function CtaBanner() {
  return (
    <section className="bg-white pb-16 lg:pb-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#0F1115] px-7 py-10 sm:px-12 sm:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Aksen Merah Abstrak di Sisi Kiri dan Kanan seperti Referensi */}
          <div
            aria-hidden="true"
            className="absolute -left-10 -top-10 w-44 h-44 rounded-3xl bg-red-600/85 rotate-12 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -left-4 bottom-2 w-24 h-24 rounded-full bg-red-800/70 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 -bottom-12 w-52 h-52 rounded-[2.5rem] bg-red-600/80 -rotate-12 pointer-events-none"
          />

          {/* Konten Teks */}
          <div className="relative z-10 max-w-xl space-y-2.5 lg:pl-14">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-red-400">
              {BUSINESS_CONFIG.ctaBanner.eyebrow}
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight text-balance">
              {BUSINESS_CONFIG.ctaBanner.heading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {BUSINESS_CONFIG.ctaBanner.description}
            </p>
          </div>

          {/* Tombol Aksi Utama */}
          <div className="relative z-10 shrink-0">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold whitespace-nowrap transition-colors duration-150 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>{BUSINESS_CONFIG.ctaBanner.buttonLabel}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
