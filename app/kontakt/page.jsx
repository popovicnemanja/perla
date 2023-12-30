import styles from "@/components/contact.module.css";

export const metadata = {
  title: "Perla | Kontakt",
};

const ContactPage = () => {
  return (
    <main>
      <div className={`container ${styles.form__container}`}>
        <h1 className="section__title">Kontakt</h1>
        <div className="flex__wrapper">
          <div className={styles.form__wrapper}>
            <form action="" className={styles.form}>
              <input
                type="text"
                className={styles.form__input}
                placeholder="Ime i Prezime"
                required
              />
              <input
                type="text"
                className={styles.form__input}
                placeholder="E-mail adresa"
                required
              />
              <input
                type="text"
                className={styles.form__input}
                placeholder="Broj Telefona (opciono)"
              />
              <textarea
                cols="30"
                rows="10"
                className={styles.form__input}
                placeholder="Poruka..."
                required
              ></textarea>
              <button className={`button ${styles.form__button}`} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
