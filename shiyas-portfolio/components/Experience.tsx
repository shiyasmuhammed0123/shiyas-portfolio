import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Experience"
        title="Where the work has happened"
      />

      <div className="mt-16 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />
        <div className="space-y-10">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={0.08 * i}>
              <div className="relative sm:pl-10">
                <span className="hidden sm:block absolute left-0 top-2 w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_rgba(240,29,74,0.6)]" />
                <div className="glass glass-hover rounded-2xl p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">
                      {item.role}
                    </h3>
                    <span className="text-xs text-accent uppercase tracking-wide">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mt-1">
                    {item.company}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-accent">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
