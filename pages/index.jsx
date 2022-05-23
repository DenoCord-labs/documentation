import Head from 'next/head'
import Link from 'next/link'
import { allDocs } from 'contentlayer/generated'
import Image from 'next/image'
import DenoCord from '../public/images/logo.png'
import styles from '../styles/Home.module.css'

export default function Home({ docs }) {
  return (
    <div >
      <Head>
        <title>Denocord - DenoCord</title>
      </Head>
      <div>
        <div className={styles["imageContainer"]}>

          <img src="/images/logo.png" />

        </div>
      </div>
      <div className={styles["content"]}>
        <h3>
          This Site contains the latest documentation for DenoCord.
        </h3>
        Use The Sidebar or The Drawer to navigate between pages.
      </div>
    </div>
  )
}
