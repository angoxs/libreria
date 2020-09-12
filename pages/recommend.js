import ContactForm from "../components/form";
import styles from "../components/form.module.css";
import Link from "next/link";

export default function recommend() {
  return (
    <div className={styles.reco_container}>
      <Link href="/">
        <a>
          <p className={styles.volver}>← Volver</p>
        </a>
      </Link>
      <div className={styles.reco_group}>
        <h1>¿Le gustaría recomendar un libro?</h1>
        <ContactForm />
      </div>
    </div>
  );
}
