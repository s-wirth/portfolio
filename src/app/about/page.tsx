import styles from "./page.module.css";
import Link from "next/link";
import logo from "../../../public/PortfolioLogo.png";
import letter from "../../../public/letter.svg";
import profile from "../../../public/profile.jpg";
import HeaderComponent from "../../Components/HeaderComponent.tsx";
export default function About() {
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
        <div className={styles.about}>
          <div className={styles.about_profile_picture} style={{backgroundImage: `url(${isProd ? profile.src : '../' + profile.src})`}} />
          <div className={styles.about_text}>
            <h1 className={styles.about_title}>About</h1>
            <p className={styles.about_p}>I am a self-taught artist based in Berlin. My preferred medium is acrylic paint on canvas, which allows for the application of a multitude of layers. I am, and have always been, drawn to the colourful and aesthetically pleasing things in life. This certainly reflects in my art, in which I enjoy playing with intense and varied colour palettes. Through the layering of paint, I strive to create detail-rich paintings, which suck the viewer in and invite to getting lost in them. 
Some of my paintings carry meaning with them, through symbolism, composition and motif, while others are simply an expression of the joy of being able to perceive beauty.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
