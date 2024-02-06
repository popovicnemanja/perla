import { useState, useEffect } from "react";
import styles from "./productslist.module.css";
import ProductCard from "./ProductCard";
import { getProducts } from "@/products";

const ProductsList = ({ activeFilter, currentPage, itemsPerPage }) => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filteredProducts =
      activeFilter === "svi"
        ? products
        : products.filter((product) => product.category === activeFilter);

    // Set displayed products based on pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedProducts(filteredProducts.slice(startIndex, endIndex));
  }, [activeFilter, products, currentPage, itemsPerPage]);

  return (
    <ul id="products__list" className={styles.products__list} role="list">
      {displayedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
