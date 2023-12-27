"use client";

import styles from "./navButton.module.css";

const NavButton = ({ handleNavVisibility, navButton }) => {
  const onChangeButton = () => {
    handleNavVisibility();
  };

  return (
    <button
      className={styles.navButton}
      aria-label="Menu"
      aria-controls="nav"
      aria-expanded={navButton}
      onClick={onChangeButton}
    >
      <svg className={styles.navButton__icon} viewBox="0 0 100 100" width="36">
        <rect className={`${styles.line} ${styles.top}`}></rect>
        <rect className={`${styles.line} ${styles.middle}`}></rect>
        <rect className={`${styles.line} ${styles.bottom}`}></rect>
      </svg>
    </button>
  );
};

export default NavButton;
