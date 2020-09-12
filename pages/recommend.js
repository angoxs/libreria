import ContactForm from "../components/form";
import styles from "../components/form.module.css";

export default function recommend() {
  return (
    <div className={styles.reco_container}>
      <div className={styles.reco_group}>
      <h1>Deseas recomendar un libro?</h1>
        <ContactForm />
      </div>
    </div>
  );
}
