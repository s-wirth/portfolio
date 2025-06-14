import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { PortfolioMeta } from "./PortfolioMeta";
import HeaderComponent from "../Components/HeaderComponent.tsx";

export default function Home() {

  return (
    <div className={styles.page}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.banner}>
        <h1 className={styles.banner_title}>Sophie Wirth </h1>
        <h2 className={styles.banner_subtitle}>Artist Portfolio</h2>
      </div>
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
