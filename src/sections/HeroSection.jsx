import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  mobileBg,
  tabletBg,
  desktopBg,
  mobileM,
  tabletM,
  desktopM,
} from "@/assets/hero/index.js";

const HeroSection = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const buttonY = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="h-screen section-spacing flex flex-col items-center justify-center xl:flex-row *:flex-1 relative z-0 overflow-hidden"
    >
      {/* Full Background */}
      <motion.img
        style={{ y: backgroundY }}
        alt=""
        src={desktopBg}
        srcSet={`${mobileBg} 800w, ${tabletBg} 1400w, ${desktopBg} 2000w`}
        className="absolute inset-0 w-full h-[110vh] object-cover object-center pointer-events-none will-change-transform backface-hidden transform-gpu translate-z-0"
      />

      {/* Mountain bg */}
      <img
        alt=""
        src={desktopM}
        srcSet={`${mobileM} 800w, ${tabletM} 1400w, ${desktopM} 2000w`}
        className="absolute inset-0 z-20 w-full h-[110vh] object-cover object-center pointer-events-none"
      />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full flex flex-col justify-center items-center xl:pb-30 max-w-lg lg:max-w-xl text-white uppercase"
      >
        <p className="text-preset-5">{t("hero.subtitle")}</p>
        <h1 className="text-preset-1">{t("hero.title")}</h1>
      </motion.div>

      <motion.div
        style={{ y: buttonY }}
        className="relative z-30 w-full text-center flex justify-center items-center"
      >
        <button
          className="rounded-full bg-white/50 text-gray-800 text-preset-4 flex items-center justify-center uppercase transition-transform hover:scale-105 size-32 md:size-60 lg:size-68"
          aria-label="Explore"
        >
          {t("hero.action")}
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
