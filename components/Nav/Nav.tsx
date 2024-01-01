import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './nav.module.scss'

const Nav = () => {
    const router = useRouter()
    return (
        <nav className={styles.nav}>
            <Link href="/" className={router.pathname === '/' ? styles.current : '' + 'nav__link'}>
                About
            </Link>
            <Link href="/projects" className={router.pathname === styles.current ? '/projects' : '' + 'nav__link'}>
                Projects
            </Link>
        </nav>
    )
}

export default Nav
