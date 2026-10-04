import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Academics from "./sections/Academics";
import Facilities from "./sections/Facilities";
import Admissions from "./sections/Admissions";
import Footer from "./sections/Footer";

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("tis-theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("tis-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} onThemeToggle={() => setDark((v) => !v)} />
      <main>
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}