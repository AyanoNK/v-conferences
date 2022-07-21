import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

import styles from "../styles/Home.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>VConferences</title>
        <meta name="description" content="Simple conference app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="flexer">
        <Header />
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
