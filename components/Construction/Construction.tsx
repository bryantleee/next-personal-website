import Link from 'next/image'
import styles from './Construction.module.scss'
import { Open_Sans, Nunito } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })


const Construction = () => {
    return (
        <div className={styles.construction}>
            <h2 className={`${styles.construction__text} ${nunito.className}`}> Hello! </h2>
            <h3 className={`${styles.construction__text} ${nunito.className}`}> My name is Bryant Lee. I am a software engineer living in NYC.</h3>
            <h3 className={`${styles.construction__text} ${nunito.className}`}> Please feel free to reach out or check out some of my work <a className={`${styles.resume}`} href="/resume.pdf" download="resume">here</a> or with the links below!</h3>
        </div>
    )
}

export default Construction
