import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#101412] px-5 pb-8 pt-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-orange text-lg font-black">T</span>
              <div>
                <p className="font-black uppercase tracking-[.15em]">Tula's International School</p>
                <p className="mt-1 text-xs uppercase tracking-[.22em] text-white/35">The Modern Gurukul</p>
              </div>
            </div>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/45">
              Tulas International School, Dehradun — a learning community focused on academic
              excellence, character, creativity and the confidence to explore.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-super text-white/35">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-white/65">
              <a href="#about" className="hover:text-white">About TIS</a>
              <a href="#academics" className="hover:text-white">Academics</a>
              <a href="#campus" className="hover:text-white">Campus</a>
              <a href="#admissions" className="hover:text-white">Admissions</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-super text-white/35">Contact</p>
            <div className="mt-5 space-y-3 text-sm text-white/60">
              <p className="flex gap-3"><MapPin size={17} className="shrink-0 text-orange" /> Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun</p>
              <p className="flex gap-3"><Phone size={17} className="shrink-0 text-orange" /> +91 98379 83791</p>
              <p className="flex gap-3"><Mail size={17} className="shrink-0 text-orange" /> info@tis.edu.in</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-7 text-xs text-white/30 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Tula's International School. Assignment redesign.</p>
          <div className="flex items-center gap-5">
            <a href="https://tis.edu.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">Official website <ArrowUpRight size={13} /></a>
            <a href="https://www.instagram.com/tulasinternationalschool/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white"><Instagram size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}