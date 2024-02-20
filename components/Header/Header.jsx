"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import NavButton from "../Nav/NavButton";
import Nav from "../Nav/Nav";
import DesktopSearchInput from "./DesktopSearchInput";
import MobileSearchInput from "./MobileSearchInput";
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

          <Nav
            navVisibility={navVisibility}
            onChangeNavVisibility={handleHideButton}
          />
          
          <DesktopSearchInput />

          <NavButton
            handleNavVisibility={handleNavButtonClick}
            navButton={navButtonIsOpen}
          />

          <MobileSearchInput />

        </div>
      </div>

      {navVisibility && (
        <div
          className={styles.nav__mobile__bckgWrapper}
          onClick={handleHideButton}
        ></div>
      )}
    </header>
  );
};

export default Header;
