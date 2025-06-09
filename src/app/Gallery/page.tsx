"use client";
import styles from "./page.module.css";
import { useState } from "react";

// const displayImages = [
//   {
//     src: "https://placehold.co/600x400",
//     alt: "Image 1",
//     thumbnail: "https://placehold.co/100x100",
//   },
//   {
//     src: "https://placehold.co/600x400/000000/FFF",
//     alt: "Image 2",
//     thumbnail: "https://placehold.co/100x100/000000/FFF",
//   },
// ];

export default function Gallery(galleryImages: any) {
  const [displayImageIndex, setDisplayImageIndex] = useState(0);
  const [displayImages, setDisplayImages] = useState(galleryImages['galleryImages']['images']);
  console.log('galleryImages', galleryImages)
  return (
    <div className={styles.gallery_container}>
      <div className={styles.gallery_carousel}>
        <div className={styles.gallery_carousel_btnleft}
          onClick={() => {
            const displayImagesLength = displayImages.length;
            let newIndex = displayImageIndex - 1;
            if (newIndex < 0) {
              newIndex = displayImagesLength - 1;
            }
            setDisplayImageIndex(newIndex);
          }}
          >
            <div className={styles.arrow_left} />
          </div>
        <div
          className={styles.gallery_carousel_btnright}
          onClick={() => {
            const displayImagesLength = displayImages.length;
            let newIndex = displayImageIndex + 1;
            if (newIndex >= displayImagesLength) {
              newIndex = 0;
            }
            setDisplayImageIndex(newIndex);

          }}
        ><div className={styles.arrow_right} /></div>
        <img
          className={styles.gallery_image}
          src={displayImages[displayImageIndex].src.src}
          alt={displayImages[displayImageIndex].alt}
        />
      </div>
      <div className={styles.gallery_thumbnails_showcase}>
        {displayImages.map((image, index) => (
          <img
            key={index}
            className={styles.gallery_thumbnail + " " + (index === displayImageIndex ? styles.thumbnail_selected : "")}
            src={image.thumbnail.src}
            alt={image.alt}
            onClick={() => {
              setDisplayImageIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
