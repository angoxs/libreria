import React, { useEffect } from "react";
import { useForm, ValidationError } from "@statickit/react";
import styles from "./form.module.css";
import Link from "next/link";

function ContactForm({ value }) {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <>
        <Link href="/">
          <a>
            <p className={styles.success}>← Volver al inicio</p>
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
      <label>Tu vínculo social</label>
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
      <button
        type="submit"
        disabled={state.submitting}
        className={styles.button}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
