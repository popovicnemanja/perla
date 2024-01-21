"use client";

import styles from "./products.module.css";
import ProductsList from "./ProductsList";
import ProductsFilters from "./ProductsFilters";
import { useState } from "react";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("svi");

  return (
    <section className={styles.products__section}>
      <div className={`container ${styles.container__products}`}>
        <h2 className="section__title">Proizvodi</h2>
        <div className={styles.products__content}>
          <ProductsFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <ProductsList activeFilter={activeFilter} />
        </div>
      </div>
    </section>
  );
};

export default Products;
