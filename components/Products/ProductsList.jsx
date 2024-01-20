import { useState, useEffect } from "react";
import styles from "./productslist.module.css";
import ProductCard from "./ProductCard";
import { getProducts } from "@/products";

const ProductsList = ({ activeFilter }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };

    fetchProducts();
  }, []); // Run the effect only once when the component mounts

  // Filter products based on the active filter
  const filteredProducts =
    activeFilter === "svi"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <ul className={styles.products__list} role="list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
