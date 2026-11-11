import {
  TeacherProfile,
  JournalItem,
  TeachingProject,
  SkillGroup,
  TimelineItem,
  TestimonialItem,
} from "@/types";

// ==========================================
// 1. DATA PROFIL PENDIDIK
// ==========================================
export const profileData: TeacherProfile = {
  name: "Annisa, S.Pd.", // GANTI DENGAN DATA ASLI: Nama lengkap beserta gelar
  title: "Pendidik & Inovator Pembelajaran", // GANTI DENGAN DATA ASLI: Jabatan atau profesi utama
  tagline: "Mendedikasikan ilmu untuk menyalakan api rasa ingin tahu dan memantik potensi terbaik setiap insan pembelajar.",
  bio: "Lulusan Pendidikan dengan fokus pada pengembangan model pembelajaran aktif, integrasi teknologi edukasi (EdTech), dan penelitian tindakan kelas. Berpengalaman memfasilitasi kelas menengah yang inklusif serta aktif mendiseminasikan praktik baik melalui publikasi jurnal ilmiah nasional terakreditasi.",
  philosophy: "Pendidikan bermakna berakar pada pendekatan yang berpusat pada siswa (student-centered learning). Guru hadir bukan sebagai satu-satunya penyampai kebenaran mutlak, melainkan fasilitator yang menciptakan ruang aman bagi siswa untuk mengeksplorasi gagasan, berani bertanya, berkolaborasi, dan berpikir kritis.",
  avatarUrl: "/images/profile.svg", // GANTI DENGAN DATA ASLI: Letakkan foto profil di public/images/profile.svg
  resumePdfUrl: "/docs/cv-annisa.pdf", // GANTI DENGAN DATA ASLI: Letakkan berkas CV PDF di public/docs/cv-annisa.pdf
  isOpenForCollaboration: true,
  email: "annisa.pendidik@gmail.com", // GANTI DENGAN DATA ASLI: Alamat email aktif
  whatsappNumber: "6281234567890", // GANTI DENGAN DATA ASLI: Nomor WhatsApp format 62xxx tanpa tanda + atau spasi
  socials: [
    {
      platform: "whatsapp",
      url: "https://wa.me/6281234567890", // GANTI DENGAN DATA ASLI: Tautan WhatsApp
      label: "WhatsApp",
    },
    {
      platform: "email",
      url: "mailto:annisa.pendidik@gmail.com", // GANTI DENGAN DATA ASLI: Tautan Email
      label: "Email Resmi",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/annisa-educator", // GANTI DENGAN DATA ASLI: URL Profil LinkedIn
      label: "LinkedIn",
    },
    {
      platform: "instagram",
      url: "https://instagram.com/annisa.mengajar", // GANTI DENGAN DATA ASLI: URL Akun Instagram
      label: "Instagram",
    },
  ],
  metrics: [
    { label: "Tahun Pengalaman Mengajar", value: "3+ Tahun" },
    { label: "Jurnal Dipublikasikan", value: "4 Artikel" },
    { label: "Siswa Terbina", value: "350+ Siswa" },
    { label: "Media Ajar Dibuat", value: "12+ Modul" },
  ],
};

