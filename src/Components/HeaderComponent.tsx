import styles from "./headerComponent.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <Link className={styles.header_link} href={`/`}>Home</Link>
      <Link className={styles.header_link} href={`/about`}>About</Link>
      <Link className={styles.header_link} href={`/about`}>Contact</Link>
    </header>
  );
}
