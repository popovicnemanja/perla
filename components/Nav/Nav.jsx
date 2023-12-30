"use client";

import Link from "next/link";
import styles from "./nav.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Početna", href: "/" },
  { name: "O Nama", href: "/o-nama" },
  { name: "Kontakt", href: "/kontakt" },
];

const Nav = ({ navVisibility, onChangeNavVisibility }) => {
  const pathName = usePathname();

  return (
    <nav className={styles.nav} data-visible={navVisibility}>
      <div className={`container ${styles.nav__container}`}>
        <ul className={styles.nav__list} role="list">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <li className={styles["nav__list-item"]} key={link.name}>
                <Link
                  href={link.href}
                  className={styles.nav__link}
                  onClick={onChangeNavVisibility}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={`${styles["mobile__contact-wrapper"]}`}>
          <Link
            className={`${styles["mobile__contact-link"]}`}
            href="tel:+38131513889"
          >
            <Image
              src="assets/icons/icon-phone--lite.svg"
              alt="phone icon mobile version"
              height={24}
              width={24}
            />

            <span>031 513 889</span>
          </Link>
          <Link
            className={`${styles["mobile__contact-link"]}`}
            href="tel:+381641721272"
          >
            <Image
              src="assets/icons/icon-smartphone--lite.svg"
              alt="phone icon mobile version"
              height={24}
              width={24}
            />

            <span>064 172 1272</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
