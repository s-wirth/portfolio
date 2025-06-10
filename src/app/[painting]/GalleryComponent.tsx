'use client'
import styles from "./gallery.module.css";
import { useState } from "react";

export default function Gallery({galleryImages}) {
  const [displayImageIndex, setDisplayImageIndex] = useState(0);
  console.log('galleryImages', galleryImages)
  return (
    <div className={styles.gallery_container}>
      <div className={styles.gallery_carousel}>
        <div className={styles.gallery_carousel_btnleft}
          onClick={() => {
            const displayImagesLength = galleryImages.length;
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
            const displayImagesLength = galleryImages.length;
            let newIndex = displayImageIndex + 1;
            if (newIndex >= displayImagesLength) {
              newIndex = 0;
            }
            setDisplayImageIndex(newIndex);

          }}
        ><div className={styles.arrow_right} /></div>
        <img
          className={styles.gallery_image}
          src={galleryImages[displayImageIndex].src}
          alt={galleryImages[displayImageIndex].alt}
        />
      </div>
      <div className={styles.gallery_thumbnails_showcase}>
        {galleryImages.map((image, index) => (
          <div key={index} 
          className={ index === displayImageIndex ? styles.gallery_thumbnail_selected : styles.gallery_thumbnail} 
          style={{backgroundImage: `url(${image.src})`}}
          onClick={() => {
            setDisplayImageIndex(index);
          }}/>
        ))}
      </div>
    </div>
  );
}
