import styles from '../styles/Skills.module.css';
import SkillBox from '../components/SkillBox';


const Skills = () => {


    return (
        <div className={styles.grid}>
            <div className={styles.container}>
                <SkillBox />        
            </div>
        </div>
    );
}

export default Skills

