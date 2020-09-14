import Layout from "../../components/Layout.js";
import { getAllBooksIds, getBookData } from "../../lib/books";
import Head from "next/head";
import Date from "../../components/date";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { motion } from "framer-motion";

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function Post({ bookData }) {
  return (
    <Layout>
      <Head>
        <title>{bookData.title}</title>
      </Head>
      <motion.article variants={stagger}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={utilStyles.authorimage}
        >
          <motion.img
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={bookData.authorimage}
            width="100%"
            height="220px"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </motion.div>

        <br />
        <br />
        <motion.a
          variants={fadeInUp}
          href={bookData.authorlink}
          target="_blank"
        >
          <span className={utilStyles.author}>{bookData.author} &rarr;</span>
        </motion.a>
        <br />
        <motion.h1 variants={fadeInUp} className={utilStyles.title}>
          {bookData.title}
        </motion.h1>
        <motion.p variants={fadeInUp}>{bookData.intro}</motion.p>
        <motion.p variants={fadeInUp} className={utilStyles.recommended}>
          Recomendado por
          <a href={bookData.sociallink} target="_blank">
            <button> {bookData.name} </button>
          </a>
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Date dateString={bookData.date} />
        </motion.div>
        <br />
        <motion.div
          variants={fadeInUp}
          dangerouslySetInnerHTML={{ __html: bookData.contentHtml }}
        />
      </motion.article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllBooksIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const bookData = await getBookData(params.id);
  return {
    props: {
      bookData,
    },
  };
}
