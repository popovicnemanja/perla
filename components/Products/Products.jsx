import styles from "./products.module.css";
import ProductsList from "./ProductsList";
import ProductsFilters from "./ProductsFilters";

const Products = () => {
  return (
    <section className="products__section">
      <div className={`container ${styles.container__products}`}>
        <h2 className="section__title">Proizvodi</h2>
        <div className={styles.products__content}>
          <ProductsFilters />
          <ProductsList />
        </div>
      </div>
    </section>
  );
};

export default Products;
