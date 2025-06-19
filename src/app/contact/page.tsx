import styles from "./page.module.css";
import Link from "next/link";
import logo from "../../../public/PortfolioLogo.png";
import letter from "../../../public/letter.svg";
import profile from "../../../public/profile.jpg";
import HeaderComponent from "../../Components/HeaderComponent.tsx";
export default function Contact() {
  const isProd = process.env.NODE_ENV === 'production';
  console.log('profile', profile)
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
        
      </main>
    </div>
  );
}
