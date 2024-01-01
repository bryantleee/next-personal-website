import Image from 'next/image'
import styles from './Introduction.module.scss'

const Introduction = () => {
    return (
        <div className={styles.homepage_content}>
          <p className={styles.intro_text}>
            Hello! My name is Bryant Lee. 
            I graduated from Cornell University in 2021 and currently a software engineer at Amazon in NYC!
            Feel free to check out some of my side projects and other interests here!
          </p>
          <Image src="/blobbo-minimalist.png" alt="Minimalist picture of Blobbo" width={200} height={200} />
      </div>
    )
}

export default Introduction
