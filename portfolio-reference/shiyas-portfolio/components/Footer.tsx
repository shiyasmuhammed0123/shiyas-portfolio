import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border container-px mx-auto max-w-7xl py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-display font-semibold text-lg">
            Shiyas<span className="text-accent">.</span>
          </p>
          <p className="text-text-secondary text-sm mt-2 max-w-sm">
            Digital marketing strategy for brands that want to be found —
            on Google, in AI search, and across social.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-5 text-sm text-text-secondary">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-text-primary">
            LinkedIn
          </a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="hover:text-text-primary">
            Instagram
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-text-primary">
            Email
          </a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2 text-xs text-text-secondary">
        <p>© {new Date().getFullYear()} Muhammed Shiyas V P. All rights reserved.</p>
        <p>Built for brands that want to rank, grow, and win.</p>
      </div>
    </footer>
  );
}
