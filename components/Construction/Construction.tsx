import styles from "./Construction.module.scss";

const Construction = () => {
  return (
    <div className={styles.construction}>
      <h2 className={styles.construction__text}>
        HELLO!
      </h2>
      <h3 className={styles.construction__text}>
        MY NAME IS BRYANT LEE. I AM A SOFTWARE ENGINEER LIVING IN MANHATTAN,
        CURRENTLY WORKING AT META.
      </h3>
      <h3 className={styles.construction__text}>
        OUTSIDE OF WORK, I LOVE HOMELABBING, PLAYING VIDEO GAMES, AND TRAVELING!
        I AM CURRENTLY TRYING TO GET BETTER AT PHOTOGRAPHY.
      </h3>
      <h3 className={styles.construction__text}>
        PLEASE FEEL FREE TO REACH OUT OR FIND ME ON OTHER PLATFORMS AT THE LINKS
        BELOW!
      </h3>
    </div>
  );
};

export default Construction;
