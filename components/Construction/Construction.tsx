import styles from './Construction.module.scss'
import { Open_Sans, Nunito } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })


const Construction = () => {
    return (
        <div className={styles.construction}>
            <h2 className={`${styles.construction__text} ${nunito.className}`}> Under Construction </h2>
            <h3 className={`${styles.construction__text} ${nunito.className}`}> Please come back again later! </h3>
        </div>
    )
}

export default Construction
