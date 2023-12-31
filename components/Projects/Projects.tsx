import Image from 'next/image'
import Nav from '../../components/Nav/Nav'
import styles from './Projects.module.scss'

const Projects = () => {
    return (
        <>
        <Nav />
            <div className={styles.bac}>
                <h1 className={styles.projectTitle}> Blobbo&apos;s Apple Catch </h1> 
                <Image src="/blobbo-minimalist.png" alt="Blobbo minimalist art" width={300} height={300} />
            </div>
            <div className={styles.bbl}>
                <h1 className={styles.projectTitle}> Bryant&apos;s Best List </h1> 
                <Image src="/blobbo-minimalist.png" alt="Blobbo minimalist art" width={300} height={300} />
            </div>
            <div className={styles.wc}>
                <h1 className={styles.projectTitle}> Weather Cube </h1> 
                <Image src="/blobbo-minimalist.png" alt="Blobbo minimalist art" width={300} height={300} />
            </div>
        </>
    )
}

export default Projects
