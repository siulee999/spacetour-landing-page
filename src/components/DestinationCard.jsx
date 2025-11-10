import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import CountUp from "react-countup";

const DestinationCard = ({ item, isLast }) => {
  const { id, name, description, distance, travel } = item;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offset = useMemo(() => {
    if (windowWidth >= 1024) return ["start end", "end start"];
    return ["start end", "end 60vh"];
  }, [windowWidth]);

  // scroll content animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.9],
    ["20%", "0%", "0%", "-40%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.7],
    [0, 1, 1, 0]
  );

  // last element without motion leaving
  const lastY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.9],
    ["20%", "0%", "0%"]
  );
  const lastOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.7],
    [0, 1, 1, 1]
  );

  return (
    <motion.div
      id={`dest-${id}`}
      ref={ref}
      layout
      style={isLast ? { y: lastY, opacity: lastOpacity } : { y, opacity }}
      className="h-[45vh] lg:h-[75vh] flex flex-col items-center justify-start lg:justify-center scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-29"
    >
      <div className="max-w-lg flex-col justify-center items-center text-center">
        <div>
          <h3 className="text-preset-2 uppercase">{name}</h3>
          <p className="text-preset-9">{description}</p>
          <hr className="text-gray-200/50 my-2 lg:my-10" />

          <div className="grid grid-cols-2 gap-5 lg:gap-20 items-center uppercase">
            <div className="flex flex-col">
              <span className="text-preset-7">Avg. Distance</span>
              {isInView ? (
                <span className="text-preset-6 text-white">
                  <CountUp
                    end={distance >= 1000000 ? distance / 1000000 : distance}
                    duration={2}
                    suffix={distance >= 1000000 ? "M km" : "km"}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    scrollSpyDelay={100}
                  />
                </span>
              ) : (
                "0"
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-preset-7">Est. Travel Time</span>
              <span className="text-preset-6 text-white">{travel}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
