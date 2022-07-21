import Link from "next/link";
import instance from "../axios";
import styles from "../styles/Home.module.scss";

type Row = {
  title: string;
  description: string;
  href: string;
};

const rows: Row[] = [
  {
    title: "About",
    description: "About vConferences",
    href: "/about",
  },
  {
    title: "Conferences",
    description: "See available conferences",
    href: "/conferences",
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <b>vConferences</b>
      </h1>

      <div className={styles.grid}>
        {rows.map((row: Row, index: number) => (
          <Link href={row.href} key={index}>
            <a className={styles.card}>
              <h2>{row.title} &rarr;</h2>
              <p>{row.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
