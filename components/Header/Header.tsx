import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Header.module.scss'

const links = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

const Header = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 16)

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
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
