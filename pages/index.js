import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { getSortedBooksData } from "../lib/books";
import { motion } from "framer-motion";

// animate: defines animation : x: 0
// initial: defines initial state of animation. x: 60
// exit: defines when a component exits

const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stager = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
    <motion.div
      className={styles.container}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Libreria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.group}>
        <h1>Libros que la gente lee más de una vez</h1>
        <p>
          Aparentemente, la práctica de leer libros crea un compromiso cognitivo
          que mejora muchas cosas, incluido el vocabulario, las habilidades de
          pensamiento y la concentración.
        </p>
        <Link href="/recommend">
          <a>
            <button>Recomendar Libro</button>
          </a>
        </Link>
        <motion.div variants={stager} className={styles.books_grid}>
          {allBooksData.map(({ id, date, title, intro, cover, name }) => (
            <motion.div
              variants={fadeInUp}
              className={styles.first_book}
              key={id}
            >
              <div className={styles.book_image}>
                <motion.img
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src={cover}
                />
              </div>
              <div className={styles.title_container}>
                <h2>{title}</h2>
                {/* {id} */}
                <p>{intro}</p>

                <Link href="/books/[id]" as={`/books/${id}`}>
                  <a>
                    <button>Ver más</button>
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
