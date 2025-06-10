import styles from "./page.module.css";
import Image from "next/image";
import { DetailImages, PortfolioMeta } from "../PortfolioMeta.tsx";
import Gallery from "./GalleryComponent.tsx";
import fs from 'fs';
import path from 'path';
import { imageSize } from 'image-size'


async function DetailPage({
  params,
}: {
  params: Promise<{ painting: string }>;
}) {
  const { painting } = await params;
  const paintingData = PortfolioMeta[painting];
  const photosFolder = path.join('public', 'portfolioImg', 'detailImg', painting);
  const nextFolder = path.join('portfolioImg', 'detailImg', painting);
  const fileNames = fs.readdirSync(photosFolder);
  const imageFiles = fileNames.filter(file => {
    const extension = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif'].includes(extension);
  });
  const dynamicImages = imageFiles.map((file) => {
    const filePath = path.join(photosFolder, file);
    const sourcePath = path.join(nextFolder, file);
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