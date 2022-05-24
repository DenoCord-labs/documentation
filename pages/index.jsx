import Head from 'next/head'
import Link from 'next/link'
import { allDocs } from 'contentlayer/generated'
import Image from 'next/image'
import DenoCord from '../public/images/logo.png'
import styles from '../styles/Home.module.css'

export default function Home({ docs }) {
  return (
    <>
      <Head>
        <title>Denocord - DenoCord</title>
      </Head>
      <div className={styles['container']} >
        <div className={styles["imageContainer"]}>
          <img src="/images/logo.png" />
        </div>
        <div className={styles["content"]}>
          <h3>
            This Site contains the latest documentation for DenoCord.
          </h3>
          <p className={styles['sidebarMessage']} >
            Use Sidebar to Navigate between pages or press <kbd>/</kbd> to search.
          </p>
          <p className={styles['drawerMessage']}>
            Click on Burger Icon to open the Drawer. To search for a page, click on the Search Icon in the Drawer.
          </p>
        </div>
      </div>
    </>
  )
}
