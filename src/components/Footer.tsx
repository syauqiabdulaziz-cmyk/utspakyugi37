import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

const FOOTER_LINKS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang-kami', label: 'Tentang Kami' },
  { id: 'menu', label: 'Menu' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'kontak', label: 'Kontak' },
] as const;

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-white border-t border-neutral-200/80">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-neutral-100">
            {/* Bagian Kiri: Logo & Deskripsi Singkat */}
            <div className="space-y-3 max-w-md">
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="w-8 h-8 rounded-lg bg-neutral-900 text-white font-display font-extrabold text-xs tracking-tight flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">{BUSINESS_CONFIG.brand.monogram}</span>
                  <span className="absolute right-0 bottom-0 w-3 h-3 bg-red-600 rounded-tl-md" />
                </span>
                <span className="font-display font-bold text-base text-neutral-900">
                  {BUSINESS_CONFIG.brand.name}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                {BUSINESS_CONFIG.brand.footerDescription}
              </p>
            </div>

            {/* Bagian Kanan: Tautan Navigasi */}
            <nav aria-label="Navigasi Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="text-sm font-medium text-neutral-600 hover:text-red-600 whitespace-nowrap transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bagian Bawah: Copyright Tahun Otomatis */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-500">
            <p className="tabular-nums">
              &copy; {currentYear} {BUSINESS_CONFIG.brand.name}. Seluruh hak cipta dilindungi.
            </p>
            <p>Website Profil Usaha Mie Ayam</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Kembali ke atas halaman"
          className="fixed bottom-5 right-5 z-30 w-11 h-11 rounded-full bg-neutral-900 hover:bg-red-600 text-white shadow-lg flex items-center justify-center transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
    </>
  );
}
