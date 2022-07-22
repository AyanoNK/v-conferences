import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

import styles from "../styles/Home.module.scss";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type NavBarContextInterface = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};
export const NavBarContext = createContext<NavBarContextInterface>(
  {} as NavBarContextInterface
);

function MyApp({ Component, pageProps }: AppProps) {
  const [searchValue, setSearchValue] = useState<string>("4");

  return (
    <div>
      <Head>
        <title>VConferences</title>
        <meta name="description" content="Simple conference app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div id="flexer">
        <NavBarContext.Provider
          value={{
            searchValue,
            setSearchValue,
          }}
        >
          <Header />
          <main className={styles.main}>
            <Component {...pageProps} />
          </main>
        </NavBarContext.Provider>
      </div>
    </div>
  );
}

export default MyApp;

export const useNavbarContext = () => useContext(NavBarContext);
