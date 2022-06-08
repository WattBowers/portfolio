import styles from '../styles/Skills.module.css';
import React from '../pages/Images/React.png';
import Typescript from '../pages/Images/Typescript.png';
import Javascript from '../pages/Images/Javascript.png';
import Nextjs from '../pages/Images/Nextjs.svg';
import HTML from '../pages/Images/HTML.png';
import Css from '../pages/Images/Css.png';
import Bootstrap from '../pages/Images/Bootstrap.png';
import Sql from '../pages/Images/Sql.png';
import Python from '../pages/Images/Python.png';

const skills = {
    React: React,
    Typescript: Typescript,
    Javascript: Javascript,
    Nextjs: Nextjs,
    Html: HTML,
    Css: Css,
    Bootstap: Bootstrap,
    Sql: Sql,
    Python: Python
}

const keys = Object.keys(skills)
const image = Object.values(skills);

const SkillBox = () => {
    return(
        <div className={styles.logoContainer}>
        {keys.map((element, i) => {
           return <div className={styles.box}>
                <div>{keys[i]}</div>
                <img className={styles.logo} src={image[i].src} />
            </div>
        })
    }
        </div>
        
    );
}

export default SkillBox;

