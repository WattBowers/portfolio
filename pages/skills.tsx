import styles from '../styles/Skills.module.css';
import SkillBox from '../components/SkillBox';
import Resume from '../components/Resume';


const Skills = () => {


    return (
        <div className={styles.grid}>
            <div className={styles.container}>
                <SkillBox />   
                <Resume />     
            </div>
        </div>
    );
}

export default Skills

