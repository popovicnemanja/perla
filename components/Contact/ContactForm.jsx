"use client";

import emailjs from "emailjs-com";
import styles from "./contactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    //Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_kg9l8db";
    const templateId = "template_50135vj";
    const publicKey = "GhWqe9_W-98nAC_Me";

    const templateParams = {
      to_name: "Jelena",
      from_name: name,
      from_mail: email,
      from_number: phoneNumber,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((error) => console.err("Error sending email", error));
  };

  return (
    <div className={styles.form__wrapper}>
      <form onSubmit={sendEmail} className={styles.form}>
        <input
          type="text"
          value={name}
          className={styles.form__input}
          placeholder="Ime"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          className={styles.form__input}
          placeholder="E-mail adresa"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={phoneNumber}
          className={styles.form__input}
          placeholder="Broj telefona (opciono)"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <textarea
          type="text"
          value={message}
          cols="30"
          rows="10"
          className={styles.form__input}
          placeholder="Poruka..."
          required
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className={`button ${styles.form__button}`}>
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
