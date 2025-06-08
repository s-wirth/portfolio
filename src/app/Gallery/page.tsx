import styles from "./page.module.css";
export default function Gallery() {
  return (
    <div className={styles.gallery_container}>
      <div className={styles.gallery_carousel}>
        <img src="https://placehold.co/600x400" alt="Image 1" />
        {/* <img src="https://placehold.co/600x400" alt="Image 2" />
        <img src="https://placehold.co/600x400" alt="Image 3" /> */}
      </div>
      <div className={styles.gallery_thumbnails}>
        <img src="https://placehold.co/100x100" alt="Thumbnail 1" />
        <img src="https://placehold.co/100x100" alt="Thumbnail 2" />
        <img src="https://placehold.co/100x100" alt="Thumbnail 3" />
      </div>
    </div>
  );
};

