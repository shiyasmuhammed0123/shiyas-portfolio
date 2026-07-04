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
            title="Hi, I'm Muhammed Shiyas V P"
            description="A digital marketing professional from Kerala with over a year of hands-on experience helping businesses strengthen their online presence."
          />

          <Reveal delay={0.15}>
            <p className="mt-6 text-text-secondary leading-relaxed max-w-2xl">
              My expertise includes SEO, Social Media Marketing, Meta Ads,
              content strategy, and brand growth. I enjoy combining creativity
              with data to create marketing campaigns that deliver measurable
              results.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl">
              I have worked with educational institutions and businesses across
              different industries, managing content, social media, and digital
              campaigns while continuously learning the latest marketing trends
              and AI-powered tools.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { title: "Data-driven marketing", detail: "Every decision is tied to a metric that maps to real business results." },
              { title: "Creative content strategies", detail: "Combining creativity with data to create campaigns that stand out." },
              { title: "Results-oriented campaigns", detail: "Transparent reporting and continuous learning drive everything I do." },
            ].map((v, i) => (
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
