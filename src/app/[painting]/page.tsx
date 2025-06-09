import styles from "./page.module.css";
import React from "react";
import Image from "next/image";
import { DetailImages, PortfolioImages } from "../PortfolioImages.tsx";
import Gallery from "../Gallery/page.tsx";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ painting: string }>;
}) {
  const { painting } = await params;
  // console.log('painting', painting)
  const paintingData = PortfolioImages[painting];

  return (
    <div>
      <Gallery galleryImages={paintingData} />
      <main className={styles.main}>
        <div className={styles.main_content}>
          <h1 className={styles.title}>{paintingData.title}</h1>
          <p className={styles.description}>{paintingData.description}</p>
        </div>
        <aside className={styles.details}>
          <h2 className={styles.details_title}>Details</h2>
          <ul>
            <li>Materials: {paintingData.meta.materials}</li>
            <li>Dimensions: {paintingData.meta.dimensions}</li>
          </ul>
        </aside>
      </main>
    </div>
  );
  // return (
  //   <div>
  //     <h1>{painting}</h1>
  //     {DetailImages[painting].map((img, index) => {
  //       return (
  //         <div key={index}>
  //           <h2>{img.title}</h2>
  //           <Image
  //             src={img.src}
  //             alt={img.title}
  //             width={
  //               img.width /
  //               (img.height / 300)
  //             }
  //             height={300}
  //           />
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
}
