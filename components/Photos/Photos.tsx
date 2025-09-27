import Image from "next/image";
import styles from "./Photos.module.scss";

const Photos = () => {
  return (
    <div className={styles.photosContainer}>
      <div className={styles.photosGrid}>
        <div className={styles.photoCard}>
          <div className={styles.photoPlaceholder}>
            <div className={styles.photoIcon}>📷</div>
            <p className={styles.photoText}>COMING SOON</p>
          </div>
        </div>
        <div className={styles.photoCard}>
          <div className={styles.photoPlaceholder}>
            <div className={styles.photoIcon}>🌅</div>
            <p className={styles.photoText}>LANDSCAPES</p>
          </div>
        </div>
        <div className={styles.photoCard}>
          <div className={styles.photoPlaceholder}>
            <div className={styles.photoIcon}>🏙️</div>
            <p className={styles.photoText}>CITY LIFE</p>
          </div>
        </div>
        <div className={styles.photoCard}>
          <div className={styles.photoPlaceholder}>
            <div className={styles.photoIcon}>✈️</div>
            <p className={styles.photoText}>TRAVEL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
