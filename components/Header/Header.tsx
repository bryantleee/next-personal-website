import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Header.module.scss'

const links = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

const Header = () => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.item} ${router.pathname === href ? styles.active : ''}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
