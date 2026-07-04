import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Featured Work"
        title="Results, not just deliverables"
        description="A look at how strategy translated into measurable outcomes for real brands."
      />

      <div className="mt-16 space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.05 * i}>
            <div className="glass glass-hover rounded-3xl p-8 md:p-10 grid lg:grid-cols-[1fr_1.1fr] gap-10">
              <div className="relative aspect-video lg:aspect-auto rounded-2xl overflow-hidden bg-bg-secondary">
                <div className="absolute inset-0 bg-radial-glow opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center text-text-secondary text-sm">
                  Case study visual
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="eyebrow">{project.category}</span>
                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <dl className="mt-6 space-y-3 text-sm">
                    <div>
                      <dt className="text-text-secondary">Problem</dt>
                      <dd className="mt-1">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-text-secondary">Solution</dt>
                      <dd className="mt-1">{project.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-text-secondary">Result</dt>
                      <dd className="mt-1 text-text-primary font-medium">
                        {project.result}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xl font-display font-semibold text-accent">
                        {metric.value}
                      </div>
                      <div className="text-xs text-text-secondary mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
