import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Profile from './Images/profile.jpg';


const Home: NextPage = () => {
  
const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Jackson Watt-Bowers Portfolio</title>
        <meta name="description" content="A portfolio page build with Next.js and typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridOne}>
        <img className={styles.profile} src={Profile.src} alt='Profile'/>
      </div>  
      <div className={styles.gridTwo}>  
        <div className={styles.home}>
          <h4 className={styles.greeting}>Hello! I&apos;m</h4>
          <h1 className={styles.name}>Jackson Watt-Bowers -- Web Developer</h1>
          <p className={styles.text}>I&apos;m a front-end dev who uses Next, Typescript, and React to build intuitive applications. I bring my strong leadership and communication skills from my experience as a server and theatre-maker to be an effective team-member.</p>
        </div>
      </div>
    </div>
    
  )
}

export default Home
