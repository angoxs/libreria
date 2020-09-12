import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "../../components/layout.module.css";

export default function FirstBook() {
  return (
    <Layout>
      <Head>
        <title>First Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Book</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
