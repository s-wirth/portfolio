import styles from "./headerComponent.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/PortfolioLogo.png";

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <Link href={`/`}>
        <Image
          className={styles.header_logo}
          src={logo}
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <div className={styles.header_title}>
        <Link href={`/`}>Sophie Wirth - Art Portfolio</Link>
      </div>
      <a className={styles.header_contact} href="/about">
        About/Contact
      </a>
    </header>
  );
}
