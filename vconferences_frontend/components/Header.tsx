import React from "react";

import Link from "next/link";

import styles from "../styles/Home.module.scss";

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
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        {rows.map((row: Row, index: number) => (
          <Link key={index} href={row.href}>
            <a className={styles.navitem}>{row.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
