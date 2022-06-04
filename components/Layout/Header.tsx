import Styles from '../../styles/Header.module.css';
import { useState, useEffect, useRef, MutableRefObject } from 'react'
import { useRouter } from 'next/router';

const Header = () => {

  


 
  return (
    <div className={Styles.header}>
      <ul className={Styles.list}>
          <li className={Styles.button}><a href="/" className={Styles.link}>Home</a></li>
          <li className={Styles.button}><a href="/projects" className={Styles.link}>Projects</a></li>
          <li className={Styles.button}><a href="/skills" className={Styles.link}>Skills</a></li>
          <li className={Styles.button}><a href="/contact" className={Styles.link}>Contact</a></li>
      </ul>
      
    </div>
  
 )
}

export default Header
 