// ==========================================
// 2. DATA PUBLIKASI JURNAL ILMIAH (4 JURNAL)
// ==========================================
export const journalsData: JournalItem[] = [
  {
    id: "jurnal-1",
    slug: "efektivitas-model-problem-based-learning-media-interaktif",
    title: "Efektivitas Model Problem-Based Learning Berbantuan Media Interaktif Terhadap Peningkatan Kemampuan Berpikir Kritis Siswa",
    authors: ["Annisa", "Dr. Budi Santoso, M.Pd.", "Siti Rahmawati, M.Pd."], // GANTI DENGAN DATA ASLI
    journalName: "Jurnal Inovasi Pembelajaran dan Pendidikan Nasional (JIPPN)",
    publisher: "LPPM Universitas Pendidikan Indonesia",
    publicationYear: 2024,
    indexing: "SINTA 2",
    keywords: [
      "Problem-Based Learning",
      "Berpikir Kritis",
      "Media Pembelajaran Interaktif",
      "Pendidikan Menengah",
      "Asesmen Kognitif",
    ],
    abstract:
      "Penelitian ini bertujuan untuk menguji keefektifan penerapan model Problem-Based Learning (PBL) berbantuan media pembelajaran interaktif berbasis digital dalam meningkatkan keterampilan berpikir kritis peserta didik. Menggunakan metode quasi-experimental dengan desain pretest-posttest non-equivalent control group, studi ini melibatkan 64 peserta didik kelas VIII yang terbagi menjadi kelompok eksperimen dan kelompok kontrol. Instrumen pengumpulan data berupa tes esai kemampuan berpikir kritis yang telah teruji validitas dan reliabilitasnya, serta lembar observasi keterlaksanaan proses pembelajaran. Analisis data dilakukan dengan uji Independent Sample t-test dan Normalized Gain (N-Gain). Hasil penelitian menunjukkan bahwa kelompok eksperimen yang menggunakan model PBL berbantuan media interaktif memperoleh skor N-gain rata-rata sebesar 0,72 (kategori tinggi), secara signifikan lebih unggul dibandingkan kelompok kontrol (N-gain 0,45, kategori sedang) dengan nilai p < 0,05. Disimpulkan bahwa integrasi masalah kontekstual nyata dengan media visual digital interaktif mampu memfasilitasi analisis logis, evaluasi bukti, serta refleksi kritis siswa secara substansial.",
    fullContent: `
## Latar Belakang
Keterampilan berpikir kritis merupakan kompetensi esensial abad ke-21 yang harus dimiliki oleh setiap peserta didik. Namun, pembelajaran di kelas sering kali masih didominasi oleh metode konvensional berbasis hafalan yang minim tantangan analitis. Rendahnya kemampuan berpikir kritis siswa tercermin dari kesulitan dalam memecahkan masalah kontekstual yang membutuhkan penalaran multiaspek. Oleh karena itu, diperlukan integrasi model Problem-Based Learning (PBL) dengan bantuan media digital interaktif guna menciptakan pengalaman belajar bermakna.

## Metode Penelitian
Penelitian ini menggunakan pendekatan kuantitatif quasi-experimental dengan desain *Pretest-Posttest Non-equivalent Control Group*. Populasi penelitian mencakup seluruh siswa kelas VIII di sekolah menengah mitra, dengan sampel 64 siswa yang terbagi secara merata ke dalam kelas eksperimen (n=32) dan kelas kontrol (n=32). Kelas eksperimen menerima perlakuan pembelajaran PBL dengan media interaktif, sementara kelas kontrol mengikuti pembelajaran konvensional. Data dikumpulkan melalui tes esai berpikir kritis (mengacu pada indikator Ennis: interpretasi, analisis, evaluasi, dan inferensi) serta lembar observasi aktivitas belajar.

## Hasil dan Pembahasan
Analisis statistik menunjukkan adanya peningkatan yang signifikan pada kelas eksperimen. Rata-rata skor pretest kelompok eksperimen sebesar 52,4 meningkat menjadi 86,7 pada posttest, menghasilkan skor N-gain 0,72 (kategori tinggi). Sementara itu, kelas kontrol hanya meningkat dari 51,8 menjadi 73,5 dengan N-gain 0,45 (kategori sedang). Uji t sampel independen menghasilkan nilai t hitung (4,89) > t tabel (1,99) pada taraf signifikansi 5%. Media interaktif membantu memvisualisasikan data masalah yang kompleks sehingga siswa lebih mudah mengidentifikasi akar permasalahan dan merumuskan hipotesis pemecahan.

## Kesimpulan
Penerapan model Problem-Based Learning berbantuan media interaktif terbukti efektif secara signifikan dalam memicu dan melatihkan kemampuan berpikir kritis siswa. Guru disarankan untuk mengadopsi sintaks PBL yang diperkaya dengan visualisasi digital kontekstual guna menciptakan atmosfer diskusi kelas yang partisipatif dan produktif.
    `,
    pdfUrl: "/docs/jurnal-pbl-berpikir-kritis.pdf", // GANTI DENGAN DATA ASLI
    externalUrl: "https://doi.org/10.21831/jippn.v10i2.2024", // GANTI DENGAN DATA ASLI: Tautan DOI/URL repositori
  },
  {
    id: "jurnal-2",
    slug: "pengembangan-modul-pembelajaran-berdiferensiasi-kurikulum-merdeka",
    title: "Pengembangan Modul Pembelajaran Berdiferensiasi Berbasis Kurikulum Merdeka untuk Mengakomodasi Gaya Belajar Peserta Didik",
    authors: ["Annisa", "Nurul Hidayah, M.Pd."], // GANTI DENGAN DATA ASLI
    journalName: "Jurnal Riset Pedagogi dan Humaniora Edukatif",
    publisher: "Asosiasi Profesi Pendidik Indonesia",
    publicationYear: 2023,
    indexing: "SINTA 3",
    keywords: [
      "Kurikulum Merdeka",
      "Pembelajaran Berdiferensiasi",
      "Gaya Belajar",
      "Modul Ajar",
      "Model ADDIE",
    ],
    abstract:
      "Perbedaan modalitas belajar siswa di dalam kelas yang heterogen menjadi tantangan pedagogik utama bagi guru dalam mencapai ketuntasan tujuan pembelajaran secara berkeadilan. Penelitian Research and Development (R&D) dengan model ADDIE (Analysis, Design, Development, Implementation, Evaluation) ini bertujuan menghasilkan modul pembelajaran berdiferensiasi konten, proses, dan produk yang selaras dengan Kurikulum Merdeka. Modul divalidasi oleh tiga ahli (ahli materi kurikulum, ahli media, dan praktisi guru penggerak) serta diujicobakan secara bertahap pada 32 peserta didik jenjang sekolah menengah. Hasil validasi materi memperoleh skor persentase 91,4% (sangat valid), validasi media 88,6% (sangat praktis), dan respons siswa mencapai 92,1% (sangat positif). Uji coba di kelas membuktikan peningkatan keterlibatan aktif belajar dari 62% menjadi 89%, serta ketuntasan belajar klasikal mencapai 90,6%. Dengan demikian, modul ajar berdiferensiasi ini terbukti layak, praktis, dan efektif digunakan sebagai instrumen pembelajaran inklusif yang menghargai keunikan tiap anak.",
    fullContent: `
## Latar Belakang
Kurikulum Merdeka menekankan filosofi bahwa setiap peserta didik memiliki keunikan, kecepatan belajar, dan minat yang beraneka ragam. Namun, ketersediaan perangkat ajar yang mampu mengakomodasi diferensiasi konten, proses, dan produk masih sangat terbatas di lapangan. Guru kerap kesulitan menyusun materi ajar yang fleksibel untuk memfasilitasi kelompok pembelajar visual, auditori, maupun kinestetik secara simultan.

## Metode Penelitian
Penelitian ini menggunakan kerangka metodologi *Research and Development (R&D)* dengan model ADDIE. Tahap Analisis mengidentifikasi profil gaya belajar dan kebutuhan kurikuler siswa. Tahap Desain merumuskan capaian pembelajaran dan alur aktivitas berjenjang (tiering activities). Tahap Pengembangan menghasilkan prototipe modul ajar lengkap dengan rubrik asesmen autentik. Tahap Implementasi berupa uji coba terbatas pada kelas percontohan. Tahap Evaluasi dilakukan melalui analisis kepraktisan angket respons dan efektivitas hasil belajar.

## Hasil dan Pembahasan
Modul yang dikembangkan memuat instruksi bertingkat di mana siswa dapat memilih jalur penyelesaian tugas: infografis terstruktur (visual), rekaman ulasan suara (auditori), atau demonstrasi proyek simulasi (kinestetik). Uji validasi ahli materi mencatatkan angka 91,4% dan validasi ahli media sebesar 88,6%. Selama implementasi, skor keterlibatan aktif peserta didik melonjak dari 62% menjadi 89%. Siswa melaporkan rasa nyaman belajar yang meningkat karena tidak merasa dipaksa mengikuti satu format tugas seragam.

## Kesimpulan
Modul ajar berdiferensiasi berbasis Kurikulum Merdeka ini memenuhi kriteria kelayakan teoretis dan kepraktisan empiris tingkat tinggi. Perangkat ajar ini dapat dijadikan acuan implementasi pedagogi diferensiasi bagi guru dalam menciptakan lingkungan belajar yang merangkul keberagaman potensi peserta didik.
    `,
    pdfUrl: "/docs/jurnal-modul-berdiferensiasi.pdf", // GANTI DENGAN DATA ASLI
    externalUrl: "https://doi.org/10.31258/jped.v8i1.2023", // GANTI DENGAN DATA ASLI
  },
  {
    id: "jurnal-3",
    slug: "integrasi-gamifikasi-quizizz-asesmen-formatif",
    title: "Integrasi Gamifikasi Quizizz Sebagai Alat Asesmen Formatif: Persepsi Guru dan Antusiasme Belajar Siswa",
    authors: ["Annisa"], // GANTI DENGAN DATA ASLI
    journalName: "Buletin Edukasi dan Teknologi Pembelajaran (BETP)",
    publisher: "Pusat Riset Edukasi Nusantara",
    publicationYear: 2023,
    indexing: "ISSN: 2775-894X",
    keywords: [
      "Gamifikasi Pembelajaran",
      "Quizizz",
      "Asesmen Formatif",
      "Motivasi Belajar",
      "Evaluasi Digital",
    ],
    abstract:
      "Asesmen formatif konvensional kerap menimbulkan kecemasan evaluatif dan kejenuhan bagi peserta didik. Penelitian deskriptif kualitatif ini mengkaji dampak pemanfaatan platform asesmen gamifikasi Quizizz dalam evaluasi formatif harian. Melalui survei kuesioner skala Likert kepada 120 siswa dan wawancara mendalam bersama 6 guru mata pelajaran, penelitian menggali dinamika keterlibatan kognitif serta respons psikologis siswa selama proses asesmen interaktif berlangsung. Temuan penelitian mengindikasikan bahwa 87,5% siswa merasa jauh lebih termotivasi dan tidak terbebani saat mengerjakan latihan kuis yang dilengkapi elemen permainan, papan peringkat santai, dan umpan balik langsung (instant feedback). Para guru juga melaporkan efisiensi waktu koreksi meningkat hingga 50% berkat fitur laporan diagnostik otomatis yang merinci butir soal tersulit. Disimpulkan bahwa gamifikasi pada asesmen formatif berhasil mentransformasi persepsi evaluasi dari momok menakutkan menjadi wahana refleksi belajar yang menggembirakan tanpa mengorbankan ketepatan penilaian.",
    fullContent: `
## Latar Belakang
Evaluasi formatif memegang peran vital dalam memberikan umpan balik berkelanjutan bagi proses belajar murid dan strategi mengajar guru. Kendati demikian, lembar asesmen tertulis konvensional sering kali menciptakan rasa cemas (test anxiety) serta membutuhkan waktu pemeriksaan yang lama. Kehadiran teknologi gamifikasi digital menawarkan kesempatan baru untuk menyajikan asesmen yang adaptif, cepat, dan membangkitkan rasa ingin tahu siswa.

## Metode Penelitian
Penelitian ini menggunakan pendekatan deskriptif kualitatif dengan teknik survei dan studi kasus terpadu. Responden terdiri dari 120 peserta didik jenjang SMP dan 6 guru dari berbagai bidang studi. Pengumpulan data dilakukan melalui instrumen kuesioner antusiasme belajar (reliabilitas Alpha Cronbach 0,86), observasi suasana kelas selama 8 sesi penilaian, dan wawancara semi-terstruktur mengenai kepuasan pengguna. Data dianalisis melalui reduksi data kualitatif dan persentase statistik deskriptif.

## Hasil dan Pembahasan
Data angket memperlihatkan bahwa 87,5% peserta didik mengapresiasi visual animasi dan mode permainan tim di Quizizz yang menumbuhkan atmosfer kompetisi positif tanpa intimidasi. Fitur koreksi seketika membantu siswa mengetahui konsep yang belum dikuasai tanpa harus menunggu hari berikutnya. Dari perspektif tenaga pendidik, kemudahan mengunduh matriks pencapaian kompetensi dalam bentuk spreadsheet secara instan sangat meringankan beban administratif evaluasi harian.

## Kesimpulan
Integrasi platform Quizizz terbukti mampu mengubah paradigma asesmen formatif menjadi pengalaman belajar yang menyenangkan, interaktif, dan efisien. Pemanfaatan gamifikasi dianjurkan sebagai pelengkap strategi asesmen autentik guna memperkuat pemahaman konsep dan memelihara motivasi belajar murid.
    `,
    pdfUrl: "/docs/jurnal-gamifikasi-quizizz.pdf", // GANTI DENGAN DATA ASLI
    externalUrl: "https://issn.brin.go.id/terbit/detail/2775894X", // GANTI DENGAN DATA ASLI
  },
  {
    id: "jurnal-4",
    slug: "strategi-komunikasi-empatik-guru-iklim-kelas-positif",
    title: "Strategi Komunikasi Empatik Guru dalam Membangun Iklim Kelas Positif dan Keamanan Emosional Remaja",
    authors: ["Annisa", "Rina Kusuma Dewi, S.Psi., M.Pd."], // GANTI DENGAN DATA ASLI
    journalName: "Open Educational Review & Classroom Practice",
    publisher: "Southeast Asian Educational Research Network",
    publicationYear: 2022,
    indexing: "Open Access",
    keywords: [
      "Komunikasi Empatik",
      "Keamanan Emosional",
      "Manajemen Kelas",
      "Psikologi Remaja",
      "Relasi Guru-Siswa",
    ],
    abstract:
      "Hubungan relasional antara pendidik dan murid memegang peranan fundamental dalam pembentukan iklim kelas yang kondusif bagi perkembangan kognitif maupun emosional siswa usia remaja. Artikel ini menganalisis implementasi teknik komunikasi empatik aktif (mendengarkan dengan penuh perhatian, validasi perasaan tanpa menghakimi, dan pemberian umpan balik konstruktif) dalam interaksi pedagogis sehari-hari. Menggunakan pendekatan studi kasus kualitatif pada dua kelas di jenjang sekolah menengah pertama, data dihimpun melalui observasi partisipatif selama enam bulan, catatan anekdot kelas, serta refleksi diri harian guru. Hasil kajian menunjukkan bahwa guru yang menerapkan komunikasi empatik secara konsisten berhasil mereduksi tingkat ketegangan dan konflik interpersonal di kelas hingga 40%. Peserta didik memperlihatkan keberanian lebih tinggi dalam mengemukakan kesulitan belajar dan berani mengajukan opini tanpa rasa takut diejek. Artikel ini menegaskan bahwa kehangatan relasi dan rasa aman emosional merupakan prakondisi mutlak sebelum pembelajaran akademik bermutu tinggi dapat terwujud.",
    fullContent: `
## Latar Belakang
Usia remaja awal merupakan fase krusial pencarian jati diri yang rentan terhadap stres sosial dan kecemasan akademik. Sikap guru yang otoriter atau dingin kerap kali membuat peserta didik menarik diri dari aktivitas pembelajaran dan merasa tidak dihargai. Komunikasi empatik menawarkan jembatan dialogis yang memanusiakan murid, mengakui emosi mereka, dan menanamkan rasa memiliki (*sense of belonging*) di dalam ekosistem sekolah.

## Metode Penelitian
Penelitian kualitatif berjenis studi kasus naturalistik ini dilaksanakan di dua kelas VIII dengan total 60 peserta didik. Peneliti bertindak sebagai instrumen kunci yang melakukan observasi partisipatif intensif selama satu semester ajaran. Teknik pengumpulan data didukung oleh wawancara mendalam dengan perwakilan siswa, catatan harian interaksi kelas, serta lembar evaluasi iklim sosial kelas (*Classroom Life Instrument*). Analisis data mengikuti model interaktif Miles, Huberman, dan Saldana.

## Hasil dan Pembahasan
Penerapan 3 prinsip komunikasi empatik (mendengarkan aktif, konfirmasi pemahaman tanpa interupsi, dan apresiasi terhadap usaha) memicu perubahan perilaku murid yang nyata. Frekuensi siswa berpartisipasi sukarela dalam diskusi kelas meningkat dari 24% menjadi 68%. Indeks friksi dan gesekan antar-kelompok siswa menurun sebesar 40%. Siswa menyatakan bahwa mereka merasa didengar dan dihormati oleh guru, yang pada gilirannya menumbuhkan motivasi intrinsik untuk belajar lebih giat.

## Kesimpulan
Pemberdayaan komunikasi empatik merupakan kompetensi inti yang harus terus diasah oleh pendidik. Iklim kelas yang aman secara emosional adalah tanah subur bagi berkembangnya rasa percaya diri, integritas moral, dan pencapaian prestasi akademik peserta didik secara berkesinambungan.
    `,
    pdfUrl: "/docs/jurnal-komunikasi-empatik.pdf", // GANTI DENGAN DATA ASLI
    externalUrl: "https://openedureview.org/articles/2022/empatik-iklim-kelas", // GANTI DENGAN DATA ASLI
  },
];

