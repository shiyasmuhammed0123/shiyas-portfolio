import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { insights } from "@/lib/data";

export default function Insights() {
  return (
    <section id="insights" className="section container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Insights"
        title="Writing on SEO, AI search, and growth"
        description="Notes from the field — practical, no fluff."
      />

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {insights.map((post, i) => (
          <Reveal key={post.title} delay={0.06 * i}>
            <a
              href="#"
              className="glass glass-hover rounded-2xl p-7 h-full flex flex-col group"
            >
              <span className="eyebrow">{post.category}</span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-accent">
                Read article
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
