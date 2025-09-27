import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Nav.module.scss'

const Nav = () => {
    const router = useRouter()
    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <Link href="/" className={`${styles.navLink} ${router.pathname === '/' ? styles.current : ''}`}>
                    ABOUT
                </Link>
                <Link href="/projects" className={`${styles.navLink} ${router.pathname === '/projects' ? styles.current : ''}`}>
                    PROJECTS
                </Link>
                <Link href="/photos" className={`${styles.navLink} ${router.pathname === '/photos' ? styles.current : ''}`}>
                    PHOTOS
                </Link>
            </div>
        </nav>
    )
}

export default Nav
