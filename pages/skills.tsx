import styles from '../styles/Skills.module.css';
import React from './Images/React.png';
import Typescript from './Images/Typescript.png';
import Javascript from './Images/Javascript.png';
import Nextjs from './Images/Nextjs.svg';
import HTML from './Images/HTML.png';
import Css from './Images/Css.png';
import Bootstrap from './Images/Bootstrap.png';
import Sql from './Images/Sql.png';


export default function ShowButtonHover() {
    
    const skills = {
        React: React,
        Typescript: Typescript,
        Javascript: Javascript,
        Nextjs: Nextjs,
        Html: HTML,
        Css: Css,
        Bootstap: Bootstrap,
        Sql: Sql,
        //Python: ''
    }

    const keys = Object.keys(skills)
    const image = Object.values(skills);
    console.log(image)

    return (
        <div className={styles.container}>
            {keys.map((skill) => <div>{skill}</div>)}
            {image.map((image) => <img className={styles.logo} src={image.src} />)}
        </div>
    );
}

