import GithubImage from './Images/GithubImage.png'
import LinkedinImage from './Images/LinkedinImage.png';
import Image from 'next/image'
import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>  
            <a className={ `${ styles.link } ${ styles.marginRight }` } href='https://github.com/WattBowers'><Image className={styles.image} alt='logo' src={GithubImage}/></a>
            <a className={ `${ styles.link } ${ styles.marginLeft }` } href='https://www.linkedin.com/in/jackson-watt-bowers-35421513a/'><Image className={styles.image} alt='logo' src={LinkedinImage}/></a>
        </footer > 
    )
}

export default Footer