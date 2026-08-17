import Image from "next/image";
import { trustLogos } from "@/lib/data";

export default function TrustBar() {
  const doubled = [...trustLogos, ...trustLogos];

  return (
    <section className="relative border-y border-border py-8 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl mb-6">
        <p className="text-center text-xs text-text-secondary tracking-wide">
          Brands &amp; clients I&apos;ve worked with
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-14 items-center">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="relative h-10 w-28 shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
}
