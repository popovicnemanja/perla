"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import NavButton from "../Nav/NavButton";
import Nav from "../Nav/Nav";
import SearchInput from "./SearchInput";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const [navButtonIsOpen, setNavButtonIsOpen] = useState(false);
  const [navVisibility, setNavVisibility] = useState(false);

  useEffect(() => {
    if (navVisibility) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [navVisibility]);

  const handleNavButtonClick = () => {
    setNavButtonIsOpen(!navButtonIsOpen);
    setNavVisibility(!navVisibility);
  };

  const handleHideButton = () => {
    setNavVisibility(false);
    setNavButtonIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <div className={styles.header__content}>
          <Link href="/" className={styles.logo}>
            <Image src="./../assets/images/logo.svg" alt="Perla Logo" fill />
          </Link>

          <NavButton
            handleNavVisibility={handleNavButtonClick}
            navButton={navButtonIsOpen}
          />
          <div className={`${styles["contact-wrapper"]}`}>
            <div className={`${styles["contact-phone"]}`}>
              <div className="icon__wrapper">
                <Image
                  src="./../assets/icons/icon-phone.svg"
                  alt="phone icon"
                  fill
                />
              </div>
              <span>+38131513889</span>
            </div>
            <div className={styles["contact-phone"]}>
              <div className="icon__wrapper">
                <Image
                  src="./../assets/icons/icon-smartphone.svg"
                  alt="mobile phone icon"
                  fill
                />
              </div>

              <span>+381641721272</span>
            </div>
          </div>
          <SearchInput />
        </div>
      </div>

      {navVisibility && (
        <div
          className={styles.nav__mobile__bckgWrapper}
          onClick={handleHideButton}
        ></div>
      )}
      <Nav
        navVisibility={navVisibility}
        onChangeNavVisibility={handleHideButton}
      />
    </header>
  );
};

export default Header;
