import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import DestinationSection from "./sections/DestinationSection";
import ExploreSection from "./sections/ExploreSection";
import Collaboration from "./sections/Collaboration";
import Footer from "./components/Footer";
import { navigation } from "./data/index.js";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sectionTopsRef = useRef([]);
  useEffect(() => {
    sectionTopsRef.current = navigation
      .map((section) => {
        const el = document.getElementById(section.id);
        return el ? { id: section.id, top: el.offsetTop } : null;
      })
      .filter(Boolean)
      .reverse();
  }, []);

  useEffect(() => {
    const handleSectionScroll = () => {
      const scrollY = window.scrollY + 50;

      const active = sectionTopsRef.current.find((section) => {
        return scrollY >= section.top;
      });

      if (active && active.id !== activeSection) {
        setActiveSection(active.id);
        window.history.replaceState(null, "", `#${active.id}`);
      }
    };

    handleSectionScroll();
    document.addEventListener("scroll", handleSectionScroll);

    return () => {
      document.removeEventListener("scroll", handleSectionScroll);
    };
  }, [activeSection]);

  return (
    <div className="min-w-[300px] bg-gray-950">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <ExploreSection />
        <Collaboration />
        <DestinationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