// ==========================================
// 3. DATA KARYA & INOVASI PEMBELAJARAN (4 KARYA)
// ==========================================
export const projectsData: TeachingProject[] = [
  {
    id: "karya-1",
    slug: "modul-ajar-tematik-ekosistem-nusantara",
    title: "Modul Ajar Tematik Interaktif: Jelajah Ekosistem Nusantara",
    targetAudience: "Peserta Didik SMP Kelas VII",
    subject: "Ilmu Pengetahuan Alam (IPA)",
    summary: "Modul ajar kontekstual berbasis studi kasus pelestarian hutan mangrove dan terumbu karang Indonesia dengan panduan berbasis proyek.",
    description: "Modul ajar inovatif yang dirancang untuk memfasilitasi model Project-Based Learning (PjBL). Modul ini mengajak siswa melakukan investigasi ekologi lokal melalui barcode video interaktif, kartu identifikasi rantai makanan visual, serta panduan proyek pembuatan biopori sederhana di lingkungan rumah.",
    thumbnail: "/images/project-modul-ipa.svg", // GANTI DENGAN DATA ASLI: Letakkan thumbnail di public/images/
    toolsUsed: ["Canva for Education", "Google Docs", "Liveworksheets", "YouTube Edu"],
    resultsAndImpact: "Telah diujicobakan pada 3 kelas paralel (96 siswa). Sebanyak 91% siswa mencapai ketuntasan asesmen formatif kognitif, menghasilkan 24 karya poster edukasi lingkungan, serta diadopsi sebagai referensi modul ajar unggulan pada MGMP IPA setempat.",
    demoUrl: "https://canva.com/design/demo-modul-ipa-annisa", // GANTI DENGAN DATA ASLI: Tautan preview modul
    documentUrl: "/docs/modul-ajar-ekosistem-annisa.pdf", // GANTI DENGAN DATA ASLI: Tautan unduh PDF modul
  },
  {
    id: "karya-2",
    slug: "gamified-math-quest-aljabar-interaktif",
    title: "Gamified Math Quest: Petualangan Aljabar Menyenangkan",
    targetAudience: "Peserta Didik SMP Kelas VIII",
    subject: "Matematika",
    summary: "Media asesmen dan eksplorasi konsep aljabar dengan alur cerita superhero sains untuk mematahkan stigma matematika yang menakutkan.",
    description: "Media pembelajaran interaktif yang menyatukan infografis visual terstruktur dari Canva dengan mode petualangan tim di platform Quizizz. Siswa memecahkan teka-teki persamaan linear satu variabel untuk membuka petunjuk misi sains berikutnya, dilengkapi papan skor kolaboratif dan refleksi mandiri di akhir sesi.",
    thumbnail: "/images/project-quizizz-math.svg", // GANTI DENGAN DATA ASLI
    toolsUsed: ["Quizizz", "Canva for Education", "Desmos Graphing", "GeoGebra"],
    resultsAndImpact: "Menurunkan kecemasan belajar matematika (math anxiety) siswa sebesar 35% berdasarkan survei pre-post intervensi, serta mencatatkan tingkat partisipasi aktif kuis hingga 100% di kelas.",
    demoUrl: "https://quizizz.com/join?gc=demo-math-annisa", // GANTI DENGAN DATA ASLI
    documentUrl: "/docs/panduan-media-gamified-math.pdf", // GANTI DENGAN DATA ASLI
  },
  {
    id: "karya-3",
    slug: "lkpd-digital-berdiferensiasi-kurikulum-merdeka",
    title: "Lembar Kerja Siswa (LKPD) Berdiferensiasi Berbasis Eksplorasi Digital",
    targetAudience: "Peserta Didik SMA Kelas X",
    subject: "Bahasa Indonesia & Literasi Kritis",
    summary: "Lembar kerja peserta didik berjenjang dengan kebebasan memilih produk luaran (infografis, podcast audio, atau esai refleksi analitis).",
    description: "LKPD digital ramah perangkat genggam yang dirancang khusus untuk memenuhi kebutuhan belajar siswa dengan profil kecerdasan majemuk. Menghadirkan studi kasus teks berita dan editorial hangat, di mana siswa dapat memilih jalur unjuk pemahaman sesuai gaya berekspresi terbaik mereka.",
    thumbnail: "/images/project-lkpd-digital.svg", // GANTI DENGAN DATA ASLI
    toolsUsed: ["Google Classroom", "Canva Edu", "Padlet Interaktif", "Spotify for Podcasters"],
    resultsAndImpact: "Diadaptasi oleh 8 guru di komunitas MGMP. Terbukti meningkatkan orisinalitas argumen dan kekritisan telaah teks siswa sebesar 28% dibandingkan pengerjaan lembar kerja format cetak statis.",
    demoUrl: "https://padlet.com/annisa-educator/lkpd-literasi", // GANTI DENGAN DATA ASLI
    documentUrl: "/docs/lkpd-digital-berdiferensiasi.pdf", // GANTI DENGAN DATA ASLI
  },
  {
    id: "karya-4",
    slug: "program-pojok-baca-inspiratif-melek-literasi",
    title: "Program 'Pojok Baca Inspiratif & Melek Literasi' Komunitas",
    targetAudience: "Anak Usia Sekolah Dasar & Remaja Wilayah Mitra",
    subject: "Pengabdian Masyarakat & Edukasi Literasi",
    summary: "Inisiatif pengabdian mendirikan ruang baca ramah anak, pelatihan membaca nyaring, serta kelas sains akhir pekan swadaya.",
    description: "Program kemasyarakatan yang mengolaborasikan donasi 500+ buku bacaan bermutu, pelatihan teknik membacakan buku (Read Aloud) bagi pemuda karang taruna setempat, serta penyelenggaraan kelas sains eksperimen sederhana mingguan untuk anak-anak pedesaan.",
    thumbnail: "/images/project-pengabdian-literasi.svg", // GANTI DENGAN DATA ASLI
    toolsUsed: ["Metode Read Aloud", "Google Forms Survei", "Notion Kolaborasi", "Dokumentasi Komunitas"],
    resultsAndImpact: "Menjangkau lebih dari 140 anak desa, melatih 15 pemuda lokal menjadi fasilitator literasi mandiri, dan berhasil mendirikan ruang baca komunitas yang beroperasi aktif hingga saat ini.",
    demoUrl: "https://instagram.com/p/pojokbaca-annisa-demo", // GANTI DENGAN DATA ASLI
    documentUrl: "/docs/laporan-pengabdian-literasi.pdf", // GANTI DENGAN DATA ASLI
  },
];

