import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["About", "about"],
  ["Academics", "academics"],
  ["Campus", "campus"],
  ["Admissions", "admissions"],
  ["Contact", "contact"]
];

type Props = { dark: boolean; onThemeToggle: () => void };

export default function Navbar({ dark, onThemeToggle }: Props) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#173c35]/95 px-4 py-3 text-white shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-5">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left" aria-label="TIS home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-orange text-sm font-black">T</span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black uppercase tracking-[.18em]">Tula's</span>
            <span className="block text-[9px] uppercase tracking-[.25em] text-white/60">International School</span>
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="group relative text-sm font-medium text-white/75 transition hover:text-white"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <ThemeToggle dark={dark} onToggle={onThemeToggle} />
          <button
            onClick={() => go("admissions")}
            data-cursor
            className="flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-[#f27b40]"
          >
            Apply Now <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle dark={dark} onToggle={onThemeToggle} />
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-4 mt-2 rounded-3xl border border-white/10 bg-[#173c35]/98 p-4 text-white shadow-2xl backdrop-blur-xl md:hidden"
          >
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="block w-full rounded-2xl px-4 py-3 text-left text-base text-white/80 hover:bg-white/10 hover:text-white"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => go("admissions")}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange px-5 py-3 font-bold"
            >
              Apply Now <ArrowUpRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}