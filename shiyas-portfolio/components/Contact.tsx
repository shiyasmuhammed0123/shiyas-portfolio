"use client";

import { useState } from "react";
import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "/in/shiyasvp", href: profile.linkedin, icon: Linkedin },
  { label: "Instagram", value: "@shiyasvp", href: profile.instagram, icon: Instagram },
  { label: "WhatsApp", value: "Chat directly", href: profile.whatsapp, icon: MessageCircle },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your email/CRM provider of choice (Resend, Formspree, etc.)
    setStatus("submitted");
  }

  return (
    <section id="contact" className="section container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Great Together"
        description="Tell me about your business and where you want it to go. I'll follow up within one business day."
      />

      <div className="mt-16 grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
        <Reveal>
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4"
              >
                <span className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-accent">
                  <link.icon size={18} />
                </span>
                <span>
                  <span className="block text-xs text-text-secondary">
                    {link.label}
                  </span>
                  <span className="block text-sm font-medium">{link.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-xs text-text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="text-xs text-text-secondary">
                Project budget (optional)
              </label>
              <input
                id="budget"
                name="budget"
                className="mt-2 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:border-accent transition-colors"
                placeholder="e.g. $1,000 – $3,000"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:border-accent transition-colors resize-none"
                placeholder="Tell me about your business and goals"
              />
            </div>

            <button type="submit" className="btn-primary w-full py-3.5 text-sm">
              {status === "submitted" ? "Message sent" : "Send message"}
            </button>

            {status === "submitted" && (
              <p className="text-xs text-text-secondary text-center">
                Thanks — I&apos;ll reply within one business day.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