// ==========================================
// 4. DATA RIWAYAT PENGALAMAN (TIMELINE)
// Minimal: 2 teaching, 2 education, 1 organization
// ==========================================
export const timelineData: TimelineItem[] = [
  {
    id: "exp-1",
    roleOrDegree: "Guru Mata Pelajaran & Koordinator Pembelajaran Aktif",
    institution: "SMP Negeri Mitra / Sekolah Menengah", // GANTI DENGAN DATA ASLI
    period: "2023 – Sekarang",
    description: [
      "Merancang dan memfasilitasi modul ajar berdiferensiasi untuk 4 kelas paralel dengan total 130+ peserta didik.",
      "Menginisiasi digitalisasi asesmen formatif menggunakan platform gamifikasi kuis untuk mengurangi kecemasan ujian.",
      "Menjadi perwakilan guru dalam lokakarya diseminasi praktik baik implementasi Kurikulum Merdeka tingkat kota.",
    ],
    type: "teaching",
  },
  {
    id: "exp-2",
    roleOrDegree: "Pendidik Program Kampus Mengajar (Kemendikbudristek)",
    institution: "SD Negeri Mitra / Sekolah Sasaran Penguatan Literasi", // GANTI DENGAN DATA ASLI
    period: "2022 – 2023",
    description: [
      "Melaksanakan pendampingan intensif penguatan kemampuan literasi membaca dan numerasi dasar bagi 80+ siswa.",
      "Menggagas pendirian sudut baca kelas serta menyelenggarakan 'Kelas Sains Terbuka' mingguan yang interaktif.",
      "Mengadakan lokakarya pemanfaatan aplikasi pembelajaran digital dasar bagi dewan guru sekolah setempat.",
    ],
    type: "teaching",
  },
  {
    id: "exp-3",
    roleOrDegree: "Pendidikan Profesi Guru (PPG) Prajabatan",
    institution: "Lembaga Pendidikan Tenaga Kependidikan (LPTK)", // GANTI DENGAN DATA ASLI
    period: "2023 – 2024",
    description: [
      "Menempuh sertifikasi pendidik profesional dengan pendalaman khusus pada pedagogi berdiferensiasi dan teknologi kelas.",
      "Menyelesaikan Praktik Pengalaman Lapangan (PPL) komprehensif dengan predikat nilai Amat Baik (A).",
      "Menyusun portofolio refleksi pedagogik dan studi kasus penanganan kesulitan belajar siswa inklusif.",
    ],
    type: "education",
  },
  {
    id: "exp-4",
    roleOrDegree: "Sarjana Pendidikan (S.Pd.) — Yudisium Pujian (Cum Laude)",
    institution: "Universitas Negeri Terkemuka / Fakultas Kependidikan", // GANTI DENGAN DATA ASLI
    period: "2019 – 2023",
    description: [
      "Lulus dengan Indeks Prestasi Kumulatif (IPK) 3.91 dari skala 4.00.",
      "Skripsi berfokus pada efektivitas integrasi Problem-Based Learning berbantuan media interaktif terhadap nalar kritis siswa.",
      "Penerima Beasiswa Prestasi Akademik dan Juara 1 Kompetisi Inovasi Media Pembelajaran Tingkat Nasional.",
    ],
    type: "education",
  },
  {
    id: "exp-5",
    roleOrDegree: "Ketua Divisi Riset & Pengembangan Kurikulum",
    institution: "Komunitas Pendidik Muda & Guru Berdaya Indonesia", // GANTI DENGAN DATA ASLI
    period: "2022 – Sekarang",
    description: [
      "Memimpin forum kajian metodologi pedagogi modern dan kurikulum baru yang diadakan berkala bagi pendidik muda.",
      "Mengkoordinir webinar nasional 'Inovasi Pembelajaran Digital di Era AI' yang dihadiri 500+ guru dan mahasiswa keguruan.",
      "Menyunting buletin edukasi berkala dan memfasilitasi pendampingan penulisan karya ilmiah bagi guru pemula.",
    ],
    type: "organization",
  },
];

