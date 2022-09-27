import Head from "next/head";
import React from "react";
import Header from "./Header.js";
import Timelist from "./Timelist";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timeline App</title>
        <meta name="description" content="Timeline App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Timelist />
      </main>
    </div>
  );
}
