import { Image, Row, Container, Col } from 'react-bootstrap'

import Link from "next/link";
import Layout from "../components/layout.js";

import { getOrderedList } from "../lib/data";
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
      <h1 className={styles.title}>Ollivander&apos;s Fine Wands</h1>

      <p className={styles.description}>
        Mischief managed with Next.js and React using PHP and SQL to query a
        WordpressDB
      </p>

      <h2>Wands for Sale:</h2>

      <div className="list-group">
        {allPeople.map(({ id, name }) => (
          <Link key={id} href={`products/${id}`}>
            <a className="list-group-item list-group-item-action"> {name} </a>
          </Link>
        ))}
      </div>

      
    </Layout>
  );
}
