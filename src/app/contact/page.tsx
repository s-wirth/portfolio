import styles from "./page.module.css";
import HeaderComponent from "../../Components/HeaderComponent.tsx";
export default function Contact() {
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
        <div className={styles.contact_section}>
          <h2 className={styles.contact_title}>Contact</h2>
          <p className={styles.contact_p}>
            You can contact me at {""}
            <a className={styles.contact_link} href="mailto:a.sophiewirth@gmail.com" target="_blank">a.sophiewirth@gmail.com</a>
          </p>
        </div>
        <div className={styles.contact_section}>
          <h2 className={styles.contact_title}>Purchases</h2>
          <p className={styles.contact_p}>
            To purchase a piece, please email me with title of the work you&apos;re
            interested in. All pieces in the portfolio are available for
            purchase unless otherwise specified.
          </p>
        </div>
        <div className={styles.contact_section}>
          <h2 className={styles.contact_title}>Commission</h2>
          <p className={styles.contact_p}>
            I am currently taking commissions. If you are interested in
            commissioning a piece, please email me with the dimensions of canvas
            and motifs you&apos;re interested in. For portrait commissions I will
            request reference material, in form of photos of the subject.
          </p>
        </div>
      </main>
    </div>
  );
}
