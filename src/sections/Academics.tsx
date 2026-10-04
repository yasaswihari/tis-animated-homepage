import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { academics } from "../data/content";

export default function Academics() {
  return (
    <section id="academics" className="bg-[#e8e1d5] px-5 py-24 text-ink dark:bg-[#161b18] dark:text-cream sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-super text-orange">02 / Academics</p>
              <h2 className="mt-5 font-display text-4xl font-black leading-[.95] tracking-[-.05em] sm:text-6xl">
                Curiosity is part of the curriculum.
              </h2>
            </div>
            <p className="max-w-2xl self-end text-base leading-8 text-black/55 dark:text-white/50">
              TIS follows the CBSE curriculum while creating room for practical learning, creative
              expression, leadership, sports and experiences beyond the classroom.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {academics.map((item, index) => (
            <Reveal key={item.title} delay={index * .08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group overflow-hidden rounded-[2rem] border border-black/10 bg-[#f4f0e8] dark:border-white/10 dark:bg-[#101412]"
              >
                <div className="relative aspect-[1.2/1] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: .7 }}
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[.15em] text-ink">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/55 dark:text-white/50">{item.description}</p>
                  <button className="mt-6 flex items-center gap-2 text-sm font-bold transition group-hover:gap-3">
                    Learn more <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}