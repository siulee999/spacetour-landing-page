import { useTranslation } from "react-i18next";
import { BentoGrid } from "../components/BentoGrid.jsx";
import { explore } from "../data/index.js";

const ExploreSection = () => {
  const { t } = useTranslation();
  
    const completeList = explore.map(item => ({
      ...item,
      ...t(`bento.${item.id}`, { returnObjects: true })
    }));

  return (
    <section
      id="explore"
      className="min-h-dvh section-spacing flex flex-col *:flex-1 overflow-y-auto"
    >
      <div>
        <BentoGrid list={completeList} />
      </div>
    </section>
  );
};

export default ExploreSection;
