import { MessageSquareQuote } from "lucide-react";
import { testimonialsData } from "@/data/portfolio";
import { TestimonialCard } from "@/components/portfolio";
import { Badge } from "@/components/ui/badge";

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi Testimoni */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 md:mb-16">
          <Badge variant="sky" className="px-3 py-1 text-xs font-semibold">
            Apresiasi &amp; Rekomendasi
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Apa Kata Rekan Sejawat &amp; Mitra Belajar
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Refleksi dan kesan jujur dari guru senior, dosen pembimbing riset, rekan kolaborator,
            serta orang tua murid mengenai komitmen dan kepribadian Annisa.
          </p>
        </div>

        {/* Grid Kartu Testimoni */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

