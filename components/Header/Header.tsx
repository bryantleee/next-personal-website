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
      <nav className={styles.nav} aria-label="Primary navigation">
        {links.map(({ href, label }) => {
          // `/projects/home-lab` should keep the Projects link lit. The `/`
          // suffix keeps href="/" from matching every page.
          const isCurrentPage = router.pathname === href
          const isActive = isCurrentPage || router.pathname.startsWith(`${href}/`)
          return (
            <Link
              key={href}
              href={href}
              // "page" only when it really is the page; "true" for a section.
              aria-current={isCurrentPage ? 'page' : isActive || undefined}
              className={`${styles.item} ${isActive ? styles.active : ''}`}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
