import { Suspense } from "react";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GlobeDemo";

export const BentoGrid = ({ list }) => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-6">
      {list.map((item, idx) => (
        <BentoGridItem key={idx} item={item} />
      ))}
    </div>
  );
};

const BentoGridItem = ({ item }) => {
  const {
    id,
    title,
    subtitle,
    description,
    size,
    bgImg,
    cta,
    blockStack,
    maskText,
  } = item;

  return (
    <div
      style={
        bgImg
          ? {
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0,0,0,0.5)), url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      className={`
        ${size === "large" ? "col-span-2 row-span-2" : ""}
        ${size === "medium" ? "col-span-2" : "col-span-1"}
        ${size === "small" ? "col-span-1" : ""} 
        rounded-2xl flex flex-col border border-gray-600 text-preset-9 group relative ${
          id === "zeroGravitySpa" ? "justify-end" : "justify-start"
        }`}
    >
      {id === "zeroGravitySpa" && (
        <div className="h-56 sm:h-70 lg:h-auto flex flex-col justify-end group-hover:translate-x-1 transition duration-200 text-accent-1 px-6 py-4">
          <h3 className="text-preset-5 font-bold text-white">{title}</h3>
          <p className="text-preset-7">{subtitle}</p>
          <p className="text-preset-9 mt-3">{description}</p>
        </div>
      )}

      {id === "launchSchedule" && blockStack && (
        <div className="flex flex-col justify-start items-start group-hover:translate-x-1 transition duration-200 text-accent-1 px-6 py-4 ">
          <h3 className="text-preset-5 font-bold text-white">{title}</h3>
          <p className="text-preset-7">{subtitle}</p>
          <div className="text-preset-9 mt-3 flex flex-col gap-1 text-white p:0">
            {blockStack.map((item, idx) => (
              <p
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="border-3 border-transparent rounded-lg bg-indigo-400/20 p-1 group-hover:border-indigo-600 group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap shadow-2xl"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}

      {id === "happyTravelers" && (
        <div className="flex flex-col justify-start  group-hover:translate-x-1 transition duration-200 text-accent-1 px-6 py-4">
          <h3 className="text-preset-5 font-bold text-white">{title}</h3>
          <p className="text-preset-7">{subtitle}</p>
          <p className="text-preset-9 mt-3">{description}</p>
          <div className="w-10 h-10 mt-4 animate-star-appear">
            <img
              aria-hidden="true"
              alt="star animation"
              src="/src/assets/explore/star.svg"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      )}

      {id === "spaceChef" && (
        <div className="w-full h-40 lg:h-full relative overflow-hidden rounded-xl bg-linear-to-r from-purple-600/40 to-blue-800/20 text-rose-100 transition-all duration-500 hover:shadow-2xl">
          {/* Main Content */}
          <div className="relative z-10 group-hover:translate-x-1 transition duration-200 text-accent-1 px-6 py-4 flex flex-col justify-center h-full">
            <h3 className="text-preset-5 font-bold text-white">{title}</h3>
            <p className="text-preset-9">{subtitle}</p>
            <p className="text-preset-9 mt-3">{description}</p>
          </div>

          {/* Mask Text (reveals on hover) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <p className="bg-linear-to-br from-rose-400 via-pink-300 to-amber-200 bg-clip-text px-8 text-center text-5xl font-black tracking-tighter text-transparent md:text-6xl lg:text-7xl flex flex-col">
              {maskText?.map((item) => (
                <span>{item}</span>
              ))}
            </p>
          </div>

          {/* Hover Overlay (for mask effect) */}
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-rose-600/20 via-pink-500/40 to-amber-400/20 transition-transform duration-700 group-hover:translate-x-0" />
        </div>
      )}

      {id === "auroraDeck" && (
        <div className="h-full w-full relative overflow-hidden">
          <div className="h-full relative z-20 group-hover:translate-x-1 transition duration-200 text-accent-1 px-6 py-4 pointer-events-none">
            <h3 className="text-preset-5 font-bold text-white">{title}</h3>
            <p className="text-preset-7">{subtitle}</p>
            <p className="text-preset-9 mt-3 mb-15">{description}</p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <GlobeDemo />
          </Suspense>
        </div>
      )}

      {id === "bookNow" && (
        <div className="h-full w-full relative overflow-hidden">
          <div className="h-full relative z-20 group-hover:translate-x-1 transition duration-200 text-accent-1 flex flex-col px-6 py-4 ">
            <h3 className="text-preset-5 font-bold text-white">{title}</h3>
            <p className="text-preset-7">{subtitle}</p>
            <p className="text-preset-9 my-3">{description}</p>
            {cta && (
              <button className="bg-gray-300 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition duration-200 mt-auto">
                {cta}
              </button>
            )}
          </div>
          <BackgroundGradientAnimation containerClassName="absolute inset-0 rounded-2xl" />
        </div>
      )}
    </div>
  );
};
