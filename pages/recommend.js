import ContactForm from "../components/form";
import styles from "../components/form.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function recommend() {
  return (
    <div className={styles.reco_container}>
      <Link href="/">
        <a>
          <motion.p whileTap={{ scale: 0.95 }} className={styles.volver}>
            ← Volver
          </motion.p>
        </a>
      </Link>
      <div className={styles.reco_group}>
        <h1>¿Le gustaría recomendar un libro?</h1>
        <p>
          También puede afectar la empatía, la percepción social y la
          inteligencia emocional, cuya suma ayuda a las personas a permanecer
          más tiempo en el planeta.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
