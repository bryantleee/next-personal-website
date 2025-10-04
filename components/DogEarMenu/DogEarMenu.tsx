import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './DogEarMenu.module.scss'

const DogEarMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest(`.${styles.dogEarContainer}`)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={`${styles.dogEarContainer} ${isOpen ? styles.expanded : ''}`} onClick={toggleMenu}>
      <div className={styles.dogEar}>
        <div className={styles.dogEarPaper}></div>
        <div className={styles.dogEarShadow}></div>
        <div className={styles.dogEarBack}></div>
        <div className={styles.dogEarHiding}>
          <div className={styles.menuContent}>
            <h3 className={styles.menuHeader}>Menu</h3>
            <ul className={styles.menuItems}>
              <li>
                <Link 
                  href="/" 
                  className={`${styles.menuLink} ${router.pathname === '/' ? styles.active : ''}`}
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className={`${styles.menuLink} ${router.pathname === '/projects' ? styles.active : ''}`}
                  onClick={handleLinkClick}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/photos" 
                  className={`${styles.menuLink} ${router.pathname === '/photos' ? styles.active : ''}`}
                  onClick={handleLinkClick}
                >
                  Photos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogEarMenu