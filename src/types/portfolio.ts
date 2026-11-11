/**
 * Tautan media sosial dan saluran komunikasi pendidik
 */
export interface SocialLink {
  /** Nama platform, contoh: email, whatsapp, linkedin, instagram, github */
  platform: "email" | "whatsapp" | "linkedin" | "instagram" | "github";
  /** Alamat URL tautan lengkap atau skema wa.me / mailto */
  url: string;
  /** Label teks ramah pengguna yang tampil di UI */
  label: string;
}

/**
 * Metrik pencapaian kuantitatif profil pendidik
 */
export interface ProfileMetric {
  /** Label metrik, contoh: 'Tahun Pengalaman Mengajar' */
  label: string;
  /** Nilai statistik, contoh: '3+ Tahun' */
  value: string;
}

/**
 * Entitas Profil Pendidik & Akademisi (Single Source of Truth)
 */
export interface TeacherProfile {
  /** Nama lengkap pendidik beserta gelar akademik */
  name: string;
  /** Jabatan profesional / spesialisasi utama */
  title: string;
  /** Slogan atau moto pengajaran inspiratif */
  tagline: string;
  /** Ringkasan biografi profesional */
  bio: string;
  /** Filosofi pedagogik yang berpusat pada siswa (student-centered) */
  philosophy: string;
  /** Path foto profil (di public/images/...) */
  avatarUrl: string;
  /** Path berkas CV atau resume dalam format PDF (di public/docs/...) */
  resumePdfUrl: string;
  /** Status kesiapan kolaborasi riset, pelatihan, atau mengajar */
  isOpenForCollaboration: boolean;
  /** Alamat email resmi */
  email: string;
  /** Nomor WhatsApp aktif dengan format 62xxx (tanpa spasi/simbol +) */
  whatsappNumber: string;
  /** Daftar tautan jejaring sosial dan saluran kontak */
  socials: SocialLink[];
  /** Ringkasan statistik dan metrik rekam jejak */
  metrics: ProfileMetric[];
}

/**
 * Entitas Publikasi Jurnal Ilmiah & Artikel Pendidikan
 */
export interface JournalItem {
  /** ID unik jurnal */
  id: string;
  /** Slug URL ramah SEO untuk routing detail (/jurnal/[slug]) */
  slug: string;
  /** Judul lengkap paper atau publikasi ilmiah */
  title: string;
  /** Daftar nama penulis jurnal */
  authors: string[];
  /** Nama jurnal ilmiah atau prosiding penerbit */
  journalName: string;
  /** Institusi penerbit atau LPPM universitas */
  publisher: string;
  /** Tahun publikasi artikel */
  publicationYear: number;
  /** Status indeksasi jurnal (misal: 'SINTA 2', 'SINTA 3', 'ISSN', 'Open Access') */
  indexing: string;
  /** Abstrak penelitian (100–150 kata) */
  abstract: string;
  /** Isi lengkap artikel berformat Markdown untuk halaman detail */
  fullContent?: string;
  /** Kata kunci penelitian untuk pencarian dan filter */
  keywords: string[];
  /** Path file unduhan PDF paper (di public/docs/...) */
  pdfUrl?: string;
  /** Tautan eksternal resmi (DOI / link repositori penerbit) */
  externalUrl?: string;
}

/**
 * Entitas Karya & Inovasi Pembelajaran (Modul, Media Interaktif, LKPD)
 */
export interface TeachingProject {
  /** ID unik karya */
  id: string;
  /** Slug URL ramah SEO untuk routing detail (/karya/[slug]) */
  slug: string;
  /** Judul karya atau media pembelajaran */
  title: string;
  /** Sasaran jenjang peserta didik (contoh: 'Siswa SMP Kelas VIII') */
  targetAudience: string;
  /** Mata pelajaran atau rumpun keilmuan */
  subject: string;
  /** Ringkasan singkat intisari karya */
  summary: string;
  /** Deskripsi mendalam mengenai inovasi metode pembelajaran */
  description: string;
  /** Path gambar thumbnail representatif */
  thumbnail: string;
  /** Perangkat lunak atau tools teknologi edukasi yang digunakan */
  toolsUsed: string[];
  /** Dampak nyata dan hasil evaluasi penggunaan di kelas */
  resultsAndImpact?: string;
  /** Tautan interaktif / live demo (misal Canva, Quizizz, Padlet) */
  demoUrl?: string;
  /** Tautan berkas dokumentasi / modul PDF lengkap */
  documentUrl?: string;
}

/**
 * Entitas Rekam Jejak Pengalaman Mengajar, Pendidikan, dan Organisasi
 */
export interface TimelineItem {
  /** ID unik riwayat */
  id: string;
  /** Peran, jabatan, atau gelar akademik yang diraih */
  roleOrDegree: string;
  /** Nama instansi sekolah, universitas, atau organisasi */
  institution: string;
  /** Periode tahun atau rentang waktu aktif */
  period: string;
  /** Poin-poin pencapaian atau tanggung jawab utama */
  description: string[];
  /** Kategori riwayat: mengajar, pendidikan formal, atau organisasi */
  type: "teaching" | "education" | "organization";
}

/**
 * Entitas Kelompok Keahlian & Kompetensi Pendidik
 */
export interface SkillGroup {
  /** ID unik kelompok skill */
  id: string;
  /** Kategori rumpun kompetensi sesuai standar PRD */
  category: "pedagogik" | "edtech" | "soft-skill";
  /** Judul kelompok keahlian */
  title: string;
  /** Deskripsi ruang lingkup kompetensi */
  description?: string;
  /** Daftar butir keterampilan dan keahlian */
  skills: string[];
}

/**
 * Representasi item keahlian satuan (opsional)
 */
export interface SkillItem {
  /** Nama keahlian */
  name: string;
  /** Kategori keahlian */
  category: "pedagogy" | "edtech" | "tools" | "softskill";
  /** Tingkat penguasaan */
  level?: "dasar" | "menengah" | "mahir";
}

/**
 * Entitas Rekomendasi & Testimoni Pendidik
 */
export interface Testimonial {
  /** ID unik testimoni */
  id: string;
  /** Nama pemberi testimoni */
  name: string;
  /** Peran atau jabatan pemberi testimoni */
  role: string;
  /** Institusi atau sekolah pemberi testimoni (opsional) */
  institution?: string;
  /** Kalimat kutipan testimoni / rekomendasi */
  quote: string;
  /** Alias teks testimoni untuk kompatibilitas */
  content?: string;
  /** Path foto avatar pemberi testimoni (opsional) */
  avatarUrl?: string;
}

/**
 * Alias tipe TestimonialItem untuk kompatibilitas data store
 */
export type TestimonialItem = Testimonial;
