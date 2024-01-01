import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectGrid.module.scss'

const Projects = () => {
    return (
        <>
            <div className={styles['project-container']}>
                <ProjectCard
                    title="Blobbo's Apple Catch"
                    backgroundColor="#030bfc"
                    imgSrc="/blobbo-minimalist.png"
                    imgAlt="A minimalist logo representing the Blobbo's Apple Catch Project."
                />
                <ProjectCard
                    title="Weather Cube"
                    backgroundColor="#fcd303"
                    imgSrc="/blobbo-minimalist.png"
                    imgAlt="A minimalist logo representing the Weather Cube project."
                />
                <ProjectCard
                    title="Bryant's Best List"
                    backgroundColor="#de5246"
                    imgSrc="/blobbo-minimalist.png"
                    imgAlt="A minimalist logo representing the Bryant's Best List project."
                />
            </div>
        </>
    )
}

export default Projects
