import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/PortfolioLogo.png";
import letter from "../../../public/letter.svg";
import profile from "../../../public/profile.jpg";
import HeaderComponent from "../../Components/HeaderComponent.tsx";
export default function About() {
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
        <div className={styles.main_text}>
          <Image className={styles.main_profile} src={profile} alt="profile" />
          <p className={styles.main_p}>I am a self-taught artist based in Berlin. I mostly work with acrylic
          paint and enjoy using a lot of colours in my work.</p>
        </div>
        <aside className={styles.main_contact}>
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
