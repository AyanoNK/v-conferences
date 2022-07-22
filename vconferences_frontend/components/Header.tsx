import React from "react";

import Link from "next/link";

import styles from "../styles/Home.module.scss";
import { useNavbarContext } from "../pages/_app";

type Row = {
  title: string;
  href: string;
};

const rows: Row[] = [
  {
    title: "Main",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Conferences",
    href: "/conferences",
  },
];

const Header = () => {
  const { searchValue, setSearchValue } = useNavbarContext();

  return (
    <div className={styles.header}>
      <div className={styles.actions}>
        <div className={styles.navbar}>
          {rows.map((row: Row, index: number) => (
            <Link key={index} href={row.href}>
              <a className={styles.navitem}>{row.title}</a>
            </Link>
          ))}
        </div>
        <div className={styles.searchbar}>
          <input
            type="text"
            placeholder="Search"
            defaultValue={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <button>logout</button>
    </div>
  );
};

export default Header;
