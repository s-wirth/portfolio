import styles from "./page.module.css";
import Image from "next/image";
import { DisplayImages } from "./DisplayImages";
import img from "../../public/portfolioImg/displayImg/AmberSunset.jpeg";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>Sophie Wirth - Artist Portfolio</header>
      <main className={styles.main}>
        <div className={styles.gallery}>
          {Object.keys(DisplayImages).map((key) => {
            console.log(key, DisplayImages[key]);
            return (
              <Image
                src={DisplayImages[key].src}
                alt={DisplayImages[key].alt}
                width={DisplayImages[key].width / (DisplayImages[key].height/300)}
                height={300}
                key={key}
              />
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
