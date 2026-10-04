import { Moon, Sun } from "lucide-react";

type Props = { dark: boolean; onToggle: () => void };

export default function ThemeToggle({ dark, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-10 w-10 place-items-center rounded-full border border-current/15 bg-white/60 transition hover:-rotate-12 hover:scale-105 dark:bg-white/5"
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}