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
        <div className={utilStyles.authorimage}>
          <img
            src={bookData.authorimage}
            width="100%"
            height="220px"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>

        <br />
        <br />
        <a href={bookData.authorlink} target="_blank">
          <span className={utilStyles.author}>{bookData.author}</span>
        </a>
        <br />
        <h1 className={utilStyles.title}>{bookData.title}</h1>
        <p>{bookData.intro}</p>
        <p className={utilStyles.recommended}>
          Recomendado por
          <a href={bookData.sociallink} target="_blank">
            <button>{bookData.name}</button>
          </a>
        </p>
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
