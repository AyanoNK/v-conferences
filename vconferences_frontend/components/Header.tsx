import React from "react";

import Link from "next/link";

import styles from "../styles/Home.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Header;
