import Link from "next/link";
import Layout from "../components/layout.js";

import { getOrderedList } from "../lib/wizard-data";
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
      <h1 className={styles.title}>Famous Wizards & their Wands</h1>

      <div className="list-group">
        {allPeople.map(({ id, name }) => (
          <Link key={id} href={`wizards/${id}`}>
            <a className="list-group-item list-group-item-action"> {name} </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}