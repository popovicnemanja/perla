"use client";
import { useState } from "react";
import styles from "./productsfilters.module.css";
import Image from "next/image";

const ProductsFilters = () => {
  const [activeFilter, setActiveFilter] = useState("svi");
  const [filtersVisibility, setFiltersVisibility] = useState(false);

  const handleFiltersListVisibility = () => {
    setFiltersVisibility(!filtersVisibility);
  };
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setFiltersVisibility(false);
  };

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
        <button
          className={`button ${styles["filters__btn--close"]}`}
          onClick={() => handleFiltersListVisibility()}
        >
          <div className="icon__wrapper">
            <Image src="/assets/icons/icon-close.svg" fill alt="close menu" />
          </div>
        </button>
        <ul className={styles.filters__list} role="list">
          <li
            role="listitem"
            className={`${styles.filter__btn} ${
              activeFilter === "svi" ? `${styles["active"]}` : ""
            }`}
            data="svi"
            onClick={() => handleFilterClick("svi")}
          >
            {" "}
            Svi
          </li>
          <li
            role="listitem"
            className={`${styles.filter__btn} ${
              activeFilter === "ortoze, steznici" ? `${styles["active"]}` : ""
            }`}
            data="ortoze, steznici"
            onClick={() => handleFilterClick("ortoze, steznici")}
          >
            <span className={styles.filter__title}>Ortoze, Steznici</span>
            <ul role="list" className={styles.filters__sublist}>
              <li role="listitem">
                <span className={styles.filter__subtitle}>
                  Steznik za lakat
                </span>
              </li>
              <li role="listitem">
                <span className={styles.filter__subtitle}>
                  Steznik za koleno
                </span>
              </li>
              <li role="listitem">
                <span className={styles.filter__subtitle}>
                  Steznik za zglob
                </span>
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
            {" "}
            Obuća
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "pojasevi" ? `${styles["active"]}` : ""
            }`}
            data="pojasevi"
            onClick={() => handleFilterClick("pojasevi")}
          >
            Pojasevi
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "invalidska kolica" ? `${styles["active"]}` : ""
            }`}
            data="invalidska kolica"
            onClick={() => handleFilterClick("invalidska kolica")}
          >
            {" "}
            Invalidska kolica
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "hodalice, stake" ? `${styles["active"]}` : ""
            }`}
            data="hodalice, stake"
            onClick={() => handleFilterClick("hodalice, stake")}
          >
            {" "}
            Hodalice, Štake
          </li>
          <li
            className={`${styles.filter__btn} ${
              activeFilter === "toaletni program" ? `${styles["active"]}` : ""
            }`}
            data="toaletni program"
            onClick={() => handleFilterClick("toaletni program")}
          >
            {" "}
            Toaletni program
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
            Ortopedski grudnjaci
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsFilters;
