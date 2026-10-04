import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { facilities } from "../data/content";

export default function Facilities() {
  return (
    <section id="campus" className="bg-forest px-5 py-24 text-cream sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 border-b border-white/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-super text-[#f0c87b]">03 / Campus & Facilities</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[.95] tracking-[-.05em] sm:text-6xl">
                Spaces that make learning feel like an adventure.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/50">
              From laboratories and libraries to sport, clubs and activity spaces, campus life is
              designed for whole-person development.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {facilities.map((item, index) => {
            const span = item.size === "large" ? "lg:col-span-7 lg:row-span-2" : item.size === "medium" ? "lg:col-span-5" : "lg:col-span-5";
            return (
              <Reveal key={item.title} delay={index * .06} className={span}>
                <motion.article
                  whileHover={{ scale: .985 }}
                  className={`group relative h-full min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 ${item.size === "large" ? "lg:min-h-[560px]" : ""}`}
                >
                  <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/5" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-black">{item.title}</h3>
                        <p className="mt-2 max-w-md text-sm leading-6 text-white/65">{item.description}</p>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-forest transition group-hover:rotate-45">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}