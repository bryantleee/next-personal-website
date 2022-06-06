import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
      </footer>
  )
}

export default Footer
