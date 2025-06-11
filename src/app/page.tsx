import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { PortfolioMeta } from "./PortfolioMeta";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>Sophie Wirth </h1>
        <h2 className={styles.header_subtitle}>Artist Portfolio</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.gallery}>
          {Object.keys(PortfolioMeta).map((key) => {
            return (
              <Link key={key} href={`/${key}`}>
                <div className={styles.displayImage}>
                  <Image
                    className={styles.gallery_painting}
                    src={PortfolioMeta[key].displayImage}
                    alt={PortfolioMeta[key].title}
                    width={
                      PortfolioMeta[key].width /
                      (PortfolioMeta[key].height / 300)
                    }
                    height={300}
                    quality={20}
                    blurDataURL={PortfolioMeta[key].blurImage}
                    placeholder="blur"
                  />
                  <div className={styles.overlay}>
                    <p className={styles.overlay_title}>
                      {PortfolioMeta[key].title}
                    </p>
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
