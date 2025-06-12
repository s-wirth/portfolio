import AmberSunset from "../../public/portfolioImg/displayImg/resized/AmberSunset.jpg";
import DragonHeart from "../../public/portfolioImg/displayImg/resized/DragonHeart.jpg";
import HopefulSunset from "../../public/portfolioImg/displayImg/resized/HopefulSunset.jpg";
import RainbowSunset from "../../public/portfolioImg/displayImg/resized/RainbowSunset.jpg";
import ChaosStorm from "../../public/portfolioImg/displayImg/resized/ChaosStorm.jpg";
import DreamySunset from "../../public/portfolioImg/displayImg/resized/DreamySunset.jpg";
import Nebula from "../../public/portfolioImg/displayImg/resized/Nebula.jpg";
import Stormy from "../../public/portfolioImg/displayImg/resized/Stormy.jpg";
import ChildPortrait from "../../public/portfolioImg/displayImg/resized/ChildPortrait.jpg";
import FierySunset from "../../public/portfolioImg/displayImg/resized/FierySunset.jpg";
import Pastels from "../../public/portfolioImg/displayImg/resized/Pastels.jpg";
import WaterDragon from "../../public/portfolioImg/displayImg/resized/WaterDragon.jpg";


export const PortfolioMeta = {
  AMBER_SUNSET: {
    title: "Amber Sunset",
    slug: "amber-sunset",
    description: "A fiery sunset painted on a long canvas. The dimensions of the canvas gave me a lot of space to work on the horizon and concentrate on the details in the waves.", 
    displayImage: AmberSunset,
    blurredImage: "../../portfolioImg/displayImg/blurred/AmberSunset_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "150cm x 40cm",
    },
  },
  HOPEFUL_SUNSET: {
    title: "Hopeful Sunset",
    slug: "hopeful-sunset",
    description: "The hope of a brighter day. Through the many layers of acrylic paint applied, I created a feeling of 3d space, inviting the viewer to lose themselves in the sunset.", 
    displayImage: HopefulSunset,
    blurredImage: "../../portfolioImg/displayImg/blurred/HopefulSunset_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "50cm x 40cm",
    },
  },
  RAINBOW_SUNSET: {
    title: "Rainbow Sunset",
    slug: "rainbow-sunset",
    description: "I like colours.", 
    displayImage: RainbowSunset,
    blurredImage: "../../portfolioImg/displayImg/blurred/RainbowSunset_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "160cm x 120cm",
    },
  },
  CHAOS_STORM: {
    title: "Chaos Storm",
    slug: "chaos-storm",
    description: "A view which is both chaotic, yet structured. The colours are almost violent in their intensity. The storm is both powerfully destructive, yet serene to behold.", 
    displayImage: ChaosStorm,
    blurredImage: "../../portfolioImg/displayImg/blurred/ChaosStorm_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "70cm x 50cm",
    },
  },
  DREAMY_SUNSET: {
    title: "Dreamy Sunset",
    slug: "dreamy-sunset",
    description: "A peace created to practice a calming sunset, using lighter colours and a less busy sky.", 
    displayImage: DreamySunset,
    blurredImage: "../../portfolioImg/displayImg/blurred/DreamySunset_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "40cm x 30cm",
    },
  },
  NEBULA: {
    title: "Nebula",
    slug: "nebula",
    description: "I wanted to capture both the ocean and the cosmos in one painting, splitting it into two parts.", 
    displayImage: Nebula,
    blurredImage: "../../portfolioImg/displayImg/blurred/Nebula_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "30cm x 60cm",
    },
  },
  STORMY: {
    title: "Stormy",
    slug: "stormy",
    description: "This painting was created to practice the structure and composition of clouds, as well as light reflections.", 
    displayImage: Stormy,
    blurredImage: "../../portfolioImg/displayImg/blurred/Stormy_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "50cm x 40cm",
    },
  },
  CHILD_PORTRAIT: {
    title: "Child Portrait",
    slug: "child-portrait",
    description: "A commission piece to capture the child's face. Through the application of metallic paints, the painting shows a sense of movement and energy.", 
    displayImage: ChildPortrait,
    blurredImage: "../../portfolioImg/displayImg/blurred/ChildPortrait_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "20cm x 30cm",
    },
  },
  FIERY_SUNSET: {
    title: "Fiery Sunset",
    slug: "fiery-sunset",
    description: "A fiery sunset, painted to practice the use of intense yellows and oranges in combination with hues of blue and turquoise.", 
    displayImage: FierySunset,
    blurredImage: "../../portfolioImg/displayImg/blurred/FierySunset_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "40cm x 30cm",
    },
  },
  PASTELS: {
    title: "Pastels",
    slug: "pastels",
    description: "A small practice painting to practice the use of pastels.", 
    displayImage: Pastels,
    blurredImage: "../../portfolioImg/displayImg/blurred/Pastels_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "10cm x 20cm",
    },
  },
  WATER_DRAGON: {
    title: "Water Dragon",
    slug: "water-dragon",
    description: "Dragons have always been my favourite mythical creature. I wanted to play with the dynamic pose of the serpentine body interacting with the fluid motion of the waves around it. I focused a lot on the details of the water running off the freshly emerged Dragon, as well as the stark contrast of the sun in the background.", 
    displayImage: WaterDragon,
    blurredImage: "../../portfolioImg/displayImg/blurred/WaterDragon_blurred.jpg",
    meta: {
      materials: "Acrylic on Cardboard",
      dimensions: "40cm x 30cm",
    },
  },
  DRAGON_HEART: {
    title: "Dragon Heart",
    slug: "dragon-heart",
    description: "This painting is the visual representation of a poem, written by a good friend.", 
    displayImage: DragonHeart,
    blurredImage: "../../portfolioImg/displayImg/blurred/DragonHeart_blurred.jpg",
    meta: {
      materials: "Acrylic on Canvas",
      dimensions: "40cm x 60cm",
    }
  },
};

export const PaintingSlugs = Object.keys(PortfolioMeta);