'use client'
import Image from "next/image";
import styles from "./gallery.module.css";
import { useState } from "react";

const isProd = process.env.NODE_ENV === 'production';
export default function Gallery({galleryImages} : {galleryImages: any}) {
  const [displayImageIndex, setDisplayImageIndex] = useState(0);
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
        <Image
          className={styles.gallery_image}
          height={galleryImages[displayImageIndex] ? galleryImages[displayImageIndex].height : 0}
          width={galleryImages[displayImageIndex] ? galleryImages[displayImageIndex].width : 0}
          src={galleryImages[displayImageIndex] ? '../' + galleryImages[displayImageIndex].src : ''}
          alt={galleryImages[displayImageIndex] ? galleryImages[displayImageIndex].alt : ''}
          />
      </div>
      <div className={styles.gallery_thumbnails_showcase}>
        {galleryImages.map((image, index) => (
          <div key={index} 
          className={ index === displayImageIndex ? styles.gallery_thumbnail_selected : styles.gallery_thumbnail} 
          style={{backgroundImage: `url(${isProd ? image.src : '../' + image.src})`}}
          onClick={() => {
            setDisplayImageIndex(index);
          }}/>
        ))}
      </div>
    </div>
  );
}
