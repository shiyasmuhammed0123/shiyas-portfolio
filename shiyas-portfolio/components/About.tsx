import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const values = [
  { title: "Data over guesswork", detail: "Every decision is tied to a metric that maps to revenue." },
  { title: "Speed with discipline", detail: "Fast execution, but never at the cost of strategic direction." },
  { title: "Clarity in reporting", detail: "No vanity metrics — just what moved the business forward." },
];

export default function About() {
  return (
    <section id="about" className="section container-px mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-3xl glass overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-40" />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <p className="font-display text-xl font-semibold">Muhammed Shiyas V P</p>
                <p className="text-text-secondary text-sm mt-1">Kerala, India</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About"
            title="A marketer who treats every campaign like a business problem."
            description="I started in digital marketing chasing likes and impressions — I stayed because I learned to chase revenue instead. Today I help founders and brands show up where their customers are actually searching: Google, AI answers, and social feeds."
          />

          <Reveal delay={0.15}>
            <p className="mt-6 text-text-secondary leading-relaxed max-w-2xl">
              My work sits at the intersection of SEO, Generative Engine
              Optimization, and performance marketing — built for a world
              where search is no longer just a results page, but an AI
              conversation. The mission is simple: make brands impossible to
              ignore, wherever people are looking.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.05 * i}>
                <div className="glass glass-hover rounded-2xl p-5 h-full">
                  <p className="font-display font-semibold">{v.title}</p>
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                    {v.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
