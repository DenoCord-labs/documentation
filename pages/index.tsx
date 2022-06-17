import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Denocord - DenoCord</title>
        <meta name='description' content='An Object Oriented Discord Api Wrapper for Deno.' />
        <meta property='og:description' content='An Object Oriented Discord Api Wrapper for Deno.' />
        <meta name="twitter:description" content="An Object Oriented Discord Api Wrapper for Deno." />
      </Head>
      <div className={styles["container"]}>
        <div className={styles["imageContainer"]}>
          <img src="/images/logo.png" />
        </div>
        <div className={styles["content"]}>
          <h3>This Site contains the latest documentation for DenoCord.</h3>
          <p className={styles["sidebarMessage"]}>
            Use Sidebar to Navigate between pages or press <kbd>/</kbd> to
            search.
          </p>
          <p className={styles["drawerMessage"]}>
            Click on Burger Icon to open the Drawer. To search for a page, click
            on the Search Icon in the Drawer.
          </p>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
