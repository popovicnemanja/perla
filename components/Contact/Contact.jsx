import Map from "../Map/Map";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={`container ${styles.contact__container}`}>
      <h1 className="section__title">Kontakt</h1>
      <div className={`flex__wrapper ${styles.contact__wrapper}`}>
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