// ==========================================
// 5. DATA KELOMPOK KOMPETENSI & KEAHLIAN
// 3 Kelompok: Pedagogik, Media & EdTech, Soft Skills
// ==========================================
export const skillGroupsData: SkillGroup[] = [
  {
    id: "pedagogik",
    category: "pedagogik",
    title: "Kompetensi Pedagogik",
    description: "Penguasaan teori pembelajaran mendalam, perancangan kurikulum adaptif, dan manajemen iklim kelas yang inklusif.",
    skills: [
      "Kurikulum Merdeka",
      "Pembelajaran Berdiferensiasi",
      "Problem-Based Learning (PBL)",
      "Project-Based Learning (PjBL)",
      "Manajemen Kelas Inklusif",
      "Asesmen Diagnostik & Formatif",
      "Penelitian Tindakan Kelas (PTK)",
      "Penyusunan Modul Ajar Tematik",
    ],
  },
  {
    id: "edtech",
    category: "edtech",
    title: "Media & Teknologi Pembelajaran (EdTech)",
    description: "Kemahiran memanfaatkan piranti lunak multimedia dan platform interaktif untuk mendongkrak partisipasi aktif siswa.",
    skills: [
      "Canva for Education",
      "Quizizz & Kahoot",
      "Google Workspace for Education",
      "Desmos & GeoGebra",
      "Video Pembelajaran Interaktif",
      "Liveworksheets & Padlet",
      "Notion for Teacher Planning",
      "AI Tools untuk Diferensiasi Soal",
    ],
  },
  {
    id: "softskill",
    category: "soft-skill",
    title: "Keahlian Interpersonal & Kepemimpinan",
    description: "Kecakapan berkomunikasi secara empatik, menginspirasi peserta didik, serta berkolaborasi dengan komunitas pendidik.",
    skills: [
      "Komunikasi Empatik & Aktif",
      "Public Speaking & Fasilitasi Kelas",
      "Kolaborasi Tim & Komunitas MGMP",
      "Pendekatan Student-Centered",
      "Problem Solving Adaptif",
      "Mentoring & Bimbingan Belajar Siswa",
      "Manajemen Waktu & Organisasi",
      "Penulisan Karya Tulis Ilmiah",
    ],
  },
];

