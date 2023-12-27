"use client";

import { useState } from "react";
import Image from "next/image";

import NavButton from "./NavButton";
import Nav from "./Nav";
import SearchInput from "./SearchInput";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const [navButtonIsOpen, setNavButtonIsOpen] = useState(false);
  const [navVisibility, setNavVisibility] = useState(false);

  const handleNavButtonClick = () => {
    setNavButtonIsOpen(!navButtonIsOpen);
    setNavVisibility(!navVisibility);
  };

  const handleHideButton = () => {
    setNavVisibility(false);
    setNavButtonIsOpen(false);
  };

  return (
    <header>
      <div className={`container ${styles.__container}`}>
        <div className={styles.__content}>
          <Link href="/" className={styles.logo}>
            <Image
              src="assets/images/logo_mobile.svg"
              alt="Perla Logo mobile version"
              width={120}
              height={40}
              className={styles.logo__mobile}
            />
            <Image
              src="assets/images/logo_desktop.svg"
              alt="Perla Logo desktop version"
              width={140}
              height={48}
              className={styles.logo__desktop}
            />
          </Link>

          <NavButton
            handleNavVisibility={handleNavButtonClick}
            navButton={navButtonIsOpen}
          />
          <div className={`${styles["contact-wrapper"]}`}>
            <div className={`${styles["contact-phone"]}`}>
              <Image
                src="assets/icons/icon-phone.svg"
                alt="phone icon desktop version"
                width={24}
                height={24}
              />
              <span>+381311513889</span>
            </div>
            <div className={styles["contact-phone"]}>
              <Image
                src="assets/icons/icon-smartphone.svg"
                alt="mobile phone icon desktop version"
                width={24}
                height={24}
              />
              <img />
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
