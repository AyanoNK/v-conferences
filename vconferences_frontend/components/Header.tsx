import React from "react";

import Link from "next/link";

import styles from "../styles/Home.module.scss";

type Row = {
  title: string;
  href: string;
};

const rows: Row[] = [
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
          <div key={index} className={styles.navitem}>
            <Link href={row.href}>
              <a>{row.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
