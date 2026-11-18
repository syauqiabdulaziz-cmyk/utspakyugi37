import { useState, type FormEvent } from 'react';
import {
  CalendarDays,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';

export function LocationSection() {
  const [customerName, setCustomerName] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(
    `${BUSINESS_CONFIG.menu.items[0].name} (${BUSINESS_CONFIG.menu.items[0].price})`
  );
  const [customerNote, setCustomerNote] = useState('');
  const [formError, setFormError] = useState('');
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  const buildComposedUrl = (name: string) => {
    const lines = [
      `Halo ${BUSINESS_CONFIG.brand.name},`,
      `Nama: ${name}`,
      `Keperluan / Menu: ${selectedTopic}`,
    ];

    if (customerNote.trim()) {
      lines.push(`Catatan: ${customerNote.trim()}`);
    }

    return buildWhatsAppUrl(lines.join('\n'));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedName = customerName.trim();

    if (!trimmedName) {
      setFormError('Mohon isi nama Anda terlebih dahulu sebelum mengirim pesan.');
      setPreparedUrl(null);
      return;
    }

    setFormError('');
    setPreparedUrl(buildComposedUrl(trimmedName));
  };

  return (
    <section id="lokasi" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-10">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-red-600">
            Lokasi &amp; Jam Operasional
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-neutral-900 tracking-tight text-balance">
            Kunjungi Warung atau Hubungi Kami
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Cek alamat, jadwal buka, serta kontak WhatsApp resmi kami sebelum berkunjung atau memesan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Kolom Kiri: Informasi Alamat, Jam Operasional, Hari Buka, WhatsApp & Google Maps */}
          <div className="lg:col-span-6 bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-neutral-900">
                    Alamat Lengkap
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                    {BUSINESS_CONFIG.contact.address}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-neutral-200/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-neutral-900">
                      Jam Operasional
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 tabular-nums">
                      {BUSINESS_CONFIG.contact.operatingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <CalendarDays className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-neutral-900">
                      Hari Buka
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      {BUSINESS_CONFIG.contact.operatingDays}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-5 border-t border-neutral-200/80">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-neutral-900">
                    Nomor WhatsApp Pemesanan
                  </h3>
                  <p className="mt-1 text-base font-display font-bold text-neutral-900 tabular-nums">
                    {BUSINESS_CONFIG.contact.whatsappDisplay}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Melayani tanya ketersediaan menu dan delivery order.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <MapPin className="w-4 h-4 text-red-400" aria-hidden="true" />
                <span>Lihat di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" aria-hidden="true" />
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <MessageCircle className="w-4 h-4 text-red-600" aria-hidden="true" />
                <span>Chat Langsung</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan (#kontak): Form Cepat Hubungi via WhatsApp */}
          <div
            id="kontak"
            className="lg:col-span-6 bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 shadow-[0_10px_30px_rgba(17,24,39,0.04)] flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-xl text-neutral-900">
                Kirim Pesan Cepat via WhatsApp
              </h3>
              <p className="mt-1.5 text-sm text-neutral-600">
                Isi detail singkat di bawah ini untuk menyiapkan pesan ke WhatsApp pemilik warung.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="customer-name"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5"
                  >
                    Nama Anda
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (formError) setFormError('');
                      if (preparedUrl) setPreparedUrl(null);
                    }}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="menu-topic"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5"
                  >
                    Pilihan Menu / Keperluan
                  </label>
                  <select
                    id="menu-topic"
                    value={selectedTopic}
                    onChange={(e) => {
                      setSelectedTopic(e.target.value);
                      if (preparedUrl) setPreparedUrl(null);
                    }}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 text-sm text-neutral-900 focus:bg-white focus:border-red-600 focus:outline-none transition-colors"
                  >
                    {BUSINESS_CONFIG.menu.items.map((item) => (
                      <option key={item.id} value={`${item.name} (${item.price})`}>
                        {item.name} — {item.price}
                      </option>
                    ))}
                    <option value="Tanya Lokasi & Jam Buka">
                      Tanya Lokasi &amp; Jam Buka
                    </option>
                    <option value="Pesanan Jumlah Banyak / Acara">
                      Pesanan Jumlah Banyak / Acara
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="customer-note"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5"
                  >
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    id="customer-note"
                    rows={3}
                    value={customerNote}
                    onChange={(e) => {
                      setCustomerNote(e.target.value);
                      if (preparedUrl) setPreparedUrl(null);
                    }}
                    placeholder="Contoh: Pesan 2 porsi mie ayam bakso, tingkat pedas sedang."
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {formError && (
                  <p role="alert" className="text-xs font-medium text-red-600">
                    {formError}
                  </p>
                )}

                {!preparedUrl ? (
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Siapkan Pesan WhatsApp</span>
                  </button>
                ) : (
                  <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4 space-y-3">
                    <p role="status" className="text-xs text-neutral-700 leading-relaxed">
                      Pesan untuk <span className="font-semibold text-neutral-900">{customerName.trim()}</span> ({selectedTopic}) siap dikirim ke WhatsApp{' '}
                      <span className="font-semibold tabular-nums">{BUSINESS_CONFIG.contact.whatsappDisplay}</span>.
                    </p>
                    <a
                      href={preparedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Buka WhatsApp Sekarang</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
