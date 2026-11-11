import { BookOpen } from "lucide-react";
import { journalsData } from "@/data/portfolio";
import { JournalCard } from "@/components/portfolio";
import { Badge } from "@/components/ui/badge";

export function JournalsSection() {
  // Urutkan jurnal dari tahun publikasi paling baru
  const sortedJournals = [...journalsData].sort(
    (a, b) => b.publicationYear - a.publicationYear
  );

  return (
    <section
      id="jurnal"
      className="relative py-16 md:py-24 bg-sky-50/30 dark:bg-sky-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi Jurnal Ilmiah */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 md:mb-16">
          <Badge variant="sky" className="px-3 py-1 text-xs font-semibold">
            Riset Tindakan Kelas &amp; Diseminasi
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Publikasi Jurnal Ilmiah
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Artikel penelitian tindakan kelas dan pengembangan kurikulum yang telah
            didiseminasikan pada jurnal terindeks SINTA, ISSN, dan prosiding pendidikan nasional.
          </p>
        </div>

        {/* Grid Kartu Jurnal Ilmiah */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sortedJournals.map((journal) => (
            <JournalCard key={journal.id} journal={journal} />
          ))}
        </div>

      </div>
    </section>
  );
}

