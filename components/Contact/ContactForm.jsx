import styles from "./contactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.form__wrapper}>
      <form action="" className={styles.form}>
        <input
          type="text"
          name="name"
          className={styles.form__input}
          placeholder="Ime i Prezime"
          required
        />
        <input
          type="email"
          name="email"
          className={styles.form__input}
          placeholder="E-mail adresa"
          required
        />
        <input
          type="text"
          name="number"
          className={styles.form__input}
          placeholder="Broj Telefona (opciono)"
        />
        <textarea
          type="text"
          name="message"
          cols="30"
          rows="10"
          className={styles.form__input}
          placeholder="Poruka..."
          required
        ></textarea>
        <button className={`button ${styles.form__button}`} type="submit">
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
