import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';
import { FoodImage } from './FoodImage';

type MenuCategory = 'mie-ayam' | 'menu-lainnya';

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('mie-ayam');

  const visibleItems = BUSINESS_CONFIG.menu.items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section id="menu" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-red-600">
              {BUSINESS_CONFIG.menu.eyebrow}
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-neutral-900 tracking-tight text-balance">
              {BUSINESS_CONFIG.menu.heading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              {BUSINESS_CONFIG.menu.subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Interactive Category Switcher */}
            <div
              role="tablist"
              aria-label="Kategori Menu"
              className="inline-flex items-center p-1 rounded-full bg-neutral-100 border border-neutral-200/60"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'mie-ayam'}
                onClick={() => setSelectedCategory('mie-ayam')}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${
                  selectedCategory === 'mie-ayam'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Mie Ayam
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'menu-lainnya'}
                onClick={() => setSelectedCategory('menu-lainnya')}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${
                  selectedCategory === 'menu-lainnya'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Menu Lainnya
              </button>
            </div>

            <a
              href={buildWhatsAppUrl(
                'Halo Mie Ayam & Bakso Sakti, saya ingin menanyakan daftar menu yang tersedia hari ini.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 whitespace-nowrap transition-colors"
            >
              <span>Tanya via WhatsApp</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* 4-Column Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(17,24,39,0.07)] hover:border-red-200"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <FoodImage
                    src={item.image}
                    alt={item.imageAlt}
                    fallbackTitle={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-5 pb-3">
                  <h3 className="font-display font-bold text-lg text-neutral-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 mt-1 border-t border-neutral-100 flex items-center justify-between gap-3">
                <div>
                  <span className="block text-[11px] text-neutral-400 font-medium">
                    Harga
                  </span>
                  <span className="font-display font-bold text-base text-neutral-900 tabular-nums">
                    {item.price}
                  </span>
                </div>

                <a
                  href={buildWhatsAppUrl(item.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pesan atau tanya ${item.name} melalui WhatsApp`}
                  className="inline-flex items-center gap-1.5 pl-3.5 pr-2.5 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white text-xs font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <span>Pesan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-xs text-neutral-500">
          {BUSINESS_CONFIG.menu.note}
        </p>
      </div>
    </section>
  );
}
