import Image from "next/image";
import React from "react";
import styles from "./contactinfo.module.css";
import Map from "../Map/Map";

const ContactInfo = () => {
  return (
    <div className={styles.contact__info}>
      <div className={styles.info__content}>
        <div className="icon__wrapper">
          <Image src="/assets/icons/icon-time.svg" fill alt="working time" />
        </div>
        <span>8:30h - 19h, Subotom 9h - 14h</span>
      </div>
      <div className={styles.info__content}>
        <div className="icon__wrapper">
          <Image src="/assets/icons/icon-marker.svg" fill alt="adress" />
        </div>
        <span>Omladinska 50, Užice 31000</span>
      </div>
      <div className={styles.info__content}>
        <div className="icon__wrapper">
          <Image src="/assets/icons/icon-phone.svg" fill alt="phone number" />
        </div>
        <span>+381 31 513-889</span>
      </div>
      <div className={styles.info__content}>
        <div className="icon__wrapper">
          <Image
            src="/assets/icons/icon-smartphone.svg"
            fill
            alt="mobile phone number"
          />
        </div>
        <span>+381641721272</span>
      </div>
      <div className={styles.info__content}>
        <div className="icon__wrapper">
          <Image src="/assets/icons/icon-envelope.svg" fill alt="mail adress" />
        </div>
        <span>perla.uzice@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
