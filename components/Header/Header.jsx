"use client";

import { useState } from "react";
import Image from "next/image";

import NavButton from "../Nav/NavButton";
import Nav from "../Nav/Nav";
import SearchInput from "./SearchInput";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const [navButtonIsOpen, setNavButtonIsOpen] = useState(false);
  const [navVisibility, setNavVisibility] = useState(false);

  const handleNavButtonClick = () => {
    setNavButtonIsOpen(!navButtonIsOpen);
    setNavVisibility(!navVisibility);
    document.body.classList.toggle("no-scroll");
  };

  const handleHideButton = () => {
    setNavVisibility(false);
    setNavButtonIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.__container}`}>
        <div className={styles.__content}>
          <Link href="/" className={styles.logo}>
            <Image
              src="./../assets/images/logo.svg"
              alt="Perla Logo"
              fill
              className={styles.logo__mobile}
            />
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
      <Nav
        navVisibility={navVisibility}
        onChangeNavVisibility={handleHideButton}
      />
    </header>
  );
};

export default Header;
