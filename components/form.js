import React, { useEffect } from "react";
import { useForm, ValidationError } from "@statickit/react";
import styles from "./form.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function ContactForm({ value }) {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <>
        <Link href="/">
          <a>
            <motion.p
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className={styles.success}
            >
              ← Volver al inicio
            </motion.p>
          </a>
        </Link>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Tu nombre</label>
      <input
        id="name"
        type="name"
        name="name"
        className={styles.input}
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label>Autor del libro</label>
      <input
        id="author"
        type="author"
        name="author"
        className={styles.input}
        required
      />
      <ValidationError prefix="Autor" field="author" errors={state.errors} />
      <label>Nombre del libro</label>
      <input
        id="title"
        type="title"
        name="title"
        className={styles.input}
        required
      />
      <ValidationError prefix="Title" field="title" errors={state.errors} />
      <label>Twitter</label>
      <input
        id="sociallink"
        type="sociallink"
        name="sociallink"
        className={styles.input}
        required
      />
      <ValidationError
        prefix="Social Link"
        field="sociallink"
        errors={state.errors}
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={state.submitting}
        className={styles.button}
      >
        Enviar
      </motion.button>
    </form>
  );
}

export default ContactForm;
