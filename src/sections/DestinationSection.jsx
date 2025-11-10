import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "../data/index.js";

const DestinationSection = () => {
  const [activeContent, setActiveContent] = useState("moon");
  const { t } = useTranslation();

  const completeList = destinations.map((item) => ({
    ...item,
    ...t(`destinations.${item.id}`, { returnObjects: true }),
  }));

  useEffect(() => {
    const header = document.querySelector("header");
    const getHeaderHeight = () => {
      if (!header) return 0;
      return header.offsetHeight;
    };

    const handleScroll = () => {
      const headerHeight = getHeaderHeight();
      const triggerY =
        window.scrollY + headerHeight + (60 * window.innerHeight) / 100; // add 60vh

      const active = destinations
        .slice()
        .reverse()
        .find((dest) => {
          const el = document.getElementById(`dest-${dest.id}`);
          if (!el) return false;

          const rect = el.getBoundingClientRect();
          const elementY = window.scrollY + rect.top;

          return triggerY >= elementY;
        });

      if (active && active.id !== activeContent) {
        setActiveContent(active.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeContent]);

  return (
    <section id="destination" className="min-h-screen section-spacing">
      <div className="flex flex-col w-full h-full top-0 lg:grid grid-cols-2 gap-6 relative">
        {/* Sticky Section */}
        <div className="sticky top-20 md:top-24 lg:top-0 lg:h-full lg:relative">
          <div className="relative h-[40vh] lg:sticky z-30 lg:h-[75vh] lg:top-29 flex flex-col justify-center">
            <h2 className="absolute top-0 uppercase text-preset-5">
              {t("destinationTitle")}
            </h2>
            <ul className="absolute top-12 left-0 text-preset-8">
              {completeList.map((item) => (
                <li
                  key={item.id}
                  className={`uppercase mb-2 px-1 border-l-2 ${
                    activeContent === item.id
                      ? "text-white border-white"
                      : "text-accent-1 border-transparent"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="max-h-full text-center mx-auto py-10 px-3">
              <img
                alt={
                  completeList.find((d) => d.id === activeContent)?.imgAlt || ""
                }
                src={
                  completeList.find((d) => d.id === activeContent)?.imgSrc ||
                  completeList[0].imgSrc
                }
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div>
          {completeList.map((item, index) => (
            <DestinationCard
              key={`dest-${index}`}
              item={item}
              isLast={completeList.length - 1 === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
