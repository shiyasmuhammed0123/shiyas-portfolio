import { trustLogos } from "@/lib/data";

export default function TrustBar() {
  const doubled = [...trustLogos, ...trustLogos];

  return (
    <section className="relative border-y border-border py-8 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl mb-4">
        <p className="text-center text-xs text-text-secondary tracking-wide">
          Platforms &amp; tools I work with daily
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {doubled.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="text-lg md:text-xl font-display font-medium text-text-secondary/70 hover:text-text-primary transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
}
