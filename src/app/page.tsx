import styles from "./page.module.css";
import Image from "next/image";
import { diim } from "./DisplayImages";
import { DisplayImages } from "./DisplayImages";
import img from "../../public/portfolioImg/displayImg/AmberSunset.jpeg"

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>Sophie Wirth - Artist Portfolio</header>
      <main className={styles.main}>
        {
          DisplayImages.map((img) => {
            console.log('img[keys]', img)
            return (
              <Image src={img} alt={img.alt} width={img.width/20} height={img.height/20} key={img.src}/>
            )
          })
        }
        {/* <Image src={img} alt="Amber Sunset" width={img.width/20} height={img.height/20}/> */}
      </main>
      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  );
}
