import styles from "./Construction.module.scss";
import { Open_Sans, Nunito } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

const Construction = () => {
  return (
    <div className={styles.construction}>
      <h2 className={`${styles.construction__text} ${nunito.className}`}>
        {" "}
        Hello!{" "}
      </h2>
      <h3 className={`${styles.construction__text} ${nunito.className}`}>
        {" "}
        My name is Bryant Lee. I am a software engineer living in Manhattan,
        currently working at Meta.
      </h3>
      <h3 className={`${styles.construction__text} ${nunito.className}`}>
        {" "}
        Outside of work, I love homelabbing, playing video games, and traveling!
        I am currently trying to get better at photography.
      </h3>
      <h3 className={`${styles.construction__text} ${nunito.className}`}>
        {" "}
        Please feel free to reach out or find me on other platforms at the links
        below!
      </h3>
    </div>
  );
};

export default Construction;
