import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { getSortedBooksData } from "../lib/books";

export async function getStaticProps() {
  const allBooksData = getSortedBooksData();
  return {
    props: {
      allBooksData,
    },
  };
}

export default function index({ allBooksData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Libreria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.group}>
        <h1>Libros que la gente lee más de una vez</h1>
        <Link href="/recommend">
          <a>
            <button>Recomendar libro</button>
          </a>
        </Link>
        <div className={styles.books_grid}>
          {allBooksData.map(({ id, date, title, intro, cover, name }) => (
            <div className={styles.first_book} key={id}>
              <div className={styles.book_image}>
                <img src={cover} />
              </div>
              <div className={styles.title_container}>
                <h2>{title}</h2>
                {/* {id} */}
                <p>{intro}</p>

                <Link href="/books/[id]" as={`/books/${id}`}>
                  <a>
                    <button>Read More</button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
