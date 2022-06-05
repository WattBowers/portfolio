import styles from '../styles/About.module.css';

export default function ShowButtonHover() {
    
    const skills = {
        React: '',
        Typescript: '',
        Javascript: '',
        Nextjs: '',
        Html: '',
        Css: '',
        Bootstap: '',
        MySql: '',
    }

    const keys = Object.keys(skills)

    return (
        <div className={styles.container}>
            {keys.map((skill) => <div>{skill}</div>)}
        </div>
    );
}

