import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const points = [
  "Co-educational boarding school",
  "CBSE affiliated curriculum",
  "Grades IV–XII",
  "Academic, arts, sports and leadership opportunities"
];

export default function Admissions() {
  return (
    <section id="admissions" className="bg-cream px-5 py-24 text-ink dark:bg-[#101412] dark:text-cream sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-orange px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-white/10" />
            <div className="absolute -bottom-36 left-1/3 h-96 w-96 rounded-full border-[70px] border-white/5" />
            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-super text-white/60">04 / Admissions</p>
                <h2 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[.9] tracking-[-.06em] sm:text-7xl">
                  Give your child a place to discover what they can become.
                </h2>
              </div>
              <div>
                <ul className="space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15"><Check size={14} /></span>
                      {point}
                    </li>
                  ))}
                </ul>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://admission.tis.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex w-fit items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white"
                >
                  Start an enquiry <ArrowUpRight size={17} />
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}