import styles from './Intro.module.scss'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <h1 className={styles.intro__text}>Hello! My name is Bryant Lee.</h1>
      <p className={styles.intro__text}>
        I am a software engineer living in Manhattan, currently working at Meta.
      </p>
      <p className={styles.intro__text}>
        Outside of work, I love homelabbing, trying new video games, and exploring interesting
        places!
      </p>
      <p className={styles.intro__text}>
        Please feel free to reach out or find me on other platforms at the links below!
      </p>
    </section>
  )
}

export default Intro
