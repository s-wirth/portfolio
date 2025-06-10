import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { PortfolioMeta } from "../PortfolioMeta.tsx";
import logo from "../../../public/PortfolioLogo.png";
import letter from "../../../public/letter.svg";
import Gallery from "./GalleryComponent.tsx";
import fs from 'fs';
import path from 'path';
import { imageSize } from 'image-size'
import { PaintingSlugs } from "../PortfolioMeta.tsx";
export async function generateStaticParams() {
  const slugs = PaintingSlugs.map((slug) => ({
    painting: slug,
  }))
  return slugs;
}

async function DetailPage({
  params,
}: {
  params: Promise<{ painting: string }>;
}) {
  const { painting } = await params;
  const paintingData = PortfolioMeta[painting];
  const photosFolderPath = path.join('public', 'portfolioImg', 'detailImg', painting);
  const nextFolderPath = path.join('portfolioImg', 'detailImg', painting);
  const fileNames = fs.readdirSync(photosFolderPath);
  const imageFiles = fileNames.filter(file => {
    const extension = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif'].includes(extension);
  });
  const dynamicImages = imageFiles.map((file) => {
    const filePath = path.join(photosFolderPath, file);
    const sourcePath = path.join(nextFolderPath, file);
    const buffer = fs.readFileSync(filePath);
    const { width, height } = imageSize(buffer);
    return {
      src: sourcePath,
      alt: file,
      width: width,
      height: height,
    };
  });
  const placerholderImage = [{
    src: '/placeholder.png',
    alt: 'placeholder',
    width: 100,
    height: 100
  }]
  return (
    <div>
      <header className={styles.header}>
        <Link href={`/`}>
          <Image className={styles.header_logo} src={logo} alt="logo" width={100} height={100} />
        </Link>
        <div className={styles.header_title}>Sophie Wirth - Art Portfolio</div>
        <a className={styles.header_contact} href="mailto:a.sophiewirth@gmail.com" style={{backgroundImage: `url(${letter.src})`}} />
      </header>
      <Gallery galleryImages={dynamicImages.length > 0 ? dynamicImages : placerholderImage} />
      <main className={styles.main}>
        <div className={styles.main_content}>
          <h1 className={styles.title}>{paintingData.title}</h1>
          <p className={styles.description}>{paintingData.description}</p>
        </div>
        <aside className={styles.details}>
          <h2 className={styles.details_title}>Details</h2>
          <ul className={styles.details_list}>
            <li className={styles.details_list_item}>Materials: {paintingData.meta.materials}</li>
            <li className={styles.details_list_item}>Dimensions: {paintingData.meta.dimensions}</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}


export default DetailPage;