// ==========================================
// 6. DATA TESTIMONI & APRESIASI (4 TESTIMONI)
// ==========================================
export const testimonialsData: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Bambang Wijaya, S.Pd., M.M.", // GANTI DENGAN DATA ASLI
    role: "Guru Senior & Ketua Musyawarah Guru Mata Pelajaran (MGMP)",
    institution: "SMP Negeri Mitra / Rekan Sejawat Guru", // GANTI DENGAN DATA ASLI
    avatarUrl: "/images/avatar-bambang.svg", // GANTI DENGAN DATA ASLI
    quote: "Ibu Annisa adalah sosok pendidik muda yang membawa energi pembaruan luar biasa di ruang guru kami. Terobosannya dalam memadukan gamifikasi asesmen dan modul ajar interaktif berhasil menginspirasi rekan-rekan pendidik senior untuk lebih berani bertransformasi digital.",
    content: "Ibu Annisa adalah sosok pendidik muda yang membawa energi pembaruan luar biasa di ruang guru kami. Terobosannya dalam memadukan gamifikasi asesmen dan modul ajar interaktif berhasil menginspirasi rekan-rekan pendidik senior untuk lebih berani bertransformasi digital.",
  },
  {
    id: "testi-2",
    name: "Prof. Dr. Irwan Prasetyo, M.Pd.", // GANTI DENGAN DATA ASLI
    role: "Guru Besar & Dosen Pembimbing Skripsi",
    institution: "Fakultas Keguruan & Ilmu Pendidikan", // GANTI DENGAN DATA ASLI
    avatarUrl: "/images/avatar-irwan.svg", // GANTI DENGAN DATA ASLI
    quote: "Integritas riset dan keuletan Annisa dalam meneliti efektivitas model pembelajaran sangat menonjol sejak masa perkuliahan. Publikasi jurnal yang dihasilkannya memiliki landasan metodologi yang kokoh dan memberikan kontribusi nyata bagi pemecahan problem pembelajaran di kelas.",
    content: "Integritas riset dan keuletan Annisa dalam meneliti efektivitas model pembelajaran sangat menonjol sejak masa perkuliahan. Publikasi jurnal yang dihasilkannya memiliki landasan metodologi yang kokoh dan memberikan kontribusi nyata bagi pemecahan problem pembelajaran di kelas.",
  },
  {
    id: "testi-3",
    name: "Farhan Maulana, S.Pd.", // GANTI DENGAN DATA ASLI
    role: "Rekan Peneliti & Alumni Kependidikan",
    institution: "Komunitas Guru Muda Indonesia", // GANTI DENGAN DATA ASLI
    avatarUrl: "/images/avatar-farhan.svg", // GANTI DENGAN DATA ASLI
    quote: "Berkolaborasi dengan Annisa dalam program pengabdian literasi pedesaan membuka mata saya tentang esensi mendidik dari hati. Annisa memiliki kepekaan analitis yang tajam dipadukan dengan kehangatan komunikasi yang membuat murid-murid selalu menantikan kehadirannya.",
    content: "Berkolaborasi dengan Annisa dalam program pengabdian literasi pedesaan membuka mata saya tentang esensi mendidik dari hati. Annisa memiliki kepekaan analitis yang tajam dipadukan dengan kehangatan komunikasi yang membuat murid-murid selalu menantikan kehadirannya.",
  },
  {
    id: "testi-4",
    name: "Ibu Dewi Sulistiyowati", // GANTI DENGAN DATA ASLI
    role: "Orang Tua / Wali Murid Kelas VIII",
    institution: "Komite Paguyuban Orang Tua Siswa", // GANTI DENGAN DATA ASLI
    avatarUrl: "/images/avatar-dewi.svg", // GANTI DENGAN DATA ASLI
    quote: "Putri saya yang sebelumnya sangat cemas dan tidak percaya diri setiap pelajaran hitungan, sekarang menjadi bersemangat menyambut hari sekolah. Pendekatan Bu Annisa yang sabar, ramah, dan menghargai proses belajar benar-benar membangkitkan rasa percaya diri anak kami.",
    content: "Putri saya yang sebelumnya sangat cemas dan tidak percaya diri setiap pelajaran hitungan, sekarang menjadi bersemangat menyambut hari sekolah. Pendekatan Bu Annisa yang sabar, ramah, dan menghargai proses belajar benar-benar membangkitkan rasa percaya diri anak kami.",
  },
];

// ==========================================
// 7. HELPER FUNCTIONS UNTUK DATA ACCESS
// ==========================================

/**
 * Mengambil satu jurnal ilmiah berdasarkan slug uniknya
 */
export function getJournalBySlug(slug: string): JournalItem | undefined {
  return journalsData.find((journal) => journal.slug === slug);
}

/**
 * Mengambil satu karya inovasi pembelajaran berdasarkan slug uniknya
 */
export function getProjectBySlug(slug: string): TeachingProject | undefined {
  return projectsData.find((project) => project.slug === slug);
}

/**
 * Mengambil seluruh daftar slug jurnal ilmiah (berguna untuk generateStaticParams di Next.js)
 */
export function getAllJournalSlugs(): string[] {
  return journalsData.map((journal) => journal.slug);
}

/**
 * Mengambil seluruh daftar slug karya inovasi pembelajaran (berguna untuk generateStaticParams di Next.js)
 */
export function getAllProjectSlugs(): string[] {
  return projectsData.map((project) => project.slug);
}
