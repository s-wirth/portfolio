"use client";
import styles from "./page.module.css";
import { useState } from "react";

const displayImages = [
  {
    src: "https://placehold.co/600x400",
    alt: "Image 1",
    thumbnail: "https://placehold.co/100x100",
  },
  {
    src: "https://placehold.co/600x400/000000/FFF",
    alt: "Image 2",
    thumbnail: "https://placehold.co/100x100/000000/FFF",
  },
];

export default function Gallery() {
  const [displayImageIndex, setDisplayImageIndex] = useState(0);
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
          />
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
        />
        <img
          className={styles.gallery_image}
          src={displayImages[displayImageIndex].src}
          alt="Image 1"
        />
      </div>
      <div className={styles.gallery_thumbnails}>
        {displayImages.map((image, index) => (
          <img
            key={index}
            className={styles.gallery_thumbnail}
            src={image.thumbnail}
            alt={image.alt}
            onClick={() => {
              setDisplayImageIndex(index);
              console.log("image.alt", image.alt);
            }}
          />
        ))}
      </div>
    </div>
  );
}
