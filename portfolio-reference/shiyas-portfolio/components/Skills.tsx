"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section container-px mx-auto max-w-7xl">
      <SectionHeading eyebrow="Skills" title="Tools I use to move the needle" />

      <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-8">
        {skills.map((skill, i) => (
          <Reveal key={skill.label} delay={0.03 * i}>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{skill.label}</span>
                <span className="text-text-secondary">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-card overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
