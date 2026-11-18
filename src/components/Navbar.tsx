import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';

const NAV_ITEMS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang-kami', label: 'Tentang Kami' },
  { id: 'menu', label: 'Menu' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'lokasi', label: 'Lokasi' },
  { id: 'kontak', label: 'Kontak' },
] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const scrollPosition = window.scrollY + 130;
      let current = 'beranda';

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b border-neutral-100 ${
        isScrolled ? 'shadow-[0_4px_20px_rgba(17,24,39,0.06)]' : 'shadow-[0_1px_4px_rgba(17,24,39,0.03)]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('beranda');
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 rounded-lg"
        >
          <span
            aria-hidden="true"
            className="w-9 h-9 rounded-lg bg-neutral-900 text-white font-display font-extrabold text-sm tracking-tight flex items-center justify-center relative overflow-hidden"
          >
            <span className="relative z-10">{BUSINESS_CONFIG.brand.monogram}</span>
            <span className="absolute right-0 bottom-0 w-3.5 h-3.5 bg-red-600 rounded-tl-md" />
          </span>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-neutral-900">
            {BUSINESS_CONFIG.brand.shortName}
          </span>
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 ${
                  isActive
                    ? 'text-red-600 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-red-600 transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA & Mobile Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Pesan Sekarang</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-neutral-200 text-neutral-800 hover:bg-neutral-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-neutral-100 bg-white px-5 py-4 shadow-lg"
        >
          <nav aria-label="Navigasi Seluler" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-red-50 text-red-700 font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Pesan Sekarang via WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
