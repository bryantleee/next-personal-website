import styles from "./Construction.module.scss";

const Construction = () => {
  return (
    <div className={styles.construction}>
      <h2 className={styles.construction__text}> Hello! </h2>
      <h3 className={styles.construction__text}>
        {" "}
        My name is Bryant Lee. I am a software engineer living in Manhattan,
        currently working at Meta.
      </h3>
      <h3 className={styles.construction__text}>
        {" "}
        Outside of work, I love homelabbing, trying new video games, and
        exploring interesting places!
      </h3>
      <h3 className={styles.construction__text}>
        {" "}
        Please feel free to reach out or find me on other platforms at the links
        below!
      </h3>
    </div>
  );
};

export default Construction;
