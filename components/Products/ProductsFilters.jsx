"use client";
import { useState } from "react";
import styles from "./productsfilters.module.css";

const ProductsFilters = () => {
  const [activeFilter, setActiveFilter] = useState("svi");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="products__filters">
      <ul className={styles.filters__list} role="list">
        <li>
          <button
            className={`button ${styles["filter-btn"]} ${
              activeFilter === "svi" ? `${styles["active"]}` : ""
            }`}
            data="svi"
            onClick={() => handleFilterClick("svi")}
          >
            Svi
          </button>
        </li>
        <li>
          <button
            className={`button ${styles["filter-btn"]} ${
              activeFilter === "ortoze, steznici" ? `${styles["active"]}` : ""
            }`}
            data="ortoze, steznici"
            onClick={() => handleFilterClick("ortoze, steznici")}
          >
            Ortoze, Steznici
          </button>
        </li>
        <li>
          <button
            className={`button ${styles["filter-btn"]} ${
              activeFilter === "obuca" ? `${styles["active"]}` : ""
            }`}
            data="obuca"
            onClick={() => handleFilterClick("obuca")}
          >
            Obuća
          </button>
        </li>
        <li>
          <button
            className={`button ${styles["filter-btn"]} ${
              activeFilter === "pojasevi" ? `${styles["active"]}` : ""
            }`}
            data="pojasevi"
            onClick={() => handleFilterClick("pojasevi")}
          >
            Pojasevi
          </button>
        </li>
        <li>
          <button
            className={`button ${styles["filter-btn"]} ${
              activeFilter === "invalidska kolica" ? `${styles["active"]}` : ""
            }`}
            data="invalidska kolica"
            onClick={() => handleFilterClick("invalidska kolica")}
          >
            Invalidska kolica
          </button>
        </li>
        <li>
          <button
            className={`button ${styles["filter-btn"]} ${
              activeFilter === "hodalice, stake" ? `${styles["active"]}` : ""
            }`}
            data="hodalice, stake"
            onClick={() => handleFilterClick("hodalice, stake")}
          >
            Hodalice, Štake
          </button>
        </li>
        <li>
          <button
            className={`button ${styles["filter-btn"]} ${
              activeFilter === "toaletni program" ? `${styles["active"]}` : ""
            }`}
            data="toaletni program"
            onClick={() => handleFilterClick("toaletni program")}
          >
            Toaletni program
          </button>
        </li>
        <li>
          <button
            className={`button ${styles["filter-btn"]} ${
              activeFilter === "ortopedski grudnjaci"
                ? `${styles["active"]}`
                : ""
            }`}
            data="ortopedski grudnjaci"
            onClick={() => handleFilterClick("ortopedski grudnjaci")}
          >
            Ortopedski grudnjaci
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductsFilters;
