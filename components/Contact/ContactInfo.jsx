import Image from "next/image";
import React from "react";
import styles from "./contactinfo.module.css";
import Link from "next/link";

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
        <Link href="tel:+38131513889">
          +381 (031) 513-889
        </Link>
      </div>
      <div className={styles.info__content}>
        <div className="icon__wrapper">
          <Image
            src="/assets/icons/icon-smartphone.svg"
            fill
            alt="mobile phone number"
          />
        </div>
        <Link href="tel:+381641721272">
          +381 (64) 172-1272
        </Link>
      </div>
      <div className={styles.info__content}>
        <div className="icon__wrapper">
          <Image src="/assets/icons/icon-envelope.svg" fill alt="mail adress" />
        </div>
        <Link href="mailto:perla.uzice@gmail.com">perla.uzice@gmail.com</Link>
      </div>
    </div>
  );
};

export default ContactInfo;
