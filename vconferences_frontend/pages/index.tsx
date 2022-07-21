import Link from "next/link";
import instance from "../axios";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <b>vConferences</b>
      </h1>

      <div className={styles.grid}>
        <Link href="/about">
          <a className={styles.card}>
            <h2>About &rarr;</h2>
            <p>About vConferences</p>
          </a>
        </Link>
        <Link href="/conferences">
          <a className={styles.card}>
            <h2>Conferences &rarr;</h2>
            <p>See available conferences</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await instance.get("/talk/");
  return {
    props: {
      talks: res.data,
    },
  };
}
