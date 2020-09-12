import Layout from "../../components/Layout.js";
import { getAllBooksIds, getBookData } from "../../lib/books";
import Head from "next/head";
import Date from "../../components/date";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ bookData }) {
  return (
    <Layout>
      <Head>
        <title>{bookData.title}</title>
      </Head>
      <article>
        <img
          src={bookData.cover}
          width="100%"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
        <br />
        <br />
        <a href="https://twitter.com/robertgreene" target="_blank">
          <span className={utilStyles.author}>{bookData.author}</span>
        </a>
        <br />
        <h1 className={utilStyles.title}>{bookData.title}</h1>
        <br />
        <p>{bookData.intro}</p>

        <p className={utilStyles.recommended}>
          Recomendado por
          <a href="https://twitter.com/angelVZUR" target="_blank">
            <button>{bookData.name}</button>
          </a>
        </p>

        <br />
        <Date dateString={bookData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: bookData.contentHtml }} />
      </article>
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
