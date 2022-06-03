import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Profile from './Images/profile.jpg';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jackson Watt-Bowers Portfolio</title>
        <meta name="description" content="A portfolio page build with Next.js and typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img className={styles.profile} src={Profile.src}/>
      <div className={styles.home}>
        <h1 className={styles.huge}>Welcome </h1>
        <h1 className={styles.medium}> I'm Jackson and I'm a front end web developer </h1>
      </div>
    </div>
  )
}

export default Home
