import styles from "./page.module.css";
import Image from "next/image";
import { DisplayImages } from "./DisplayImages";
import img from "../../public/portfolioImg/displayImg/AmberSunset.jpeg"

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>Sophie Wirth - Artist Portfolio</header>
      <main className={styles.main}>
        {/* {Object.entries(DisplayImages).map(([key, image]) => (
          <Image
            key={key}
            src={image.props.src}
            alt={image.props.alt}
            width={image.props.width}
            height={image.props.height}
          />
        ))} */}
        <Image src={img} alt="Amber Sunset" width={img.width/20} height={img.height/20}/>
      </main>
      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  );
}
