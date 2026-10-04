import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { stats } from "../data/content";

export default function About() {
  return (
    <section id="about" className="bg-cream px-5 py-24 text-ink dark:bg-[#101412] dark:text-cream sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-5 dark:border-white/10">
            <p className="text-xs font-bold uppercase tracking-super text-orange">01 / About TIS</p>
            <span className="hidden text-xs font-semibold text-black/35 dark:text-white/35 sm:block">DEHRADUN · UTTARAKHAND</span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <p className="max-w-sm text-sm font-semibold uppercase leading-6 tracking-[.12em] text-forest dark:text-[#f0c87b]">
              Enlightening through education, ensuring a promising future.
            </p>
          </Reveal>
          <Reveal delay={.1}>
            <div>
              <h2 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-[-.04em] sm:text-5xl lg:text-6xl">
                A school built to help young people <span className="text-orange">grow into themselves.</span>
              </h2>
              <p className="mt-7 max-w-3xl text-base leading-8 text-black/55 dark:text-white/55">
                TIS combines respect for tradition with a progressive approach to education. Its
                CBSE learning environment encourages academic growth alongside arts, athletics,
                leadership, technology and community experiences.
              </p>
              <a href="https://tis.edu.in/about-tis/vision-mission/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-bold">
                Read our vision <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * .06}>
              <div className="group rounded-3xl border border-black/10 bg-white/40 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/[.03] dark:hover:bg-white/[.06]">
                <p className="font-display text-4xl font-black tracking-tight text-forest dark:text-cream">
                  {item.value}<span className="text-orange">{item.suffix ?? ""}</span>
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[.15em] text-black/45 dark:text-white/40">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}