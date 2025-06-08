import Image from "next/image";
import AmberSunset from "../../public/portfolioImg/displayImg/AmberSunset.jpeg";
import DragonHeart from "../../public/portfolioImg/displayImg/DragonHeart.jpeg";
import HopefulSunset from "../../public/portfolioImg/displayImg/HopefulSunset.jpeg";
import RainbowSunset from "../../public/portfolioImg/displayImg/RainbowSunset.jpeg";
import ChaosStorm from "../../public/portfolioImg/displayImg/ChaosStorm.jpeg";
import DreamySunset from "../../public/portfolioImg/displayImg/DreamySunset.jpeg";
import Nebula from "../../public/portfolioImg/displayImg/Nebula.jpeg";
import Stormy from "../../public/portfolioImg/displayImg/Stormy.jpeg";
import ChildPortrait from "../../public/portfolioImg/displayImg/ChildPortrait.jpeg";
import FierySunset from "../../public/portfolioImg/displayImg/FierySunset.jpeg";
import Pastels from "../../public/portfolioImg/displayImg/Pastels.jpeg";
import WaterDragon from "../../public/portfolioImg/displayImg/WaterDragon.jpeg";

import AS1 from "../../public/portfolioImg/detailImg/AmberSunset/AS1.jpeg";
import AS2 from "../../public/portfolioImg/detailImg/AmberSunset/AS2.jpeg";
import AS1_tn from "../../public/portfolioImg/detailImg/AmberSunset/AS1_tn.jpeg";
import AS2_tn from "../../public/portfolioImg/detailImg/AmberSunset/AS2_tn.jpeg";

// export const diim =[{..img, title="Amber Sunset"}]
export const DisplayImages = {
  AmberSunset: { ...AmberSunset, title: "Amber Sunset", portfolio_key: "AMBER_SUNSET" },
  HopefulSunset: { ...HopefulSunset, title: "Hopeful Sunset" },
  RainbowSunset: { ...RainbowSunset, title: "Rainbow Sunset" },
  ChaosStorm: { ...ChaosStorm, title: "Chaos Storm" },
  DreamySunset: { ...DreamySunset, title: "Dreamy Sunset" },
  Nebula: { ...Nebula, title: "Nebula" },
  Stormy: { ...Stormy, title: "Stormy" },
  ChildPortrait: { ...ChildPortrait, title: "Child Portrait" },
  FierySunset: { ...FierySunset, title: "Fiery Sunset" },
  Pastels: { ...Pastels, title: "Pastels" },
  WaterDragon: { ...WaterDragon, title: "Water Dragon" },
  DragonHeart: { ...DragonHeart, title: "Dragon Heart" },
};

export const DetailImages = {
  AmberSunset: [
    { title: "Amber Sunset", src: AS1 },
    { title: "Amber Sunset", src: AS2 },
  ],
};

export const PortfolioImages = {
  AMBER_SUNSET: {
    title: "Amber Sunset",
    slug: "amber-sunset",
    images: [
      {
        src: AS1,
        alt: "Amber Sunset Display Image 1",
        main_image: true,
        thumbnail: AS1_tn,
      },
      {
        src: AS2,
        alt: "Amber Sunset Display Image 2",
        main_image: false,
        thumbnail: AS2_tn,
      },
    ],
  },
};
