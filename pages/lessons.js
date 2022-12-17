import Link from "next/link";
import Layout from "../components/layout.js";

import { getOrderedList } from "../lib/lesson-data";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const allPeople = await getOrderedList();
  return {
    props: {
      allPeople,
    },
    revalidate: 60
  };
}

export default function Home({ allPeople }) {
  return (
    <Layout home>
      <h1 className={styles.title}>Upcoming Classes</h1>

      <p className={styles.description}>
        Wand History, Use, and Construction
      </p>

      <div className="list-group">
        {allPeople.map(({ id, name }) => (
          <Link key={id} href={`lessons/${id}`}>
            <a className="list-group-item list-group-item-action"> {name} </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}