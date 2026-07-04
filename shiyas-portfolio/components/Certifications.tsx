import { Award } from "lucide-react";
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
            <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-accent">
                <Award size={18} />
              </div>
              <div>
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
