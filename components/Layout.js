import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
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

const stager = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const name = "Ángel Vāzquez";
export const siteTitle = "Libreria";

export default function Layout({ children, home }) {
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Libreria" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <motion.div variants={fadeInUp} whileTap={{ scale: 0.95 }}>
              <motion.a className={styles.back}>← Volver al inicio</motion.a>
            </motion.div>
          </Link>
        </div>
      )}
    </motion.div>
  );
}
