import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

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
        <main>
          <div id="boxer">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyApp;
