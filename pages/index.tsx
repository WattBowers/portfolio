import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Profile from './Images/profile.jpg';


const Home: NextPage = () => {
  
const [page, setPage] = useState('home');
const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Jackson Watt-Bowers Portfolio</title>
        <meta name="description" content="A portfolio page build with Next.js and typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.popup}>Use the navbar up top to move around the website. There you will find more information about me and my work.</div>
      <img className={styles.profile} src={Profile.src}/>
      <div className={styles.home}>
        <h1 className={styles.huge}>Welcome </h1>
        <h1 className={styles.medium}> I'm Jackson and I'm a front end web developer </h1>
      </div>
    </div>
  )
}

export default Home
