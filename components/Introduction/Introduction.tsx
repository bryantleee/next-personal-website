import Image from 'next/image'
import styles from './Introduction.module.scss'

const Introduction = () => {
    return (
        <div className={styles.homepage_content}>
        <p>
          Hello! My name is Bryant Lee. 
          I graduated from Cornell University in 2021 and currently a software engineer at Amazon in NYC!
          Feel free to reach out to me at leezbrya[at]gmail.com
        </p>
        <Image src="/github-logo.png" alt="GitHub logo" width={300} height={300} />
      </div>
    )
}

export default Introduction
