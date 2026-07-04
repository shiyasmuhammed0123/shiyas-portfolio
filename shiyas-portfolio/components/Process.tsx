import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="section container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Process"
        title="How a project actually moves forward"
        align="center"
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {process.map((item, i) => (
          <Reveal key={item.step} delay={0.05 * i}>
            <div className="glass glass-hover rounded-2xl p-7 h-full">
              <span className="text-3xl font-display font-semibold text-accent/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {item.step}
              </h3>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
