import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="section container-px mx-auto max-w-7xl">
      <SectionHeading eyebrow="Certifications" title="Credentials that back the work" align="center" />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={0.05 * i}>
            <div className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col">
              <div className="relative aspect-[4/3] bg-white/5">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-medium text-sm leading-snug">{cert.name}</p>
                <p className="text-text-secondary text-xs mt-1">{cert.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
