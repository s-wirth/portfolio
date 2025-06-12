import styles from "./page.module.css";
import Link from "next/link";
import logo from "../../../public/PortfolioLogo.png";
import letter from "../../../public/letter.svg";
import profile from "../../../public/profile.jpg";
import HeaderComponent from "../../Components/HeaderComponent.tsx";
export default function About() {
  const isProd = process.env.NODE_ENV === 'production';
  console.log('profile', profile)
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
        <aside className={styles.contact}>
          <h2 className={styles.contact_title}>Purchases</h2>
          <p className={styles.contact_p}>
            To purchase a piece, please email me with title of the work you're
            interested in. All pieces in the portfolio are available for
            purchase unless otherwise specified.
          </p>
          <h2 className={styles.contact_title}>Commission</h2>
          <p className={styles.contact_p}>
            I am currently taking commissions. If you are interested in
            commissioning a piece, please email me with the dimensions of canvas
            and motifs you're interested in. For portrait commissions I will
            request reference material, in form of photos of the subject.
          </p>
          <h2 className={styles.contact_title}>Contact</h2>
          <p className={styles.contact_p}>
            You can contact me at {""}
            <a href="mailto:a.sophiewirth@gmail.com">a.sophiewirth@gmail.com</a>
          </p>
        </aside>
      </main>
    </div>
  );
}
