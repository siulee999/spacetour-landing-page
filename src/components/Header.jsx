import { useState } from "react";
import { useTranslation } from "react-i18next";
import CloseIcon from "../assets/shared/icon-close.svg";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";
import { navigation } from "../data/index.js";

const Header = ({ activeSection }) => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const { t, i18n } = useTranslation();

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed z-50 top-0 lg:top-5 left-0 right-0 text-white bg-transparent text-preset-8">
      <div className="w-full h-20 md:h-24 flex flex-row justify-between items-center px-6 py-4 md:py-0 md:px-0">
        {/* Logo */}
        <a href="#home" className="md:pl-10">
          <img alt="spacetour Logo" src="logo.png" width={50} height={50} />
        </a>

        {/* Line */}
        <span className="flex-1 hidden md:block bg-gray-200/30 ml-6 h-px"></span>

        {/* Navbar */}
        <nav
          className={`md:bg-gray-200/10 fixed z-55 top-0 bottom-0 right-0 min-w-[80vw] md:min-w-auto md:w-fit md:h-24 md:static ${
            isNavbarOpened ? "translate-x-0" : "translate-x-full"
          } md:block flex flex-col bg-white/20 backdrop-blur-2xl md:translate-x-0 transition-transform duration-500 ease-in-out lg:transition-none`}
        >
          {/* Close button */}
          <button
            onClick={() => setIsNavbarOpened(false)}
            className="md:hidden flex justify-end items-center h-20 px-6 py-4"
          >
            <img
              aria-hidden="true"
              alt="close icon"
              src={CloseIcon}
              width={24}
              height={24}
            />
          </button>

          <ul className="h-50 md:h-full flex flex-col md:flex-row items-start justify-center md:justify-end md:items-center gap-6 md:gap-12 px-8 md:px-10 lg:px-12 py-0">
            {navigation.map((item) => (
              <li
                key={item.id}
                className={`h-6 md:h-full border-l-3 md:border-l-0 px-4 md:px-0 md:border-b-3 align-middle flex justify-center items-center uppercase ${
                  item.id === activeSection
                    ? "border-white"
                    : "border-transparent"
                }`}
              >
                <a href={item.route} onClick={() => setIsNavbarOpened(false)}>
                  {t(`nav.${item.id}`)}
                </a>
              </li>
            ))}

            <div className="border-x border-gray-400 px-3 mt-10 lg:mt-0">
              <button
                className={`${currentLang === "en" ? "hidden" : "block"}`}
                onClick={() => handleLangChange("en")}
              >
                EN
              </button>
              <button
                className={`${currentLang === "zh" ? "hidden" : "block"}`}
                onClick={() => handleLangChange("zh")}
              >
                繁
              </button>
            </div>
          </ul>
        </nav>

        {/* Hamgurger open button */}
        <button onClick={() => setIsNavbarOpened(true)} className="md:hidden">
          <img
            aria-hidden="true"
            alt="open button icon"
            src={HamburgerIcon}
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
