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
import Git from '../pages/Images/Git.png';



const skills = {
    React: React,
    Typescript: Typescript,
    Javascript: Javascript,
    Nextjs: Nextjs,
    Python: Python,
    Html: HTML,
    Css: Css,
    Bootstrap: Bootstrap,
    MySql: Sql,
    Git: Git
}

const keys = Object.keys(skills)
const image = Object.values(skills);

const SkillBox = () => {
    return(
        <div className={styles.logoContainer}>
            <h3 className={styles.title}>Technology Skills</h3>
            {keys.map((element, i) => {
               return <div className={styles.box}>
                    <div key={i}>{keys[i]}</div>
                    <img key={i} className={styles.logo} alt={'logo' + i} src={image[i].src} />
                </div>
                })
            }

            <h3 className={styles.title}>Resume</h3>
            <p>Click the button below to download a copy of my resume. There you will find a full breakdown of my previous expiriance, along with more information about some of the many non-tech attributes that I bring to the table.</p>
            <a href='https://docs.google.com/document/d/e/2PACX-1vQGChfx6xYrqRy3NpsiER18Lks_NS1q06n3ViofXMHX-vpfN2E0RHKDtR_6xBb_lQ/pub'><button className={styles.button}>Go</button></a>
        </div>
        
    );
}

export default SkillBox;

