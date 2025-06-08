'use client'
import styles from "./page.module.css";
import { useState } from 'react';


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
]

export default function Gallery() {
const [displayImageSrc, setDisplayImageSrc] = useState(displayImages[0].src); 
  return (
    <div className={styles.gallery_container}>
      <div className={styles.gallery_carousel}>
        <div className={styles.gallery_carousel_btnright}></div>
        <div className={styles.gallery_carousel_btnleft}></div>
        <img className={styles.gallery_image} src={displayImageSrc} alt="Image 1" />
      </div>
      <div className={styles.gallery_thumbnails}>
        {displayImages.map((image, index) => (
          <img
            key={index}
            className={styles.gallery_thumbnail}
            src={image.thumbnail}
            alt={image.alt}
            onClick={() => {
              setDisplayImageSrc(image.src);
              console.log('image.alt', image.alt)
            }}
          />
        ))}
      </div>
    </div>
  );
};

