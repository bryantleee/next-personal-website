import Image from 'next/image'
import styles from './BryantLogo.module.scss'

const BryantLogo = () => {
    return (
        <div className={styles.bryant_logo_container}>
            <Image className={styles.bryant_logo} src="/bryant-1-optimized.svg" alt="Bryant Lee handwritten logo" width={600} height={270} priority/>
        </div>
    )
}

export default BryantLogo
