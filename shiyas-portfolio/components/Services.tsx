import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Services"
        title="Where I create the most value"
        description="Every service is built around one outcome: measurable growth, not activity for its own sake."
        align="center"
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={0.04 * i}>
            <div className="glass glass-hover rounded-2xl p-7 h-full">
              <span className="text-xs text-text-secondary font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
