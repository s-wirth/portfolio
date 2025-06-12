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
        <h3 className={styles.header_about}>
          <a href="/about">About / Contact</a>
        </h3>
      </header>
      <main className={styles.main}>
        <div className={styles.gallery}>
          {Object.keys(PortfolioMeta).map((key) => {
            console.log('PortfolioMeta[key]', PortfolioMeta[key])
            return (
              <div key={key} className={styles.display_image}
              style={{backgroundImage: `url(${PortfolioMeta[key].blurredImage})`}}
              >
                <Link href={`/${key}`} className={styles.link}>
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
                    blurDataURL={PortfolioMeta[key].blurredImage}
                    placeholder="blur"
                  />
                  <div className={styles.overlay}>
                    <p className={styles.overlay_title}>
                      {PortfolioMeta[key].title}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
