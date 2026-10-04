import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#173c35] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(229,107,47,.34),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(216,161,58,.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-10 bg-grid" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:pt-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-super text-[#f0c87b]"
          >
            <span className="h-px w-9 bg-orange" /> The Modern Gurukul
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: .08 } } }}
            className="max-w-4xl font-display text-[clamp(3.5rem,8vw,7.6rem)] font-black leading-[.86] tracking-[-.065em]"
          >
            {["LEARN.", "EXPLORE.", "BECOME."].map((word) => (
              <motion.span
                key={word}
                variants={{ hidden: { opacity: 0, y: 55 }, show: { opacity: 1, y: 0, transition: { duration: .75, ease: [0.22,1,.36,1] } } }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .55, duration: .7 }}
            className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg"
          >
            A modern co-educational boarding school in Dehradun where academic excellence meets
            curiosity, character, creativity and a world of possibilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .7, duration: .7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <button
              onClick={() => go("about")}
              data-cursor
              className="group flex items-center gap-3 rounded-full bg-orange px-6 py-3.5 font-bold transition hover:-translate-y-1"
            >
              Discover TIS <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => go("campus")}
              className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-bold text-white/85 transition hover:bg-white/10"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#173c35]"><Play size={12} fill="currentColor" /></span>
              Explore Campus
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: .25, duration: 1, ease: [0.22,1,.36,1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-white/20 bg-black/20 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1400&q=90"
              alt="Students learning together"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173c35]/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-white/60">Tulas International School</p>
                <p className="mt-1 text-xl font-bold">Education with purpose.</p>
              </div>
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#f4f0e8] text-[#173c35]">
                <ArrowDown size={19} />
              </div>
            </div>
          </motion.div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-[#f4f0e8] px-5 py-4 text-[#173c35] shadow-xl sm:block">
            <p className="text-2xl font-black">22</p>
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-black/50">Acres of campus</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-super text-white/45 md:flex">
        <span className="h-8 w-px bg-white/25" /> Scroll to explore
      </div>
    </section>
  );
}