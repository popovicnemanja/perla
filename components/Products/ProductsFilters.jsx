"use client";
import { useState, useEffect } from "react";
import styles from "./productsfilters.module.css";
import Image from "next/image";

const ProductsFilters = ({ activeFilter, onFilterChange }) => {
  const [filtersVisibility, setFiltersVisibility] = useState(false);
  const [subListVisibility, setSubListVisibility] = useState(false);

  const handleFiltersListVisibility = () => {
    setFiltersVisibility(!filtersVisibility);
  };

  const handleCloseFiltersListVisibility = () => {
    setFiltersVisibility(false);
    setSubListVisibility(false);
  };

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
    setFiltersVisibility(false);
    setSubListVisibility(false);
  };

  const handleSubListVisibility = () => {
    setSubListVisibility(!subListVisibility);
  };

  useEffect(() => {
    if (filtersVisibility) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [filtersVisibility]);

  return (
    <div className={styles.products__filters}>
      <button
        className={`button ${styles.filter__listBtn}`}
        onClick={() => handleFiltersListVisibility()}
      >
        <div className="icon__wrapper">
          <Image
            src="/assets/icons/icon-arrow-left.svg"
            alt="back to previous page"
            fill
          />
        </div>
        <span>Filteri</span>
      </button>
      <div className={styles.filters__wrapper} data-visible={filtersVisibility}>
        <div
          className={styles.filters__background}
          onClick={() => handleFiltersListVisibility()}
        ></div>
        <button
          className={styles.filters__btnClose}
          onClick={() => handleCloseFiltersListVisibility()}
        >
          <div className="icon__wrapper">
            <Image
              src="/assets/icons/icon-close.svg"
              alt="filters close button"
              fill
            />
          </div>
        </button>
        <ul
          className={`${styles.filters__list} ${
            subListVisibility ? styles.visibleOverflow : ""
          }`}
          role="list"
        >
          <li
            role="listitem"
            className={`${styles.filter__btn} ${
              activeFilter === "svi" ? `${styles["active"]}` : ""
            }`}
            data="svi"
            onClick={() => handleFilterClick("svi")}
          >
            <span className={styles.filter__title}>Svi</span>
          </li>
          <li
            role="listitem"
            className={`${styles.filter__btn}   ${
              activeFilter === "ortoze, steznici, mideri" ? `${styles["active"]}` : ""
            }`}
            onClick={() => handleSubListVisibility()}
          >
            <span className={styles.filter__title}>Ortoze, Pojasevi, Mideri</span>
            <ul
              role="list"
              className={styles.filters__sublist}
              data-visible={subListVisibility}
            >
              
              <li
                role="listitem"
                className={`${styles.filter__btn} ${styles.subFilter__btn} ${
                  activeFilter === "ortoze za vrat" ? `${styles["active"]}` : ""
                }`}
                data="ortoze za vrat"
                onClick={() => handleFilterClick("ortoze za vrat")}
              >
                <span className={styles.filter__title}>Ortoze za vrat</span>
              </li>
              <li
                role="listitem"
                className={`${styles.filter__btn} ${styles.subFilter__btn} ${
                  activeFilter === "ortoze za kičmu"
                    ? `${styles["active"]}`
                    : ""
                }`}
                data="ortoze za kičmu"
                onClick={() => handleFilterClick("ortoze za kičmu")}
              >
                <span className={styles.filter__title}>Ortoze za kičmu</span>
              </li>
              <li
                role="listitem"
                className={`${styles.filter__btn} ${styles.subFilter__btn} ${
                  activeFilter === "ortoze za rame, lakat, ručni zglob"
                    ? `${styles["active"]}`
                    : ""
                }`}
                data="ortoze za rame, lakat, ručni zglob"
                onClick={() => handleFilterClick("ortoze za rame, lakat, ručni zglob")}
              >
                <span className={styles.filter__title}>Ortoze za rame, lakat, ručni zglob</span>
              </li>
              <li
                role="listitem"
                className={`${styles.filter__btn} ${styles.subFilter__btn} ${
                  activeFilter === "ortoze za koleno, zglob, stopalo"
                    ? `${styles["active"]}`
                    : ""
                }`}
                data="ortoze za koleno, zglob, stopalo"
                onClick={() => handleFilterClick("ortoze za koleno, zglob, stopalo")}
              >
                <span className={styles.filter__title}>Ortoze za koleno, zglob, stopalo</span>
              </li>
              <li
                role="listitem"
                className={`${styles.filter__btn} ${styles.subFilter__btn} ${
                  activeFilter === "mideri"
                    ? `${styles["active"]}`
                    : ""
                }`}
                data="mideri"
                onClick={() => handleFilterClick("mideri")}
              >
                <span className={styles.filter__title}>Mideri</span>
              </li>
              <li
                role="listitem"
                className={`${styles.filter__btn} ${styles.subFilter__btn} ${
                  activeFilter === "pojasevi"
                    ? `${styles["active"]}`
                    : ""
                }`}
                data="pojasevi"
                onClick={() => handleFilterClick("pojasevi")}
              >
                <span className={styles.filter__title}>Pojasevi</span>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "obuca" ? `${styles["active"]}` : ""
            }`}
            data="obuca"
            onClick={() => handleFilterClick("obuca")}
          >
            <span className={styles.filter__title}>Obuća</span>
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "perike" ? `${styles["active"]}` : ""
            }`}
            data="perike"
            onClick={() => handleFilterClick("perike")}
          >
            <span className={styles.filter__title}>Perike</span>
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "kolica" ? `${styles["active"]}` : ""
            }`}
            data="kolica"
            onClick={() => handleFilterClick("kolica")}
          >
            <span className={styles.filter__title}>Kolica</span>
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "hodalice, štake" ? `${styles["active"]}` : ""
            }`}
            data="hodalice, štake"
            onClick={() => handleFilterClick("hodalice, štake")}
          >
            <span className={styles.filter__title}>Hodalice, Štake</span>
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "toaletni program" ? `${styles["active"]}` : ""
            }`}
            data="toaletni program"
            onClick={() => handleFilterClick("toaletni program")}
          >
            <span className={styles.filter__title}>Toaletni program</span>
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "ortopedski grudnjaci"
                ? `${styles["active"]}`
                : ""
            }`}
            data="ortopedski grudnjaci"
            onClick={() => handleFilterClick("ortopedski grudnjaci")}
          >
            <span className={styles.filter__title}>Ortopedski grudnjaci</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsFilters;
