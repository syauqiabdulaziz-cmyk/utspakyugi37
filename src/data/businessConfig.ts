export interface MenuItem {
  id: string;
  name: string;
  category: 'mie-ayam' | 'menu-lainnya';
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  layoutClass: string;
}

export interface HighlightCard {
  id: string;
  icon: 'utensils' | 'tag' | 'mapPin' | 'messageCircle';
  title: string;
  description: string;
  accentWidth: string;
}

export interface AboutHighlight {
  label: string;
  value: string;
}

/**
 * KONFIGURASI TERPUSAT DATA USAHA
 * Seluruh informasi nama usaha, alamat, nomor WhatsApp, jam operasional,
 * daftar menu, harga, foto, dan tautan Google Maps dapat diubah dari file ini.
 */
export const BUSINESS_CONFIG = {
  brand: {
    name: 'Mie Ayam & Bakso Sakti',
    shortName: 'Mie Ayam Sakti',
    monogram: 'MS',
    tagline: 'Warung Mie Ayam & Bakso',
    footerDescription:
      'Menyajikan pilihan mie ayam, bakso, dan menu hangat lainnya untuk dinikmati langsung di warung maupun dipesan melalui WhatsApp.',
  },

  contact: {
    whatsappNumber: '6283114740104',
    whatsappDisplay: '0831-1474-0104',
    defaultWhatsappMessage:
      'Halo Mie Ayam & Bakso Sakti, saya ingin bertanya mengenai menu dan pemesanan.',
    address:
      'Alamat Warung (Silakan sesuaikan alamat lengkap RT/RW, Desa/Kelurahan, dan Kecamatan di src/data/businessConfig.ts)',
    operatingHours: '10.00 – 21.00 WIB (Sesuaikan jam buka)',
    operatingDays: 'Setiap Hari (Senin – Minggu)',
    googleMapsUrl: 'https://maps.google.com/?q=Mie+Ayam+%26+Bakso+Sakti',
  },

  hero: {
    eyebrow: 'Selamat Datang di Warung Kami',
    headlineLead: 'Semangkuk Mie Ayam,',
    headlineAccent: 'Kenikmatan',
    headlineTail: 'di Setiap Suapan.',
    description:
      'Temukan beragam sajian mie ayam, bakso, dan menu pendamping di Warung Mie Ayam & Bakso Sakti. Tersedia untuk makan di tempat maupun pesan antar melalui WhatsApp.',
    primaryCta: 'Lihat Menu',
    secondaryCta: 'Hubungi Kami',
    image: '/src/assets/images/hero_mie_ayam_original_1794963761001.jpg',
    imageAlt: 'Semangkuk Mie Ayam Original hangat dengan topping ayam dan sawi hijau',
    handwrittenNote: 'Sajian Hangat & Mengenyangkan',
  },

  highlights: {
    eyebrow: 'Keunggulan Kami',
    heading: 'Kenali Lebih Dekat Usaha Kami',
    description:
      'Informasi lengkap mengenai ragam sajian, daftar harga yang jelas, lokasi warung, serta akses pemesanan langsung.',
    ctaLabel: 'Lihat Daftar Menu',
    cards: [
      {
        id: 'pilihan-menu',
        icon: 'utensils',
        title: 'Pilihan Menu',
        description:
          'Tersedia berbagai varian mie ayam mulai dari original, bakso, ceker, hingga porsi spesial.',
        accentWidth: 'w-4/5',
      },
      {
        id: 'informasi-harga',
        icon: 'tag',
        title: 'Informasi Harga',
        description:
          'Daftar harga tercantum jelas untuk setiap menu agar pelanggan mudah memilih sebelum berkunjung.',
        accentWidth: 'w-3/4',
      },
      {
        id: 'lokasi-warung',
        icon: 'mapPin',
        title: 'Lokasi Warung',
        description:
          'Informasi alamat, hari buka, jam operasional, dan petunjuk Google Maps tersedia dengan lengkap.',
        accentWidth: 'w-4/5',
      },
      {
        id: 'pemesanan-mudah',
        icon: 'messageCircle',
        title: 'Pemesanan Mudah',
        description:
          'Hubungi pemilik warung langsung melalui WhatsApp untuk menanyakan ketersediaan menu atau pesan antar.',
        accentWidth: 'w-11/12',
      },
    ] as HighlightCard[],
  },

  about: {
    eyebrow: 'Tentang Kami',
    heading: 'Cerita di Balik Semangkuk Mie Ayam',
    paragraphs: [
      'Mie Ayam & Bakso Sakti hadir sebagai warung kuliner yang menyediakan pilihan mie ayam, bakso, mie tul, mie jebew, hingga seblak dengan suasana tempat makan yang nyaman dan bersahabat.',
      'Melalui halaman profil ini, pelanggan dapat melihat daftar menu yang tersedia, mencocokkan harga, mengetahui jam operasional, serta menghubungi warung secara langsung melalui WhatsApp untuk pemesanan maupun informasi kunjungan.',
    ],
    image: '/assets/aistudio/WhatsApp_Image_2026-11-18_at_07.36.45_bbcf7e78.jpeg',
    imageAlt: 'Tampak depan warung Mie Ayam & Bakso Sakti pada malam hari',
    handwrittenNote: 'Suasana Warung',
    floatingBadgeTitle: 'Mie Ayam & Bakso Sakti',
    floatingBadgeSubtitle: 'Makan di Tempat & Delivery Order',
    highlights: [
      {
        label: 'Menu Tersedia',
        value: 'Mie Ayam, Bakso, Mie Jebew, Mie Tul & Seblak',
      },
      {
        label: 'Lokasi Warung',
        value: 'Mudah diakses dengan panduan Google Maps',
      },
      {
        label: 'Kontak Pemesanan',
        value: 'Langsung terhubung ke WhatsApp pemilik',
      },
    ] as AboutHighlight[],
    ctaLabel: 'Hubungi Kami',
  },

  menu: {
    eyebrow: 'Menu Favorit',
    heading: 'Menu Pilihan Kami',
    subheading: 'Temukan pilihan menu mie ayam yang tersedia di warung kami.',
    note: 'Catatan: Harga merupakan contoh dan dapat disesuaikan sewaktu-waktu pada data konfigurasi.',
    items: [
      {
        id: 'mie-ayam-original',
        name: 'Mie Ayam Original',
        category: 'mie-ayam',
        description:
          'Mie kenyal dengan topping daging ayam berbumbu gurih manis, sawi hijau segar, daun bawang, dan kuah kaldu terpisah.',
        price: 'Rp 12.000',
        image: '/src/assets/images/hero_mie_ayam_original_1794963761001.jpg',
        imageAlt: 'Mie Ayam Original lengkap dengan kuah kaldu dan sambal',
        whatsappMessage:
          'Halo Mie Ayam & Bakso Sakti, saya ingin memesan / menanyakan menu Mie Ayam Original.',
      },
      {
        id: 'mie-ayam-bakso',
        name: 'Mie Ayam Bakso',
        category: 'mie-ayam',
        description:
          'Perpaduan mie ayam gurih dengan tambahan bakso daging yang kenyal, sayuran hijau, serta taburan bawang goreng.',
        price: 'Rp 16.000',
        image: '/src/assets/images/menu_mie_ayam_bakso_1794963760033.jpg',
        imageAlt: 'Mie Ayam Bakso dengan topping daging ayam dan bakso sapi',
        whatsappMessage:
          'Halo Mie Ayam & Bakso Sakti, saya ingin memesan / menanyakan menu Mie Ayam Bakso.',
      },
      {
        id: 'mie-ayam-ceker',
        name: 'Mie Ayam Ceker',
        category: 'mie-ayam',
        description:
          'Semangkuk mie ayam dengan ceker ayam empuk berbumbu kecap manis gurih, sawi hijau, dan sambal pelengkap.',
        price: 'Rp 15.000',
        image: '/src/assets/images/menu_mie_ayam_ceker_1794963763258.jpg',
        imageAlt: 'Mie Ayam Ceker dengan ceker ayam berbumbu dan sawi hijau',
        whatsappMessage:
          'Halo Mie Ayam & Bakso Sakti, saya ingin memesan / menanyakan menu Mie Ayam Ceker.',
      },
      {
        id: 'mie-ayam-spesial',
        name: 'Mie Ayam Spesial',
        category: 'mie-ayam',
        description:
          'Porsi lengkap berisi mie ayam, bakso, ceker empuk, serta pangsit goreng renyah dalam satu sajian mengenyangkan.',
        price: 'Rp 20.000',
        image: '/src/assets/images/menu_mie_ayam_spesial_1794963763162.jpg',
        imageAlt: 'Mie Ayam Spesial komplit dengan bakso, ceker, dan pangsit goreng',
        whatsappMessage:
          'Halo Mie Ayam & Bakso Sakti, saya ingin memesan / menanyakan menu Mie Ayam Spesial.',
      },
      {
        id: 'bakso-sakti',
        name: 'Bakso Kuah Sakti',
        category: 'menu-lainnya',
        description:
          'Semangkuk bakso kuah hangat dengan pilihan bakso halus dan urat, mie kuning, bihun, serta taburan seledri segar.',
        price: 'Rp 15.000',
        image: '/src/assets/images/menu_mie_ayam_bakso_1794963760033.jpg',
        imageAlt: 'Sajian Bakso hangat di Warung Mie Ayam & Bakso Sakti',
        whatsappMessage:
          'Halo Mie Ayam & Bakso Sakti, saya ingin memesan / menanyakan menu Bakso.',
      },
      {
        id: 'mie-jebew',
        name: 'Mie Jebew',
        category: 'menu-lainnya',
        description:
          'Sajian mie pedas gurih dengan racikan bumbu cabai khas yang cocok bagi pencinta cita rasa pedas.',
        price: 'Rp 14.000',
        image: '/src/assets/images/hero_mie_ayam_original_1794963761001.jpg',
        imageAlt: 'Sajian Mie Jebew pedas gurih',
        whatsappMessage:
          'Halo Mie Ayam & Bakso Sakti, saya ingin memesan / menanyakan menu Mie Jebew.',
      },
      {
        id: 'mie-tul',
        name: 'Mie Tul',
        category: 'menu-lainnya',
        description:
          'Menu mie tulang gurih dengan kuah hangat yang kaya rasa, tersedia untuk dinikmati di warung atau dibawa pulang.',
        price: 'Rp 16.000',
        image: '/src/assets/images/menu_mie_ayam_ceker_1794963763258.jpg',
        imageAlt: 'Sajian Mie Tul dengan topping tulang gurih',
        whatsappMessage:
          'Halo Mie Ayam & Bakso Sakti, saya ingin memesan / menanyakan menu Mie Tul.',
      },
      {
        id: 'seblak-sakti',
        name: 'Seblak Warung Sakti',
        category: 'menu-lainnya',
        description:
          'Seblak hangat dengan isian kerupuk, mie, sayuran, dan pilihan topping sesuai ketersediaan di warung.',
        price: 'Rp 13.000',
        image: '/src/assets/images/menu_mie_ayam_spesial_1794963763162.jpg',
        imageAlt: 'Sajian Seblak hangat di Warung Mie Ayam & Bakso Sakti',
        whatsappMessage:
          'Halo Mie Ayam & Bakso Sakti, saya ingin memesan / menanyakan menu Seblak.',
      },
    ] as MenuItem[],
  },

  gallery: {
    eyebrow: 'Galeri Foto',
    heading: 'Suasana dan Sajian Kami',
    subheading:
      'Dokumentasi tempat usaha, proses penyajian, serta ragam hidangan yang tersedia di warung kami.',
    items: [
      {
        id: 'galeri-warung',
        title: 'Tampak Depan Warung Mie Ayam & Bakso Sakti',
        category: 'Tempat Usaha',
        image: '/assets/aistudio/WhatsApp_Image_2026-11-18_at_07.36.45_bbcf7e78.jpeg',
        imageAlt: 'Spanduk dan gerobak kayu Warung Mie Ayam & Bakso Sakti beserta area duduk pelanggan',
        layoutClass: 'md:col-span-7 md:row-span-2',
      },
      {
        id: 'galeri-penyajian',
        title: 'Proses Penyajian Hangat di Gerobak',
        category: 'Proses Penyajian',
        image: '/src/assets/images/gallery_proses_penyajian_1794963766477.jpg',
        imageAlt: 'Proses meracik dan menuangkan bumbu ayam ke atas mangkuk mie ayam',
        layoutClass: 'md:col-span-5 md:row-span-1',
      },
      {
        id: 'galeri-original',
        title: 'Mie Ayam Original & Kuah Kaldu',
        category: 'Menu Mie Ayam',
        image: '/src/assets/images/hero_mie_ayam_original_1794963761001.jpg',
        imageAlt: 'Foto closeup Mie Ayam Original dengan kuah kaldu terpisah dan sambal',
        layoutClass: 'md:col-span-5 md:row-span-1',
      },
      {
        id: 'galeri-bakso',
        title: 'Mie Ayam Bakso Hangat',
        category: 'Menu Tambahan',
        image: '/src/assets/images/menu_mie_ayam_bakso_1794963760033.jpg',
        imageAlt: 'Semangkuk Mie Ayam Bakso lengkap dengan potongan daun bawang',
        layoutClass: 'md:col-span-4 md:row-span-1',
      },
      {
        id: 'galeri-ceker',
        title: 'Mie Ayam Ceker Kecap',
        category: 'Menu Pilihan',
        image: '/src/assets/images/menu_mie_ayam_ceker_1794963763258.jpg',
        imageAlt: 'Semangkuk Mie Ayam Ceker dengan ceker empuk dan sayuran segar',
        layoutClass: 'md:col-span-4 md:row-span-1',
      },
      {
        id: 'galeri-spesial',
        title: 'Mie Ayam Spesial Pangsit & Bakso',
        category: 'Sajian Lengkap',
        image: '/src/assets/images/menu_mie_ayam_spesial_1794963763162.jpg',
        imageAlt: 'Mie Ayam Spesial lengkap dengan pangsit goreng, bakso, dan ceker',
        layoutClass: 'md:col-span-4 md:row-span-1',
      },
    ] as GalleryItem[],
  },

  ctaBanner: {
    eyebrow: 'Pemesanan & Informasi',
    heading: 'Ingin Menikmati Mie Ayam Kami?',
    description:
      'Kenali menu kami dan hubungi warung untuk mendapatkan informasi lebih lanjut atau melakukan pemesanan.',
    buttonLabel: 'Hubungi Kami',
  },
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BUSINESS_CONFIG.contact.defaultWhatsappMessage;
  return `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
