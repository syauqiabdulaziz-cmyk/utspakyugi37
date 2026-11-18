import { ArrowRight, MapPin, MessageCircle, Tag, Utensils } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG, type HighlightCard } from '../data/businessConfig';

function renderHighlightIcon(icon: HighlightCard['icon']) {
  switch (icon) {
    case 'utensils':
      return <Utensils className="w-5 h-5" aria-hidden="true" />;
    case 'tag':
      return <Tag className="w-5 h-5" aria-hidden="true" />;
    case 'mapPin':
      return <MapPin className="w-5 h-5" aria-hidden="true" />;
    case 'messageCircle':
      return <MessageCircle className="w-5 h-5" aria-hidden="true" />;
  }
}

export function HighlightsSection() {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="keunggulan" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Kolom Kiri */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-red-600">
              {BUSINESS_CONFIG.highlights.eyebrow}
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight leading-snug text-balance">
              {BUSINESS_CONFIG.highlights.heading}
            </h2>
            <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed">
              {BUSINESS_CONFIG.highlights.description}
            </p>
            <div className="pt-2">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToMenu();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-200 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <span>{BUSINESS_CONFIG.highlights.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Kolom Kanan: 4 Kartu Keunggulan */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {BUSINESS_CONFIG.highlights.cards.map((card, index) => (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-white rounded-2xl border border-neutral-200/80 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(17,24,39,0.06)] hover:border-red-200"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-4">
                    {renderHighlightIcon(card.icon)}
                  </div>
                  <h3 className="font-display font-bold text-base text-neutral-900 mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Aksen garis tipis di bagian bawah seperti referensi */}
                <div className="mt-5 pt-2">
                  <div className="h-1 w-full rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-red-600 transition-transform duration-300 origin-left ${card.accentWidth}`}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
