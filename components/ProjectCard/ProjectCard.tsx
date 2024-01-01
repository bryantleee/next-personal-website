import Image from 'next/image'
import styles from './ProjectCard.module.scss'

interface IProjectCard {
    title: string;
    backgroundColor: string;
    imgSrc: string;
    imgAlt: string;
}

const ProjectCard = ( {title, backgroundColor, imgSrc, imgAlt}: IProjectCard) => {
    return (
        <div className={styles['project-card']}>
            <div className={styles['module-border-wrap']}>
                <Image className={styles['project-logo']} src={imgSrc} alt={imgAlt} width={250} height={250} />
                <h1 className={styles['project-title']}> {title} </h1> 
            </div>
        </div>
    );
}

export default ProjectCard
