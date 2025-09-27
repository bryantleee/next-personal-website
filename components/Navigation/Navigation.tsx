import { useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navigation}>
      <button 
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayOpen : ''}`}>
        <div className={styles.menuPills}>
          <Link href="/projects" className={styles.menuPill} onClick={() => setIsMenuOpen(false)}>
            <span>Projects</span>
          </Link>
          <Link href="/photos" className={styles.menuPill} onClick={() => setIsMenuOpen(false)}>
            <span>Photos</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
