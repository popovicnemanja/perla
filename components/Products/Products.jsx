"use client";

import { useState, useEffect } from "react";
import styles from "./products.module.css";
import ProductsList from "./ProductsList";
import ProductsFilters from "./ProductsFilters";
import Pagination from "./Pagination";
import { getProducts } from "@/products";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("svi");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };

    fetchProducts();
  }, []);

  const itemsPerPage =
    activeFilter === "svi"
      ? 12
      : products.filter((product) => product.category === activeFilter).length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  useEffect(() => {
    const calculateTotalPages = () => {
      if (activeFilter === "svi") {
        const totalProducts = products.length;
        const calculatedTotalPages = Math.ceil(totalProducts / itemsPerPage);
        setTotalPages(calculatedTotalPages);
      } else {
        setTotalPages(1);
      }
    };

    calculateTotalPages();
  }, [activeFilter, itemsPerPage, products]);

  return (
    <section className={styles.products__section}>
      <div className={`container ${styles.container__products}`}>
        <h2 className="section__title">Proizvodi</h2>
        <div className={styles.products__content}>
          <ProductsFilters
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
          <ProductsList
            activeFilter={activeFilter}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
          {activeFilter === "svi" && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
