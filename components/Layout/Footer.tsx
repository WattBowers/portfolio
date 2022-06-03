import GithubImage from './Images/GithubImage.png'
import LinkedinImage from './Images/LinkedinImage.png';
import Image from 'next/image'
import Styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={Styles.footer}>  
            <a className={Styles.link} href='https://github.com/WattBowers'><Image className={Styles.image} alt='logo' src={GithubImage}/></a>
            <a className={Styles.link} href='https://www.linkedin.com/in/jackson-watt-bowers-35421513a/'><Image className={Styles.image} alt='logo' src={LinkedinImage}/></a>
        </footer > 
    )
}

export default Footer