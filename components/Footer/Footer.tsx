import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <a
          href="https://github.com/bryantleee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/github-logo.png" alt="GitHub logo" width={40} height={40} />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/bryantleee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/linkedin-logo.png" alt="Linkedin logo" width={40} height={40} />
          </span>
        </a>

        <a
          href="mailto:leezbrya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/email-logo.png" alt="Email logo" width={40} height={40} />
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
