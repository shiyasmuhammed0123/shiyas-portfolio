import Image from "next/image";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say after working together"
        align="center"
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={0.06 * i}>
            <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col">
              <Quote className="text-accent" size={20} />
              <p className="mt-3 text-sm leading-relaxed text-text-primary/90 flex-1">
                {t.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-card">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
