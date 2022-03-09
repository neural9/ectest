import React, {useState} from 'React'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../Components/Button'
import styles from '../styles/Home.module.css'
import InternalAPICheck from '../Components/InternalAPICheck'
import ExternalAPICheck from '../Components/externalAPICheck'
import Database from '../Components/Database'



export default function Home() {




  return (
    <div className={styles.container}>
      <Head>
        <title>Testing all functions</title>
      </Head>

      <main className={styles.main}>
          <img className='h-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/6/60/Euroclear-logo-RED.jpg" />
        <h1 className={styles.title}>
          Testing all required functions
        </h1>

        <p className={styles.description}>
          All code in 
          <code className={styles.code}>nextjs.com</code>
        </p>

        <div className={styles.grid + ""} >

          <a href="" className={styles.card + " "}>
            <h2>React Interaction </h2>
            <p><div><Button /></div></p>
          </a>

          <a href="" className={styles.card}>
            <h2>Internal API Hosting</h2>
            <InternalAPICheck />
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>External API call</h2>
            <ExternalAPICheck />
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Direct Database Access</h2>
            <Database />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Contact Rob @ HCL
      </footer>
    </div>
  )
}
