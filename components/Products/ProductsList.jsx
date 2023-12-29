import styles from "./productslist.module.css";
import ProductCard from "./ProductCard";
import products from "@/products";

const ProductsList = () => {
  return (
    <ul className={styles.products__list} role="list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
