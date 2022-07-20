import styles from '../styles/Skills.module.css';

const Resume = () => {
    return(
        <div className={styles.logoContainer}>
            <h3 className={styles.title}>Resume</h3>
            <p>Click the button below to download a copy of my resume. There you will find a full breakdown of my previous experience, along with more information about some of the many non-tech attributes that I bring to the table.</p>
            <a href='https://drive.google.com/file/d/1GlUA6N6LhaDKWAE4xXQUxJz8rIJLCaXV/view?usp=sharing'><button className={styles.button}>Go</button></a>
        </div>
        
    );
}

export default Resume;
