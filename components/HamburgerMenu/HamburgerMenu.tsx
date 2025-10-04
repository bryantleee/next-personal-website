import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.hamburgerContainer}>
      <button 
        className={`${styles.hamburgerButton} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          <Link 
            href="/projects" 
            className={`${styles.dropdownPill} ${router.pathname === '/projects' ? styles.active : ''}`}
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link 
            href="/photos" 
            className={`${styles.dropdownPill} ${router.pathname === '/photos' ? styles.active : ''}`}
            onClick={handleLinkClick}
          >
            Photos
          </Link>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu

