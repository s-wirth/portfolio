import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { DisplayImages } from "./PortfolioImages";
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
              <Link
                key={key}
                href={`/${DisplayImages[key].portfolio_key}`}
              >
                <div className={styles.displayImage}>
                  <Image
                    src={DisplayImages[key].src}
                    alt={DisplayImages[key].title}
                    width={
                      DisplayImages[key].width /
                      (DisplayImages[key].height / 300)
                    }
                    height={300}
                  />
                  <div className={styles.overlay}>
                    <p className={styles.overlay_title}>
                      {DisplayImages[key].title}
                    </p>
                    <p>Materials used</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
